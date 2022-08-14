import axios from "axios";

async function fetchData(searchName, pageNumber) {
try {
    const response = await axios.get(`https://pixabay.com/api/?q=${searchName}&page=${pageNumber}&key=28062260-bbfec586ef8cfde1ee2834ccc&image_type=photo&orientation=horizontal&per_page=12`);    
    return response
}
catch (error) {
    return console.error(error);
}
}

export default fetchData;