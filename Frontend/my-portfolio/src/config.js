const apiBaseUrl = import.meta.env.VITE_Backend_Api;
const userName = import.meta.env.VITE_UserName;
const userPassword = import.meta.env.VITE_UserPassword;
const config = {
  Backend_Api: apiBaseUrl,
  UserName: userName,
  UserPassword: userPassword,
};

export default config;
