export default function Api(){
    const fetchData = async () => {
        const response = await fetch("https://www.omdbapi.com/?apikey=56dc7bf&t=Batman")
        const data = response.json();
        console.log(data)
        return data
    }
    fetchData()
}