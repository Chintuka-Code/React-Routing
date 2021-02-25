class Auth {
  constructor() {
    this.auth = false;
  }

  login(cb) {
    this.auth = true;
    cb();
  }
  login(cb) {
    this.auth = false;
    cb();
  }
  isAuth(cb) {
    return this.auth;
  }
}

export default new Auth();
