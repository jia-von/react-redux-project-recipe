import React from "react";

class RecGallery extends React.Component {
    constructor (props) {
        super(props);
        this.state = {recPicGallery: null,  //to store recipe image for gallery
                      rectTitleGallery: null}; //to store recipe gallery title for gallery
                                   //currently there is no summary due to the API faul.

    }
    
    render () {
        
        return (
            <>
            <h1>Are you ready to cook?</h1>
            <figure>
                <img src={this.props.recPicGallery}/>
            </figure>
            </>
        );
    }
  }
  export default RecGallery;
  