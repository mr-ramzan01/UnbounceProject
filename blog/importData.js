export const blogdata = async (page) => {
    try {
        let data = await fetch(`http://localhost:3000/blogdata?_page=${page}&_limit=12`);
        let res = await data.json();
        return res;
    } catch (error) {
        console.log(error);
    }
}