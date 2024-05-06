import { csv } from "d3"
import { useEffect, useState } from "react"

const csvUrl = 'https://gist.githubusercontent.com/Shanmukh459/56586c300e7e9dee825cab31dc297fd1/raw/c359c52dff8363ae4c7ec032c26037001af4d36c/worldcities_clean.csv'

export const useCities = () => {
  const [cities, setCities] = useState(null)  

  useEffect(() => {
    const row = (d) => {
      d.lat = +d.lat
      d.lng = +d.lng
      d.population = +d.population
      return d
    }
    csv(csvUrl, row).then(setCities)
  }, [])
  return cities
}