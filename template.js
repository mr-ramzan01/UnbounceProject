import getData from "./utility folder/getData.js";



const templateContainer = document.getElementById("Template_Area");

const displayTemplates = (data,parentNode)=>{
parentNode.innerHTML = null;
data.map((Template)=>{
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
<p id="viewPageLink"><i class="fa-sharp fa-solid fa-arrow-right"></i> &nbsp; &nbsp;  VIEW THIS TEMPLATE</p>
`


parentNode.append(childDiv);
})
}




const getTemplate = async()=>{
try {
    let data =  await getData(`http://localhost:8001/Templates`);
    console.log(data);
    displayTemplates(data,templateContainer);
} catch (error) {
    console.log(error);
}



}




getTemplate();



let selectTag = document.getElementById("templateSelect");
selectTag.addEventListener("change", async()=>{
let val  =document.getElementById("templateSelect").value;
if(val==""){
    getTemplate();
}else{
try {
    let res = await fetch(`http://localhost:8001/Templates?category=${val}`);
    let data = await res.json();
    displayTemplates(data,templateContainer);
} catch (error) {
    console.log(error)
}
}

})












