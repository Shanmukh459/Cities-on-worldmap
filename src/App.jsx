import { useWorldAtlas } from './useWorldAtlas'



function App() {
  const worldAtlas = useWorldAtlas()
  
  if(!worldAtlas) {
    return <h1>Loading...</h1>
  }

  console.log(worldAtlas)
  
  return (
    <h1>Hello!</h1>
  )
}

export default App
