import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import ScrollToTop from "react-scroll-to-top";
import { HashLink } from "react-router-hash-link";

import './Footer.css';

import figma from '../../asset/icon/figma.png';
import linkedin from '../../asset/icon/linkedin-logo.png';
import github from '../../asset/icon/github-sign.png';


export default function Footer() {
    document.addEventListener("DOMContentLoaded", () => {})
    
    return(
        <footer className="footer container-fluid">
            <div className="row footer-info-container">
                <div className="col-lg-3 col-md-6 footer__info">
                    <div className="container info__container">
                        <h3>John DOE</h3>
                        <address>
                            40 Rue Laure Diebold <br/> 69009 Lyon, France<br/>Tel: 0620304050
                        </address>
                        <div className="container info__logo-container">
                            <Link target="_blank" rel="noreferrer" to="/Github"><img src={github} alt="github-logo"/></Link>
                            <a target="_blank" rel="noreferrer" href="https://www.figma.com"><img src={figma} alt="figma-logo"/></a>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/learning"><img src={linkedin} alt="linkedin-logo"/></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 footer__links">
                    <div className="container links__container">
                        <h3>Liens utiles</h3>
                        <nav className="links__nav">
                            <HashLink to="/#top" className="links"><FontAwesomeIcon icon={faChevronRight} className="links-chevron"/> Accueil</HashLink>
                            <HashLink to="/#top" className="links"><FontAwesomeIcon icon={faChevronRight} className="links-chevron"/> A propos</HashLink>
                            <HashLink to="/Services#top" className="links"><FontAwesomeIcon icon={faChevronRight} className="links-chevron"/> Services</HashLink>
                            <HashLink to="/Contact#top" className="links"><FontAwesomeIcon icon={faChevronRight} className="links-chevron"/> Me contacter</HashLink>
                            <HashLink to="/Legales#top" className="links"><FontAwesomeIcon icon={faChevronRight} className="links-chevron"/> Mentions légales</HashLink>
                        </nav>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 footer__real">
                    <div className="container real__container">
                        <h3>Mes dernières realisations</h3>
                        <nav className="real__nav">
                            <HashLink to="/Realisations#top" className="links"><FontAwesomeIcon icon={faChevronRight} className="links-chevron"/> Portfolio VueJS</HashLink>
                            <HashLink to="/Realisations#top" className="links"><FontAwesomeIcon icon={faChevronRight} className="links-chevron"/> Dynamic Form</HashLink>
                            <HashLink to="/Realisations#top" className="links"><FontAwesomeIcon icon={faChevronRight} className="links-chevron"/> CV</HashLink>
                        </nav>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 footer__blog">
                    <div className="container blog__container">
                        <h3>Mes derniers articles</h3>
                        <nav className="blog__nav">
                            <HashLink to="/BLog#top" className="links"><FontAwesomeIcon icon={faChevronRight} className="links-chevron"/> Coder son site en HTML/CSS</HashLink>
                            <HashLink to="/BLog#top" className="links"><FontAwesomeIcon icon={faChevronRight} className="links-chevron"/> Vendre ses produits sur le web</HashLink>
                            <HashLink to="/BLog#top" className="links"><FontAwesomeIcon icon={faChevronRight} className="links-chevron"/> Se positionner sur Google</HashLink>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="row copyright-container">
                <p className="copyright-container__text">&copy;2024 Designed by John Doe</p>
            </div>  
            <ScrollToTop className="toTop"/> 
        </footer>
    )
}