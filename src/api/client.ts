const API_URL = process.env.API_URL

export class HttpClient<
  TRes = unknown,
  TReq extends Record<string, unknown> | undefined = undefined,
> {
  private endpoint;
  private get url(): URL {
    return new URL(this.endpoint, API_URL);
  }
  private options: RequestInit = {};
  private headers = new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json',
  });

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  setParams(params: Record<keyof TReq, string>) {
    if (!params || Object.keys(params).length === 0) {
      return this;
    }
    this.endpoint = `${this.endpoint}?${new URLSearchParams(params).toString()}`;
    return this;
  }

  private async _fetch(method: string) {
    this.options.method = method;

    this.options.headers = this.headers;

    const res = await fetch(this.url.toString(), this.options);

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }

    return res.json() as Promise<TRes>;
  }

  get() {
    return this._fetch('GET');
  }
  post() {
    return this._fetch('POST');
  }
  put() {
    return this._fetch('PUT');
  }
  patch() {
    return this._fetch('PATCH');
  }
  delete() {
    return this._fetch('DELETE');
  }
}