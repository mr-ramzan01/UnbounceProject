export const blogdata = async (page) => {
    try {
        let data = await fetch(`http://localhost:8001/blogdata?_page=${page}&_limit=12`);
        let res = await data.json();
        return res;
    } catch (error) {
        console.log(error);
    }
}