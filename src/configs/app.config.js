const API_HEADER = { headers: { "Content-Type": "application/json" } };
const API_HEADER_FORMDATA = {
  headers: { "Content-Type": "multipart/form-data", boundary: "MyBoundary" },
};
const baseURL = "http://localhost:5001";
const pattern = "/api/bfly/";

const signUpURL = `${baseURL}${pattern}users`;
const usersURL = `${baseURL}${pattern}users`;
const activeUserURL = `${baseURL}${pattern}users/oneUser`;
const loginURL = `${baseURL}${pattern}users/login`;
const changePassUrl = `${baseURL}${pattern}users/changePassword`;
const forgotPassUrl = `${baseURL}${pattern}users/forgotPassword`;
const roleURL = `${baseURL}${pattern}users/role`;
const setLimitURL = `${baseURL}${pattern}users/setLimit`;
const logoutURL = `${baseURL}${pattern}users/logout`;
const locationsURL = `${baseURL}${pattern}locations`;
const airlinesURL = `${baseURL}${pattern}airlines`;
const ticketsURL = `${baseURL}${pattern}tickets`;
const salableURL = `${baseURL}${pattern}tickets/salable`;
const getSalableURL = `${baseURL}${pattern}tickets/getsalable`;
const purchaseURL = `${baseURL}${pattern}tickets/purchase`;
const bookingURL = `${baseURL}${pattern}ticketsBooking`;
const bookedTicketsURL = `${baseURL}${pattern}ticketsBooking/getBookedTickets`;
const confirmSaleUrl = `${baseURL}${pattern}ticketsBooking/confirmSale`;

export {
  API_HEADER,
  API_HEADER_FORMDATA,
  signUpURL,
  usersURL,
  activeUserURL,
  changePassUrl,
  forgotPassUrl,
  loginURL,
  roleURL,
  setLimitURL,
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
  confirmSaleUrl,
};
