export type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

type HTTPClientProps = {
  url: string;
  method: Method;
  headers?: Record<string, string>;
  queryParams?: Record<string, string>;
  data?: Record<string, unknown>;
};

const payloadMethods = ['POST', 'PUT', 'PATCH'];

/**
 * @func httpClient
 * @description Generic HTTP client wrapper for HTTP Requests.
 *
 * @param {object} params              An object with the required properties to perform the request.
 * @param {string} params.url          The url to perform the request.
 * @param {string} params.method       The HTTP method to perform the request.
 * @param {object=} params.headers     The headers to be sent with the request.
 * @param {object=} params.queryParams The query params to be sent with the request (depends on the method).
 * @param {object=} params.data        The data to be sent with the request (depends on the method).
 *
 * @returns {Promise<any>} An object with the respective requested data as a Promise.
 */
export const httpClient = async (params: HTTPClientProps): Promise<any> => {
  try {
    const {method, url, headers, queryParams, data} = params;

    const baseUrl = new URL(url);

    const baseHeaders = {
      ...headers,
      'Content-Type': 'application/json',
    };

    const baseOptions: RequestInit = {
      method,
      headers: baseHeaders,
    };

    // TODO: Move the wrapper to use axios because the Hermes engine is lightweight and has not implemented the fetch API completely.
    // Add the query params to the URL.
    if (method === 'GET' && queryParams && Object.keys(queryParams).length) {
      // baseUrl.search = new URLSearchParams(queryParams).toString();
      console.log('baseUrl:', baseUrl);
      console.log('queryParams:', queryParams);
    }

    // Add the data only when the method is POST, PUT, or PATCH.
    if (payloadMethods.includes(method) && data && Object.keys(data).length) {
      baseOptions.body = JSON.stringify(data);
    }

    const request = await fetch(baseUrl, baseOptions);
    const response = await request.json();
    return response;
  } catch (error) {
    throw error;
  }
};
