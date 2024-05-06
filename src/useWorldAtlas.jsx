import { useState, useEffect } from "react"
import { json } from "d3"
import { feature } from "topojson"

const jsonUrl = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json'

export const useWorldAtlas = () => {
  const [worldAtlas, setWorldAtlas] = useState(null)

  useEffect(() => {
    json(jsonUrl).then(topology => {
      const { countries } = topology.objects
      setWorldAtlas(feature(topology, countries))
    })
  }, [])
  return worldAtlas
}