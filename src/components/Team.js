import React, { Component } from "react";
import TeamCard from "./TeamCard";
import Faker from "faker";
export default class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentWillMount() {
    for (let i = 0; i < 5; i++) {
      const user = {
        name: Faker.internet.userName(),
        email: Faker.internet.email(),
        avatar: Faker.image.imageUrl(),
        designation: Faker.name.jobTitle(),
        fbLink: Faker.internet.url(),
        twitterLink: Faker.internet.url(),
        gooLink: Faker.internet.url(),
      };
      this.setState((prevState) => ({
        users: [...prevState.users, user],
      }));
    }
  }
  showUsers() {
    var lis = [];
    for (var user in this.state.users) {
      lis.push(<TeamCard user={this.state.users[user]} />);
    }
    return <div className="row">{lis}</div>;
  }
  render() {
    this.showUsers();
    return <div className="container">{this.showUsers()}</div>;
  }
}
