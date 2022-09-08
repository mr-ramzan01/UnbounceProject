
fetchNow();
async function fetchNow(){
    let res = await fetch(" http://localhost:3000/blogdata");
    let data = await res.json();
    console.log(data)
    append(data);

}



function append(data){
    var url= document.createElement('h2')
    url.innerText = data.url

    var Heading= document.createElement('p');
    heading.innerText = data.Heading

    var Date =document.createElement('p');
    date.innerText = data.Date

    var topdata= document.createElement('p');
    topdata.innerText = data.Topdata

}