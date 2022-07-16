// 타입 단언(type assertion)
var a;
a = 20;
a = "a";
var b = a as string; // b <- string으로 추정

// DOM API 조작
// <div id="app">hi</div>

var div = document.querySelector("div") as HTMLDivElement;
div.innerText;
