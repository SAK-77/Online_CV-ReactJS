import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect} from 'react';

import './Footer.css';
//import Legales from "../../pages/legales/legales.js";

import twitter from '../../asset/icon/twitter-sign.png';
import linkedin from '../../asset/icon/linkedin-logo.png';
import github from '../../asset/icon/github-sign.png';

export default function Footer() {
    useEffect(() => {
        function addLink() {
            //Prevent from adding the link multiple times 
            let footer = document.querySelector("footer")
            console.log(footer);
            let element = document.getElementById("toTopPage")

            //Verify if element is inside the dom
            if (!element)  {
                console.log("here")
                let linksContainer = document.createElement("div");
                linksContainer.setAttribute("className", "row toTopPage-container");
                let link = document.createElement("a");
                link.href = "#header";
                link.setAttribute("id", "toTopPage");
                link.textContent = "Retourner en haut de la page";
                linksContainer.append(link);
                footer.append(link);
            }
        }

        function removeLink() {
            let link = document.getElementById("toTopPage");
            if (link) {
                let footer = document.querySelector("footer");
                footer.removeChild(link);
            }
        }
            
        //Create a function to add a link on the bottom of the page
        window.addEventListener("scroll", () => {
            //Retrieve the value of the current height of the page 
            //if we only take the document height the height will be too high
            let documentHeight =  document.documentElement.scrollHeight;
            //if we only take the window height the height will not change when we go on another page
            let windowHeight = window.innerHeight;
            //Page height is the actual visible/scrollable page 
            let pageHeight = documentHeight - windowHeight;
            //Get the value of the center of the page
            let midPage= pageHeight * (4/5);
            //Get the current value of the scrolling 
            let actualValue = window.scrollY;
            console.log(midPage)
            console.log(actualValue)
            //Check if actual value is superior than midPage to add the link
            if (actualValue >= midPage) {
                addLink();
            }
            if (actualValue < midPage) {
                removeLink();
            }
        })
    },[])
    
   return(
        <footer className="footer container-fluid">
            <div className="row footer-info-container">
                <div className="col-lg-3 col-md-6 footer__info">
                    <div className="container info__container">
                        <h3>John DOE</h3>
                        <address>
                            <a href="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d5257.169237221236!2d2.3250831449649807!3d48.78981988529153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x47e6713b7445a5af%3A0xf3316dabe8027d26!2s70%20Rue%20Camille%20Desmoulins%2C%2094230%20Cachan!3m2!1d48.78982!2d2.3302329999999998!5e0!3m2!1sfr!2sfr!4v1711860793655!5m2!1sfr!2sfr" target="_blank" rel="noreferrer" className="links">
                                70 Rue Camille Desmoulins <br/>94230 Cachan, France
                            </a>
                            <p>Téléphone: <a href="tel:0751032770" className="links">0751032770</a></p>
                        </address>
                        <div className="container info__logo-container">
                            <img src={github} alt="github-logo"/>
                            <img src={twitter} alt="twitter-logo"/>
                            <img src={linkedin} alt="linkedin-logo"/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 footer__links">
                    <div className="container links__container">
                        <h3>Liens utiles</h3>
                        <nav className="links__nav">
                            <Link to="/" className="links"><FontAwesomeIcon icon={faChevronRight} className="links-chevron"/> Accueil</Link>
                            <Link to="/" className="links"><FontAwesomeIcon icon={faChevronRight} className="links-chevron"/> A propos</Link>
                            <Link to="/Services" className="links"><FontAwesomeIcon icon={faChevronRight} className="links-chevron"/> Services</Link>
                            <Link to="/Contact" className="links"><FontAwesomeIcon icon={faChevronRight} className="links-chevron"/> Me contacter</Link>
                            <Link to="/Legales" className="links"><FontAwesomeIcon icon={faChevronRight} className="links-chevron"/> Mentions légales</Link>
                        </nav>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 footer__real">
                    <div className="container real__container">
                        <h3>Mes dernière realisations</h3>
                        <nav className="real__nav">
                            <Link to="/Realisation" className="links"><FontAwesomeIcon icon={faChevronRight} className="links-chevron"/> Portfolio VueJS</Link>
                            <Link to="/Realisation" className="links"><FontAwesomeIcon icon={faChevronRight} className="links-chevron"/> Formulaire Dynamique</Link>
                            <Link to="/Realisation" className="links"><FontAwesomeIcon icon={faChevronRight} className="links-chevron"/> CV</Link>
                        </nav>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 footer__blog">
                    <div className="container blog__container">
                        <h3>Mes derniers articles</h3>
                        <nav className="blog__nav">
                            <Link to="BLog" className="links"><FontAwesomeIcon icon={faChevronRight} className="links-chevron"/> Coder son site en HTML/CSS</Link>
                            <Link to="BLog" className="links"><FontAwesomeIcon icon={faChevronRight} className="links-chevron"/> Vendre ses produits sur le web</Link>
                            <Link to="BLog" className="links"><FontAwesomeIcon icon={faChevronRight} className="links-chevron"/> Se positionner sur Google</Link>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="row copyright-container">
                <p className="copyright-container__text">&copy; Designed by John Doe</p>
            </div>
        </footer>
   )
}