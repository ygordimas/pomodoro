import styled from "styled-components";
import { defaultTheme } from "../../styles/themes/default";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 74rem;
  padding-top: 5rem;
  margin: 0 auto;
  box-sizing: border-box;
  color: ${(props) => props.theme["yellow-light"]};
`;

export const BaseButton = styled.button`
  margin-top: 2rem;
  height: 4rem;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  border-radius: 8px;
  cursor: pointer;

  &:disabled {
    background: ${(props) => props.theme["gray-light"]};
    border: 0;
    cursor: default;
    color: ${(props) => props.theme["green-medium"]};
  }
`;

export const StartButton = styled(BaseButton)`
  background-color: ${(props) => props.theme.yellow};
`;

export const StopCountdownButton = styled(BaseButton)`
  background-color: ${(props) => props.theme.red};
`;
