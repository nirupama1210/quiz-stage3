import React from "react"
import "./Components.css"
import {Routes,Route,Link} from "react-router-dom";

import QuizComponent from './QuizComponent'
// import ResultComponent from './ResultComponent';

class HomeComponent extends React.Component{

    render()
    {
        return(
            <React.Fragment>
                <center>
                <div className="container">
                    <div className='content'>
                        <h1 id='h1'>Quiz App</h1>
                        <Link to='play'><button id="btn" className="btncls">Play</button></Link>
      
            </div></div>
            </center>
  
            </React.Fragment>
        )
    }

}
export default HomeComponent;