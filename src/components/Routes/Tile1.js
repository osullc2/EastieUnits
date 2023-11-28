import "./Tile1.css";
import img from "../newTiles/tile1.jpg";

function Tile1() {
    return (
        <div className="body">
            <img src={img} alt="Not found"/>
            <div className="description">
                <h1> This is the page for tile 1</h1>
                <p1> Here is some info</p1>
            </div>
        </div>
    )
}

export default Tile1;