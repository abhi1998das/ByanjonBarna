import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./internship.css";
import Faker from "faker";
export default class Repots extends Component {
  state = { internships: [] };

  componentWillMount() {
    for (let i = 0; i < 5; i++) {
      const intern = {
        Report: Faker.company.companyName(),
        Description: Faker.company.catchPhraseDescriptor(),
        year: 2012,
        link: Faker.internet.url(),
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
        <div class="col col-3">Year</div>
        <div class="col col-4">Link</div>
      </li>
    );
    for (var i in this.state.internships) {
      lis.push(
        <li class="table-row">
          <div class="col col-1">{this.state.internships[i].Report}</div>
          <div class="col col-2">{this.state.internships[i].Description}</div>
          <div class="col col-3">{this.state.internships[i].year}</div>
          <div class="col col-4">
            <Link to={this.state.internships[i].link}>PDF</Link>
          </div>
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
