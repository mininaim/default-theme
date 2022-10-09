/* show/hide cookies using localstorage */
function showCookieBanner() {
  let cookieBanner = document.getElementById("cookies");
  cookieBanner.style.display = "block";
}

function hideCookieBanner() {
  localStorage.setItem("checkIsCookieAccepted", "yes");
  let cookieBanner = document.getElementById("cookies");
  cookieBanner.style.display = "none";
}

function InitCookieBanner() {
  let isCookieAccepted = localStorage.getItem("checkIsCookieAccepted");
  if (isCookieAccepted === null) {
    localStorage.setItem("checkIsCookieAccepted", "no");
    showCookieBanner();
  }
  if (isCookieAccepted === "no") {
    showCookieBanner();
  }
}

window.onload = InitCookieBanner();
window.setGetCookies = hideCookieBanner;
