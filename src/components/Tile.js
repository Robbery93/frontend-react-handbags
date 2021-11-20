import React from "react";

function Tile({ image, imageTitle, title, context, children }) {
    return (
        <section>
            <img src={image} alt={imageTitle}/>
            <h2>{title}</h2>
            <p>{context}</p>
            {children}
        </section>
    );
}

export default Tile;