import { CountContainer, Separator } from "./styles";

export function Countdown() {
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
