var data = null;
var womensHatsArr = [];
var womensTopsArr = [];
var womensTrousersArr = [];
var womensShoesArr = [];

var womensHats = "?category=womens-hats-caps&pageSize=50"
var womensTops = "?category=womens-clothing-tops&pageSize=50"
var womensTrousers = "?category=womens-clothing-trousers&category=womens-clothing-jeans&category=womens-clothing-leggings&category=womens-clothing-skirts&pageSize=50"
var womensShoes = "?category=womens-shoes&pageSize=50"

window.addEventListener("load", function(){
  randomHatGenerator();
  randomTopGenerator();
  randomTrousersGenerator();
  randomShoesGenerator();
});

function randomHatGenerator() {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4 && this.status === 200) {
      var result = JSON.parse(this.response);
      womensHatsArr.push(result);
    }
});

  xhr.open("GET", "https://api.zalando.com/articles" + womensHats);
  xhr.setRequestHeader("accept-language", "en");
  xhr.send(data);
}

function randomTopGenerator() {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4 && this.status === 200) {
      var result = JSON.parse(this.response);
      womensTopsArr.push(result);
    }
});

  xhr.open("GET", "https://api.zalando.com/articles" + womensTops);
  xhr.setRequestHeader("accept-language", "en");
  xhr.send(data);
}

function randomTrousersGenerator() {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4 && this.status === 200) {
      var result = JSON.parse(this.response);
      womensTrousersArr.push(result);
    }
});

  xhr.open("GET", "https://api.zalando.com/articles" + womensTrousers);
  xhr.setRequestHeader("accept-language", "en");
  xhr.send(data);
}

function randomShoesGenerator() {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4 && this.status === 200) {
      var result = JSON.parse(this.response);
      womensShoesArr.push(result);
    }
});

  xhr.open("GET", "https://api.zalando.com/articles" + womensShoes);
  xhr.setRequestHeader("accept-language", "en");
  xhr.send(data);
}

function randomHats() {
  var randomHatsNumber = womensHatsArr[0].content[Math.floor(Math.random() * womensHatsArr[0].content.length + 1)];
  document.getElementById('hats-img').src = randomHatsNumber.media.images[0].mediumUrl;
}

function randomTops(){
  var randomTopsNumber = womensTopsArr[0].content[Math.floor(Math.random() * womensTopsArr[0].content.length + 1)];
  document.getElementById('tops-img').src = randomTopsNumber.media.images[0].mediumUrl;
}

function randomTrousers(){
  var randomTrousersNumber = womensTrousersArr[0].content[Math.floor(Math.random() * womensTrousersArr[0].content.length + 1)];
  document.getElementById('trousers-img').src = randomTrousersNumber.media.images[0].mediumUrl;
}

function randomShoes(){
  var randomShoesNumber = womensShoesArr[0].content[Math.floor(Math.random() * womensShoesArr[0].content.length + 1)];
  document.getElementById('shoes-img').src = randomShoesNumber.media.images[0].mediumUrl;
}

document.getElementById('fairyhead').addEventListener("click", function(){
  randomHats();
  randomTops();
  randomTrousers();
  randomShoes();
  var randomComment = comments[Math.floor(Math.random() * comments.length)];
  document.getElementById('fairy-text').textContent = randomComment;
  var randomImage= images[Math.floor(Math.random() * images.length)];
  document.getElementById('fairyhead').src = randomImage;
});
