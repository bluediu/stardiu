export const helpHttp = () => {
  const customFetch = (endpoint, options, thereIsToken) => {
    const defaultHeader = {
      accept: 'application/json',
    };

    /*    if (thereIsToken){
     options.header = {

     }
   } */

    /* Will let cancel a fetch petitions if server not response */
    const controller = new AbortController();
    options.signal = controller.signal;

    /* Verify if the options method, and add to defaultHeader*/
    options.method = options.method || 'GET';
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader;

    options.body = JSON.stringify(options.body) || false;

    // if object options in the property body is null, delete that the "body"
    if (!options.body) delete options.body;

    setTimeout(() => controller.abort(), 8000);

    // Return the promise with the options
    return fetch(endpoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || '00',
              statusText: res.statusText || 'Ocurred an error',
            })
      )
      .catch((err) => err);
  };

  // Read
  const get = (url, options = {}) => customFetch(url, options);

  // Create
  const post = (url, options = {}) => {
    options.method = 'POST';
    return customFetch(url, options);
  };

  // Update
  const put = (url, options = {}) => {
    options.method = 'PUT';
    return customFetch(url, options);
  };

  // Delete
  const del = (url, options = {}) => {
    options.method = 'DELETE';
    return customFetch(url, options);
  };

  return {
    get,
    post,
    put,
    del,
  };
};
