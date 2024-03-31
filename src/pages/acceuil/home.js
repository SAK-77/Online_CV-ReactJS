import React  from 'react';

import "./home.css";
import image from "./skillImg.jpg";


export default function Home() {
    return(
        <main className="Home">
            <section className="main-picture">
                <div className="main-picture__picture"></div>
                <h1>Bonjour, je suis John DOE</h1>
                <h2>Développeur web full stack</h2>
                <a href="#about"><button className="main-picture__button">En savoir plus</button></a>
            </section>
            <main>
                <div className="main-container container" id="about">
                    <div className="row">
                        <div className="col-md-6 col-sm-4 container main-container__about-container">
                            <h3 className="about-container__title">À propos</h3>
                            <p>Passioné par l'informatique et les nouvelles technologies,
                                j'ai suivi une formation d'<strong>intégrateur-développeur 
                                web</strong> au CEF. Au cours de cette formation, j'ai pu
                                acquérir des bases solides pour travailler dans le domaine 
                                du <strong>développement web.</strong>
                            </p>
                            <p>
                                Basé à Lyon, je suis en recherche d'une alternance au sein d'une 
                                agence digitale pour consolider ma formation de <strong>développeur web
                                    full stack.
                                </strong>
                            </p>
                            <p>J'accorde une attention particulière à la qualité du code que j'écris et 
                                je respecte les bonnes 
                            </p>
                        </div>
                        <div className="col-md-6 col-sm-4 container main-container__skills-container">
                            <img className="skills-container__image" src={image} alt="okay"/>
                            <h3 className="skills-container__title">Mes compétences</h3>
                            <p className="skill">HTML5 90%</p>
                            <div className="progress">
                                <div className="progress-bar bg-danger" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="skill">CSS3 80%</p>
                            <div className="progress">
                                <div className="progress-bar bg-info" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="skill">JAVASCRIPT 70%</p>
                            <div className="progress">
                                <div className="progress-bar bg-warning" role="progressbar" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="skill">PHP 60%</p>
                            <div className="progress">
                                <div className="progress-bar bg-success" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="skill">REACT 50%</p>
                            <div className="progress">
                                <div className="progress-bar " role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </main>
    )
}