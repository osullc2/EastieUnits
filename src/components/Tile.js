import "./Tile.css"

function Tile(props) {
    return (
        <>
        <a href="/Tile1"/* Replace this with props.route, where the route passed in is /Tile1, /Tile2, /Tile3, etc*/> 
            <div className="tile">
                <div className="content">
                    <img src={props.img} alt="Not Found"/>
                    <h1> {props.desc} </h1>
                    
                </div>     
            </div>
        </a>
        </>
    )
}

export default Tile;