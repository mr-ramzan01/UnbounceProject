import { blogdata } from "./importData.js"

const displayData = async (page) => {
    let display = document.getElementById("display_blog");
    display.innerHTML = null;
    blogdata(page).then((res) => {
        res.map(({url,id,title,body,author,date}) => {
            let div = document.createElement("div");
            let img = document.createElement("img");
            img.src = url;

            let category = document.createElement("p");
            category.innerText = title;

            let heading = document.createElement("h3");
            heading.innerText = body;

            let innerdiv = document.createElement("div");
            let innerdiv1 = document.createElement("div");
            innerdiv1.innerText = `By `
            let span = document.createElement("span");
            span.innerText = author+" ";

            let innerdiv2 = document.createElement("div");
            innerdiv2.innerText = `• ${date}`;

            innerdiv1.append(span);
            innerdiv.append(innerdiv1,innerdiv2);
            div.append(img,category,heading,innerdiv);

            display.append(div);
        })
    })
}
displayData(1);


localStorage.setItem("page",1);
if(+localStorage.getItem("page")===1) {
    document.getElementById("prevbtn").disabled = true;
}
else {
    document.getElementById("prevbtn").disabled = false;
}


document.getElementById("prevbtn").addEventListener("click", () => {
    let newpage = +localStorage.getItem("page")-1;
    localStorage.setItem("page", newpage);
    changeBtn();
})
document.getElementById("nextbtn").addEventListener("click", () => {
  
    let newpage = +localStorage.getItem("page")+1;
    localStorage.setItem("page", newpage);
     changeBtn();
})


const changeBtn = () => {
    if(+localStorage.getItem("page")===1) {
        document.getElementById("prevbtn").disabled = true;
    }
    else {
        document.getElementById("prevbtn").disabled = false;
    }
    if(+localStorage.getItem("page")===8) {
        document.getElementById("nextbtn").disabled = true;
    }
    else {
        document.getElementById("nextbtn").disabled = false;
    }
    let page = +localStorage.getItem("page");
    document.getElementById("numbtn").innerText = page;
    displayData(page);
}