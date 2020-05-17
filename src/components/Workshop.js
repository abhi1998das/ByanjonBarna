import React, { Component } from "react";
import "./List.css";
import Faker from "faker";
export default class Workshop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  componentWillMount() {
    for (let i = 0; i < 5; i++) {
      const book = {
        heading: Faker.lorem.word(),
        para: Faker.lorem.paragraph(),
        date: 2012,
      };
      this.setState((prevState) => ({
        books: [...prevState.books, book],
      }));
    }
  }
  showBooks() {
    var lis = [];
    for (var i in this.state.books) {
      lis.push(
        <li>
          <h1>{this.state.books[i].heading}</h1>
          <h6>{this.state.books[i].date}</h6>
          <br /> <p>{this.state.books[i].para}</p>
        </li>
      );
    }
    return <ol className="gradient-list">{lis}</ol>;
  }
  render() {
    return (
      <div>
        <h1>Workshops</h1>
        {this.showBooks()}
      </div>
    );
  }
}
