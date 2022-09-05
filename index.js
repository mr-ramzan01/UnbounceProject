import { footer } from "./components/footer.js";
import { navbar } from "./components/navbar.js"

navbar();
footer();

document.getElementById("n-searchLogo").addEventListener("click",() => {
    document.getElementById("n-input").style.display = "block"
})

document.getElementById("page").addEventListener("click", () => {
    document.getElementById("n-input").style.display = "none"
})

window.onscroll = function() {
    let navbar = document.querySelector(".navbar");
    let image = document.getElementById("n-logo");
    let text = document.querySelector(".n-products a");
    let text1 = document.querySelector(".n-solutions a");
    let text2 = document.querySelector(".n-pricing a");
    let text3 = document.querySelector(".n-contact a");
    let text4 = document.querySelector(".n-learn a");
    let login = document.querySelector(".n-login > div");
    let loginText = document.querySelector(".n-login > div a");
    let menuDiv = document.querySelectorAll(".menudiv");
    let free = document.querySelector(".n-freeTrial > div");
    let freeText = document.querySelector(".n-freeTrial > div a");
    if(document.documentElement.scrollTop > 0) {
        login.addEventListener("mouseover",() => {
            login.style.backgroundColor = "#0029cc";
            loginText.style.color = "#fff"
            login.style.border = "2px solid #0029cc"
        })
        login.addEventListener("mouseout",() => {
            login.style.backgroundColor = "#fff";
            login.style.border = "2px solid #0033ff"
            loginText.style.color = "#0033ff"
        })
        free.addEventListener("mouseover",() => {
            free.style.backgroundColor = "#fff"
            free.style.border = "2px solid #0029cc"
            freeText.style.color = "#0033ff"
        })
        free.addEventListener("mouseout",() => {
            free.style.backgroundColor = "#0033ff"
            free.style.border = "2px solid #0033ff"
            freeText.style.color = "#fff"
        })
        for(let i=0; i<menuDiv.length; i++) {
            menuDiv[i].style.backgroundColor = "#000000"
        }
        navbar.style.backgroundColor = "#fff"
        navbar.style.color = "black"
        navbar.style.height = "87px"
        image.src = "https://unbounce.com/wp-content/themes/unbounce2019/assets/img/unbounce-icon-dark.svg?v=1"
        text.style.color = "black"
        text1.style.color = "black"
        text2.style.color = "black"
        text3.style.color = "black"
        text4.style.color = "black"
        login.style.border = "2px solid #0033ff"
        login.style.backgroundColor = "#fff"
        loginText.style.color = "#0033ff"
        free.style.backgroundColor = "#0033ff"
        free.style.border = "2px solid #0033ff"
        freeText.style.color = "#fff"
    }
    else {
        login.addEventListener("mouseover",() => {
            login.style.backgroundColor = "gray";
            login.style.border = "2px solid gray"
            loginText.style.color = "#fff"
        })
        login.addEventListener("mouseout",() => {
            login.style.backgroundColor = "#303030";
            loginText.style.color = "#fff"
            login.border = "2px solid #fff"
            login.style.border = "2px solid #fff"
        })
        free.addEventListener("mouseover",() => {
            free.style.backgroundColor = "gray"
            free.style.border = "2px solid gray"
            freeText.style.color = "#fff"
        })
        free.addEventListener("mouseout",() => {
            free.style.backgroundColor = "#fff"
            free.style.border = "2px solid #fff"
            freeText.style.color = "black"
        })
        for(let i=0; i<menuDiv.length; i++) {
            menuDiv[i].style.backgroundColor = "#fff"
        }
        login.style.backgroundColor = "#303030"
        navbar.style.backgroundColor = "#303030"
        navbar.style.color = "#fff"
        navbar.style.height = "108px"
        image.src = "https://unbounce.com/wp-content/themes/unbounce2019/assets/img/unbounce-icon.svg?v=1"
        text.style.color = "#fff"
        text1.style.color = "#fff"
        text2.style.color = "#fff"
        text3.style.color = "#fff"
        text4.style.color = "#fff"
        login.style.border = "2px solid #fff"
        loginText.style.color = "#fff"
        free.style.backgroundColor = "#fff"
        free.style.border = "2px solid #fff"
        freeText.style.color = "black"
    }
}