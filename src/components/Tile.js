import "./Tile.css"

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