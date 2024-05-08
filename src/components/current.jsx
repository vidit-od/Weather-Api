export function CurrentComponent({data}){
    if (!data || !data.sys || !data.sys.country) {
        return <div>Loading...</div>;
    }
    return <div style={{backgroundColor:'white'}}>
        <div className="heading">Current Weather</div>
        <div className="field">
            <p>Temperature</p>
            {data.main.temp}
        </div>
        <div className="field">
            <p>Temperature Feels like</p>
            {data.main.feels_like}
        </div>
        <div className="field">
            <p>Humidity</p>
            {data.main.humidity}
        </div>
        <div className="field">
            <p>Pressure</p>
            {data.main.pressure}
        </div>
        <div className="field">
            <p>Visibility</p>
            {data.visibility}
        </div>
        <div className="field">
            <p>Wind Speed</p>
            {data.wind.speed}
        </div>
    </div>
}