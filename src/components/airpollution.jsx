export function Aircomponent({data}){
    if(!data || !data.list || !data.list[0].main.aqi){
        return <div>loading....</div>
    }
    const aqi = data.list[0].main.aqi;
    let aqi_index = 'good';
    console.log(aqi);
    switch(aqi){
        case 1: aqi_index = 'Good'
        break;
        case 2: aqi_index = 'Fair'
        break;
        case 3: aqi_index = 'Moderate'
        break;
        case 4: aqi_index = 'Poor'
        break;
        case 5: aqi_index = 'Very Poor'
        break;
    }
    return <div style={{backgroundColor:'white'}}>
        <div className="heading">Air Pollution</div>
        <div className="content">
            <div className="temp">
                <p>CO</p>
                {data.list[0].components.co}
            </div>
            <div className="temp">
                <p>NO</p>
                {data.list[0].components.no}
            </div>
            <div className="temp">
                <p>NO2</p>
                {data.list[0].components.no2}
            </div>
            <div className="temp">
                <p>O3</p>
                {data.list[0].components.o3}
            </div>
            <div className="temp">
                <p>SO2</p>
                {data.list[0].components.so2}
            </div>
            <div className="temp">
                <p>NH3</p>
                {data.list[0].components.nh3}
            </div>
        </div>
        <div className="AQI" style={{margin:'10px'}}>
            <div className="field">
                <p>Overall Air Quality</p>
                {aqi_index}
            </div>
        </div>
    </div>
}