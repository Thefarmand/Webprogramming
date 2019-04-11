import React from "react";
import { fecthConstructors } from "../actions/index";
import { connect } from "react-redux";

class ConstructorList extends React.Component {
  componentDidMount() {
    this.props.fecthConstructors();
  }

  renderList() {
    return this.props.constructors.map(constructor => {
      return (  

        <tr className="item" key={constructor.constructorId}>
          <th >
            <h4>
            {constructor.name}
            </h4>
          </th>
          <th>
            <h4>
            {constructor.nationality}
            </h4>
          </th>
          <th>
            <h4>
            <a href={constructor.url} target="_blank">{constructor.url}</a>
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
          <h1>Constructors in 2019</h1>
          <table className="table">
            <thead>
              <tr>
                <th >Name:</th>
                <th >Country:</th>
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
  return { constructors: state.constructors };
};
export default connect(
  mapStateToProps,
  { fecthConstructors }
)(ConstructorList);
