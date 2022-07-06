export function getLoginUser() {
  return JSON.parse(localStorage.getItem('LoginUser'));
}
export function setLoginUser(user) {
  localStorage.setItem('LoginUser', JSON.stringify(user));
}

export const getNameFromEmail = (email) => email?.split('@')[0];
