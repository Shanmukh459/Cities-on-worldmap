import { geoEqualEarth, geoPath } from 'd3'

const projection = geoEqualEarth()
const path = geoPath(projection)

export const Marks = ({worldAtlas}) => (
  <g>
    {worldAtlas.features.map(feature => (
        <path d={path(feature)} />
    ))}
  </g>
)
