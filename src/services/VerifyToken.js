export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.accessToken) {
    if (new Date(localStorage.getItem("userfecha")).getHours() <= 20) {
      return true;
    }
  }
  return false;
}
