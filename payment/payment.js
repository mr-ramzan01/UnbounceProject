document.getElementById("submit_signup_btn").addEventListener("click",() => {
    alert("SignUp Successfully")
    let signup_user_details = {
        first_name: document.getElementById("first_name").value,
        last_name: document.getElementById("last_name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    } 
    console.log(signup_user_details);
    fetch('https://fake-server-app-by-me.herokuapp.com/signUpUsers', {
        method:"POST",
        body: JSON.stringify(signup_user_details),
        headers: {
            "Content-Type": "application/json"
        }
    })
    location.href="./payment2.html"
})
document.getElementById("submit_signup_btn2").addEventListener("click",() => {
    alert("SignUp Successfully");
    let signup_user_details = {
        first_name: document.getElementById("first_name").value,
        last_name: document.getElementById("last_name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    } 
    console.log(signup_user_details);
    fetch('https://fake-server-app-by-me.herokuapp.com/signUpUsers', {
        method:"POST",
        body: JSON.stringify(signup_user_details),
        headers: {
            "Content-Type": "application/json"
        }
    })
    location.href="./payment2.html"
})

localStorage.setItem("plan",(document.getElementById("sign_up_plan").innerText))
localStorage.setItem("price",(document.getElementById("signup_total_due").innerText))
document.getElementById("select_plan").addEventListener("click", () => {
    let plan = document.getElementById("select_plan").value;
    document.getElementById("sign_up_plan").innerText = plan;
    let price;
    if(plan=="Launch account ($90)") {
        price = 90;
    }
    else if(plan=="Launch account ($972)") {
        price = 972;
    }
    else if(plan=="Optimize account ($135)") {
        price = 135;
    }
    else if(plan=="Optimize account ($1,458)") {
        price = 1458;
    }
    else if(plan=="Accelerate account ($225)") {
        price = 225;
    }
    else if(plan=="Accelerate account ($2,430)") {
        price = 2430;
    }
    else if(plan=="Scale account ($300)") {
        price = 300;
    }
    else if(plan=="Scale account ($3,240)") {
        price = 3240;
    }
    localStorage.setItem("plan",(plan))
    localStorage.setItem("price",(price))
    document.getElementById("signup_total_due").innerText = `$${price}`
})

document.getElementById("select_plan2").addEventListener("click", () => {
    let plan = document.getElementById("select_plan2").value;
    document.getElementById("sign_up_plan_ss").innerText = plan;
    let price;
    if(plan=="Launch account ($90)") {
        price = 90;
    }
    else if(plan=="Launch account ($972)") {
        price = 972;
    }
    else if(plan=="Optimize account ($135)") {
        price = 135;
    }
    else if(plan=="Optimize account ($1,458)") {
        price = 458;
    }
    else if(plan=="Accelerate account ($225)") {
        price = 225;
    }
    else if(plan=="Accelerate account ($2,430)") {
        price = 2430;
    }
    else if(plan=="Scale account ($300)") {
        price = 300;
    }
    else if(plan=="Scale account ($3,240)") {
        price = 3240;
    }
    localStorage.setItem("plan",(plan))
    localStorage.setItem("price",(price))
    document.getElementById("signup_total_due_ss").innerText = `$${price}`
})