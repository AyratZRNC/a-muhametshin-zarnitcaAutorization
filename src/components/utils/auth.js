class Auth {
  login(cb) {
    localStorage.setItem("authenticated", true);
    cb();
  }
  logout() {
    localStorage.clear();
  }
  isAuthenticated() {
    return localStorage.getItem("authenticated") === "true" ? true : false;
  }
}
export default new Auth();
