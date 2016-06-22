var data = null;
var womensTopsArticleId = [];
var womensTops = "?category=womens-clothing-tops&fields=id&pageSize=200"


var xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4 && this.status === 200) {
    var result = JSON.parse(this.response);
    result.content.forEach(function(e){
      womensTopsArticleId.push(e.id);
    });
    console.log(womensTopsArticleId)
  }
});

xhr.open("GET", "https://api.zalando.com/articles" + womensTops);
xhr.setRequestHeader("accept-language", "en");
xhr.send(data);
