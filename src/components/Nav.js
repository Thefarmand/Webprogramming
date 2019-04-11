import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (   
          <div>
          
          <div class="navbar navbar-expand-lg" >
          <ul className="nav navbar-nav ml-auto">
                <li className="nav-item nav-link"> <Link to='/Driverlist' >Drivers</Link></li>
                <li className="nav-item nav-link"> <Link to='/ConstructorList' >Constructors</Link></li>
                <li className="nav-item nav-link"> <Link to='/RaceList' >Races</Link></li>
                <li className="nav-item nav-link"> <Link to='/DriverLastResult' >Last race result</Link></li>
              </ul>
            </div>        
            {/* <h1>React-Redux-Thunk-Axios-Router Formula 1 <img alt="F1" className ="img-fluid rounded" src={F1Img} style={{width:150, height:150}}></img></h1>  
               <h5> This small React-App demonstrates the use of Redux-Thunk</h5> */}
                </div>        
    );
  }
}

export default Nav;
