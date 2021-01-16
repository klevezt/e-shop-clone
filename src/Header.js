import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import CheckCircleRoundIcon from '@material-ui/icons/CheckCircle';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import PhoneIcon from '@material-ui/icons/Phone';

const Header = () => {
    return (
        <div className="header" >
            {/* logo */}
            <div className="header__logo">
                <img src="https://www.e-shop.gr/images/top_panel_logo_v2.png" alt="logo" />
            </div>
            {/* search_bar */}
            <div className="header__search">
                <input type="text" />
                <SearchIcon className="header__search__icon" fontSize="large"/>                
            </div>
            {/* header_info_right */}
            <div className="header__right">
                <div className="info_1">
                    <CheckCircleRoundIcon fontSize="large"  />
                    <center>Αγορά χωρίς εγγραφή </center>
                </div>
                <div className="info_2">
                    <LocalShippingIcon fontSize="large" />
                    <center>Δωρεάν αποστολή για αγορές άνω των 90€ </center>
                </div>
                <div className="info_3">
                    <PhoneIcon fontSize="large" />
                    <center> Για τηλεφωνικές παραγγελίες <h2>211 500 0 500 </h2></center>
                </div>
            </div>
        </div>
    )
}

export default Header
