import React from "react";
import "./Body.css";
import Tile from "./Tile.js";
import tile1 from "./newTiles/tile1.jpg";
import tile2 from "./newTiles/tile2.jpg";
import tile3 from "./newTiles/tile3.jpg";
import tile4 from "./newTiles/tile4.jpg";
import tile5 from "./newTiles/tile5.jpg";

function Body() {
    const tileData = [
        { img: tile1, desc: "house1" },
        { img: tile2, desc: "house2" },
        { img: tile3, desc: "house3" },
        { img: tile4, desc: "house4" },
        { img: tile5, desc: "house5" },
    ];

    return (
        <div className="tiles">
            {tileData.map((tile, index) => (
                <React.Fragment key={index}>
                    <Tile img={tile.img} desc={tile.desc} />
                    {index % 3 === 2 && <div className="row-divider" />}
                </React.Fragment>
            ))}
        </div>
    );
}

export default Body;