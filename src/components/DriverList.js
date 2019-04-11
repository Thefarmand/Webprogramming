import React from "react";
import { fecthDrivers } from "../actions/index";
import { connect } from "react-redux";

class DriverList extends React.Component {
  componentDidMount() {
    this.props.fecthDrivers();
  }

  renderList() {
    return this.props.drivers.map(driver => {
      return (      

            <tr className="item" key={driver.driverId}>
              <th >
                <h4>
                {driver.givenName} {driver.familyName}
                </h4>
              </th>
              <th>
              <h4>
              {driver.dateOfBirth}
              </h4>
            </th>
            <th>
              <h4> 
              {driver.nationality}
              </h4>
            </th>
            <th>
              <h4>
              {driver.code}
              </h4>
            </th>
            <th>
              <h4>
              {driver.permanentNumber}
              </h4>
            </th>
            <th>
              <h4>
              <a href={driver.url} target="_blank">{driver.url}</a>
              </h4>
            </th>
          </tr>
     
      );
    });
  }

  render() {
    return (
      <div className="row">
        <div className="container">
          <h1>Drivers in 2019</h1>
            <table className="table">
              <thead>
                <tr>
                  <th >Name:</th>
                  <th >Born:</th>
                  <th >Nationality:</th>
                  <th >Code:</th>
                  <th >Number:</th>
                  <th >Link:</th>
                </tr>
              </thead>
              <tbody>
                {this.renderList()}
              </tbody>
            </table>
            <ul className="namelist"></ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { drivers: state.drivers };
};
export default connect(
  mapStateToProps,
  { fecthDrivers }
)(DriverList);
