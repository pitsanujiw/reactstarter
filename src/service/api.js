import axios from "axios";

function getdata() {
    return axios.get("http://localhost:8080/get_user")
  }

  export default getdata;