// ==UserScript==
// @name User ID Helper BadUsers
// @namespace http://example.com/
// @version 1.04
// @description Adds a helper message near user ID
// @author Me
// @match http://www.charmdate.com/**
// @match http://www1.charmdate.com/**
// @match http://www2.charmdate.com/**
// @match http://www3.charmdate.com/**
// @match http://www4.charmdate.com/**
// @match http://www5.charmdate.com/**
// @match http://www6.charmdate.com/**
// @match http://www7.charmdate.com/**
// @updateURL   chrome-extension://mfdhdgbonjidekjkjmjaneanmdmpmidf/ask.html?aid=a7610673-61bc-40ff-b8f5-3d5dd8f4f1f2
// @downloadURL chrome-extension://mfdhdgbonjidekjkjmjaneanmdmpmidf/ask.html?aid=a7610673-61bc-40ff-b8f5-3d5dd8f4f1f2
// ==/UserScript==
// ==/UserScript==

(function() {
'use strict';

let links = document.querySelectorAll("td a");

links.forEach(function(link) {
if (link.textContent.includes("CM31876079")) {
let parent = link.parentElement;
let newElement = document.createElement("div");
newElement.innerHTML = "Не слати спам через невидимий символ";
newElement.style.backgroundColor = "yellow";
newElement.style.color = "black";
parent.appendChild(newElement);
}
});
})();


(function() {
'use strict';

let links = document.querySelectorAll("td a");

links.forEach(function(link) {
if (link.textContent.includes("CM27508817")) {
let parent = link.parentElement;
let newElement = document.createElement("div");
newElement.innerHTML = "Don't like scam with gifts";
newElement.style.backgroundColor = "yellow";
newElement.style.color = "black";
parent.appendChild(newElement);
}
});
})();

(function() {
'use strict';

let links = document.querySelectorAll("td a");

links.forEach(function(link) {
if (link.textContent.includes("CM34498939")) {
let parent = link.parentElement;
let newElement = document.createElement("div");
newElement.innerHTML = "Високе очикування в швидкості відповідей";
newElement.style.backgroundColor = "yellow";
newElement.style.color = "black";
parent.appendChild(newElement);
}
});
})();

(function() {
'use strict';

let links = document.querySelectorAll("td a");

links.forEach(function(link) {
if (link.textContent.includes("CM313497")) {
let parent = link.parentElement;
let newElement = document.createElement("div");
newElement.innerHTML = "Фут фетіш, якщо фото без ніг жалоба";
newElement.style.backgroundColor = "yellow";
newElement.style.color = "black";
parent.appendChild(newElement);
}
});
})();

(function() {
'use strict';

let links = document.querySelectorAll("td a");

links.forEach(function(link) {
if (link.textContent.includes("CM97535658")) {
let parent = link.parentElement;
let newElement = document.createElement("div");
newElement.innerHTML = "ЛОХ2211";
newElement.style.backgroundColor = "yellow";
newElement.style.color = "black";
parent.appendChild(newElement);
}
});
})();


(function() {
'use strict';

let links = document.querySelectorAll("td a");

links.forEach(function(link) {
if (link.textContent.includes("CM97535658")) {
let parent = link.parentElement;
let newElement = document.createElement("div");
newElement.innerHTML = "2";
newElement.style.backgroundColor = "yellow";
newElement.style.color = "black";
parent.appendChild(newElement);
}
});
})();

(function() {
'use strict';

let links = document.querySelectorAll("td a");

links.forEach(function(link) {
if (link.textContent.includes("CM97535658")) {
let parent = link.parentElement;
let newElement = document.createElement("div");
newElement.innerHTML = "4";
newElement.style.backgroundColor = "yellow";
newElement.style.color = "black";
parent.appendChild(newElement);
}
});
})();

(function() {
    'use strict';
    
    let links = document.querySelectorAll("td a");
    
    links.forEach(function(link) {
      if (link.textContent.includes("CM31876079")) {
        let parent = link.parentElement;
        let newElement = document.createElement("div");
        newElement.innerHTML = "Не відправляти повідомленн через невидимий символ";
        newElement.style.display = "none";
    
        let button = document.createElement("button");
        button.innerHTML = "ℹ️";
        button.style.marginLeft = "7px";
        button.addEventListener("click", function() {
          if (newElement.style.display === "none") {
            newElement.style.display = "block";
          } else {
            newElement.style.display = "none";
          }
        });
    
        parent.appendChild(button);
        parent.appendChild(newElement);
      }
    });
    })();
