import originalAxios from "axios";

const local = "http://localhost:8000/api";
const dev = "https://first-step-pharma.herokuapp.com/api";
const prod = "https://first-step-pharma.herokuapp.com/api";

let baseURL;

if (process.env.REACT_APP_ENV === "local") {
  baseURL = local;
} else if (process.env.NODE_ENV === "production") {
  baseURL = prod;
} else {
  baseURL = dev;
}

const axios = originalAxios.create({ baseURL });

export default axios;
