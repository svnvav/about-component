import React from 'react';
import './header-with-backbutton.css';
import SharpAPI from '../utills/sharpApi';

export default class BackHeader extends React.Component {
    constructor(props) {
      super(props);
      this.headerText = props.headerText;
    }

    render() {
        return(<div className="back-button-bar">
            <div className="header-bar">{this.headerText}</div>
            <div className="close-button" onClick={closeHandler}>
                <svg className = "svg-icon" height="512px"
                    style={{"height" : "100%", "width" : "100%"}}
                    id="Layer_1"
                    version="1.1"
                    viewBox="0 0 512 512"
                    width="512px"
                    >
                        <g>
                            <path d="M256,33C132.3,33,32,133.3,32,257c0,123.7,100.3,224,224,224c123.7,0,224-100.3,224-224C480,133.3,379.7,33,256,33z
                                 M364.3,332.5c1.5,1.5,2.3,3.5,2.3,5.6c0,2.1-0.8,4.2-2.3,5.6l-21.6,21.7c-1.6,1.6-3.6,2.3-5.6,2.3c-2,0-4.1-0.8-5.6-2.3L256,289.8
                                 l-75.4,75.7c-1.5,1.6-3.6,2.3-5.6,2.3c-2,0-4.1-0.8-5.6-2.3l-21.6-21.7c-1.5-1.5-2.3-3.5-2.3-5.6c0-2.1,0.8-4.2,2.3-5.6l75.7-76
                                 l-75.9-75c-3.1-3.1-3.1-8.2,0-11.3l21.6-21.7c1.5-1.5,3.5-2.3,5.6-2.3c2.1,0,4.1,0.8,5.6,2.3l75.7,74.7l75.7-74.7
                                 c1.5-1.5,3.5-2.3,5.6-2.3c2.1,0,4.1,0.8,5.6,2.3l21.6,21.7c3.1,3.1,3.1,8.2,0,11.3l-75.9,75L364.3,332.5z">
                            </path>
                        </g>
                </svg>
            </div>
        </div>);
    }
}

function closeHandler() {
    SharpAPI.close();
}
