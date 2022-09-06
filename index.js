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
let products_background = document.querySelector(".products_background");
let solutions_background = document.querySelector(".solutions_background");
let learn_background = document.querySelector(".learn_background");

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
    let n_input = document.querySelector("#n-input");
    let menudiv_options = document.querySelector("#menudiv_options");
    let s_s_free = document.querySelector(".s_s_free button");
    let s_s_login = document.querySelector(".s_s_login button");
    if(document.documentElement.scrollTop > 0) {
        s_s_free.addEventListener("mouseover",() => {
            s_s_free.style.backgroundColor = "#fff";
            s_s_free.style.color = "#0033ff"
            s_s_free.style.border = "2px solid #0029cc"
        })
        s_s_free.addEventListener("mouseout",() => {
            s_s_free.style.backgroundColor = "#0033ff";
            s_s_free.style.border = "2px solid #0033ff"
            s_s_free.style.color = "#fff"
        })
        s_s_login.addEventListener("mouseover",() => {
            s_s_login.style.backgroundColor = "#0029cc";
            s_s_login.style.color = "#fff"
            s_s_login.style.border = "2px solid #0029cc"
        })
        s_s_login.addEventListener("mouseout",() => {
            s_s_login.style.backgroundColor = "#fff";
            s_s_login.style.border = "2px solid #0033ff"
            s_s_login.style.color = "#0033ff"
        })
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
        s_s_login.style.backgroundColor = "#fff";
        s_s_login.style.color = "#0033ff"
        s_s_login.style.border = "2px solid #0033ff"
        s_s_free.style.backgroundColor = "#0029cc";
        s_s_free.style.color = "#fff"
        s_s_free.style.border = "2px solid #0029cc"
        n_input.style.backgroundColor = "#fff"
        n_input.style.color = "#303030"
        // n_input_placeholder.style.color = "#303030"
        menudiv_options.style.top = "87px"
        learn_background.style.top = "87px"
        products_background.style.top = "87px"
        solutions_background.style.top = "87px"
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
        s_s_free.addEventListener("mouseover",() => {
            s_s_free.style.backgroundColor = "rgb(90, 90, 90)";
            s_s_free.style.color = "#fff"
            s_s_free.style.border = "2px solid rgb(90, 90, 90)"
        })
        s_s_free.addEventListener("mouseout",() => {
            s_s_free.style.backgroundColor = "#303030";
            s_s_free.style.border = "2px solid #303030"
            s_s_free.style.color = "#fff"
        })
        s_s_login.addEventListener("mouseover",() => {
            s_s_login.style.backgroundColor = "#303030";
            s_s_login.style.color = "#fff"
            s_s_login.style.border = "2px solid #303030"
        })
        s_s_login.addEventListener("mouseout",() => {
            s_s_login.style.backgroundColor = "#fff";
            s_s_login.style.border = "2px solid #303030"
            s_s_login.style.color = "#303030"
        })
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
        s_s_login.style.backgroundColor = "#fff";
        s_s_login.style.color = "#303030"
        s_s_login.style.border = "2px solid #303030"
        s_s_free.style.backgroundColor = "#303030";
        s_s_free.style.border = "2px solid #303030"
        s_s_free.style.color = "#fff"
        n_input.style.backgroundColor = "#303030"
        n_input.style.color = "#fff"
        menudiv_options.style.top = "108px"
        learn_background.style.top = "108px"
        products_background.style.top = "108px"
        solutions_background.style.top = "108px"
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



document.querySelector(".n-products_click").addEventListener("click",() => {
    event.preventDefault();
    if(true) {
        solutions_background.style.display = "none"
        learn_background.style.display = "none"
    }
    if(products_background.style.display == "block") {
        products_background.style.display = "none"
    }
    else {
        products_background.style.display = "block"
    }
})
document.querySelector(".n-solutions_click").addEventListener("click",() => {
    event.preventDefault();
    if(true) {
        products_background.style.display = "none"
        learn_background.style.display = "none"
    }
    if(solutions_background.style.display == "block") {
        solutions_background.style.display = "none"
    }
    else {
        solutions_background.style.display = "block"
    }
})
document.querySelector(".n-learn_click").addEventListener("click",() => {
    event.preventDefault();
    if(true) {
        solutions_background.style.display = "none"
        products_background.style.display = "none"
    }
    if(learn_background.style.display == "block") {
        learn_background.style.display = "none"
    }
    else {
        learn_background.style.display = "block"
    }
})



function crossFn() {
    if(products_background.style.display=="block") {
        products_background.style.display = "none";
    }
    else if( solutions_background.style.display=="block") {
        solutions_background.style.display = "none";
    }
    else if(learn_background.style.display=="block") {
        learn_background.style.display = "none";
    }
}

document.getElementById("cross1").addEventListener("click", crossFn);
document.getElementById("cross2").addEventListener("click", crossFn);
document.getElementById("cross3").addEventListener("click", crossFn);
document.getElementById("n-menu_click").addEventListener("click",() => {
    let menudiv_options = document.getElementById("menudiv_options")
    if(menudiv_options.style.display == "block") {
        menudiv_options.style.display = "none"
    }
    else {
        menudiv_options.style.display = "block"
        document.querySelector(".s_s_showAll ").style.display = "block"
        document.querySelector(".s_s_showing_learn ").style.display = "none"
        document.querySelector(".s_s_showing_products ").style.display = "none"
        document.querySelector(".s_s_showing_solutions ").style.display = "none"
    }
})




document.getElementById("s_s_products_click").addEventListener("click",() => {
    document.querySelector(".s_s_showing_products ").style.display = "block"
    document.querySelector(".s_s_showAll ").style.display = "none"
   
})
document.getElementById("s_s_learn_click").addEventListener("click",() => {
    document.querySelector(".s_s_showing_learn ").style.display = "block"
    document.querySelector(".s_s_showAll ").style.display = "none"
   
})
document.getElementById("s_s_solutions_click").addEventListener("click",() => {
    document.querySelector(".s_s_showing_solutions ").style.display = "block"
    document.querySelector(".s_s_showAll ").style.display = "none"
   
})

let backArrow = document.querySelectorAll(".back_arrow_click");
for(let i=0; i<backArrow.length; i++) {
    backArrow[i].addEventListener("click",() => {
        console.log(34);
        document.querySelector(".s_s_showAll ").style.display = "block"
        document.querySelector(".s_s_showing_learn ").style.display = "none"
        document.querySelector(".s_s_showing_products ").style.display = "none"
        document.querySelector(".s_s_showing_solutions ").style.display = "none"
    })
}