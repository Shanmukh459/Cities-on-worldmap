import { geoEqualEarth, geoPath } from 'd3'
import { useWorldAtlas } from './useWorldAtlas'

const projection = geoEqualEarth()
const path = geoPath(projection)

const width = 960
const height = 560

function App() {
  const worldAtlas = useWorldAtlas()
  
  if(!worldAtlas) {
    return <h1>Loading...</h1>
  }

  console.log(worldAtlas)
  
  return (
    <svg height={height} width={width}>
      {worldAtlas.features.map((feature) => (
        <path d={path(feature)} />
      ))}

    </svg>
  )
}

export default App
