const apiBaseUrl = import.meta.env.VITE_Backend_Api;
const userName = import.meta.env.VITE_UserName;
const userPassword = import.meta.env.VITE_UserPassword;
const codingApiBaseUrl = import.meta.env.VITE_Coding_Backend_Api;
const config = {
  Backend_Api: apiBaseUrl,
  UserName: userName,
  UserPassword: userPassword,
  Coding_Backend_Api: codingApiBaseUrl,
};

export default config;
