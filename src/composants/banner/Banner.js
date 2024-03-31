import React  from 'react';

import image from "./geo.jpg"
import "./Banner.css"

export default function ImageSection() {
    return(
        <img className="image-banner" src={image} alt="style"/>
    )
}