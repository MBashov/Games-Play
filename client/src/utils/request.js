const request = async (method, url, data, options = {}) => {

    if (method !== 'GET') {
        options.method = method
    }

    if (data !== undefined) {
        options = {
            ...options,
            headers: {
                'Content-Type': 'Application/json',
                ...options.headers,
            },
            body: JSON.stringify(data),
        }
    }
    
    const responce = await fetch(url, options);
    if (responce.status === 204) {
        return
    }
    
    const result = await responce.json();

    return result;
}
export default {
    get: (url) => request('GET', url),
    post: (url, data) => request('POST', url, data),
    put: (url, data) => request('PUT', url, data),
    del: (url) => request('DELETE', url),
}

//* export default {
//*     get: request.bind(null, 'GET'),
//* get: (...params) => request('GET', ...params);
//*     post: request.bind(null, 'POST'),
//*     put: request.bind(null, 'PUT'),
//*     del: request.bind(null, 'DELETE'),
//* }