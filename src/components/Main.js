import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import DriverList from './DriverList';
import ConstructorList from './ConstructorList';
import RaceList from './RaceList';
import DriverLastResult from './DriverLastResult';

class Main extends Component {

    render() {
      console.log("Main");
      return (
            <main className = "main row">
              <div className = "col-1"></div>
              <div className = "col-10">
                <Switch>
                    <Route exact path='/' component={DriverList}/>
                    <Route path='/DriverList' component={DriverList}/>
                    <Route path='/ConstructorList' component={ConstructorList}/>
                    <Route path='/RaceList' component={RaceList}/>
                    <Route path='/DriverLastResult' component={DriverLastResult}/>
                </Switch>
                </div>
                <div className = "col-1"></div>
            </main>
      );
    }
  }
  
  export default Main;