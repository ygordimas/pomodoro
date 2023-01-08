import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  gap: 1rem;
  color: ${(props) => props.theme["gray-light"]};
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
