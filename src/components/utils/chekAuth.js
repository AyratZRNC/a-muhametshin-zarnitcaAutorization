import userStore from "../storage/userstorage.json";

export default function checkAuth(email, pass) {
  let isLog = false;
  userStore.forEach(element => {
    if (element["name"] === email && element["password"] === pass) {
      isLog = true;
    }
  });
  return isLog;
}
