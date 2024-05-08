import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios' 
import { Header } from './components/header'
import { Coordinates } from './components/coordinates'
import { LocationComponent } from './components/location'
import { ForecastComponent } from './components/forecast'
import { CurrentComponent } from './components/current'
import { Aircomponent } from './components/airpollution'

const APIkey = process.env.REACT_APP_OPENWEATHER_API_KEY
function App() {
  // lat: 23.2232877, lon: 72.6492267 
  const [coordinates, SetCoordinates] = useState({lat: 23.2232877, lon: 72.6492267})
  const [current, setCurrent] = useState('hello');
  const [forecast, setForecast] = useState('hello');
  const [airdata, setAirdata] = useState('hello');

  function handlechange(coord){
    SetCoordinates(coord);
    console.log(coord);
  }
  async function getCurrent(){
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${APIkey}`)
    return response.data;
  }
  async function getForecast(){
    const response = await axios(`https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${APIkey}`)
    return response.data;
  }
  async function getAirdaa(){
    const response = await axios(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${APIkey}`)
    return response.data
  }
  useEffect(()=>{
    getCurrent().then((ans) => {setCurrent(ans)});
    getForecast().then((ans)=> {setForecast(ans)});
    getAirdaa().then((ans)=> {setAirdata(ans)});
  },[coordinates])
  return (
    <div className='weather-api'>
      <Header/>
      <div className='main'>
        <div className="first">
        <WrapperComponent>
          <Coordinates SetCoordinates = {handlechange}/>
        </WrapperComponent>
        <WrapperComponent>
          <LocationComponent data = {current}/>
        </WrapperComponent>
        </div>
        <div className="second">
          <WrapperComponent>
            <ForecastComponent data = {forecast}/>
          </WrapperComponent>
        </div>
        <div className="third">
          <WrapperComponent>
            <CurrentComponent data={current}/>
          </WrapperComponent>
          <WrapperComponent>
            <Aircomponent data = {airdata}/>
          </WrapperComponent>
        </div>
      </div>
    </div>
  )
}

function WrapperComponent({children}){
  return <div className='wrapper'>
    {children}
  </div>
}

export default App
