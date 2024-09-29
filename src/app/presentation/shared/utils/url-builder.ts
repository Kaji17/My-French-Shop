export class UrlBuilder {
  private url: string;
  private endPoint: string;
  private readonly queryParams: { [key: string]: string | number | boolean }

  constructor() {
    this.url = "";
    this.endPoint = "";
    this.queryParams = {}
  }

  setUrl(url: string): UrlBuilder {
    this.url = url;
    return this;
  }

  setEndPoint(endPoint: string): UrlBuilder {
    this.endPoint = endPoint;
    return this;
  }

  addQueryParam(key: string, value: string | number | boolean | undefined): UrlBuilder {
    if (value === undefined) {
      return this
    }
    this.queryParams[key] = value;
    return this;
  }

  build(): string {
    let queryParamsString = "";
    Object.keys(this.queryParams).forEach((key, index) => {
      queryParamsString += `${index === 0 ? "?" : "&"}${key}=${encodeURIComponent(this.queryParams[key] ?? "")}`;
    });
    return this.url + this.endPoint + queryParamsString;
  }
}
