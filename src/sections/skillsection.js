import React, { Component } from "react";
import Fullpage from "../Component/fullpage";
import data from "../data.json";
import SkillCard from "../Component/skillcard.js";
import "../Component/skillcard.css";
import { Link, Button, Element } from "react-scroll";
import TitleMenuAbout from "../Component/titlemenuabout";
import TitleMenuSkill from "../Component/titlemenuskill";

class SkillSection extends Component {
  render() {
    return (
      <div>
      <Fullpage className="c">
        <h2> {data.sections[1].title}</h2>
        <div className="card-wrapper">
          {data.sections[1].items.map(thisSkill => {
            return <SkillCard skill={thisSkill} />;
          })}
        </div>
      </Fullpage>
      </div>
    );
  }
}

export default SkillSection;
