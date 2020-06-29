import React from "react";
import "./Subheader.css";
import Card from "../Card";

import { GiFlame, GiMicrophone, GiLifeBar } from "react-icons/gi";

function Subheader() {
  return (
    <div className="Subheader">
      <div className="Intro">
        <h1>Actuarial Exams</h1>
        <p>Helping students pass exams, one question at a time.</p>
      </div>
      <div className="Card-wrapper">
        <Card
          icon={<GiMicrophone className="icon" />}
          heading="Communications"
          tags={["N211"]}
          description="Communications Exam Prep"
        />
        <Card
          icon={<GiFlame className="icon" />}
          heading="Contingencies"
          tags={["A213", "CM1"]}
          description="Past Exam Questions and MCQ's based on the content of A213 (commonly referred to as CT5)."
        />
        <Card
          icon={<GiLifeBar className="icon" />}
          heading="Risk Modelling and Survival Analysis"
          tags={["A212", "CS2"]}
          description="Flashcards, Past Exam Questions and MCQ's based on the A212 content (combined A202 and A204)."
        />
      </div>
    </div>
  );
}

export default Subheader;
