import "./Tile.css"

function Tile(props) {
    return (
        <>
        <a href= {props.route}> 
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