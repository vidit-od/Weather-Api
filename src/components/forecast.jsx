import { useEffect, useState } from "react"

export function ForecastComponent({data}){
    const [page,setPage]= useState(10);

    if(!data || !data.list){
        return <div>loading...</div>
    }
    const item = data.list[page]
    return <div className="forecast">
        <div className="heading">Forecast Data</div>
        <div className="buttons">
            {(page>0)?<input type="button" value="Prev" onClick={(p)=> setPage(page-1)}/>:null}
            <p>{page}</p>
            {(page<39)?<input type="button" value="next" onClick={(p)=> setPage(page+1)}/>:null}
        </div>
        <div className="LongList">
        <div  className="field2">
                <div className="field">
                    <p>Time</p>
                    { item.dt_txt}
                </div>
                <div className="field">
                    <p>Temp</p>
                    {item.main.temp} deg kelvin
                </div>
                <div className="field">
                    <p>Temp Feels Like</p>
                    {item.main.feels_like} deg kelvin
                </div>
                <div className="field">
                    <p>Humidity</p>
                    {item.main.humidity}
                </div>
                <div className="field">
                    <p>Pressure </p>
                    {item.main.pressure}
                </div>
                <div className="field">
                    <p>Visibility</p>
                    {item.visibility}
                </div>
                <div className="field">
                    <p>Overall weather</p>
                    {item.weather[0].main}
                </div>
                <div className="field">
                    <p> Description </p>
                    {item.weather[0].description}
                </div>
            </div>
        </div>
    </div>
}