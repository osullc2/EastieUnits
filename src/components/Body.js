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
        { img: tile1, desc: "32 Princeton St", route: "/Tile1" },
        { img: tile2, desc: "194 Chelsea St", route: "/Tile2" },
        { img: tile3, desc: "34 Cottage St", route: "/Tile3" },
        { img: tile4, desc: "651 Bennington St", route: "/Tile4" },
        { img: tile5, desc: "12 House Rd", route: "/Tile5" },
        { img: tile6, desc: "66 Road St", route: "/Tile6" },
        { img: tile7, desc: "1234 15th St", route: "/Tile7" },
        { img: tile8, desc: "2 Peoples Ave", route: "/Tile8" },
        { img: tile9, desc: "31 Curtis St", route: "/Tile9" },
        { img: tile10, desc: "49 State St", route: "/Tile10" },
    ];

    return (
        <div className="tiles">
            {tileData.map((tile, index) => (
                <React.Fragment key={index}>
                    <Tile img={tile.img} desc={tile.desc} route={tile.route} />
                    {index % 3 === 2 && <div className="row-divider" />}
                </React.Fragment>
            ))}
        </div>
    );
}

export default Body;