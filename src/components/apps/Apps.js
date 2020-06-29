import React from "react";
import "../home/Content.css";
import Card from "../utility/Card";

import { GiCardRandom, GiPencil,  GiTimeTrap } from "react-icons/gi";

function Apps(props) {
  return (
    <div className="Content">
      <div className="Intro">
        <h1>Exam Preparation</h1>
        <p>Choose from one of the available apps.</p>
      </div>
      <div className="Card-wrapper">
        <Card
          link={props.flashcards ? '/' : '#'}
          active={props.flashcards}
          icon={<GiCardRandom className="icon" />}
          heading="Flashcards"
          tags={["learn"]}
          description="Master your content using flashcards."
        />
        <Card
          link={props.pastpapers ? '/' : '#'}
          active={props.pastpapers}
          icon={<GiPencil className="icon" />}
          heading="Past Exam Questions"
          tags={["Practice"]}
          description="Practice your skills with past exam questions."
        />
        <Card
          link={props.quiz ? '/' : '#'}
          active={props.quiz}
          icon={<GiTimeTrap className="icon" />}
          heading="Quiz"
          tags={["Test"]}
          description="See how you fair under time pressure."
        />
      </div>
    </div>
  );
}

export default Apps;
