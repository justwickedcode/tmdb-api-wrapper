export interface RequestOptions extends RequestInit {
  baseUrl?: string;
  headers?: Record<string, string>;
  params?: Record<string, any>;
  next?: { revalidate?: number; tags?: string[] };
}

export default class HttpConnector {
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

  private async request<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    const opts = options ?? {}; // default to empty object
    let url = (opts.baseUrl ?? this.baseUrl) + endpoint;

    // Merge & sanitize params
    const allParams = { ...this.defaultOptions.params, ...opts.params };
    const sanitizedParams: Record<string, string> = {};

    for (const [key, value] of Object.entries(allParams ?? {})) {
      if (value != null) sanitizedParams[key] = String(value);
    }

    if (Object.keys(sanitizedParams).length > 0) {
      url += `?${new URLSearchParams(sanitizedParams).toString()}`;
    }

    const headers = { ...this.headers, ...(opts.headers ?? {}) };
    const next = { ...(this.defaultOptions.next ?? {}), ...(opts.next ?? {}) };

    const fetchConfig: RequestInit & Partial<Pick<RequestOptions, 'next'>> = {
      ...this.defaultOptions,
      ...opts,
      headers,
    };

    if (Object.keys(next).length > 0) fetchConfig.next = next;

    const res = await fetch(url, fetchConfig);

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${await res.text()}`);
    }

    const contentType = res.headers.get('content-type');
    return contentType?.includes('application/json')
      ? ((await res.json()) as T)
      : ((await res.text()) as unknown as T);
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

  public delete<T>(endpoint: string, body?: unknown, options?: RequestOptions): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'DELETE',
      body: body ? JSON.stringify(body) : undefined,
    });
  }
}
