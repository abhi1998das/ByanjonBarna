import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class TeamCard extends Component {
  render() {
    console.log(this.props.user);
    return (
      <div className="col-md-4 col-sm-4">
        <div className="team-member">
          <div className="team-img">
            <img
              src={this.props.user.avatar}
              alt="team member"
              className="img-fluid"
            />
          </div>
          <div className="team-hover">
            <div className="desk">
              <h4>{this.props.user.designation}</h4>
            </div>
            <div className="s-link">
              <Link to={this.props.user.fbLink}>
                <i className="fa fa-facebook"></i>
              </Link>
              <Link to={this.props.user.twitterLink}>
                <i className="fa fa-twitter"></i>
              </Link>
              <Link to={this.props.user.gooLink}>
                <i className="fa fa-google-plus"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="team-title">
          <h5>{this.props.user.name}</h5>
          <span>{this.props.user.email}</span>
        </div>
      </div>
    );
  }
}
