const API_HEADER = { headers: { "Content-Type": "application/json" } };
const API_HEADER_FORMDATA = {
  headers: { "Content-Type": "multipart/form-data", boundary: "MyBoundary" },
};
const baseURL = "http://localhost:5001";
const pattern = "/api/bfly/";

const signUpURL = `${baseURL}${pattern}users`;
const usersURL = `${baseURL}${pattern}users`;
const loginURL = `${baseURL}${pattern}users/login`;
const roleURL = `${baseURL}${pattern}users/role`;
const logoutURL = `${baseURL}${pattern}users/logout`;
const locationsURL = `${baseURL}${pattern}locations`;
const airlinesURL = `${baseURL}${pattern}airlines`;
const ticketsURL = `${baseURL}${pattern}tickets`;
const salableURL = `${baseURL}${pattern}tickets/salable`;
const getSalableURL = `${baseURL}${pattern}tickets/getsalable`;
const purchaseURL = `${baseURL}${pattern}tickets/purchase`;
const bookingURL = `${baseURL}${pattern}ticketsBooking`;
const bookedTicketsURL = `${baseURL}${pattern}ticketsBooking/getBookedTickets`;

export {
  API_HEADER,
  API_HEADER_FORMDATA,
  signUpURL,
  usersURL,
  loginURL,
  roleURL,
  logoutURL,
  baseURL,
  locationsURL,
  airlinesURL,
  ticketsURL,
  purchaseURL,
  salableURL,
  getSalableURL,
  bookingURL,
  bookedTicketsURL,
};
