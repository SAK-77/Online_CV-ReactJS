import React  from 'react';

import "./realisation.css"

import Card from "../../composants/card/Card.js";
import Banner from "../../composants/banner/Banner.js";
import Titles from "../../composants/titles/Titles.js";

import Portfolio from "./img/Portfolio.png";
import DynamicForm from "./img/DynamicForm.png";
import BasicCV from "./img/CV.png";

export default function Realisations() {
    return(
        <main>
            <Banner/>
            <Titles 
                title="PORTFOLIO" 
                presentation="Voici quelques-unes de mes réalisations."
            />
            
            <section className="portfolio-section container">
                <div className="row">
                    <div className="col-12 portfolio-section__container">
                        <div className="row portfolio-section__card-container">
                            <div className="card-container__portfolio-card col-sm-6 col-md-6 col-lg-4">
                                <Card
                                    class="project-card"
                                    title="Portfolio VueJS"
                                    image={Portfolio}
                                    imageAlt="Image du projet Portfolio avec VueJS(v3)"
                                    text="Projet bilan du niveau I du CEF, le but était de créer un Porfolio pour montrer ses projets"
                                    link="https://github.com/SAK-77/Portfolio-VueJS"
                                    textButton="voir"
                                    footer="Site réalisé avec VueJS(v3), HTML5, CSS3, JavaScript"
                                />
                            </div>
                            <div className="card-container__portfolio-card col-sm-6 col-md-6 col-lg-4">
                                <Card 
                                    class="project-card"
                                    title="Formulaire Dynamique"
                                    image={DynamicForm}
                                    imageAlt="Image du projet de Formulaire Dynamique"
                                    text="Projet réalisé en tant que devoir du CEF, la mission était d'ajouter dynamiquement les commentaires à un espace commentaire"
                                    link="https://github.com/SAK-77/Projet-3_Dynamiser-un-espace-commentaire"
                                    textButton="voir"
                                    footer="Site realisé avec HTML5, CSS3, Javascript"
                                />
                            </div>
                            <div className="card-container__portfolio-card col-sm-6 col-md-6 col-lg-4">
                                <Card 
                                    class="project-card"
                                    title="CV Basique"
                                    image={BasicCV}
                                    imageAlt="Image du projet CV basique"
                                    text="Projet réalisé en tant que devoir du CEF, le but était de créer un CV en ligne qui presente le parcours"
                                    link="https://github.com/SAK-77/Projet_1-CV_en_ligne"
                                    textButton="voir"
                                    footer="Site realisé avec HTML5 et CSS3"
                                />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        </main>
    )
}