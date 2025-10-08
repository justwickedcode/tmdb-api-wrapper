export interface NextConfig {
    revalidate?: number;
    tags?: string[] | ((endpoint: string) => string[]);
    cache?: 'force-cache' | 'no-store' | 'no-cache';
}

export interface RequestOptions extends Omit<RequestInit, 'headers'> {
    baseUrl?: string;
    headers?: HeadersInit | ((endpoint: string, context?: Request) => HeadersInit);
    params?: Record<string, any>;
    next?: NextConfig;
    parseResponse?: <T>(response: Response) => Promise<T>;
    stream?: boolean; // Enable streaming response
    context?: Request; // Server Component request context
}

class HttpError extends Error {
    constructor(
        public status: number,
        message: string,
        public response?: Response,
    ) {
        super(message);
        this.name = 'HttpError';
    }
}

export default class HttpConnector {
    private readonly baseUrl: string;
    private readonly defaultHeaders: HeadersInit;
    private readonly defaultOptions: Partial<RequestOptions>;

    constructor(
        baseUrl: string,
        apiKey?: string,
        defaultOptions: Partial<RequestOptions> = {},
    ) {
        this.baseUrl = baseUrl.replace(/\/+$/, '');
        this.defaultHeaders = {
            'Content-Type': 'application/json',
            ...(apiKey ? { Authorization: `Bearer ${this.sanitizeApiKey(apiKey)}` } : {}),
            ...(defaultOptions.headers instanceof Function ? {} : defaultOptions.headers ?? {}),
        };
        this.defaultOptions = Object.freeze({
            ...defaultOptions,
            headers: undefined,
        });
    }

    private sanitizeApiKey(apiKey: string): string {
        return apiKey.trim();
    }

    private buildUrl(endpoint: string, params?: Record<string, any>): string {
        const url = new URL(endpoint.startsWith('/') ? `${this.baseUrl}${endpoint}` : `${this.baseUrl}/${endpoint}`);
        if (params) {
            const sanitizedParams: Record<string, string> = {};
            for (const [key, value] of Object.entries(params)) {
                if (value != null) {
                    sanitizedParams[key] = String(value).trim();
                }
            }
            url.search = new URLSearchParams(sanitizedParams).toString();
        }
        return url.toString();
    }

    private mergeOptions(endpoint: string, options?: RequestOptions): RequestInit & { next?: NextConfig } {
        const headers = new Headers({
            ...this.defaultHeaders,
            ...(typeof options?.headers === 'function' ? options.headers(endpoint, options.context) : options?.headers ?? {}),
        });
        const merged: RequestInit & { next?: NextConfig } = {
            ...this.defaultOptions,
            ...options,
            headers,
        };
        if (options?.next || this.defaultOptions.next) {
            const tags = typeof options?.next?.tags === 'function' ? options.next.tags(endpoint) : options?.next?.tags;
            merged.next = {
                ...(this.defaultOptions.next ?? {}),
                ...(options?.next ?? {}),
                ...(tags ? { tags } : {}),
            };
        }
        delete (merged as any).baseUrl;
        delete (merged as any).params;
        delete (merged as any).parseResponse;
        delete (merged as any).stream;
        delete (merged as any).context;
        return merged;
    }

    private async defaultParseResponse<T>(response: Response, stream: boolean = false): Promise<T> {
        if (stream && response.body) {
            return response.body as unknown as T; // Return ReadableStream for streaming
        }
        const contentType = response.headers.get('content-type')?.toLowerCase();
        if (contentType?.includes('application/json')) {
            return (await response.json()) as T;
        }
        return (await response.text()) as unknown as T;
    }

    private async request<T>(endpoint: string, options?: RequestOptions): Promise<T> {
        const url = this.buildUrl(endpoint, options?.params);
        const fetchConfig = this.mergeOptions(endpoint, options);
        try {
            const response = await fetch(url, fetchConfig);
            if (!response.ok) {
                throw new HttpError(response.status, `HTTP ${response.status}: ${await response.text()}`, response);
            }
            const parseResponse = options?.parseResponse ?? ((res: Response) => this.defaultParseResponse<T>(res, options?.stream ?? false));
            return await parseResponse(response);
        } catch (error) {
            if (error instanceof HttpError) {
                throw error;
            }
            throw new HttpError(0, `Request failed: ${error instanceof Error ? error.message : String(error)}`);
        }
    }

    public get<T>(endpoint: string, options?: RequestOptions): Promise<T> {
        return this.request<T>(endpoint, { ...options, method: 'GET' });
    }

    public post<T>(endpoint: string, body?: unknown, options?: RequestOptions): Promise<T> {
        return this.request<T>(endpoint, {
            ...options,
            method: 'POST',
            body: body != null ? JSON.stringify(body) : undefined,
        });
    }

    public put<T>(endpoint: string, body?: unknown, options?: RequestOptions): Promise<T> {
        return this.request<T>(endpoint, {
            ...options,
            method: 'PUT',
            body: body != null ? JSON.stringify(body) : undefined,
        });
    }

    public delete<T>(endpoint: string, body?: unknown, options?: RequestOptions): Promise<T> {
        return this.request<T>(endpoint, {
            ...options,
            method: 'DELETE',
            body: body != null ? JSON.stringify(body) : undefined,
        });
    }

    public patch<T>(endpoint: string, body?: unknown, options?: RequestOptions): Promise<T> {
        return this.request<T>(endpoint, {
            ...options,
            method: 'PATCH',
            body: body != null ? JSON.stringify(body) : undefined,
        });
    }
}