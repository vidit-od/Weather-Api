export function LocationComponent({data}){
    if (!data || !data.sys || !data.sys.country) {
        return <div>Loading...</div>;
    }
    let unixtime = data.dt
    let collectionDate = new Date(unixtime*1000);
    collectionDate = collectionDate.toLocaleString();

    unixtime = data.sys.sunrise
    let sunrise = new Date(unixtime*1000);
    sunrise = sunrise.toLocaleString();

    unixtime = data.sys.sunset
    let sunset = new Date(unixtime*1000);
    sunset = sunset.toLocaleString();
    return <div className="location">
        <div className="heading">Location</div>
        <div className="field"> <p> Current Location : </p> {data.name} </div>
        <div className="field"> <p> Location Id : </p> {data.id} </div>
        <div className="field"> <p> Timezone: </p> {data.timezone} </div>
        <div className="field"> <p> Data Collected on : </p> {collectionDate} </div>
        <div className="field"> <p> country code : </p> {data.sys.country} </div>
        <div className="field"> <p> sunrise: </p> {sunrise} </div>
        <div className="field"> <p> sunset: </p> {sunset}      </div>
    </div>
}