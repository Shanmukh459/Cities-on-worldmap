import { useWorldAtlas } from './useWorldAtlas'
import { Marks } from './Marks'
import { useCities } from './useCities'
import { scaleSqrt, max } from 'd3'

const width = 960
const height = 560

function App() {
  const worldAtlas = useWorldAtlas()
  const cities = useCities()
  
  if(!worldAtlas || !cities) {
    return <h1>Loading...</h1>
  }

  const maxRadius = 5

  const sizeValue = d => d.population
  const sizeScale = scaleSqrt()
    .domain([0, max(cities, sizeValue)])
    .range([0, maxRadius])
  
  return (
    <svg height={height} width={width}>
      <Marks worldAtlas={worldAtlas} cities={cities} sizeScale={sizeScale} sizeValue={sizeValue} />
    </svg>
  )
}

export default App
