import { geoEqualEarth, geoPath } from 'd3'

const projection = geoEqualEarth()
const path = geoPath(projection)

export const Marks = ({worldAtlas}) => (
  <g className='marks'>
    <path className="sphere" d={path({type: 'Sphere'})} />
    {worldAtlas.features.map(feature => (
        <path className="land" d={path(feature)} />
    ))}
  </g>
)
