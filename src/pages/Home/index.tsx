import {
  HomeContainer,
  TaskInput,
  MinutesInput,
  FormContainer,
  CountContainer,
  Separator,
  StartButton,
} from "./styles";
import { Play } from "phosphor-react";

export function Home() {
  return (
    <HomeContainer>
      <FormContainer action="">
        <label htmlFor="task">I'll be working on</label>
        <TaskInput id="task" type="text" placeholder="Describe your task" />
        <label htmlFor="minutes">for</label>
        <MinutesInput id="minutes" type="number" placeholder="00" />
        <span>minutes.</span>
      </FormContainer>

      <CountContainer>
        <span>0</span>
        <span>0</span>
        <Separator>:</Separator>
        <span>0</span>
        <span>0</span>
      </CountContainer>

      <StartButton onClick={() => console.log("clicked")} type="submit">
        <Play size={24} />
        Start
      </StartButton>
    </HomeContainer>
  );
}
