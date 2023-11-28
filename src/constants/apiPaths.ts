const PRODUCT_SERVICE_BASE_URL =
  "https://c056e1lqt1.execute-api.eu-west-1.amazonaws.com/dev";
const IMPORT_SERVICE_BASE_URL =
  "https://r4x7ybtgm8.execute-api.eu-west-1.amazonaws.com/dev";

const API_PATHS = {
  products: `${PRODUCT_SERVICE_BASE_URL}/products`,
  order: `${PRODUCT_SERVICE_BASE_URL}`,
  import: `${IMPORT_SERVICE_BASE_URL}/import`,
  bff: `${PRODUCT_SERVICE_BASE_URL}`,
  cart: `${PRODUCT_SERVICE_BASE_URL}`,
};

export default API_PATHS;
