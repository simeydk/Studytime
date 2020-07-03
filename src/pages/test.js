import React, { useState, useEffect } from "react"
import { useHotkeys } from 'react-hotkeys-hook';

import './test.css'

const zip = rows => rows[0].map((_, c) => rows.map(row => row[c]))

const quiz = getRawData()[0]
const pairs = zip([quiz.q_list, quiz.a_list])

function Page() {
    const [flipped, setFlipped] = useState(false)
    const toggleFlipped = () => { console.log('toggle flipped'); setFlipped(!flipped) }

    const [frontText, setFrontText] = useState("Front")
    const [backText, setBackText] = useState("Back")

    const [index, setIndex] = useState(0)
    const [question, answer] = pairs[index]

    const onKeydown = e => {
        console.log(e.key)
        if (e.key === " ") {
            e.preventDefault()
            toggleFlipped()
        } else if (e.key === "ArrowLeft") {
            e.preventDefault()
            setFlipped(false)
            setIndex((index - 1 + pairs.length) % pairs.length)
        } else if (e.key === "ArrowRight") {
            e.preventDefault()
            setFlipped(false)
            setIndex((index + 1 + pairs.length) % pairs.length)
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', onKeydown)

        return () => document.removeEventListener('keydown', onKeydown)
    })

    // useHotkeys('space', e => { e.preventDefault(); console.log('space'); toggleFlipped(); })

    const className = ["card", flipped ? ' flipped' : ''].join(' ')

    return (
        <div id="root">
            <div className="card-wrapper" onClick={toggleFlipped}>
                <div className={className}>
                    <div className="card-side front">{question}</div>
                    <div className="card-side back">{answer}</div>
                </div>
            </div>
            <div className="buttons">
                {pairs.map((_, i) => <button className="button" onClick={() => setIndex(i)}>{i + 1}</button>)}
            </div>
        </div>
    )
}

export default Page

