import React from "react";
import Header from "../Header";
import Footer from "../Footer";

import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

import "./Flashcards.css";

function flashcards(props) {
  return (
    <>
      <Header />
      <div className="content-wrapper">
        <div className="Content">
          <div className="Intro">
            <h1>Flashcards</h1>
            <p>Hover over the card to flip it over.</p>
          </div>
          <div className="flashcard-wrapper">
            <div className="flashcard">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <h4>Question</h4>
                    <h2>This is an example question</h2>
                  </div>
                  <div class="flip-card-back">
                    <h4>Answer</h4>
                    <h2>This is an example answer</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="flashcard-button-wrapper">
              <div className="flashcard-button-previous">
                <MdNavigateBefore />
              </div>
              <div className="flashcard-button-next">
                <MdNavigateNext />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default flashcards;
