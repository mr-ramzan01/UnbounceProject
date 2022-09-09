export const blogdata = async (page) => {
    try {
        let data = await fetch(`https://fake-server-app-by-me.herokuapp.com/blogdata?_page=${page}&_limit=12`);
        let res = await data.json();
        return res;
    } catch (error) {
        console.log(error);
    }
}