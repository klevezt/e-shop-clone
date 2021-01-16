import React from 'react';
import './Footer.css';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Facebook, Twitter, YouTube } from '@material-ui/icons';
import FooterIcon from './shared/img1.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__newsletter">
                <div className="footer__newsletter__label" >Newsletter</div>
                <div className="footer__newsletter__info" >Περισσότερες πληροφορίες αποκλειστικά για τα μέλη μας!</div>
                <TextField className="footer__newsletter__input" id="outlined-basic" 
                            variant="outlined" label="Email" size="small" />
                {/* <input className="footer__newsletter__input" type="text" /> */}
                <Button variant="contained" >ΕΓΓΡΑΦΗ</Button>
            </div>
            <div className="footer__content">
                <div className="footer__content__col1">
                    <ul className="footer__remove__bullets"> 
                        <h3> Παραγγελίες </h3>
                        <li> Εξέλιξη Παραγγελίας </li>
                        <li> Τρόποι Παραγγελίας </li>
                        <li> Τρόποι Πληρωμής </li>
                        <li> Τρόποι Αποστολής </li>
                        <li> Επιστροφές Προιόντων </li>
                    </ul>
                </div>
                <div className="footer__content__col2">
                    <ul className="footer__remove__bullets"> 
                        <h3> Εταιρία </h3>
                        <li> Καταστήματα e-shop points </li>
                        <li> Business To Business </li>
                        <li> Τα νέα του e-shop.gr </li>
                        <li> Η εταιρεία </li>
                        <li> Όροι χρήσης</li>
                        <li> Cookies</li>
                    </ul>
                </div>
                <div className="footer__content__col3">
                    <ul className="footer__remove__bullets"> 
                        <h3> Επικοινωνία </h3>
                        <li> Επικοινωνία </li>
                        <li> Blog </li>
                        <li> FAQ </li>
                        <li> Feedback </li>
                    </ul>
                </div>
                <div className="footer__content__col4">
                    <ul className="footer__remove__bullets"> 
                        <h3> Υπηρεσίες </h3>
                        <li> Service </li>
                        <li> Υπηρεσίες </li>
                        <li> Downloads </li>
                        <li> Εγγυήσεις </li>
                    </ul>
                </div>
                <div className="footer__content__col5">
                    <ul className="footer__remove__bullets"> 
                        <h3> Ακολουθήστε μας </h3>
                        <div className="social__icons">
                            <a href="/"><Facebook fontSize="large"/></a>
                            <a href="/"><Twitter fontSize="large"/></a>
                            <a href="/"><YouTube fontSize="large"/></a>
                        </div>
                        <br/> <hr/>
                        <h3> Κατεβάστε το app μας! </h3> 
                        <div className="os__icons">
                            <img src="https://www.e-shop.gr/images/web-menu-android_v2.png" alt="android" />
                            <img src="https://www.e-shop.gr/images/web-menu-iphone_v2.png" alt="android" />
                        </div>
                       </ul>
                </div>
                <div className="footer__content__col6">
                    <img src={FooterIcon} alt="footer__logo" />
                </div>
            </div>
        </div>
    )
}

export default Footer
