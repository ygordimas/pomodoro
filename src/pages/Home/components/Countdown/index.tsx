import { differenceInSeconds } from "date-fns";
import { useContext, useEffect, useState } from "react";

import { CyclesContext } from "../../../../contexts/CyclesContext";
import { CountContainer, Separator } from "./styles";

export function Countdown() {
  const {
    activeCycle,
    markCurrentCycleAsFinished,
    amountSecondsPassed,
    setAmountSecondsPassed,
  } = useContext(CyclesContext);

  const totalSeconds = activeCycle ? activeCycle.minutes * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;
  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutesFormatted = String(minutesAmount).padStart(2, "0");
  const secondsFormatted = String(secondsAmount).padStart(2, "0");

  useEffect(() => {
    let interval: number;
    if (activeCycle) {
      interval = setInterval(() => {
        const amount = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate)
        );

        if (amount >= totalSeconds) {
          markCurrentCycleAsFinished();
          setAmountSecondsPassed(totalSeconds);
          clearInterval(interval);
        } else {
          setAmountSecondsPassed(amount);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [activeCycle, totalSeconds]);
  return (
    <CountContainer>
      <span>{minutesFormatted[0]}</span>
      <span>{minutesFormatted[1]}</span>
      <Separator>:</Separator>
      <span>{secondsFormatted[0]}</span>
      <span>{secondsFormatted[1]}</span>
    </CountContainer>
  );
}
