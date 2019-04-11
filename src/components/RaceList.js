import React from "react";
import { fecthRaces } from "../actions/index";
import { connect } from "react-redux";

class RaceList extends React.Component {
  componentDidMount() {
    this.props.fecthRaces();
  }

  renderList() {
    return this.props.races.map(race => {
      return (  
      <tr className="item" key={race.raceId}>
        <th >
          <h4>
          {race.round} 
          </h4>
        </th>
        <th>
          <h4>
          {race.raceName}
          </h4>
        </th>
        <th>
          <h4>
          {race.date}
          </h4>
        </th>
        <th>
          <h4>
          {race.Circuit.circuitName}
          </h4>
        </th>
        <th>
          <h4>
          {race.Circuit.Location.locality}
          </h4>
        </th>
        <th>
          <h4> 
          <a href={race.url} target="_blank">{race.url}</a>
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
          <h1>Races in 2019</h1>
          <table className="table">
            <thead>
              <tr>
                <th >Round:</th>
                <th >Name:</th>
                <th >Date:</th>
                <th >Rink name:</th>
                <th >Town:</th>
                <th >Link:</th>
              </tr>
            </thead>
            <tbody>
           {this.renderList()}
              </tbody>
            </table> 
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return { races: state.races };
  };
  export default connect(
    mapStateToProps,
    { fecthRaces }
  )(RaceList);
