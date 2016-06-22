var data = null;
var womensTopsArr = [];
var womensTrousersArr = [];
var womensShoesArr = [];
var womensHatsArr = [];

var womensTops = "?category=womens-clothing-tops&pageSize=200"
var womensTrousers = "?category=womens-clothing-trousers&category=womens-clothing-jeans&category=womens-clothing-leggings&pageSize=200"
var womensShoes = "?category=womens-shoes&pageSize=200"
var womensHats = "?category=womens-hats-caps&pageSize=200"
// &fields=id

var xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4 && this.status === 200) {
    var result = JSON.parse(this.response);
  }
});

xhr.open("GET", "https://api.zalando.com/articles" + womensHats);
xhr.setRequestHeader("accept-language", "en");
xhr.send(data);

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4 && this.status === 200) {
    var result = JSON.parse(this.response);
  }
});

xhr.open("GET", "https://api.zalando.com/articles" + womensTops);
xhr.setRequestHeader("accept-language", "en");
xhr.send(data);

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4 && this.status === 200) {
    var result = JSON.parse(this.response);
  }
});

xhr.open("GET", "https://api.zalando.com/articles" + womensTrousers);
xhr.setRequestHeader("accept-language", "en");
xhr.send(data);

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4 && this.status === 200) {
    var result = JSON.parse(this.response);
  }
});

xhr.open("GET", "https://api.zalando.com/articles" + womensShoes);
xhr.setRequestHeader("accept-language", "en");
xhr.send(data);

// function getRandomArticle(){
//
// }
