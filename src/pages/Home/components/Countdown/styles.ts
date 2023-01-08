import styled from "styled-components";

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
