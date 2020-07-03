import React, { useState } from "react"
import { MdNavigateNext, MdNavigateBefore, MdSwapHoriz } from "react-icons/md"
import "./Flashcards.css"

// max character count of 1567 must be allowed

function Flashcards() {
  const questions = require("../../../api/flashcards/ExampleQuestions.json")
  const [isFlipped, setIsFlipped] = useState("")
  const [ID, setID] = useState(0)

  const handleFlip = e => {
    isFlipped === "" ? setIsFlipped("flipped") : setIsFlipped("")
  }

  const handlePrevious = e => {
    ID - 1 < 0 ? setID(0) : setID(ID - 1)
    setIsFlipped("")
  }

  const handleNext = e => {
    ID + 1 >= questions.cards.length
      ? setID(questions.cards.length - 1)
      : setID(ID + 1)
    setIsFlipped("")
  }

  return (
    <>
      <div className="content-wrapper">
        <div className="Content">
          <div className="Intro">
            <h1>Flashcards</h1>
            <p>Click or touch the card to flip it over.</p>
          </div>
          <div className="flashcard-wrapper">
            <div className="flashcard">
              <div
                className={`flip-card ${isFlipped}`}
                onClick={e => handleFlip()}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <h4 style={{ margin: `0` }}>Question</h4>
                    <div className="flashcard-content">
                      <h3>{questions.cards[ID].question}</h3>
                    </div>
                    <p style={{ margin: `0`, opacity: `0.6` }}>
                      {questions.cards[ID].id} of {questions.cards.length}
                    </p>
                  </div>
                  <div className="flip-card-back">
                    <h4 style={{ margin: `0` }}>Answer</h4>
                    <div className="flashcard-content">
                      <h3>{questions.cards[ID].answer}</h3>
                    </div>
                    <p style={{ margin: `0`, opacity: `0.6` }}>
                      {questions.cards[ID].id} of {questions.cards.length}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flashcard-button-wrapper">
              <div
                className="flashcard-button-previous"
                onClick={e => handlePrevious()}
              >
                <MdNavigateBefore />
              </div>
              <div
                className="flashcard-button-flip"
                onClick={e => handleFlip()}
              >
                <MdSwapHoriz />
              </div>
              <div
                className="flashcard-button-next"
                onClick={e => handleNext()}
              >
                <MdNavigateNext />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Flashcards
