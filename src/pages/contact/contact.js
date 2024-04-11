import "./contact.css"

import Titles from "../../composants/titles/Titles.js"

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faMobileScreen } from '@fortawesome/free-solid-svg-icons';
//import MapsView from "../../asset/image/google-maps.png"
//<img src={MapsView} alt="Positon google maps de John Doe" className="maps-view"/>
/*<iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d5257.169237221236!2d2.3250831449649807!3d48.78981988529153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x47e6713b7445a5af%3A0xf3316dabe8027d26!2s70%20Rue%20Camille%20Desmoulins%2C%2094230%20Cachan!3m2!1d48.78982!2d2.3302329999999998!5e0!3m2!1sfr!2sfr!4v1711860793655!5m2!1sfr!2sfr" 
width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" target="_blank" rel="noreferrer" className="links">
70 Rue Camille Desmoulins <br/>94230 Cachan, France
</iframe>*/


export default function Contact() {

    return(
        <main className="main-contact">
            <div className="background-contact"></div>
            
            <section className="contact-section">
                <Titles 
                    title="ME CONTACTER" 
                    presentation="Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact."
                />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <section className="col-lg-6 contact-form">
                                    <h2 className="section-title">Formulaire de contact</h2>
                                    <form>
                                        <input type="text" placeholder="Votre nom" />
                                        <input type="mail" placeholder="Votre adresse email"/>
                                        <input type="tel" placeholder="Votre numéro de téléphone"/>
                                        <input type="text" placeholder="Sujet"/>
                                        <textarea name="" id="" cols="30" rows="8" placeholder="Votre message"></textarea>
                                        <button type="submit" className="submit-button">Envoyer</button>
                                    </form>
                                </section>
                                <section className="col-lg-6 address-information">
                                    <h2 className="section-title">Mes coordonnées</h2>
                                    <address className="address">
                                        <p className="localisation"><FontAwesomeIcon icon={faLocationDot} /> 70 Rue Camille Desmoulins, 94230 Cachan</p>
                                        <a href="tel:0751032770" className="phone"><FontAwesomeIcon icon={faMobileScreen} /> 0751032770</a>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d5257.169237221236!2d2.3250831449649807!3d48.78981988529153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x47e6713b7445a5af%3A0xf3316dabe8027d26!2s70%20Rue%20Camille%20Desmoulins%2C%2094230%20Cachan!3m2!1d48.78982!2d2.3302329999999998!5e0!3m2!1sfr!2sfr!4v1711860793655!5m2!1sfr!2sfr" 
                                        width="600" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade" target="_blank" rel="noreferrer" className="links" title="Address"></iframe>
                                    </address>

                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}