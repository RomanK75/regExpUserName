export default class Validator {
  constructor(username) {
    this.username = username;
  }

  validateUserName() {
    const usernameRegex1 = /^[a-zA-Z][a-zA-Z0-9_-]*[a-zA-Z]$/;
    const usernameRegex2 = /\d{4}/;
    if (usernameRegex1.test(this.username) && !usernameRegex2.test(this.username)) {
      return true;
    }
    return false;
  }

  setUsername(username) {
    this.username = username;
  }
}
