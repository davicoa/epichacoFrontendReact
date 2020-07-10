export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  let fecha1 = new Date(localStorage.getItem("userfecha"))
  let fecha2 = new Date()
  let resta = fecha2.getTime() - fecha1.getTime()
  if (user && user.accessToken) {
    if (localStorage.getItem("userfecha")) {
      if ( Math.round(resta/ (1000*60*60*24)) < 24) {
        return true;
      }
      localStorage.removeItem("user");
      localStorage.removeItem("userfecha");
    }
  }
  return false;
}
