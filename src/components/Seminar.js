import React, { Component } from "react";
import "./internship.css";
import Faker from "faker";
export default class Seminar extends Component {
  state = { internships: [] };

  componentWillMount() {
    for (let i = 0; i < 5; i++) {
      const intern = {
        Award: Faker.company.companyName(),
        Name: Faker.name.firstName(),
        year: 2012,
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
        <div class="col col-1">Topic</div>
        <div class="col col-2">Guest</div>
        <div class="col col-3">Year</div>
      </li>
    );
    for (var i in this.state.internships) {
      lis.push(
        <li class="table-row">
          <div class="col col-1">{this.state.internships[i].Award}</div>
          <div class="col col-2">{this.state.internships[i].Name}</div>
          <div class="col col-3">{this.state.internships[i].year}</div>
        </li>
      );
    }
    return <ul className="responsive-table">{lis}</ul>;
  }
  render() {
    return (
      <div class="container">
        <h2>Awards</h2>
        {this.showInternships()}
      </div>
    );
  }
}
