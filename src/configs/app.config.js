const baseURL = "http://localhost:5001/api/bfly/";

const logoutURL = `${baseURL}users/logout`;

const API_HEADER = { "Content-Type": "application/json" };

export default {
  API_HEADER,
  logoutURL,
};
