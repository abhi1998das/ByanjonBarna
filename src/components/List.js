import React, { Component } from "react";
import "./List.css";
import Faker from "faker";
export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      journal: [],
    };
  }

  componentWillMount() {
    for (let i = 0; i < 5; i++) {
      const jour = {
        heading: Faker.lorem.word(),
        para: Faker.lorem.paragraph(),
        date: 2012,
      };
      this.setState((prevState) => ({
        journal: [...prevState.journal, jour],
      }));
    }
  }
  showJournals() {
    var lis = [];
    for (var i in this.state.journal) {
      lis.push(
        <li>
          <h1>{this.state.journal[i].heading}</h1>
          <h6>{this.state.journal[i].date}</h6>
          <br /> <p>{this.state.journal[i].para}</p>
        </li>
      );
    }
    return <ol className="gradient-list">{lis}</ol>;
  }
  render() {
    return (
      <div>
        <h1>Journals</h1>
        {this.showJournals()}
      </div>
    );
  }
}
