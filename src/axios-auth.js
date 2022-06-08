import axios from "axios";

const instance = axios.create({
  baseURL: "https://axios-defba-default-rtdb.firebaseio.com",
});

instance.defaults.headers.common["SOMETHING"] = "sonething";

export default instance;
