export function LocationComponent({data}){
    if (!data || !data.sys || !data.sys.country) {
        return <div>Loading...</div>;
    }
    let unixtime = data.dt
    let collectionDate = new Date(unixtime*1000);
    collectionDate = collectionDate.toLocaleString();

    return <div className="location">
        <div className="heading">Location</div>
        <div className="field"> <p> Current Location</p> {data.name} </div>
        <div className="field"> <p> Location Id</p> {data.id} </div>
        <div className="field"> <p> Timezone: </p> {data.timezone} </div>
        <div className="field"> <p style={{marginRight:'30px'}}> Data Collected on</p> {collectionDate} </div>
        <div className="field"> <p> Country code</p> {data.sys.country} </div>
    </div>
}