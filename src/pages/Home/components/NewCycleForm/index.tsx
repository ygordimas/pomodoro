import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../contexts/CyclesContext";
import { TaskInput, MinutesInput, FormContainer } from "./styles";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();
  return (
    <FormContainer>
      <header>
        <label htmlFor="task">I'll be working on</label>
        <TaskInput
          id="task"
          type="text"
          placeholder="Describe your task"
          {...register("task")}
        />
        <label htmlFor="minutes">for</label>
        <MinutesInput
          id="minutes"
          type="number"
          placeholder="00"
          {...register("minutes", { valueAsNumber: true })}
        />
        <span>minutes.</span>
      </header>
    </FormContainer>
  );
}
