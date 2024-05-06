import { useState, useEffect } from "react"
import { json } from "d3"
import { feature } from "topojson"

const jsonUrl = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json'

function App() {
  const [worldAtlas, setWorldAtlas] = useState()

  useEffect(() => {
    json(jsonUrl).then(topology => {
      const { countries } = topology.objects
      setWorldAtlas(feature(topology, countries))
    })
  }, [])
  
  if(!worldAtlas) {
    return <h1>Loading...</h1>
  }

  console.log(worldAtlas)
  
  return (
    <h1>Hello!</h1>
  )
}

export default App
