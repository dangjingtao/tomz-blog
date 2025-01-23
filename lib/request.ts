type RequestConfig = {
  url?: string;
  method?: string;
  headers?: HeadersInit;
  body?: any;
  baseURL?: string;
  params?: Record<string, string>;
  responseType?: string;
};

type Interceptor = (
  config: RequestConfig,
) => RequestConfig | Promise<RequestConfig>;

class Request {
  private requestInterceptors: Interceptor[] = [];
  private responseInterceptors: Interceptor[] = [];
  private defaultConfig: RequestConfig;

  constructor(defaultConfig: RequestConfig = { method: "GET" }) {
    this.defaultConfig = defaultConfig;
  }

  // async __handleResponse(cfg){
  //   return {
  //       status: response.status,
  //       message: error.message,
  //       error: true,
  //       data: null,
  //     }
  // }

  async request(config: RequestConfig) {
    // Merge default config with method-level config
    config = { ...this.defaultConfig, ...config };

    // Apply request interceptors
    for (const interceptor of this.requestInterceptors) {
      config = await interceptor(config);
    }

    // Construct URL with baseURL and params
    let url = config.url || "";
    if (config.baseURL) {
      url = config.baseURL + url;
    }
    if (config.params) {
      const urlParams = new URLSearchParams(config.params).toString();
      url += `?${urlParams}`;
    }

    const fetchConfig: RequestInit = {
      method: config.method,
      headers: config.headers,
      body: config.body ? JSON.stringify(config.body) : undefined,
    };

    const response = await fetch(url, fetchConfig);

    let result = null;

    if (!response.ok) {
      const error = await response.json();
      result = {
        status: response.status,
        message: error,
        error: true,
        data: null,
      };
    } else {
      if (config.responseType === "json") {
        const data = await response.text();
        try {
          result = {
            status: response.status || 200,
            data,
            error: false,
            message: "success",
          };
        } catch (error) {
          result = {
            status: response.status || 200,
            data: JSON.parse(data),
            error: false,
            message: "success",
          };
        }
      } else if (config.responseType === "text") {
        result = {
          status: response.status || 200,
          data: await response.text(),
          error: false,
          message: "success",
        };
      } else {
        result = {
          status: 0,
          message: "error response type",
          error: true,
          data: null,
        };
      }
    }

    // Apply response interceptors
    for (const interceptor of this.responseInterceptors) {
      config = await interceptor(result);
    }

    return result;
  }

  get(url: string, params?: Record<string, string>, headers?: HeadersInit) {
    return this.request({ url, method: "GET", params, headers });
  }

  post(url: string, body: any, headers?: HeadersInit) {
    return this.request({ url, method: "POST", headers, body });
  }

  put(url: string, body: any, headers?: HeadersInit) {
    return this.request({ url, method: "PUT", headers, body });
  }

  delete(url: string, headers?: HeadersInit) {
    return this.request({ url, method: "DELETE", headers });
  }

  addRequestInterceptor(interceptor: Interceptor) {
    this.requestInterceptors.push(interceptor);
  }

  addResponseInterceptor(interceptor: Interceptor) {
    this.responseInterceptors.push(interceptor);
  }
}

// Example usage of interceptors
const request = new Request({
  headers: {
    "Content-Type": "application/json",
  },
  responseType: "json",
});

request.addRequestInterceptor((config) => {
  // console.log("Request:", config);
  return config;
});

request.addResponseInterceptor((response) => {
  if (response.status !== 200) {
    throw new Error(`response with status ${response.status}`);
  } else {
    return response;
  }
});

// Allow the request instance to be called directly with a configuration object
const requestInstance = (config: RequestConfig) => request.request(config);

// Add instance methods to requestInstance
requestInstance.get = (
  url: string,
  params?: Record<string, string>,
  headers?: HeadersInit,
) => request.get(url, params, headers);
requestInstance.post = (url: string, body: any, headers?: HeadersInit) =>
  request.post(url, body, headers);
requestInstance.put = (url: string, body: any, headers?: HeadersInit) =>
  request.put(url, body, headers);
requestInstance.delete = (url: string, headers?: HeadersInit) =>
  request.delete(url, headers);

export default requestInstance;
