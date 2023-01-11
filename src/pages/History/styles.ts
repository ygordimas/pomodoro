import styled from "styled-components";

export const HistoryContainer = styled.div`
  color: ${(props) => props.theme["gray-light"]};

  max-width: 90%;
  margin: 5rem auto 0 auto;

  line-height: 2rem;
  padding-inline: 1rem;

  header {
    background: ${(props) => props.theme.yellow};
    border-radius: 0.5rem 0.5rem 0 0;
    display: flex;
    font-weight: 600;

    span {
      flex: 1;

      &:first-child {
        padding-left: 0.5rem;
      }
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    align-content: center;

    li {
      font-weight: 400;
      background-color: ${(props) => props.theme["green-light"]};
      display: flex;
      border-bottom: 1px solid ${(props) => props.theme.yellow};
      list-style: none;

      span {
        flex: 1;

        &:first-child {
          padding-left: 0.5rem;
        }
      }
    }
  }
`;

interface StatusProps {
  statusColor: "orange" | "red" | "green";
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    background: ${(props) => props.theme[props.statusColor]};
    border-radius: 100%;
  }
`;
