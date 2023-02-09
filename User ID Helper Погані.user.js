// ==UserScript==
// @name User ID Helper BadUsers
// @namespace http://example.com/
// @version 1.079
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

  function checkForUpdates() {
      console.log("Checking for updates...");

      // Fetch the raw link from GitHub
      fetch("https://github.com/chdsapphire/BadUsers/raw/main/User%20ID%20Helper%20%D0%9F%D0%BE%D0%B3%D0%B0%D0%BD%D1%96.user.js")
          .then(response => response.text())
          .then(text => {
              // Extract the version from the fetched script
              const match = /@version\s+([\d.]+)/.exec(text);
              if (match) {
                  const version = match[1];

                  // Compare the version with the current version
                  if (version > GM_info.script.version) {
                      console.log(`A new version (${version}) is available.`);
                      // Add your code to update the script here
                  } else {
                      console.log("You have the latest version.");
                  }
              } else {
                  console.error("Could not extract version information.");
              }
          })
          .catch(error => {
              console.error("An error occurred while checking for updates.", error);
          });
  }

  function runUpdateCheck() {
      checkForUpdates();
      setTimeout(runUpdateCheck,  60 * 60 * 1000);
  }

  runUpdateCheck();
})();


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
  newElement.innerHTML = "1)Complaint: девушка сказала мужичне , что девушка на сайте тоже нужно тратить деньги.<br>2)Complaint: сайт заметил, что девушка вводила в заблуждение мужчин, чтобы связаться с вне сайта <br> 3) мужчине недовольно, что в письмах нет пробелов и знаков препинания, и так он не сможет читать.. <br> 4)мужчине недовольно, что в чате не видел сообщение. Complaint: девушка сказала мужичне , что девушка на сайте тоже нужно тратить деньги.";
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
  if (link.textContent.includes("CM72370999")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "1) мужчина хочет купить контакт девушки. <br> 2)хочет купить контакт – если мужчина продолжает жаловаться, тогда жалоба будет на системе";
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


  (function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("️CM48493638")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "Підключаєтся до камери на кожну анкету ии потім  кидає скаргу що lady фейк";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "❌Опасно";
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
  if (link.textContent.includes("️CM44022558")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "Максимально конченный, жаловался что не настоящая, общались на почте 3 месяца"
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "❌Опасно";
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
  if (link.textContent.includes("️CM57458096")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "жалоба на сплит";
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
  if (link.textContent.includes("️CM28277965")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "жалоба что не доставлен подарок";
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
  if (link.textContent.includes("CM74213992")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "жалвоался на то что просят подарок (если просите то будьте убедительными а не просто клянчить)";
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
  if (link.textContent.includes("CM55749569")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "жалвоался на порно в общении (исключить эту тематику и не использовать ее для вызова мужчины в чат)";
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
  if (link.textContent.includes("CM27489074")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "жаловался на то что чат прервался (иметь заряженый павербанк и шнур для запитки роутера на случай чата с этим мужчиной)  ";
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
  if (link.textContent.includes("CM31705053")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "писал , что леди фейк и не хочет встречи с ним в реальной жизни + возврат денег за общение  ";
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
  if (link.textContent.includes("CM12690531")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "пожаловался , что леди не дала контактную инфу ";
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
  if (link.textContent.includes("CM19692734")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "написал жалобу о том , что леди не пополнила ему кредиты и это затруднило общение ";
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
  if (link.textContent.includes("CM13330695")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "написал , что у леди другое семейное положение нежели написано на сайте ";
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
  newElement.innerHTML = "жаловался что евушки нет онлайн (договориваться с мужчиной на чат заранее) ";
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
  if (link.textContent.includes("CM52231938")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "жалуется на скорость чтения писем (важно давать быстрый ответ) ";
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
  if (link.textContent.includes("CM11323442")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "жалуется на порно в общении (исключить данную тему из общения) ";
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
  if (link.textContent.includes("CM18557061")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "жаловался на дубликат письма (писать всегда индивидуально) ";
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
  if (link.textContent.includes("CM28380077")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "жалуется на подлиность девушки (если начинает проверки лучше вык камеру) ";
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
  if (link.textContent.includes("CM69665445")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "жаловался на отказ девушки в выдачи контакт инфо (не давать обещаний касаемо контакт инфо и исключить из общения данную тему) ";
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
  if (link.textContent.includes("CM32073752")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "Особий статус.Йому перевіряють листи!жалвоался на отказ в обмене инфо (не давать обещний насчет выдачи контакт инфо и не развивать эту тему)  ";
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
  if (link.textContent.includes("CM81508716")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "жаловался на отсутствие общения на почте (исключить тему контакт информации из общения и не давать обещаний по этой тематике)  ";
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
  if (link.textContent.includes("CM20082154")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "жаловался на не дотсовлерную локацию девушки (не говорить мужчине что уже в его стране)  ";
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
  if (link.textContent.includes("CM99826030")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "жаловался на отказ девушке в выдаче контакт инфо (не давать обещаний по данной теме желательно исключить данную тему из общения) ";
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
  if (link.textContent.includes("CM20082154")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "жаловался на не дотсовлерную локацию девушки (не говорить мужчине что уже в его стране)  ";
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
  if (link.textContent.includes("CM39194146")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "жалвоался на блокировку контакт инфо в чате (не давать обещаний по данной теме желательно исключить данную тему из общения)  ";
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
  if (link.textContent.includes("CM20493015")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "жаловался на долгое прочтение его письма (преоритетно закрывать письма этому мужчине даже в ВС а так же преоритетно слать доп письма)  ";
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
  if (link.textContent.includes("CM18802314")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "жаловался на отказ девушке в выдаче контакт инфо (не давать обещаний по данной теме желательно исключить данную тему из общения)  ";
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
  if (link.textContent.includes("CM19897295")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "жаловался на отказ девушки в выдачи контакт инфо (не давать обещаний касаемо контакт инфо и исключить из общения данную тему)  ";
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
  if (link.textContent.includes("CM63355099")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "жаловался на дороговизну видеочата (если начинает провреку ссылаться на плохой инет и оф камеру)  ";
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
  if (link.textContent.includes("CM41758012")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "жаловался на отсуствие помощи девушке в предаче контакт инфо (аккуратно вести общение на данную тему)  ";
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
  if (link.textContent.includes("CM81508716")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "жаловался на отсутствие общения на почте (исключить тему контакт информации из общения и не давать обещаний по этой тематике)  ";
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
  if (link.textContent.includes("CM26197957")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "жаловался на отсуствие помощи девушке в предаче контакт инфо (аккуратно вести общение на данную тему)  ";
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
  newElement.innerHTML = "жаловался на блур в фото при предаче инфы (аккуратно вести общение на эту тему)  ";
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
  if (link.textContent.includes("CM33405912")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "жаловался на то что женщина врет о геолокации (не говорить мужчине что уже в его стране)  ";
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
  if (link.textContent.includes("CM48493638")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "проверяет сплиты и пишет жалобы  ";
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
  if (link.textContent.includes("CM87989288")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "жалуется на сайт о цензуре  ";
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
  if (link.textContent.includes("CM81508716")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "жалуется если не отвечать быстро на почту и так же обман в приезде  к нему  ";
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
  if (link.textContent.includes("CM32616616")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "жаловался на приезд и обман девушки   ";
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
  if (link.textContent.includes("CM33578280")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "жалуется если не хочешь давать почту ему    ";
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
  if (link.textContent.includes("CM55469547")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "жалуется что девушки не настоящие   ";
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
  if (link.textContent.includes("CM27812731")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "желуется на приезд очень ,и так же жалуется если каждый день не писать на почту    ";
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
  if (link.textContent.includes("CM97258761")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "жалоба на сайт так как сайт блокировал передачу контактов   ";
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
  if (link.textContent.includes("CM76464720")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " жалуется если быстро не отвечать на почту ";
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
  if (link.textContent.includes("CM51463210")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " подал жалобу по приезду что обманули его ";
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
  if (link.textContent.includes("CM63038618")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " жалуется если не отвечать на почту быстро ";
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
  if (link.textContent.includes("CM42339903")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " Complaint:Victor Keith - CM42339903–1.сайт заметил, что девушка связалась с этой мужчиной.потому что у мужчины большие жалобы с некоторыми девушками.поэтому советую девушке прекратить отправлять ему приглашения, или неправильно увлекать его.избегайте рисков, это очень важно, спасибо. 2.мужчина писал сайту, ему недовольно, что купил контакт двух девушек, но девушки вне сайта не отвечали ему.➡️ жалоба уже на сайте, заранее решите и ответите на админке Complaint Resolution Center .  скажите пожалуйста, вне сайта когда девушки связалтсь с мужчиной? лучше отправляйте скриншот. и советую девушке подхотяще отвечать мужчине, спасибо. ";
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
  if (link.textContent.includes("CM87989288")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " Complaint: Terry - CM87989288 мужчина сомневается, что в CamShare разные цветы ногтей девушки. ➡️пусть девушка подхотяще обьяснять и усопокоить мужяины, спасибо.жалоба уже на сайте, заранее решите и ответите на админке Complaint Resolution Center .потому что мужчина не требудется 90 дней, поэтому пока не сможет встречаться с девушкой. ";
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
  if (link.textContent.includes("CM93489654")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " Complaint: Tom - CM93489654➡️ Мужчине недовольно, что девушка не получала его письмо. Мужчина сказал, что он будет связаться с полицей.➡️Сайт заметил, что В ближайшие дни девушка неправильно увлекала мужчины в письмах и чатах. Мужчина уже сомневается о девушке. ";
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
  if (link.textContent.includes("CM70842485")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " Emil - CM70842485 - сайт заметил, что девушка похоже отказывала дать мужчине емайл. и мужчина похоже блокнировал этой девушки.скажите пожалуйста, у них сейчас какую ситуацию? и заранее откроите емайл девушки, спасибо. ";
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
  newElement.innerHTML = " Randy - CM11510477 – мужчина ОЧЕНЬ сердится. он хочет вернуть все кредиты. мужчине недовольно, что в письме сайт блокировал название.сайт заметил, что девушка умышленно писала цифры, чтобы ввести мужчины в заблуждение, заставив их думать, что это название больницы.пожалуйста, пусть девушка СРАЗУ прекратить неправильно направлять мужчины обменять контакт или встречаться в реальном. ";
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
  if (link.textContent.includes("CM38371990")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " Joseph - CM38371990 – сейчас мужчина жалуется, что неуспешно встречаться с девушкой. РИСК большой.и девушка сейчас продолжается неправильно направляет мужчины. (см. скриншот) пожалуйста, пусть девушка СКОРО прекратить неправильно направлять. Прекратите сказать мужчине, что она будет встречаться в реальном.  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "⚡️⚡️⚡️";
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
  if (link.textContent.includes("CM81508716")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " Anthony - CM81508716–1. мужчина не хочет получать звонок от девушки. пусть девушка прекратить позвонить ему, спасибо..2. мужчина сейчас блокирует девушки на сайте. если в будущем они снова связаться, тогда советую девушке хорошо отвечать и успокоить его.3. пусть девушка прекратить увлекать мужчины вне сайта встречаться. спасибо.1. мужчина сейчас блокирует девушки на сайте. если в будущем они снова связаться, тогда советую девушке хорошо отвечать и успокоить его.2. скажите пожалуйста, девушка будет ли встерачаться с мужчиной или дать контакты?3. девушка на сайте сказала мужчине, что ее сестра отвечала ему на телефон, и в чате. скажите пожалуйста, это правда?  ";
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
  if (link.textContent.includes("CM27209072")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " JOHN - CM27209072–сейчас мужчина активно разгадывает шарады, хочет так обменять контакт с девушкой.советую девушке точно сказать мужчине, хочет ли она обменять контакт?советую девушке прекратить неправильно направлять, избегайте рисков. спасибо.  ";
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
  if (link.textContent.includes("CM87338706")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " Miles - CM87338706 – мужчина писал сайту, что деввушка не знает как открывать контакт.сайт заметил, что девушка в письме писала мужчине, что она пока не хочет обменять контакт. потому что мужчина ещё не читал письмо девшуки. поэтому советую девушке в чате сказать мужчине, что она пока не хочет обменять контакт.  ";
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
  if (link.textContent.includes("CM54376141")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " CM54376141 - девушка утверждала о работе в другой стране, мужчина не верит  ";
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
  if (link.textContent.includes("CM26415845")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " CM26415845 - заинтересованная женщина не та, за кого себя выдает  ";
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
  if (link.textContent.includes("CM45681449")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " CM45681449 - девушка против покупки ее контактной информации  ";
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
  newElement.innerHTML = " CM84233482 - девушка упоминала о встрече, думает что врёт  ";
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
  if (link.textContent.includes("CM35494946")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " CM35494946 - жалоба плохом качестве связи по телефону  ";
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
  if (link.textContent.includes("CM21926101")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " CM21926101- хочет получить контакт девушки  ";
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
  if (link.textContent.includes("CM46544906")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " CM46544906 - просили подарок, мужчина думает что девушка использует его   ";
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
  if (link.textContent.includes("CM27209072")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " CM27209072 - хочет получить контакты девушки   ";
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
  if (link.textContent.includes("CM54022088")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " CM54022088 - срочно просил доставку подарка   ";
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
  if (link.textContent.includes("CM43913619")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " CM43913619 - хочет быструю встречу и потом жалуется   ";
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
  newElement.innerHTML = " CM94213057 - жалуется на порно вызова ";
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
  if (link.textContent.includes("CM31693509")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " CM31693509 - особий статус,листи йому можуть перевірятись – мужчина раньше жаловался о сайте. он возможно ещё раз сомневается о сайте.советую девушке прекратить неправильно направлять мужчины в сайт Facebook ";
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
  if (link.textContent.includes("CM87734803")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "  Перевіря камеру  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "‼️Поганець❌";
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