function getBaseRequestConfig({
  accessToken,
  contentType = 'application/json',
  timeout = 14000,
} = {}) {
  const config = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': contentType,
    },
    timeout: timeout,
  };

  if (accessToken) {
    config.headers['Access-Token-Member'] = `${accessToken}`;
  }

  if (process.env.SERVER) {
    config.headers['Accept-Encoding'] = 'gzip';
  }

  return config;
}

const API_URL = process.env.API_URL;
const PUBLIC_API = `${API_URL}/api/v2`;

export { getBaseRequestConfig, PUBLIC_API };
