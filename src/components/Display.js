import React, { Component } from "react";
import "./Display.css";


//---------------------------------------------------------------- Center Display Importer
export class Display extends Component {
    render() {
        const { src } = this.props;
            return (
                <div style={{textAlign:"center", margin: "20px"}}>
                    <img style={{width:'300px', height: '300px'}} src = {src} alt="display IMG"/>
                </div>
        )
    }  
}

export default Display;