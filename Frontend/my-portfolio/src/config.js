const apiBaseUrl = import.meta.env.VITE_Backend_Api;

const config = {
  Backend_Api: apiBaseUrl.endsWith("/") ? apiBaseUrl : apiBaseUrl + "/",
};

export default config;
