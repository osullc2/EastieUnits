import "./Tile.css"

function Tile(props) {
    return (
        <>
        <a href="/Tile1">
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