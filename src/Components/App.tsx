import React, { useState, useEffect } from "react";
// import shuffle from "lodash.shuffle";
import data from "../data/words.json";
import { Body, Wrapper, Timer, Title, Taboos, Taboo, Footer, Button } from "./Styled";

const initialGameState = () => ({
  words: data.words,
  currentWordIndex: 0,
  guesses: 0
})

const initialTimeState = () => ({
  startTime: Date.now(),
  endTime: Date.now()
})

function useTimeout(fn: Function, ms: number, stop: () => boolean) {
  useEffect(() => {
    if (stop()) return

    const timeout = setTimeout(fn, ms)

    return () => {
      clearTimeout(timeout)
    }
  }, [fn, ms, stop])
}

export default function App() {
  const [game, setGame] = useState(initialGameState())
  const [time, setTime] = useState(initialTimeState())
  const { words, currentWordIndex, guesses } = game
  const { startTime, endTime } = time

  const currentWord = words[currentWordIndex]
  const timeString = `${((endTime - startTime) / 1000).toFixed(1)}s`;

  useTimeout(updateTimeState, 50, isGameEnded)

  function updateTimeState() {
    setTime({
      ...time,
      endTime: Date.now()
    })
  }

  function isGameEnded() {
    return currentWordIndex === words.length
  }

  function reset() {
    setGame(initialGameState())
  }

  function onSuccessClick(evt: any) {
    setGame({
      ...game, 
      guesses: game.guesses + 1,
      currentWordIndex: game.currentWordIndex + 1
    });
  }

  function onFailClick(evt: any) {
    setGame({
      ...game, 
      currentWordIndex: game.currentWordIndex + 1
    });
  }

  function onRestartClick(evt: any) {
    reset();
  }

  return (
    <Body>
      <Wrapper>
        {!isGameEnded() ? (
          <>
            <Timer>{timeString}</Timer>
            <Title>{currentWord.word}</Title>
            <Taboos>
              {currentWord.taboos.map(taboo => (
                <Taboo key={taboo}>{taboo}</Taboo>
              ))}
            </Taboos>
            <Footer>
              <Button onClick={onFailClick}>
                <span role="img" aria-label="scarta">
                  ✖
                </span>
              </Button>
              <Button
                style={{ marginLeft: 25 }}
                accent
                onClick={onSuccessClick}
              >
                <span role="img" aria-label="prossima">
                  ✔
                </span>
              </Button>
            </Footer>
          </>
        ) : (
          <>
            <Title style={{ textTransform: "none" }}>
              Ne hai indovinate {guesses} su {words.length}
            </Title>
            <Title style={{ textTransform: "none" }}>In {timeString}</Title>
            <Footer>
              <Button style={{ width: "100%" }} accent onClick={onRestartClick}>
                <span role="img" aria-label="gioca ancora">
                  Gioca ancora
                </span>
              </Button>
            </Footer>
          </>
        )}
      </Wrapper>
    </Body>
  );
}
