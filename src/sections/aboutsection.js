import React, { Component } from "react";
import Fullpage from "../Component/fullpage";
import data from "../data.json";
import DownIcon from "../Component/downicon";
import { Link, Button, Element } from "react-scroll";
import TitleMenuAbout from "../Component/titlemenuabout";
import TitleMenuSkill from "../Component/titlemenuskill";

class AboutSection extends Component {
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
      <Fullpage className="b">
        <h2> {data.sections[0].title} </h2>
        <p> {data.sections[0].items[0].content} </p>
      </Fullpage>
      <Link
      activeClass="active"
      to="test2"
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
      delay={100}
    >
      <DownIcon icon={data.icons.down} />
    </Link>
    <Element name="test2" className="element"></Element>
    </div>
    );
  }
}

export default AboutSection;
