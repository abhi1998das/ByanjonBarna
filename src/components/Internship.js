import React, { Component } from "react";
import "./internship.css";
import Faker from "faker";
export default class Internship extends Component {
  state = { internships: [] };

  componentWillMount() {
    for (let i = 0; i < 5; i++) {
      const intern = {
        College: "JU",
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
        <div class="col col-1">Year</div>
        <div class="col col-2">Name</div>
        <div class="col col-3">College</div>
      </li>
    );
    for (var i in this.state.internships) {
      lis.push(
        <li class="table-row">
          <div class="col col-1">{this.state.internships[i].year}</div>
          <div class="col col-2">{this.state.internships[i].Name}</div>
          <div class="col col-3">{this.state.internships[i].College}</div>
        </li>
      );
    }
    return <ul className="responsive-table">{lis}</ul>;
  }
  render() {
    return (
      <div class="container">
        <h2>Internships</h2>
        {this.showInternships()}
      </div>
    );
  }
}
