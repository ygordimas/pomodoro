import { useContext } from "react";
import { CyclesContext } from "../../contexts/CyclesContext";
import { formatDistanceToNow } from "date-fns";
import { HistoryContainer, Status } from "./styles";

export function History() {
  const { cycles } = useContext(CyclesContext);

  return (
    <>
      <HistoryContainer>
        <header>
          <span>Task</span>
          <span>Duration</span>
          <span>Start Time</span>
          <span>Status</span>
        </header>
        <ul>
          {cycles.map((cycle) => (
            <li key={cycle.id}>
              <span>{cycle.task}</span>
              <span>{cycle.minutes} minutes</span>
              <span>
                {formatDistanceToNow(new Date(cycle.startDate), {
                  addSuffix: true,
                })}
              </span>

              {cycle.completedDate && (
                <Status statusColor="green">Completed</Status>
              )}
              {cycle.interruptedDate && (
                <Status statusColor="red">Interrupted</Status>
              )}
              {!cycle.completedDate && !cycle.interruptedDate && (
                <Status statusColor="orange">In Progress</Status>
              )}
            </li>
          ))}
        </ul>
      </HistoryContainer>
    </>
  );
}
