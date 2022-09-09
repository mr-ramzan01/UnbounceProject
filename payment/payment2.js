let plan = localStorage.getItem("plan")
let price = localStorage.getItem("price")

document.querySelector(".blue_done2").style.backgroundColor = "#0033ff"
document.querySelector(".blue_done1").style.backgroundColor = "#303030"
document.getElementById("sign_up_plan").innerText = plan;
if(price=="$90") {
    document.getElementById("signup_total_due").innerText = price;
    document.getElementById("signup_total_due3").innerText = price;
}
else {
    document.getElementById("signup_total_due").innerText = `$${price}`;
    document.getElementById("signup_total_due3").innerText = `$${price}`;
}
document.getElementById("sign_up_plan3").innerText = plan;
document.getElementById("payment_btn").addEventListener("click",() => {
    document.querySelector(".payment_div1").style.display = "none"
    document.querySelector(".otp_div").style.display = "block"
    
    document.querySelector(".blue_done2").style.backgroundColor = "#303030"
    document.querySelector(".blue_done1").style.backgroundColor = "#303030"
    document.querySelector(".blue_done3").style.backgroundColor = "#0033ff"
})
document.getElementById("payment_btn2").addEventListener("click",() => {
    document.querySelector(".small_screen").style.display = "none"
    document.querySelector(".otp_div").style.display = "block"
    
    document.querySelector(".blue_done2").style.backgroundColor = "#303030"
    document.querySelector(".blue_done1").style.backgroundColor = "#303030"
    document.querySelector(".blue_done3").style.backgroundColor = "#0033ff"
})

document.getElementById("email_confirmation_btn").addEventListener("click",() => {
    alert("Congratulations! You are a member of Unbounce")
    location.href="../index.html"
})