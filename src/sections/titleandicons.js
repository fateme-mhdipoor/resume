import React, { Component } from "react";
import Fullpage from "../Component/fullpage";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import DownIcon from "../Component/downicon";
import TitleMenuAbout from "../Component/titlemenuabout";
import TitleMenuSkill from "../Component/titlemenuskill";
import { Link, Button, Element } from "react-scroll";

class TitleAndIcons extends Component {
  state = {
    color: "black",
  };
  changeColor = () => {
    this.setState({
      color: this.state.color == "black" ? "purple" : "black",
    });
  };
  render() {
    return (
      <div>
          <Link
          activeClass="active"
          to="test1"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          delay={100}
        >
          <TitleMenuAbout title={data.sections[0].title} />
        </Link>
        <Link
          activeClass="active"
          to="test2"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          delay={100}
        >
          <TitleMenuSkill title={data.sections[1].title} />
        </Link>
        <Element name="test2" className="element"></Element>
        <Element name="test1" className="element"></Element>
        <Fullpage className="a">
          <h1
            className="title"
            style={{
              color: this.state.color,
            }}
            onMouseOver={() => {
              this.changeColor();
            }}
            onMouseLeave={() => {
              this.changeColor();
            }}
          >
            {data.title}
          </h1>
          <div>
            <h2>{data.subtitle}</h2>
          </div>
          <div className="icons-wrapper">
            {Object.keys(data.links).map((key) => {
              return (
                <div className="icon">
                  <SocialIcon url={data.links[key]} />
                </div>
              );
            })}
          </div>
        </Fullpage>
        <Link
          activeClass="active"
          to="test1"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          delay={100}
        >
          <DownIcon icon={data.icons.down} />
        </Link>
        <Element name="test1" className="element"></Element>
      </div>
    );
  }
}

export default TitleAndIcons;
