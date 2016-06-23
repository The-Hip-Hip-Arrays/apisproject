var data = null;
var womensTopsArr = [];
var womensTrousersArr = [];
var womensShoesArr = [];
var womensHatsArr = [];

var womensTops = "?category=womens-clothing-tops&pageSize=200"
var womensTrousers = "?category=womens-clothing-trousers&category=womens-clothing-jeans&category=womens-clothing-leggings&category=womens-clothing-skirts&pageSize=200"
var womensShoes = "?category=womens-shoes&pageSize=200"
var womensHats = "?category=womens-hats-caps&pageSize=200"

function randomHatGenerator() {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4 && this.status === 200) {
      var result = JSON.parse(this.response);
      womensHatsArr.push(result);
      var randomNumber = womensHatsArr[0].content[Math.floor(Math.random() * womensHatsArr[0].content.length + 1)];
      document.getElementById('hats-img').src = randomNumber.media.images[0].mediumUrl;
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
      var randomNumber = womensTopsArr[0].content[Math.floor(Math.random() * womensTopsArr[0].content.length + 1)];
      document.getElementById('tops-img').src = randomNumber.media.images[0].mediumUrl;
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
      var randomNumber = womensTrousersArr[0].content[Math.floor(Math.random() * womensTrousersArr[0].content.length + 1)];
      document.getElementById('trousers-img').src = randomNumber.media.images[0].mediumUrl;
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
      var randomNumber = womensShoesArr[0].content[Math.floor(Math.random() * womensShoesArr[0].content.length + 1)];
      document.getElementById('shoes-img').src = randomNumber.media.images[0].mediumUrl;
    }
});

  xhr.open("GET", "https://api.zalando.com/articles" + womensShoes);
  xhr.setRequestHeader("accept-language", "en");
  xhr.send(data);
}

document.getElementById('fairyhead').addEventListener("click", function(){
  randomHatGenerator();
  randomTopGenerator();
  randomTrousersGenerator();
  randomShoesGenerator();
  var randomComment = comments[Math.floor(Math.random() * comments.length)];
  document.getElementById('fairy-text').textContent = randomComment;
  var randomImage= images[Math.floor(Math.random() * images.length)];
  document.getElementById('fairyhead').src = randomImage;
});

console.log(typeof womensTopsArr);
