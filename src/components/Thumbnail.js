import React, { Component } from "react";
import "./Thumbnail.css";

export class Thumbnail extends Component {
    render() {
        const {src, index, handlePicClick} = this.props;
        return (
            <div className="thumbnail">
                <img src = {src} alt="sketches" onClick={() => handlePicClick(index)}/>
            </div>
        )
    }
}

export default Thumbnail