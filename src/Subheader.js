import React from 'react'
import './Subheader.css'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PinDropIcon from '@material-ui/icons/PinDrop';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonIcon from '@material-ui/icons/Person';

const Subheader = () => {
    return (
        <div className="subheader">
            <div className="icon_1" >
                <MoreHorizIcon  fontSize="large" />
            </div>      
            <div className="icon_2" >
                <PinDropIcon />
            </div>
            <div className="icon_3" >
                <PhoneIcon   />
            </div>     
            <div className="icon_login">
                <PersonIcon />
                <h5>Login / Εγγραφή</h5>
            </div>   
        </div>
    )
}

export default Subheader
