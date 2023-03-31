// navigation toggle
const mainNav = document.querySelector(".main-nav");
const navToggle = document.querySelector(".nav-toggle");
// drop
const drops = document.querySelectorAll(".drop");
const dropContent1 = document.querySelector(".drop-content1");
const dropContent2 = document.querySelector(".drop-content2");
const dropContent3 = document.querySelector(".drop-content3");
const dropContent4 = document.querySelector(".drop-content4");
const dropContent5 = document.querySelector(".drop-content5");
const dropContent6 = document.querySelector(".drop-content6");
const dropContent7 = document.querySelector(".drop-content7");
const dropContent8 = document.querySelector(".drop-content8");

const icon1 = document.querySelector("#icon1");
const icon2 = document.querySelector("#icon2");
const icon3 = document.querySelector("#icon3");
const icon4 = document.querySelector("#icon4");
const icon5 = document.querySelector("#icon5");
const icon6 = document.querySelector("#icon6");
const icon7 = document.querySelector("#icon7");
const icon8 = document.querySelector("#icon8");
// dropdown
const dropdown = document.querySelectorAll(".dropdown");
const back = document.querySelectorAll(".back");
const sideContent1 = document.querySelector(".side-content1");
const sideContent2 = document.querySelector(".side-content2");
const sideContent3 = document.querySelector(".side-content3");
const sideContent4 = document.querySelector(".side-content4");
// scrool headers
const banner = document.querySelector(".banner");
const navBar = document.querySelector(".navbar");

// -----Navigations Toggle
navToggle.addEventListener("click", function (params) {
  mainNav.classList.toggle("show-main-nav");
  navToggle.classList.toggle("nav-toggle-active");
  sideContent1.style.left = "100%";
  sideContent2.style.left = "100%";
  sideContent3.style.left = "100%";
  sideContent4.style.left = "100%";
  console.log(sideContent1.style.left)
});

// Drop Toggle
drops.forEach(function (span) {
  span.addEventListener("click", function (e) {
    const content = e.currentTarget.classList;
    if (content.contains("first-content")) {
      dropContent1.classList.toggle("show-drop-content");
      icon1.classList.toggle("active-icon");
    } else if (content.contains("second-content")) {
      dropContent2.classList.toggle("show-drop-content");
      icon2.classList.toggle("active-icon");
    } else if (content.contains("third-content")) {
      dropContent3.classList.toggle("show-drop-content");
      icon3.classList.toggle("active-icon");
    } else if (content.contains("fourth-content")) {
      dropContent4.classList.toggle("show-drop-content");
      icon4.classList.toggle("active-icon");
    } else if (content.contains("fifth-content")) {
      dropContent5.classList.toggle("show-drop-content");
      icon5.classList.toggle("active-icon");
    } else if (content.contains("sixth-content")) {
      dropContent6.classList.toggle("show-drop-content");
      icon6.classList.toggle("active-icon");
    } else if (content.contains("seventh-content")) {
      dropContent7.classList.toggle("show-drop-content");
      icon7.classList.toggle("active-icon");
    } else if (content.contains("eighth-content")) {
      dropContent8.classList.toggle("show-drop-content");
      icon8.classList.toggle("active-icon");
    }
  });
});

// Dropdown Toggle
dropdown.forEach(function (start) {
  start.addEventListener("click", function (e) {
    const front = e.currentTarget.classList
    if (front.contains("first-dropdown")) {
      sideContent1.classList.toggle("show-side-content")
      console.log( "add by" , sideContent1.style.left)
      back[0].classList.toggle("show-back")
    }
    if (front.contains("second-dropdown")) {
      sideContent2.classList.toggle("show-side-content")
      console.log( "add by" , sideContent2.style.left)
      back[1].classList.toggle("show-back")
    }
    if (front.contains("third-dropdown")) {
      sideContent3.classList.toggle("show-side-content")
      console.log( "add by" , sideContent3.style.left)
      back[2].classList.toggle("show-back")
    }
    if (front.contains("fourth-dropdown")) {
      sideContent4.classList.toggle("show-side-content")
      console.log( "add by" , sideContent4.style.left)
      back[3].classList.toggle("show-back")
    }
  })
});

// Scroll Headers
window.addEventListener("scroll", function (params) {
  if (document.documentElement.scrollTop <= 820) {
    mainNav.classList.add("green-nav-background");
  } else {
    mainNav.classList.remove("green-nav-background");
  }

  if (document.documentElement.scrollTop >= 820) {
    navBar.classList.add("white-nav-background");
    mainNav.classList.add("white-nav-background");
  } else {
    navBar.classList.remove("white-nav-background");
    mainNav.classList.remove("white-nav-background");
  }

  if (document.documentElement.scrollTop >= 3500) {
    navBar.classList.add("blue-nav-background");
    mainNav.classList.add("blue-nav-background");
  } else {
    navBar.classList.remove("blue-nav-background");
    mainNav.classList.remove("blue-nav-background");
  }

  if (document.documentElement.scrollTop >= 4400) {
    navBar.classList.remove("blue-nav-background");
    mainNav.classList.remove("blue-nav-background");
  }

  if (document.documentElement.scrollTop >= 5010) {
    navBar.classList.add("off-white-nav-background");
    mainNav.classList.add("off-white-nav-background");
  } else {
    navBar.classList.remove("off-white-nav-background");
    mainNav.classList.remove("off-white-nav-background");
  }

  if (document.documentElement.scrollTop >= 5930) {
    navBar.classList.add("red-nav-background");
    mainNav.classList.add("red-nav-background");
  } else {
    navBar.classList.remove("red-nav-background");
    mainNav.classList.remove("red-nav-background");
  }
});
