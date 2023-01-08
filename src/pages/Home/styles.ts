import styled from "styled-components";
import { defaultTheme } from "../../styles/themes/default";

export const HomeContainer = styled.div`
  display: flex;

  max-width: 74rem;
  padding-top: 5rem;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const FormContainer = styled.form`
  display: flex;
  gap: 1rem;
  color: ${defaultTheme["green-light"]};
  line-height: 2.5rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  header {
    text-align: center;
    letter-spacing: 0.08rem;
  }
`;

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 4px solid ${(props) => props.theme["green-light"]};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme["green-light"]};
  caret-color: ${(props) => props.theme["green-light"]};
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;
  width: 24rem;
`;

export const MinutesInput = styled(BaseInput)`
  width: 4rem;
`;

export const CountContainer = styled.div`
  display: flex;
  font-family: "Roboto Mono", monospace;
  font-weight: 600;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme["gray-dark"]};
  vertical-align: middle;

  display: flex;
  gap: 1rem;

  padding-top: 5rem;

  span {
    background: ${(props) => props.theme["green-light"]};
    border-radius: 8px;

    padding: 2rem 1rem;
  }
`;

export const Separator = styled.div`
  color: ${(props) => props.theme["yellow"]};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`;

export const StartButton = styled.button`
  margin-top: 2rem;
  height: 4rem;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${(props) => props.theme.yellow};

  &:disabled {
    background: ${(props) => props.theme["gray-light"]};
    border: 0;
    cursor: default;
    color: ${(props) => props.theme["green-medium"]};
  }
`;
