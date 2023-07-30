import config from "./index";

// if it is a fixed endpoint then static value otherwise an arrow function

export const ENDPOINTS = {
  AUTH: {
    SIGN_IN: `${config.API_BASE_URL}/auth/local`,
    REGISTER: `${config.API_BASE_URL}/auth/register`
  }
}


export const ENDPOINTS_OLD = {
  STORE: {
    getStoreBySubDomain: subdomain => `${config.API_BASE_URL}/dotk/customer/getStoreBySubDomain/${subdomain}`,
    getThemeById: id => `${config.API_BASE_URL}/dotk/themes/getTheme/${id}`
  },
  AUTH: {
    AUTHENTICATE_USER: `${config.API_BASE_URL}/dotk/vc1/user/authenticate`,
    CREATE_USER_ADDRESS: `${config.API_BASE_URL}/dotk/user/address/create`,
    generateOTP: phone => `${config.API_BASE_URL}/dotk/vo1/user/login/${phone}?source=digital_showroom`,
    verifyOTP: (phone, otp) => `${config.API_BASE_URL}/dotk/vo1/user/verifyOtp?phone=${phone}&otp=${otp}`,
    getUserAddressList: userId => `${config.API_BASE_URL}/dotk/vc1/user/address/getAllByUser/${userId}`,
  },
  CATALOG: {
    getCategories: storeId => `${config.API_BASE_URL}/dotk/catalog/getCategories/${storeId}`,
    getCatalogItemsByCategoryId: (storeId, categoryId) => `${config.API_BASE_URL}/dotk/catalog/getItemsByCategoryId/${storeId}?category_id=${categoryId}`,
    getCatalogItemsBasicsByCategoryId: (storeId, categoryId) => `${config.API_BASE_URL}/dotk/catalog/getItemsBasicDetails/${storeId}?category_id=${categoryId}`,
    getItems: (storeId, pageNo) => `${config.API_BASE_URL}/dotk/catalog/getItems/${storeId}?page_no=${pageNo}`,
    getItemById: (storeId, itemId) => `${config.API_BASE_URL}/dotk/catalog/getItem?store_id=${storeId}&item_id=${itemId}`,
    getSimilarItems: (storeId, categoryId, itemId) => `${config.API_BASE_URL}/dotk/catalog/getCategoryItems?store_id=${storeId}&category_id=${categoryId}&item_id=${itemId}`,
    SEARCH_CATALOG_ITEM: `${config.API_BASE_URL}/dotk/catalog/searchItems`,
  },
  CART: {
    VALIDATE_CART: `${config.API_BASE_URL}/dotk/order/validateCart`
  },
  ORDER: {
    CREATE_ORDER: `${config.API_BASE_URL}/dotk/order/createNewOrder`,
    getOrderFromHash: hash => `${config.API_BASE_URL}/dotk/order/getOrderFromHash/${hash}`,
    getCustomerOrders: (phone, storeId) => `${config.API_BASE_URL}/dotk/order/getCustomerOrders?phone=${phone}&store_id=${storeId}`,
    getOrderDetailsByID: orderId => `${config.API_BASE_URL}/dotk/order/getOrderDetails/${orderId}`,
    getStoreOrder: hash => `${config.API_BASE_URL}/dotk/order/getStoreOrder/${hash}`,
    updateOrderStateByHash: orderHash => `${config.API_BASE_URL}/dotk/order/updateOrderState/${orderHash}`
  },
  PAYMENT: {
    INIT_PAYMENT: `${config.OLD_API_BASE_URL}/payment/initiatePayment`,
    VERIFY_PAYMENT: `${config.OLD_API_BASE_URL}/payment/verifyPayment`,
    pullPaymentStatus: txnID => `${config.OLD_API_BASE_URL}/payment/pullPaymentStatus/${txnID}`,
    fetchPaymentModes: storeId => `${config.API_BASE_URL}/dotk/merchant/getCustomerPaymentOptions/${storeId}`
  },
  LOGS: {
    PUSH_EVENT_LOG: `${config.API_BASE_URL}/dotanalytics/push/pushEventLog`
  },
  SPOTLIGHT: {
    BUSINESS_LIST: `${config.API_BASE_URL}/dotk/merchant/getbusinessList`,
    cityList: (latitude, longitude) => `${config.API_BASE_URL}/dotk/city/getList?latitude=${latitude}&longitude=${longitude}`,
    storesList: (latitude, longitude, cityId, pageNo, categoryId) => `${config.API_BASE_URL}/dotk/city/getStoreList?latitude=${latitude}&longitude=${longitude}&city_id=${cityId}&page=${pageNo}&category_id=${categoryId}`,
    storeSearch: (latitude, longitude, cityId, pageNo, searchText) => `${config.API_BASE_URL}/dotk/city/store/search?latitude=${latitude}&longitude=${longitude}&city_id=${cityId}&page=${pageNo}&search_string=${searchText}`
  }
};
