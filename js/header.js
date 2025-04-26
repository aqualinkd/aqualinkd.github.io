
/*
console.log('Running header');
const currentUrl = window.location.href;
const currentPathname = window.location.pathname;
const pageName = currentPathname.split("/").pop();

console.log("Full URL:", currentUrl);
console.log("Pathname:", currentPathname);
console.log("Page name:", pageName);
*/

const currentPathname = window.location.pathname;
//const pageName = currentPathname.split("/").pop();

const pageName = currentPathname.split("/").slice(-2, -1).toString();

let pshome = "";
let psoverview = "";
let psdetails = "";
let pspurchase = "";
let psdocs = "";

switch (pageName) {
  case "overview":
    psoverview = " class='current'";
    break;
  case "details":
    psdetails = " class='current'";
    break;
  case "docs":
    psdocs = " class='current'";
    break;
  case "purchase":
    pspurchase = " class='current'";
    break;
  case "":
  default:
    pshome = " class='current'";
    break;
}

// "<img src='/img/logo.png' width='237' height='46' alt='AqualinkD'>"+
try {
  const header = document.getElementById('header');

  header.innerHTML = "<div class='flexbox'>" +
    "<div class='center-on-mobiles'>" +
    "<h1>" +
    "<a href='/' class='logo'>" +
    "<span class='sr-only'>AqualinkD</span>" +
    "AqualinkD" +
    "</a>" +
    "</h1>" +
    "</div> " +
    "<nav class='main-nav hide-on-mobiles'>" +
    "<ul>" +
    "<li" + pshome + "><a href='/'>Home</a></li>" +
    "<li" + psoverview + "><a href='/overview/'>Overview</a></li>" +
    "<li" + psdocs + "><a href='/docs/'>Docs</a></li>" +
    "<li" + psdetails + "><a href='/details/'>Details</a></li>" +
    "<li" + pspurchase + "><a href='/purchase/'>Purchase</a></li>" +
    "<li><a href='https://github.com/aqualinkd' target='_blank' rel='noopener'>GitHub</a></li>" +
    "</ul>" +
    "</nav>" +
    "</div>" +

    "<nav class='mobile-nav show-on-mobiles'>" +
    "<ul>" +
    "<li" + pshome + "><a href='/'>Home</a></li>" +
    "<li" + psoverview + "><a href='/overview/'>Overview</a></li>" +
    "<li" + psdocs + "><a href='/docs/'>Docs</a></li>" +
    "<li" + psdetails + "><a href='/details/'>Details</a></li>" +
    "<li" + pspurchase + "><a href='/purchase/'>Purchase</a></li>" +
    "<li><a href='https://github.com/aqualinkd' target='_blank' rel='noopener'>GitHub</a></li>" +
    "</ul>" +
    "</nav>";
} catch (e) { }

try {
  const footer = document.getElementById('footer');

  footer.innerHTML = "<div class='grid'>" +
    "<div class='unit whole center-on-mobiles''>" +
    "<p>If you like this project, please consider donating <a href=' https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=SEGN9UNS38TXJ'" +
    "rel='nofollow'><img " +
    "src='https://camo.githubusercontent.com/2b3b3f38604d749b543e8577afdc6bd9fab25244f6cb16bfb713273a74350fd7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f446f6e6174652d50617950616c2d677265656e2e737667'" +
    "alt='Donate' data-canonical-src='https://img.shields.io/badge/Donate-PayPal-green.svg'" +
    "style='max-width: 100%;'></a>" +
    "</p>" +
    "</div>" +
    "<div class='unit two-thirds center-on-mobiles'>" +
    "<p>AqualinkD is actively maintained in <a href='https://github.com/aqualinkd/'>core repos</a> free under the " +
    "terms of the <a href='https://github.com/aqualinkd/AqualinkD/blob/master/LICENSE.md'>GPLv2 licensing</a>.</p>" +
    "</div>" +
    "<div class='unit one-third align-right center-on-mobiles'>" +
    "<p>" +
    "Hosted by <a href='https://github.com'> • GitHub</a>" +
    "</p>" +
    "</div>" +
    "</div>";
} catch (e) { }
