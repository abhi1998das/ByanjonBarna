import React, { Component } from "react";
import "./internship.css";
import Faker from "faker";
export default class Institute extends Component {
  state = { internships: [] };

  componentWillMount() {
    for (let i = 0; i < 5; i++) {
      const intern = {
        Institute: Faker.company.companyName(),
        Location: Faker.address.state(),
      };
      this.setState((prevState) => ({
        internships: [...prevState.internships, intern],
      }));
    }
  }
  showInternships() {
    var lis = [];
    lis.push(
      <li class="table-header">
        <div class="col col-1 col-2">Name</div>
        <div class="col col-3">Place</div>
      </li>
    );
    for (var i in this.state.internships) {
      lis.push(
        <li class="table-row">
          <div class="col col-1 col-2">
            {this.state.internships[i].Institute}
          </div>
          <div class="col col-3">{this.state.internships[i].Location}</div>
        </li>
      );
    }
    return <ul className="responsive-table">{lis}</ul>;
  }
  render() {
    return (
      <div class="container">
        <h2>Associated Institutes</h2>
        {this.showInternships()}
      </div>
    );
  }
}
