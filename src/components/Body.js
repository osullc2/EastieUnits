import React from "react";
import "./Body.css";
import Tile from "./Tile.js";
import tile1 from "./newTiles/tile1.jpg";
import tile2 from "./newTiles/tile2.jpg";
import tile3 from "./newTiles/tile3.jpg";
import tile4 from "./newTiles/tile4.jpg";
import tile5 from "./newTiles/tile5.jpg";
import tile6 from "./newTiles/tile6.jpg";
import tile7 from "./newTiles/tile7.jpg";
import tile8 from "./newTiles/tile8.jpg";
import tile9 from "./newTiles/tile9.jpg";
import tile10 from "./newTiles/tile10.jpg";


function Body() {
    const tileData = [
        { img: tile1, desc: "house1" },
        { img: tile2, desc: "house2" },
        { img: tile3, desc: "house3" },
        { img: tile4, desc: "house4" },
        { img: tile5, desc: "house5" },
        { img: tile6, desc: "house6" },
        { img: tile7, desc: "house7" },
        { img: tile8, desc: "house8" },
        { img: tile9, desc: "house9" },
        { img: tile10, desc: "house10" },
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