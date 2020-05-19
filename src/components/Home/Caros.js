import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default class Caros extends Component {
  state = { images: [] };
  componentDidMount() {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: "cars" },
        headers: {
          Authorization:
            "Client-ID nfAznssZetKaS6zHAUmMYeXY4wlOCJSmaNmHDqZQd2E",
        },
      })
      .then((response) => {
        this.setState({ images: response.data.results });
      });
  }

  lister(images) {
    const len = images.length;
    let lostr = [];
    for (let i = 0; i < len + 2; i++) {
      if (i === 0) {
        lostr.push(
          <li
            key={i}
            data-target="#myCarousel"
            data-slide-to={i.toString()}
            className="active"
          ></li>
        );
      } else {
        lostr.push(
          <li
            key={i}
            data-target="#myCarousel"
            data-slide-to={i.toString()}
          ></li>
        );
      }
    }
    return <ol className="carousel-indicators">{lostr}</ol>;
  }

  lister2(images) {
    const len = images.length;
    let lostr = [];
    for (let i = 0; i < len; i++) {
      if (i === 0) {
        lostr.push(
          <div className="carousel-item active" key={i}>
            <img src={images[i].urls.regular} alt="imgx" />
          </div>
        );
      } else {
        lostr.push(
          <div className="carousel-item " key={i}>
            <img src={images[i].urls.regular} alt="imagex" />
          </div>
        );
      }
    }
    lostr.push(
      <div className="carousel-item" key={100}>
        <svg
          className="bd-placeholder-img"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        >
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: `rgb(93, 45, 136)`, stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: `rgb(234, 76, 17)`, stopOpacity: 1 }}
            />
          </linearGradient>

          <rect width="100%" height="100%" fill="url(#grad1)" />
        </svg>
        <div className="container">
          <div className="carousel-caption">
            <h1>Another example headline.</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it
            </p>
            <p>
              <Link className="btn btn-lg btn-primary" to="/" role="button">
                Learn more
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
    lostr.push(
      <div className="carousel-item" key={200}>
        <svg
          className="bd-placeholder-img"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        >
          <rect width="100%" height="100%" fill="#777" />
        </svg>
        <div className="container">
          <div className="carousel-caption text-right">
            <h1>See more of us</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it
            </p>
            <p>
              <Link className="btn btn-lg btn-primary" to="/" role="button">
                Browse gallery
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
    return <div className="carousel-inner">{lostr}</div>;
  }

  render() {
    return (
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        {this.lister(this.state.images)}

        {this.lister2(this.state.images)}
      </div>
    );
  }
}
