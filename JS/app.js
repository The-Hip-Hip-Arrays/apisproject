var data = null;
var womensTopsArticleId = [];
var womensTops = "?category=womens-clothing-tops&fields=id"


var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    var result = JSON.parse(this.response);
    result.content.forEach(function(e){
      womensTopsArticleId.push(e.id);
    });
  }
});

xhr.open("GET", "https://api.zalando.com/articles" + womensTops);
xhr.setRequestHeader("accept-language", "{{Accept-Language}}");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("postman-token", "d6d39ff9-0180-d01a-7fe4-58ecfa9f9735");

xhr.send(data);
