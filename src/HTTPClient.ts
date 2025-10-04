export interface RequestOptions extends RequestInit {
  baseUrl?: string;
  headers?: Record<string, string>;
  params?: Record<string, string | number | boolean | null | undefined>;
  next?: { revalidate?: number; tags?: string[] };
}

export default class HTTPClient {
  private readonly baseUrl: string;
  private readonly headers: Record<string, string>;
  private readonly defaultOptions: Partial<RequestOptions>;

  constructor(baseUrl: string, apiKey: string, defaultOptions: Partial<RequestOptions> = {}) {
    this.baseUrl = baseUrl;
    this.headers = {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      ...(defaultOptions.headers ?? {}),
    };
    this.defaultOptions = defaultOptions;
  }

  private async request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    let url = (options.baseUrl ?? this.baseUrl) + endpoint;

    // Merge and sanitize params
    const allParams = { ...this.defaultOptions.params, ...options.params } as Record<string, any>;
    const sanitizedParams: Record<string, string> = {};

    Object.entries(allParams ?? {}).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        sanitizedParams[key] = String(value);
      }
    });

    if (Object.keys(sanitizedParams).length > 0) {
      url += `?${new URLSearchParams(sanitizedParams).toString()}`;
    }

    const headers = { ...this.headers, ...(options.headers ?? {}) };
    const next = { ...(this.defaultOptions.next ?? {}), ...(options.next ?? {}) };

    const fetchConfig: RequestInit & Partial<Pick<RequestOptions, 'next'>> = {
      ...this.defaultOptions,
      ...options,
      headers,
    };

    if (Object.keys(next).length > 0) fetchConfig.next = next;

    const res = await fetch(url, fetchConfig);

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`HTTP ${res.status}: ${errorText}`);
    }

    const contentType = res.headers.get('content-type');
    if (contentType?.includes('application/json')) {
      return (await res.json()) as T;
    }

    return (await res.text()) as unknown as T;
  }

  public get<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'GET' });
  }

  public post<T>(endpoint: string, body?: unknown, options?: RequestOptions): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'POST',
      body: body ? JSON.stringify(body) : undefined,
    });
  }

  public put<T>(endpoint: string, body?: unknown, options?: RequestOptions): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: body ? JSON.stringify(body) : undefined,
    });
  }

  public delete<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'DELETE' });
  }
}
