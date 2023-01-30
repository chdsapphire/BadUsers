// ==UserScript==
// @name User ID Helper BadUsers
// @namespace http://example.com/
// @version 1.064
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
// @updateURL   https://github.com/chdsapphire/BadUsers/raw/main/User%20ID%20Helper%20%D0%9F%D0%BE%D0%B3%D0%B0%D0%BD%D1%96.user.js
// @downloadURL https://github.com/chdsapphire/BadUsers/raw/main/User%20ID%20Helper%20%D0%9F%D0%BE%D0%B3%D0%B0%D0%BD%D1%96.user.js
// ==/UserScript==

(function() {
  'use strict';
  
  let links = document.querySelectorAll("td a");
  
  links.forEach(function(link) {
  if (link.textContent.includes("CM78435696")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "Не відправляти повідомленн через невидимий символ";
  newElement.style.display = "none";
  
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  
  (function() {
  'use strict';
  
  let links = document.querySelectorAll("td a");
  
  links.forEach(function(link) {
  if (link.textContent.includes("CM34498939")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "Скарга: Не відповіли на лист за добу";
  newElement.style.display = "none";
  
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  (function() {
  'use strict';
  
  let links = document.querySelectorAll("td a");
  
  links.forEach(function(link) {
  if (link.textContent.includes("CM12481282")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "Скарга: Купив контакти залишалась на сайті";
  newElement.style.display = "none";
  
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  (function() {
  'use strict';
  
  let links = document.querySelectorAll("td a");
  
  links.forEach(function(link) {
  if (link.textContent.includes("CM35830261")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "Complaint: Спалив запис спліта";
  newElement.style.display = "none";
  
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  (function() {
  'use strict';
  
  let links = document.querySelectorAll("td a");
  
  links.forEach(function(link) {
  if (link.textContent.includes("CM72333409")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "Complaint: Пообіцяли купити йому кредити";
  newElement.style.display = "none";
  
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  (function() {
  'use strict';
  
  let links = document.querySelectorAll("td a");
  
  links.forEach(function(link) {
  if (link.textContent.includes("CM72333409")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "Complaint: Пообіцяли купити йому кредити";
  newElement.style.display = "none";
  
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  (function() {
  'use strict';
  
  let links = document.querySelectorAll("td a");
  
  links.forEach(function(link) {
  if (link.textContent.includes("CM91522860")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "Complaint: Сказали контакти ще не опубліковані на сайті";
  newElement.style.display = "none";
  
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
   (function() {
  'use strict';
  
  let links = document.querySelectorAll("td a");
  
  links.forEach(function(link) {
  if (link.textContent.includes("CM29914797")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "Complaint: Сказали сайт блокує розмову під час дзвінка";
  newElement.style.display = "none";
  
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  (function() {
  'use strict';
  
  let links = document.querySelectorAll("td a");
  
  links.forEach(function(link) {
  if (link.textContent.includes("CM82378555")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "Complaint: Сказали сайт не доставив відкритку";
  newElement.style.display = "none";
  
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
   (function() {
  'use strict';
  
  let links = document.querySelectorAll("td a");
  
  links.forEach(function(link) {
  if (link.textContent.includes("CM82378555")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "Complaint: Сказали сайт не доставив відкритку";
  newElement.style.display = "none";
  
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
   (function() {
  'use strict';
  
  let links = document.querySelectorAll("td a");
  
  links.forEach(function(link) {
  if (link.textContent.includes("CM82378555")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "Complaint: мужчина сомневается, что девушка не реальная, он хочет что девушка представляет фото-доказательства";
  newElement.style.display = "none";
  
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
   (function() {
  'use strict';
  
  let links = document.querySelectorAll("td a");
  
  links.forEach(function(link) {
  if (link.textContent.includes("CM31876079")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "Complaint: лист без знаків пунктуаціі";
  newElement.style.display = "none";
  
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
   (function() {
  'use strict';
  
  let links = document.querySelectorAll("td a");
  
  links.forEach(function(link) {
  if (link.textContent.includes("CM31876079")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "Complaint: девушка сказала мужичне , что девушка на сайте тоже нужно тратить деньги.і";
  newElement.style.display = "none";
  
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  (function() {
  'use strict';
  
  let links = document.querySelectorAll("td a");
  
  links.forEach(function(link) {
  if (link.textContent.includes("CM31876079")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "Complaint: сайт заметил, что девушка вводила в заблуждение мужчин, чтобы связаться с вне сайта.";
  newElement.style.display = "none";
  
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  (function() {
  'use strict';
  
  let links = document.querySelectorAll("td a");
  
  links.forEach(function(link) {
  if (link.textContent.includes("CM89134493")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "Complaint: мужчина писал сайту, и жаловался о таких девушках. мужчина считается, что девушки нереальные, обманывали его.";
  newElement.style.display = "none";
  
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  
  let links = document.querySelectorAll("td a");
  
  links.forEach(function(link) {
  if (link.textContent.includes("CM53622242")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "Complaint: девушка сказала мужчине: She is flying to Brisbane on September 17 （mail 2021-09-03 11:48）. мужчина искал на сайте,September 17 нет рейсов..";
  newElement.style.display = "none";
  
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  (function() {
  'use strict';
  
  let links = document.querySelectorAll("td a");
  
  links.forEach(function(link) {
  if (link.textContent.includes("CM98666951")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "Мужчина писал сайту, ему недовольно, что сайт блокнировать информации контакт на сайте.сайт уточнил, девушка неправильно увлекала мужчине .";
  newElement.style.display = "none";
  
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  (function() {
  'use strict';
  
  let links = document.querySelectorAll("td a");
  
  links.forEach(function(link) {
  if (link.textContent.includes("CM26811672")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "мужчина хочет купить контакты этой девушки, но девушка отказалась его заявку.";
  newElement.style.display = "none";
  
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  (function() {
  'use strict';
  
  let links = document.querySelectorAll("td a");
  
  links.forEach(function(link) {
  if (link.textContent.includes("CM94213057")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "мужчина писал сайту, жаловался, что девушка лгал, нашлапричину не встречаться.";
  newElement.style.display = "none";
  
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  
  let links = document.querySelectorAll("td a");
  
  links.forEach(function(link) {
  if (link.textContent.includes("CM78833901")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "мужчина писал сайту, он жаловался, что содержание письма было удалено.";
  newElement.style.display = "none";
  
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  (function() {
  'use strict';
  
  let links = document.querySelectorAll("td a");
  
  links.forEach(function(link) {
  if (link.textContent.includes("CM14039905")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "Пусть девушке прекратить отправлять так много Scheduled Calls. Избегайте рисков";
  newElement.style.display = "none";
  
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM96503311")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "мужчина писал сайту, он хочет получать контакты этойдевушки как можно скорее. он сказал, что онCEO in a european companya group.девушка сказала ему, что она уже в городе мужчины.";
  newElement.style.display = "none";
  
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM881049")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "хочет купить контакты этой девушки.он тратил мног на сайте.советую девушке хорошо отвечать и успокоить мужчины. спасибо..";
  newElement.style.display = "none";
  
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM55148912")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "Complaint: мужчине недовольно, что девушка отказывала дать ему контакты. но в письмах девушка сказала мужчине, что она не отказывала, она не видела заявку мужчины. ";
  newElement.style.display = "none";
  
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM30012369")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "сайт заметил, в ближайшие дни девушка сказала мужчине, что она уже в США.уточните пожалуйста, и пусть девушка избегайть рискоа, спасибо. ";
  newElement.style.display = "none";
  
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM89271994")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "мужчина писал сайту, он сказал, что Аэропорт Ататюрка закрыт для пассажирских самолетов, могут приземляться только частные самолеты.мужчина сомневается, что девушка отправляла ему неправильные информации.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM11510477")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "мужчина и девушка хочет обменять контакты в письмах.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM75957604")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "мужчина писал сайту, сказал, что контакт девушки неправильный.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM46562038")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "мужчина хочет получать контакты этой девушки.девушки неправильно направляли мужчины обменять контакты в письмах, и при звонки.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM80321692")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "мужчина жаловался, что девушка отправляла ему сексуальные при глашения.и сайт заметил, что девушка неправильно направляли мужчины встречаться в реальности (например следующие)";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM38050132")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "Очикування швидкої доставки листів)";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM38050132")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "Очикування швидкої доставки листів)";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM82378555")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "он не верит, что девушка действительно получала подарок. потому что девушка не сказала ему в емайл.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM33980746")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "мужчина сказал, что больше не хочет получать say hi от этой девушки.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM29914797")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "мужчине недовольно, что не сможет получать тел номер девушки.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM1132263")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "мужчине недовольно, что в процессе Lady Call Me кто-то слушает телефон, мешает телефону.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM881049")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "Не відправляти повідомленн через невидимий символ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM24320612")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "мужчина хочет купить контакты девушки.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM77159533")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "мужчина писал сайту, он сомневается, что девушка не оействительно хочет дать контакты, или встречаться в реальном.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM78833901")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "мужчине недовольно, что сайт блокнировает информации. он хочет обменять контакты с девушкой.в чатах девушка много раз отправляла замечание Sorry, exchanging contact information is prohibited in chat as it does not comply with the site’s policy.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM92181445")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "мужчина хочет дать девушке контакты.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM65677520")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "мужчине недовольно, что они в звонке трудно слышали. и Video Chat вдруг закончился..";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM91522860")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "мужчина считает, что сайт блокнировать информации, и так он не сможет обменять контакты с девушкой. девушка согласилась дать мужчине контакты.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM91522860")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "девушка сказала ему, что она не смогла ходить в агентство и открывать контакты. поэтому мужчине недовольно о сайте..";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM11510477")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "это мужчина часто жалуется, он часто хочет вернуть кредиты за неуспешный видео чат.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM57212329")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "мужчина писал сайту, он не понимает содержание письма девушки. там много _";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM12481282")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "мужичине недовльно, что девушка обманная. девушка сказала, что она будетпоехать в его город, но она не так делала. И мужичине недовольно, что девушка с другими мужчинами camshare.он хочет разорвать отношения с дамой.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM78833901")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "последствия будут серьезными.мужчина только хочет купить конаткты девушек на нашем сайте. и он попзже будет связаться с девушками вне нашего сайта.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM31876079")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "мужчине недовольно, что в письмах нет пробелов и знаков препинания, и так он не сможет читать.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM72370999")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "мужчина хочет купить контакт девушки.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM27508817")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "Мужчине недовольно, что он купил девушке подарок , но на листе note нет тел номера мужчины. ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM97451748")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "мужчина писал сайту, он очень хочет встречаться с девушкой в реальном.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM70602828")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "девушка писала мужчине, что она хочет контакт мужчины.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM59271984")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "девушка писала мужчине, что она хочет на сайте Facebook связываться.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM54195474")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "мужчина сомневается, что девушка - робот.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM23305572")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "мужчине недовольно, что девушка часто отправляла ему одиноковые содержания. похоже девушка не сможет получать сообшение мужчины.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM60974550")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "Сайт заметил, что раньше они писали письмо по-французский. Но сейчас девушка писала по-английский, и большая цифра.И Девушка сейчас активно направляет мужчины вне сайта связываться. ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM92357679")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "мужчина жаловал, что девушка отправляла ему много заявок звонков.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM97814306")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "мужчине недовольно, что девушка спросила у него подарок.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM43338493")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "мужчина хочет купить контакт девушки.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM26672848")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "мужчина писал сайту, он жаловался, что девушка отправляла ему одинаковые письма. он сомневается, что это проблема системы.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM26742625")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "девушка сейчас направляет мужчины связываться вне сайта Facebook.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM31876079")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "мужчине недовольно, что в чате не видел сообщение. ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM13442690")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "мужчина писал сайту, он хочет отправлять девушке деьги.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM23305572")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "Мужчине недовольно, что девушка не получала сообщение от мужчины.Сайт заметил, что девушка отправляламужчине «*****» . И так мужчине недовольно, что сайт блокировал.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM43680035")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "мужчина хочет обменять контакт с девушкой.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM67229")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "не відправляти через пробіл.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM78928626")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "мужчина хочет получать контакт девушки.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM12481282")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "мужчине недовольно , что девушка врёт. мужчина уже купил контакт девушки. но девушка ещё хочет связываться на сайте.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM15728563")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "мужчина писал сайту, он хочет знать, сможет ли встречаться с девушкой в Англии из-за войны в городе девушки.сейчас мужчина почти только связывается с этой девушкой.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM97814306")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "мужчина хочет купить емайл и тел номер девушки.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM93788880")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "девушка сказала мужчине, что она в городе мужчины.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM43680035")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "сайт заметил, что в CamShare они говоряли о порнографии.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM97451748")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "мужчина писал сайту, Мужчина разочарован тем, что девушка не может пойти к мужчинам.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM97451748")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "девушка сейчас ещё писала мужчине, и неправильно направляла ему сязываться с помощью facebook.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM35830261")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "Мужчина сомневается о реальности девушки. Потому что camshare девушка использовала видеозапись. Он хочет возвращать сумму и удалять анкету девушки.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM97814306")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "camshare видео одиноковое";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM99538499")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "девушка сказала мужчине, что она будет в город мужчины, но у неё нет денег.и сейчас мужчина писал сайту, он хочет дать девушке деньги.девушка направляла мужчины купить подарок на нашем сайте.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM84233482")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "не доволен тем, что сайт блокировал фамилию девушки";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM97159018")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "сказала ему, что она учится в Амерке , зочет встречаться с девушкой, спросить как встречаться с мужчиной. ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
  
  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("️CM37257313")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "сказала ему, что она учится в Амерке , зочет встречаться с девушкой, спросить как встречаться с мужчиной. ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "ℹ️";
  button.style.marginLeft = "5px";
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
