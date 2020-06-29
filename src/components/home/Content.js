import React from "react";
import "./Content.css";
import Card from "../utility/Card";

import { GiFlame, GiMicrophone, GiLifeBar } from "react-icons/gi";

function Content() {
  return (
    <div className="Content">
      <div className="Intro">
        <h1>Actuarial Exams</h1>
        <p>Helping students pass exams, one question at a time.</p>
      </div>
      <div className="Card-wrapper">
        <Card
          link='/communications-apps'
          icon={<GiMicrophone className="icon" />}
          heading="Communications"
          tags={["N211"]}
          description="Communications Exam Preparation."
        />
        <Card
          link='/contingencies-apps'
          icon={<GiFlame className="icon" />}
          heading="Contingencies"
          tags={["A213", "CM1"]}
          description="Past Exam Questions and MCQ's based on the content of A213 (commonly referred to as CT5)."
        />
        <Card
          link='/models-apps'
          icon={<GiLifeBar className="icon" />}
          heading="Risk Modelling and Survival Analysis"
          tags={["A212", "CS2"]}
          description="Flashcards, Past Exam Questions and MCQ's based on the A212 content (combined A202 and A204)."
        />
      </div>
    </div>
  );
}

export default Content;
