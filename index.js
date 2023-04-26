let seasonSmallImageElement = document.getElementById("seasonSmallImage");
let seasonMediumImageElement = document.getElementById("seasonMediumImage");

let springSmallImage =
  "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png";
let springMediumImage =
  "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png";
let summerSmallImage =
  "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png";
let summerMediumImage =
  "https://learning.ccbp.in/crash-course/web-programming/46fd7938-72e5-49c2-8e9c-d97c8398e62f";

let autumnSmallImage =
  "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png";
let autumnMediumImage =
  "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png";

let winterSmallImage =
  "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png";
let winterMediumImage =
  "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png";

function changeSeasonToSpring() {
  seasonSmallImageElement.src = springSmallImage;
  seasonMediumImageElement.src = springMediumImage;
}

function changeSeasonToSummer() {
  seasonSmallImageElement.src = summerSmallImage;
  seasonMediumImageElement.src = summerMediumImage;
}

function changeSeasonToAutumn() {
  seasonSmallImageElement.src = autumnSmallImage;
  seasonMediumImageElement.src = autumnMediumImage;
}

function changeSeasonToWinter() {
  seasonSmallImageElement.src = winterSmallImage;
  seasonMediumImageElement.src = winterMediumImage;
}
