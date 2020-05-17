import React, { Component } from "react";

import "./internship.css";
import Faker from "faker";
export default class Chapter extends Component {
  state = { internships: [] };

  componentWillMount() {
    for (let i = 0; i < 5; i++) {
      const intern = {
        name: Faker.company.companyName(),
        Description: Faker.company.catchPhraseDescriptor(),
        year: 2012,
        place: Faker.address.country(),
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
        <div class="col col-1">Report</div>
        <div class="col col-2">Description</div>
        <div class="col col-3">Place</div>
        <div class="col col-4">year</div>
      </li>
    );
    for (var i in this.state.internships) {
      lis.push(
        <li class="table-row">
          <div class="col col-1">{this.state.internships[i].name}</div>
          <div class="col col-2">{this.state.internships[i].Description}</div>
          <div class="col col-3">{this.state.internships[i].place}</div>
          <div class="col col-4">{this.state.internships[i].year}</div>
        </li>
      );
    }
    return <ul className="responsive-table">{lis}</ul>;
  }
  render() {
    return (
      <div class="container">
        <h2>Reports</h2>
        {this.showInternships()}
      </div>
    );
  }
}
