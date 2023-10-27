import "./Tile.css"


// I want to give this component the img src as a prop, but since this react project uses webpack,
// we need to use the require() function which pretty much ruins everything. Will need to restructure
// to make the project independant of webpack and stuff.
function Tile(props) {
    return (
        <>
        <div className="tile">
            <div className="content">
                <img src={props.img} alt="Not Found"/>
                <h2> {props.desc} </h2>
            </div>     
        </div>
        </>
    )
}

export default Tile;