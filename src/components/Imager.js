import React, { Component } from "react"
import Display from "./Display"
import Thumbnail from "./Thumbnail"
import { v4 as uuidv4 } from 'uuid';

import "./Imager.css"



//---------------------------------------------------------------- Image Array 
export class Imager extends Component {
    state = {
        picArray: [
        "images/Dali_horse.JPG",
        "images/Dali_lady.JPG",
        "images/Dali_AlligatorMan.JPG",
        "images/Dali_HoldingHands.JPG",
        "images/Dali_MonsterHand.JPG",
        "images/Dali_DonQ.JPG",
        "images/Dali_Sketch.JPG",
        "images/Dali_DonQ_Horse.JPG",
        "images/Dali_FancyLady.JPG",
        "images/Dali_Garden.JPG",
        "images/Dali_Dancer.JPG",
        "images/Dali_LadyDrawers.JPG",
    ],
    currentPath: "images/DaliFace.JPG",
    currentIndex: "0",
    };
//---------------------------------------------------------------- Rando Button Controller
    getRandoImg = () =>{
        let rando = Math.floor(Math.random() * 12);
        this.setState({
            currentPath : this.state.picArray[rando],
            currentIndex: rando,
        })
        console.log(this.state.currentPath)
        return true;
    }
//---------------------------------------------------------------- Left Button Controller
    imgLeft = () =>{
        if(this.state.currentIndex > 0){
            this.setState((prevState) =>{
                return{
                    currentIndex : prevState.currentIndex - 1,
                    currentPath: this.state.picArray[prevState.currentIndex - 1]
                }
                
            })
        }
    }
//---------------------------------------------------------------- Right Button Controller
    imgRight = () =>{
        if(this.state.currentIndex < 11){
            this.setState((prevState) =>{
                return{
                    currentIndex : prevState.currentIndex + 1,
                    currentPath: this.state.picArray[prevState.currentIndex + 1]
                }
                
            })
        }
    }

    handleImgClick = (index) =>{
        this.setState({
            currentIndex : index,
            currentPath : this.state.picArray[index]
        })
        
    }

//---------------------------------------------------------------- Renderer 
    render() {
        return (
            <div className="body">
                <div id="main">
                    <div id="header">React-Imager</div>
                    <Display src={this.state.currentPath}/>
                    <div id="controlBar">
                        <button id= "randoButton" onClick={() => this.getRandoImg()}>RANDO</button>
                        <div id="buttons">
                            <button id="leftButton" onClick={() => this.imgLeft()}>LEFT</button>
                            <button id="rightButton" onClick={() => this.imgRight()}>RIGHT</button>
                        </div>
                    </div>
                    <div className="thumbnails"> 
                            {
                                this.state.picArray.map((path, i) =>{
                                    return(
                                        <Thumbnail key={uuidv4()} index={i} src={path} handleImgClick={this.handleImgClick}/>
                                    )
                                })
                            }
                    </div>
                </div> 
            </div>
        )
    }
}

export default Imager