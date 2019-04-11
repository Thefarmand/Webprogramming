import React from "react";
import { fecthDriverLastResult } from "../actions/index";
import { connect } from "react-redux";

class DriverLastResult extends React.Component {
  componentDidMount() {
    this.props.fecthDriverLastResult();
  }

  renderList() {
    return (
      <React.Fragment>
        {this.props.driverLastResult.map(race => {
          return race.Results.map(result => {
            if (typeof result.Time === "undefined") {
              result.Time = new Object();
              result.Time.time = "0";
            }
            return (
              <tr className="item" key={constructor.constructorId}>
                <th>
                  <h4>
                    {result.Driver.givenName} {result.Driver.familyName}
                  </h4>
                </th>
                <th>
                  <h4>{result.Constructor.name}</h4>
                </th>
                <th>
                  <h4>{result.grid}</h4>
                </th>
                <th>
                  <h4>{result.laps}</h4>
                </th>
                <th>
                  <h4>{result.position}</h4>
                </th>
                <th>
                  <h4>{result.status}</h4>
                </th>
                <th>
                  <h4>{result.FastestLap.AverageSpeed.speed} {result.FastestLap.AverageSpeed.units}</h4>
                </th>
                <th>
                  <h4>{result.FastestLap.Time.time} / {result.FastestLap.lap} / {result.FastestLap.rank}</h4>
                </th>
                <th>
                  <h4>{result.Time.time}</h4>
                </th>
              </tr>
            );
          });
        })}
      </React.Fragment>
    );
  }

  render() {
    return (
      <div className="row">
        <div className="container">
          <h1>Driver last result</h1>
          <table className="table">
            <thead>
              <tr>
                <th>Name:</th>
                <th>Constructor:</th>
                <th>Grid:</th>
                <th>Laps:</th>
                <th>Place:</th>
                <th>Status:</th>
                <th>Avg speed:</th>
                <th>Fastest time/lap/rank:</th>
                <th>Finish time:</th>
              </tr>
            </thead>
            <tbody>{this.renderList()}</tbody>
          </table>
          <ul className="namelist" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { driverLastResult: state.driverLastResult };
};
export default connect(
  mapStateToProps,
  { fecthDriverLastResult }
)(DriverLastResult);
