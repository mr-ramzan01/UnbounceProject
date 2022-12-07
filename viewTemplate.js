import getData from "./utility folder/getData.js";

let Template_Id = JSON.parse(localStorage.getItem("templateId"));

let backbtn = document.getElementById("BackToTemplate");
backbtn.addEventListener("click", function () {
  window.open("./template.html", "_self");
});

let displayContent = (data, content) => {
  let TemplateDetails = document.getElementById("TemplateDetails");

  TemplateDetails.innerHTML = `
  <div id="temp_desc">
        <div id="h1Temp">
         <h1>${data.Template_title}</h1>
        </div>
        <div>
            ${data.Template_description}
        </div>
    </div>
    <div id="TemplateCategory">
        <h1 id="h1cat">Category</h1>
        <div>
        ${data.category} | ${data.type}
        </div>
    </div>    
  `;

  let frame = document.getElementById("frame");
  if (data.category == "Popups" || data.category == "Sticky Bars") {
    frame.style.height = "700px";
  }
  frame.src = data.iframe_src;
};

let content = document.getElementById("content");
let mainfn = async () => {
  try {
    let data = await getData(`https://dackend-data.onrender.com/Templates/${Template_Id}`);
    displayContent(data, content);
  } catch (error) {
    console.log(error);
  }
};

mainfn();

let makeityoursbtn = document.getElementById("makeityours");
makeityoursbtn.addEventListener("click", async() => {
  let email = localStorage.getItem("classicLoginEmail");
  let password = localStorage.getItem("classicLoginPassword");

  console.log(email,password);
  try {
      let data = await fetch(`https://dackend-data.onrender.com/signUpUsers`);
      let data2 = await data.json();
      let flag = false;
      console.log(data2,flag);
      data2.map((el) => {
          if(el.email===email && el.password===password) {
              flag = true;
          }
      })
      if(flag) {
          alert("Now you can build your pages with this layout");
          location.href = "./index.html";
      }
      else {
          alert("You are not correct user");
          location.href = "./pricing.html"
      }

  } catch (error) {
      console.log(error)
  }
});
