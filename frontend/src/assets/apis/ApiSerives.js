import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const RegisterUser = async (
  company,
  companytype,
  salesTaxId,
  salutation,
  firstName,
  lastName,
  houseNum,
  address,
  postCode,
  location,
  phoneNumber,
  country,
  email,
  password,
  isCommercial,
  isFrightForwarder,
  planType,
  planExpiryDate,
  tariff,
  isPaid
) => {
  const response = await axios.post(`${BASE_URL}/api/userRegister`, {
    company,
    companytype,
    salesTaxId,
    salutation,
    firstName,
    lastName,
    houseNum,
    address,
    postCode,
    location,
    phoneNumber,
    country,
    email,
    password,
    isCommercial,
    isFrightForwarder,
    planType,
    planExpiryDate,
    tariff,
    isPaid,
  });
  return response;
};

export const LoginUser = async (email, password) => {
  const response = await axios.post(`${BASE_URL}/api/loginUser`, {
    email,
    password,
  });
  return response;
};

export const ForgetPasswordLink = async (email) => {
  let response = await axios.post(`${BASE_URL}/api/forgetPasswordLink`, {
    email,
  });
  return response;
};

export const ResetPasswordLink = async (email, password) => {
  let response = await axios.post(`${BASE_URL}/api/forgetPassword`, {
    email,
    password,
  });
  return response;
};

export const CreateDirectory = async (
  userId,
  company,
  companyType,
  addressType,
  salutation,
  firstName,
  lastName,
  internalTerm,
  houseNum,
  addressSupplement,
  salesAndTaxId,
  email,
  phoneNumber,
  zipCode,
  isBillingAddress,
  isShippingAddress,
  isDefaultAddress
) => {
  const response = await axios.post(`${BASE_URL}/api/createDirectory`, {
    userId,
    company,
    companyType,
    addressType,
    salutation,
    firstName,
    lastName,
    internalTerm,
    houseNum,
    addressSupplement,
    salesAndTaxId,
    email,
    phoneNumber,
    zipCode,
    isBillingAddress,
    isShippingAddress,
    isDefaultAddress,
  });

  return response;
};

export const GetUserDirectories = async (userId) => {
  let response = await axios.post(`${BASE_URL}/api/getDirectoriesByUserId`, {
    userId,
  });
  return response;
};

export const GetDeliveryLocation = async (location) => {
  let response = await axios.post(
    `${BASE_URL}/api/getCompaniesOfDeliveryRegion`,
    {
      location,
    }
  );
  return response;
};

export const updateUser = async (
  userId,
  company,
  companytype,
  salesTaxId,
  salutation,
  firstName,
  lastName,
  houseNum,
  address,
  postCode,
  tariff,
  phoneNumber
) => {
  let response = await axios.put(`${BASE_URL}/api/updateUser/${userId}`, {
    company,
    companytype,
    salesTaxId,
    salutation,
    firstName,
    lastName,
    houseNum,
    address,
    postCode,
    tariff,
    phoneNumber,
  });
  return response;
};

export const getOrders = async (userId) => {
  let response = await axios.get(`${BASE_URL}/api/getOrdersById/${userId}`);
  return response;
};

export const getOrdersBycompanyName = async (companyName) => {
  let response = await axios.get(
    `${BASE_URL}/api/getOrdersByCompany/${companyName}`
  );
  return response;
};

export const createOrder = async (shippingData) => {
  const response = await axios.post(
    `${BASE_URL}/api/createShipping`,
    shippingData
  );
  return response;
};

export const updatePaymentPlan = async (
  userId,
  planType,
  paymentMethod,
  planExpiryDate
) => {
  let response = await axios.put(`${BASE_URL}/api/updateUser/${userId}`, {
    planType,
    paymentMethod,
    planExpiryDate,
  });
  return response;
};

export const cancelOrderById = async (id) => {
  let response = await axios.delete(`${BASE_URL}/api/cancelOrderById/${id}`);
  return response;
};