function getRawData() {
    return [
        {
            "title": "General Trivia",
            "q_url": "https://www.challengethebrain.com/general-trivia-questions.htm",
            "a_url": "https://www.challengethebrain.com/general-trivia-answers.htm",
            "a_title": "General Trivia Answers",
            "q_list": [
                "When referring to a USB port, what do the letter USB stand for?",
                "During which century did Blackbeard become famous for seafaring?",
                "True or false: Amphibians are invertebrates?",
                "The Ring of Fire is located in the basin of which ocean?",
                "Which celebration is less commonly known as 'the eve of All Saints' Day'?",
                "What sport is the Keirin event associated with?",
                "Khartoum is the capital of which country?",
                "The digestive system delivers nutrients to cells via what?",
                "What is the time difference between London, UK and Sydney, Australia?",
                "What is a cosmonaut?",
                "Who was the first recorded European to reach the east coast of Australia?",
                "Which sea does the River Rhine empty into?",
                "By what name was Duke William of Normandy commonly known as?",
                "True or False: Buzz Aldrin's mother's maiden name was Moon?",
                "Which Shakespearean play features a character called Lysander?",
                "What is the largest species of penguin?",
                "What is the chemical symbol for magnesium on the periodic table?",
                "Who invented the first full scale working railway steam locomotive?",
                "What sports form an Olympic triathlon?",
                "The Bridal Veil Falls, American Falls and Canadian Horseshow make up what?"
            ],
            "a_list": [
                "Universal Serial Bus",
                "18th century",
                "False: Vertebrates as they have backbones",
                "The Pacific Ocean",
                "Halloween",
                "Cycling",
                "Sudan",
                "The bloodstream",
                "Nine hours (Sydney's 9 hours ahead of London)",
                "A Russian space traveller",
                "Captain James Cook",
                "The North Sea",
                "William the Conqueror",
                "True",
                "A Midsummer Night's Dream",
                "Emperor Penguin",
                "mg",
                "Richard Trevithick",
                "Swimming, cycling, running",
                "The Niagara Falls"
            ]
        },
        {
            "title": "General Knowledge Quiz",
            "q_url": "https://www.challengethebrain.com/general-knowledge-quiz.htm",
            "a_url": "https://www.challengethebrain.com/answers-general-knowledge-quiz.htm",
            "a_title": "Answers",
            "q_list": [
                "Which famous novel features two fictional islands called Lilliput and Blefuscu?",
                "Which planet takes around 3 Earth months to orbit the Sun?",
                "What is a synonym?",
                "The Northwest Passage is a sea route that connects which two oceans?",
                "What is the only mammal on Earth that can actively fly?",
                "What is the tallest building in America?",
                "What song was released in 1964 and begins with the lyrics, 'Hello Darkness my old friend, I've come to talk with you again'?",
                "Can you place the following fractions in order beginning with the smallest first: 6/9, 1/2, 7/8, 3/5?",
                "Who is known as the world's fastest 1000m sprinter?",
                "The Harmon Trophy is a set of three international trophies awarded annually to the world's most outstanding what?",
                "What the longest country in South American?",
                "Who did Adolf Hitler succeed as President of Germany?",
                "What is the title of Louisa May Alcott's 1868 children's novel based on the lives of four sisters?",
                "Can you unscramble the following letters to reveal a word that means quiet: LISTEN?",
                "What is the name of the character played by Keira Knightley in the 2005 movie Pride and Prejudice?",
                "Good Friday commemorates which important event in the life of Jesus?",
                "What part of a bird of prey is known as a talon?",
                "Which one of the following numbers is a prime number: 12, 15, 17, 21, 27?",
                "What is the name of the famous fountain visited by three women in the 1954 film 'Three Coins in a Fountain'?",
                "On which Hawaiian Island did the 1941 attack on Pearl Harbour occur?"
            ],
            "a_list": [
                "Gulliver's Travels",
                "Mercury",
                "A word that has the same meaning as another word",
                "The Pacific Ocean and the northern Atlantic Ocean",
                "Bat",
                "One World Trade Center",
                "The Sound of Silence",
                "1/2, 3/5, 6/9, 7/8",
                "Usain Bolt",
                "Aviator, aviatrix and aeronaut",
                "Chile",
                "Paul von Hindenburg",
                "Little Women",
                "Silent",
                "Elizabeth Bennet",
                "The crucifixion of Jesus",
                "Claw",
                "17 (only divisable by 1 and itself)",
                "The Trevi Fountain",
                "Oahu"
            ]
        },
        {
            "title": "General Knowledge Quiz One",
            "q_url": "https://www.challengethebrain.com/questions-for-general-knowledge-quiz-one.htm",
            "a_url": "https://www.challengethebrain.com/answers-general-knowledge-quiz-one.htm",
            "a_title": "General Knowledge Answers to Quiz One",
            "q_list": [
                "Who wrote the song 'Auld Lang Syne'?",
                "How many square meters are there in a hectare?",
                "What famous woman was nicknamed 'The Iron Lady'?",
                "Who won the Women's Doubles title in the French Open 2010?",
                "How many rings does Saturn have around it?",
                "How many strings does a standard Spanish guitar have?",
                "Who wrote the story of Pinocchio?",
                "What was the name of Adolf Hitler's mistress?",
                "Which of the five senses develops first?",
                "What year was the National Lottery introduced in Great Britain?",
                "What are the three primary colours?",
                "Is hot air lighter or heavier than cold air?",
                "Who was the President of the US at the beginning of the 20th century?",
                "What was the name of the actress that John McEnroe married?",
                "In which ocean is Hawaii situated?",
                "Which star sign is represented by the twins?",
                "Which year did Cliff Richard release his song entitled 'Mistletoe and Wine'?",
                "How many carats are there in pure gold?",
                "Which town did the Pied Piper rid of rats?",
                "Who wrote 'The Little Mermaid'?"
            ],
            "a_list": [
                "Robert Burns",
                "10,000",
                "Margaret Thatcher",
                "Serena and Venus Williams",
                "Seven (7)",
                "Six (6)",
                "Carlo Collodi",
                "Eva Braun",
                "Smell",
                "1994",
                "Blue, red and yellow",
                "Lighter",
                "William McKinley",
                "Tatum O'Neal",
                "The Pacific",
                "Gemini",
                "1988",
                "Twenty-four (24)",
                "Hamelin",
                "Hans Christian Andersen"
            ]
        },
    ]
}