import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faLocationDot, faMobileScreen } from '@fortawesome/free-solid-svg-icons';
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
                            <a href="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d5257.169237221236!2d2.3250831449649807!3d48.78981988529153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x47e6713b7445a5af%3A0xf3316dabe8027d26!2s70%20Rue%20Camille%20Desmoulins%2C%2094230%20Cachan!3m2!1d48.78982!2d2.3302329999999998!5e0!3m2!1sfr!2sfr!4v1711860793655!5m2!1sfr!2sfr" target="_blank" rel="noreferrer" className="links">
                            <FontAwesomeIcon icon={faLocationDot}/> 70 Rue Camille Desmoulins <br/>94230 Cachan, France<br/>
                            </a>
                            <a href="tel:0751032770" className="links"><FontAwesomeIcon icon={faMobileScreen}/> 0751032770</a>
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
                        <h3>Mes dernière realisations</h3>
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