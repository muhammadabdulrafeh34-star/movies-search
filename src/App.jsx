import './App.css'
import Container from './Components/Container'
import Input from './Components/Input'
import Button from './Components/Button'
import { useState } from 'react'
import getMovies from './Api'

function App() {
 const [search, setSearch] = useState("")
 const [results, setResults] = useState([])

  const handleSearch = async () => {
    const movies = await getMovies(search)
    setResults(movies)

  }
  return (
    <div>
       <Container>
        <Input 
        value={search}
        onChange={(e) => setSearch(e.target.value)}         
        />
        <Button
        submit={async () => { 
        console.log("button click")
         const movies = await handleSearch()
          setResults(movies)
        }}  
        />

        <div>
          {results.map((m) => (
            <p key={m.imbdID}>{m.Year}-{m.Title}</p>
          ))}
        </div>
 
      </Container>
      </div>
  )
}

export default App
