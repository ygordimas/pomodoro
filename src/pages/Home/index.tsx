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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

// interface NewCycleFormData {
//   task: string;
//   minutes: number;
// }

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutes: zod
    .number()
    .min(1, "Amount must be greater than 1.")
    .max(60, "Amount must be less than or equal to 60."),
});

//retrieves type while infering from the validation schema types
type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function Home() {
  const { register, handleSubmit, watch, reset, formState } =
    useForm<NewCycleFormData>({
      resolver: zodResolver(newCycleFormValidationSchema),
      defaultValues: {
        task: "",
        minutes: 0,
      },
    });

  function handleCreateNewCycle(data: NewCycleFormData) {
    reset();
  }

  // console.log(formState.errors);

  const task = watch("task");
  const isSubmitDisabled = !task;
  return (
    <HomeContainer>
      <FormContainer onSubmit={handleSubmit(handleCreateNewCycle)} action="">
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
        <CountContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountContainer>

        <StartButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Start
        </StartButton>
      </FormContainer>
    </HomeContainer>
  );
}
