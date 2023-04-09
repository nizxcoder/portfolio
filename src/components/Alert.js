
import React from 'react';

export default function Alert(props) {
    const alertStyle = {
        transition: "all 1s",
        position: "absolute",
        right: "15px",
        top: "65px",
    }
    return (
        <div style={{ margin: "0px", height: "0px" }} className='fixed-top'>
            {props.alert && <div className={`alert alert-success alert-dismissible fade show`} style={alertStyle} role="alert">
                <strong>Success: </strong>  Mail Sent
            </div>}
        </div>
    )
}