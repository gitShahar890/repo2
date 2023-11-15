let icon = document.getElementById("list-icon");

let loginBtn = document.getElementById("loginBtn");
let signupBtn = document.getElementById("signupBtn");
let background = document.getElementById("btn-background");

let login = document.getElementById("login");
let register = document.getElementById("register");

let EmailInp1 = document.getElementById("Ereq1");
let PassInp1 = document.getElementById("Preq1");
let EmailInp2 = document.getElementById("Ereq2");
let PassInp2 = document.getElementById("Preq2");
let UNInp = document.getElementById("UNreq");

let container = document.getElementById("container");

let submit1 = document.getElementById("submit1");
let submit2 = document.getElementById("submit2");
let icon_lock = document.getElementById("lock-icon");
let aic1 = document.getElementById("aic1");
let aic2 = document.getElementById("aic2");
let aic3 = document.getElementById("aic3");
let lock1 = document.getElementById("lock1");
let lock2 = document.getElementById("lock2");
let lock3 = document.getElementById("lock3");
let logo = document.getElementById("logo");

let H1AU = document.getElementById("H1AU");
let PAU = document.getElementById("PAU");
let body = document.getElementById("body");


let repContainer = document.getElementById("rep-container")
let rep1 = document.getElementById("rep1");
let rep2 = document.getElementById("rep2");
let rep3 = document.getElementById("rep3");
let rep4 = document.getElementById("rep4");


let slider = document.getElementById("slider");
let slideContainer = document.getElementById("slide-container");

let aic1tf = false, aic2tf = false, aic3tf = false;
icon.onclick = function () {
    container.classList.add("container");
    container.classList.remove("container-start");
    icon.style.width = "0";
};


signupBtn.onclick = function () {
    background.style.marginLeft = "100px";
    register.style.left = "unset";
    login.style.left = "-130vw";
    register.style.opacity = "100";
    container.classList.add("reg");
};
loginBtn.onclick = function () {
    background.style.marginLeft = "-100px";
    register.style.left = "-130vw";
    login.style.left = "unset";
    login.style.opacity = "100%";
    container.classList.remove("reg");
};
submit1.onclick = submit2.onclick = function () {
    if (EmailInp1.value !== "" && PassInp1.value !== "") {
        container.classList.add("after");
        lock1.classList.add("after2");
        lock2.classList.add("after2");
        lock3.classList.add("after2");

        aic1.classList.add("aic-after");
        aic2.classList.add("aic-after");
        aic3.classList.add("aic-after");

        logo.style.opacity = "100%";
        logo.style.cursor = "pointer";
    }
    else {
        alert("please enter your email and your password")
    }
};
submit2.onclick = function () {
    if (UNInp.value !== "" && EmailInp2.value !== "" && PassInp2.value !== "") {
        container.classList.add("after");
        lock1.classList.add("after2");
        lock2.classList.add("after2");
        lock3.classList.add("after2");

        aic1.classList.add("aic-after");
        aic2.classList.add("aic-after");
        aic3.classList.add("aic-after");

        logo.style.opacity = "100%";
        logo.style.cursor = "pointer";
    }
    else {
        alert("please enter user name ,email and your password")
    }
};

logo.onclick = function () {
    if (aic2tf || aic3tf) {
        setTimeout(() => {
            body.style.backdropFilter = "blur(0px)";
        }, 2900);
    }
    else if (aic1tf) {
        setTimeout(() => {
            body.style.backdropFilter = "blur(0px)";
        }, 1500);
    }
    else {
        body.style.backdropFilter = "blur(0px)";
    }

    H1AU.classList.remove("after4");
    PAU.classList.remove("after3");
    setTimeout(() => {
        rep4.classList.remove("after6");
    }, 500);
    setTimeout(() => {
        rep3.classList.remove("after6");
    }, 1000);
    setTimeout(() => {
        rep2.classList.remove("after6");
    }, 1500);
    setTimeout(() => {
        rep1.classList.remove("after6");
    }, 2000);
    setTimeout(() => {
        repContainer.classList.remove("after5");
    }, 2200)

    setTimeout(() => {
        slider.classList.remove("after7");
    }, 3000);
    setTimeout(() => {
        slideContainer.classList.remove("after8");
    }, 3500);

    aic1tf = false;
    aic2tf = false;
    aic3tf = false;
};
aic1.onclick = function () {
    body.style.backdropFilter = "blur(5px)";

    if (aic2tf || aic3tf) {
        setTimeout(() => {
            H1AU.classList.add("after4");
            PAU.classList.add("after3");
        }, 2900);
    }
    else {
        H1AU.classList.add("after4");
        PAU.classList.add("after3");
    }

    setTimeout(() => {
        rep4.classList.remove("after6");
    }, 500);
    setTimeout(() => {
        rep3.classList.remove("after6");
    }, 1000);
    setTimeout(() => {
        rep2.classList.remove("after6");
    }, 1500);
    setTimeout(() => {
        rep1.classList.remove("after6");
    }, 2000);
    setTimeout(() => {
        repContainer.classList.remove("after5");
    }, 2200)

    setTimeout(() => {
        slider.classList.remove("after7");
    }, 3000);
    setTimeout(() => {
        slideContainer.classList.remove("after8");
    }, 3500);

    aic1tf = true;
    aic2tf = false;
    aic3tf = false;
};
aic2.onclick = function () {
    body.style.backdropFilter = "blur(5px)";

    H1AU.classList.remove("after4");
    PAU.classList.remove("after3");

    repContainer.classList.add("after5");
    setTimeout(() => {
        rep1.classList.add("after6");
    }, 1000);
    setTimeout(() => {
        rep2.classList.add("after6");
    }, 1500);
    setTimeout(() => {
        rep3.classList.add("after6");
    }, 2000);
    setTimeout(() => {
        rep4.classList.add("after6");
    }, 2500);


    setTimeout(() => {
        slider.classList.add("after7");
    }, 3000);
    setTimeout(() => {
        slideContainer.classList.add("after8");
    }, 3500);

    aic1tf = false;
    aic2tf = true;
    aic3tf = false;
};
aic3.onclick = function () {
    body.style.backdropFilter = "blur(5px)";
    H1AU.classList.remove("after4");
    PAU.classList.remove("after3");


    setTimeout(() => {
        rep4.classList.remove("after6");
    }, 500);
    setTimeout(() => {
        rep3.classList.remove("after6");
    }, 1000);
    setTimeout(() => {
        rep2.classList.remove("after6");
    }, 1500);
    setTimeout(() => {
        rep1.classList.remove("after6");
    }, 2000);
    setTimeout(() => {
        repContainer.classList.remove("after5");
    }, 2200)

    setTimeout(() => {
        slider.classList.remove("after7");
    }, 3000);
    setTimeout(() => {
        slideContainer.classList.remove("after8");
    }, 3500);

    aic1tf = false;
    aic2tf = false;
    aic3tf = true;
};