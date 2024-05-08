import { useState } from "react"

export function Coordinates({SetCoordinates}){
    const [lon , SetLon] = useState(72.6492267);
    const [lat , SetLat] = useState(23.2232877);
    

    return <div className='coordinates'>
      <div className="heading"> Set Coordinates</div>
      <div className="field">
        <p>Longitude: </p>
        <input type="text" value={lon} onChange={(e) => SetLon(e.target.value)}/> 
      </div>
        <div className="field">
        <p>Latitude:</p> <input type="text" value={lat} onChange={(e) => SetLat(e.target.value)}/>
      </div>
      <input type="button" value="Change Coordinates" onClick={(e) => SetCoordinates({lon:parseFloat(lon),lat:parseFloat(lat)})} />
    </div>
  }