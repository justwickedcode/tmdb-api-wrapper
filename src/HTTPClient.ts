export interface RequestOptions extends RequestInit {
  baseUrl?: string; // Optional override of base URL
  headers?: Record<string, string>; // Optional override of headers
  params?: Record<string, string | number | boolean>; // Query parameters
}

/**
 * HTTP Fetch Client
 */
export default class HTTPClient {
  private baseUrl: string;
  private headers: Record<string, string>;

  constructor(baseUrl: string, apiKey: string) {
    this.baseUrl = baseUrl;
    this.headers = {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    };
  }

  /** ---------------- PRIVATE REQUEST HANDLER ---------------- */
  private async request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    let url = (options.baseUrl ?? this.baseUrl) + endpoint;

    // Build query params
    if (options.params) {
      const query = new URLSearchParams(Object.entries(options.params).map(([k, v]) => [k, String(v)]));
      url += `?${query.toString()}`;
    }

    const { params, baseUrl, ...fetchOptions } = options;
    const headers = { ...this.headers, ...(options.headers ?? {}) };

    const res = await fetch(url, {
      ...fetchOptions,
      headers,
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`HTTP ${res.status}: ${errorText}`);
    }

    // If caller expects JSON, parse it, else return as-is
    const contentType = res.headers.get('content-type');
    if (contentType?.includes('application/json')) {
      return (await res.json()) as T;
    }
    return (await res.text()) as unknown as T;
  }

  /** ---------------- PUBLIC METHODS ---------------- */
  public get<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'GET' });
  }

  public post<T>(endpoint: string, body?: unknown, options?: RequestOptions): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'POST',
      body: body ? JSON.stringify(body) : undefined
    });
  }

  public put<T>(endpoint: string, body?: unknown, options?: RequestOptions): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: body ? JSON.stringify(body) : undefined
    });
  }

  public delete<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'DELETE' });
  }
}
