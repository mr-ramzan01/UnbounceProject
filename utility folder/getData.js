async function getData(url) {
  try {
    let res = await fetch(url);
    let data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default getData;
