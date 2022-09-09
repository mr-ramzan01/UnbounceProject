document.getElementById("classbtn").addEventListener('click', async() => {
    event.preventDefault();
    let email = document.getElementById("classicemail").value;
    let password = document.getElementById("classicpassword").value;

    console.log(email,password);
    try {
        let data = await fetch(`https://fake-server-app-by-me.herokuapp.com/signUpUsers`);
        let data2 = await data.json();
        let flag = false;
        console.log(data2,flag);
        data2.map((el) => {
            if(el.email===email && el.password===password) {
                localStorage.setItem("classicLoginEmail",(email));
                localStorage.setItem("classicLoginPassword",(password));
                flag = true;
            }
        })
        if(flag) {
            alert("Successfully logged in");
            location.href = "../index.html";
        }
        else {
            alert("Invalid email or password");
        }

    } catch (error) {
        console.log(error)
    }
})

document.getElementById("goToPricing").addEventListener("click", () => {
    location.href="../pricing.html";
})