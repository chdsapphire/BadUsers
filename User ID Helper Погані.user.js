// ==UserScript==
// @name User ID Helper BadUsers
// @namespace http://example.com/
// @version 1.061
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
      button.innerHTML = "BadUser";
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
      newElement.innerHTML = "Скарга: Сказали нема цифр в подарунці";
      newElement.style.display = "none";
  
      let button = document.createElement("button");
      button.innerHTML = "BadUser";
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
      button.innerHTML = "BadUser";
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
      button.innerHTML = "BadUser";
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
      button.innerHTML = "BadUser";
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
      button.innerHTML = "BadUser";
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
      button.innerHTML = "BadUser";
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
      button.innerHTML = "BadUser";
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
      button.innerHTML = "BadUser";
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
      button.innerHTML = "BadUser";
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
      button.innerHTML = "BadUser";
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
      button.innerHTML = "BadUser";
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