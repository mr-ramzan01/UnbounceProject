import { footer } from "./components/footer.js";
import { navbar } from "./components/navbar.js";
import getData from "./utility folder/getData.js";
navbar();
footer();

const templateContainer = document.getElementById("Template_Area");

const displayTemplates = (data, parentNode) => {
  // window.scrollTo(0, 1000);
  parentNode.innerHTML = null;
  data.map((Template) => {
    let childDiv = document.createElement("div");
    childDiv.innerHTML = `
<div id="img_div">
<img id="Temp_img" src="${Template.template_image}"></img>
<div class="middle_Temp">
    <div class="Temp_text">LANDING PAGE TEMPLATE</div>
</div>
</div>
<h6>${Template.Template_title}</h6>
<p id="Template_desc">${Template.Template_description}</p>
`;
    let viewPageLink = document.createElement("p");
    viewPageLink.setAttribute("id", "viewPageLink");
    viewPageLink.innerHTML =
      '<i class="fa-sharp fa-solid fa-arrow-right"></i> &nbsp; &nbsp;  VIEW THIS TEMPLATE';
    viewPageLink.addEventListener("click", function () {
      localStorage.setItem("templateId", Template.id);
      window.open("viewTemplate.html", "_self");
    });

    childDiv.appendChild(viewPageLink);

    parentNode.append(childDiv);
  });
};


// {/* <p id="viewPageLink"><i class="fa-sharp fa-solid fa-arrow-right"></i> &nbsp; &nbsp;  VIEW THIS TEMPLATE</p> */}

const getTemplate = async () => {
  try {
    let data = await getData(`https://dackend-data.onrender.com/Templates`);
    //console.log(data);
    displayTemplates(data, templateContainer);
  } catch (error) {
    console.log(error);
  }
};

getTemplate();

let first_li = document.getElementById("li_filter1");
first_li.addEventListener("click", async function () {
  getTemplate();
});
let changingData;
let Second_li = document.getElementById("li_filter2");
Second_li.addEventListener("click", async function () {
  let second = document.getElementById("li_filter2").innerText;
  let data = await getData(
    `https://dackend-data.onrender.com/Templates?category=${second}`
  );
  changingData = data;
  displayTemplates(data, templateContainer);
});

let third_li = document.getElementById("li_filter3");
third_li.addEventListener("click", async function () {
  let third = "landing page";
  let data = await getData(`https://dackend-data.onrender.com/Templates?category=${third}`);
  changingData = data;
  displayTemplates(data, templateContainer);
});
let fourth_li = document.getElementById("li_filter4");
fourth_li.addEventListener("click", async function () {
  let fourth = "Popups";
  let data = await getData(
    `https://dackend-data.onrender.com/Templates?category=${fourth}`
  );
  changingData = data;
  displayTemplates(data, templateContainer);
});
let fifth_li = document.getElementById("li_filter5");
fifth_li.addEventListener("click", async function () {
  let fifth = "Sticky Bars";
  let data = await getData(`https://dackend-data.onrender.com/Templates?category=${fifth}`);
  changingData = data;
  displayTemplates(data, templateContainer);
});

// Javascript for Type Filter

let firsttype_li = document.getElementById("li_typeFilter1");
firsttype_li.addEventListener("click", async function () {
  let first = document.getElementById("li_typeFilter1").innerText;
  if (changingData != undefined) {
    let data = changingData.filter((ele) => {
      return ele.type == "SaaS";
    });
    displayTemplates(data, templateContainer);
    changingData = undefined;
  } else {
    let data = await getData(`https://dackend-data.onrender.com/Templates?type=${first}`);
    displayTemplates(data, templateContainer);
  }
});

let Secondtype_li = document.getElementById("li_typeFilter2");
Secondtype_li.addEventListener("click", async function () {
  let second = "Agency Lead Generation";
  if (changingData != undefined) {
    let data = changingData.filter((ele) => {
      return ele.type == "Agency Lead Generation";
    });
    displayTemplates(data, templateContainer);
    changingData = undefined;
  } else {
    let data = await getData(`https://dackend-data.onrender.com/Templates?type=${second}`);
    displayTemplates(data, templateContainer);
  }
});

let thirdtype_li = document.getElementById("li_typeFilter3");
thirdtype_li.addEventListener("click", async function () {
  let third = "Agency";
  if (changingData != undefined) {
    let data = changingData.filter((ele) => {
      return ele.type == "Agency";
    });
    displayTemplates(data, templateContainer);
    changingData = undefined;
  } else {
    let data = await getData(`https://dackend-data.onrender.com/Templates?type=${third}`);
    displayTemplates(data, templateContainer);
  }
});
let fourthtype_li = document.getElementById("li_typeFilter4");
fourthtype_li.addEventListener("click", async function () {
  let fourth = "Ecommerce";
  if (changingData != undefined) {
    let data = changingData.filter((ele) => {
      return ele.type == "Ecommerce";
    });
    displayTemplates(data, templateContainer);
    changingData = undefined;
  } else {
    let data = await getData(`https://dackend-data.onrender.com/Templates?type=${fourth}`);
    displayTemplates(data, templateContainer);
  }
});
let fifthtype_li = document.getElementById("li_typeFilter5");
fifthtype_li.addEventListener("click", async function () {
  let fifth = "health";
  if (changingData != undefined) {
    let data = changingData.filter((ele) => {
      return ele.type == "health";
    });
    displayTemplates(data, templateContainer);
    changingData = undefined;
    console.log(data);
  } else {
    let data = await getData(`https://dackend-data.onrender.com/Templates?type=${fifth}`);
    displayTemplates(data, templateContainer);
  }
});
let sixthtype_li = document.getElementById("li_typeFilter6");
sixthtype_li.addEventListener("click", async function () {
  let sixth = "Restaurant";
  if (changingData != undefined) {
    let data = changingData.filter((ele) => {
      return ele.type == "Restaurant";
    });
    displayTemplates(data, templateContainer);
    changingData = undefined;
  } else {
    let data = await getData(`https://dackend-data.onrender.com/Templates?type=${sixth}`);
    displayTemplates(data, templateContainer);
  }
});

//Select Tag Filter Related Javascript
let selectTag = document.getElementById("templateSelect");
selectTag.addEventListener("change", async () => {
  let val = document.getElementById("templateSelect").value;
  if (val == "") {
    getTemplate();
  } else {
    try {
      let res = await fetch(`https://dackend-data.onrender.com/Templates?category=${val}`);
      let data = await res.json();
      displayTemplates(data, templateContainer);
    } catch (error) {
      console.log(error);
    }
  }
});

