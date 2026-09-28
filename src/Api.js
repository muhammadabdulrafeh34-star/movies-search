// import { useEffect} from "react";

export default function getMovies({search}){
    const fetchData = async () => {
        const response = await fetch(`https://www.omdbapi.com/?apikey=56dc7bf&t=${search}`)
        const data = await response.json();
        console.log(data)
        return data.search || []
    }
    // useEffect(() => {
    //     fetchData()
    // },[search])
}