import axios from "axios";

class Auth {
  constructor() {
    this.authenticated = false;
  }

  logout() {
    try {
      return axios({
        method: "get",
        url: "http://localhost:5000/logout",
        withCredentials: true,
      }).then((response) => {
        if (response.data.status === 200) {
          this.authenticated = false;
          return true;
        } else {
          alert(response.data.message);
          return false;
        }
      });
    } catch (err) {
      console.log(err.message);
      return false;
    }
  }

  isAuthenticated(apiCall = true) {
    if (apiCall) {
      try {
        return axios({
          method: "get",
          url: "http://localhost:5000/checkauthentication",
          withCredentials: true,
        }).then((response) => {
          this.authenticated = response.data.status === 200 ? true : false;
          return this.authenticated;
        });
      } catch (err) {
        console.log(err.message);
      }
    } else {
      return this.authenticated;
    }
  }
}

export default new Auth();
