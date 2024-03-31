import './services.css';

import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDisplay, faFileCode, faMagnifyingGlassDollar } from '@fortawesome/free-solid-svg-icons'; 

import Banner from "../../composants/banner/Banner.js";
import Titles from "../../composants/titles/Titles.js";

export default function Services() {
    //Function to change logo color when hovering
    //We use useEffect to select elements when the DOM is "loaded";
    useEffect(() => {
        function changeColor() {
            let containers1 = document.querySelector(".services-container__ux")
            let containers2 = document.querySelector(".services-container__dev-web")
            let containers3 = document.querySelector(".services-container__seo")
    
            let containers = [containers1, containers2, containers3];
            
            containers.forEach(container => {
                let logo = container.querySelector(".logo");
                container.addEventListener("mouseover", () => {
                    logo.style.color = "#cde1f8";
                } )
                container.addEventListener("mouseout", () => {
                    logo.style.color = "#0d6efd";
                } )
            })
    
        }
        changeColor()
    },[])
    
    return(
        <main>
            <Banner/>
            <Titles title="MON OFFRE DE SERVICES" presentation="Voici les prestations sur lesquelles je peux intervenir"/>

            <div className="container main__services-container ">
                <div className="row">
                    <div className="col-12">
                        <div className= "row services-container">
                            {/* Card 1 */}
                            <div className="col-sm-8 col-md-4 col-lg-4 services-card">
                                <div className=" services-container__ux">
                                    <FontAwesomeIcon icon={faDisplay} className="logo ux-design-logo"/>
                                    <h2>UX DESIGN</h2>
                                    <p>L'<strong>UX Design</strong> est une méthode de <br/>conception
                                    centréer sur l'utilisateur. Son but <br/>est d'offrir une expérience
                                    de navigation <br/> optimale à l'internaute.</p>
                                </div>
                            </div>                                          
                            {/* Card 2 */}
                            <div className="col-sm-8 col-md-4 col-lg-4 services-card">
                                <div className="services-container__dev-web">
                                    <FontAwesomeIcon icon={faFileCode} className="logo dev-design-logo"/>
                                    <h2>DEVELOPPEMENT WEB</h2>
                                    <p>Le <strong>développement de site web</strong> repose sur <br/>l'utilisation
                                    des langages HTML, CSS, <br/>JavaScript et PHP.</p>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="col-sm-8 col-md-4 col-lg-4 services-card">
                                <div className="services-container__seo">
                                    <FontAwesomeIcon icon={faMagnifyingGlassDollar} className="logo seo-design-logo"/>
                                    <h2>UX DESIGN</h2>
                                    <p>Le <strong>référencement naturel d'un site</strong>, aussi <br/>appelé
                                    SEO, consiste à mettre des <br/>techniques en oeuvre pour améliorer sa<br/>
                                    position dans les résultats des moteurs de <br/>recherche.</p>
                                </div>
                            </div>
                        
                        
                        
                        </div>
                    </div>
                </div>
                
            </div>
        </main>
    )
}