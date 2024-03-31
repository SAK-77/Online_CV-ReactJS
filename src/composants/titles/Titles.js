import React  from 'react';

import "./Titles.css"

export default function Titles(props) {
    return(
        <section className="container title-section">
                <h1>{props.title}</h1>
                <p>{props.presentation}</p>
                <div className="small-border"></div>
        </section>
    )
}