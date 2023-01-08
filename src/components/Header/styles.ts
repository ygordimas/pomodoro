import styled from "styled-components";
import { defaultTheme } from "../../styles/themes/default";

export const StyledHeader = styled.div`
  display: flex;
  padding: 1rem;
  background: ${defaultTheme.yellow};
  justify-content: center;
  box-sizing: border-box;
  nav {
    display: flex;
    gap: 1rem;
    place-items: center;

    a {
      display: flex;
      place-items: center;
      text-decoration: none;
      color: ${defaultTheme["gray-dark"]};
      padding: 0.5rem;

      &.active {
        background-color: ${(props) => props.theme["green-light"]};
        border-radius: 999px;
      }

      span {
        position: relative;
        padding-left: 0.2rem;

        border-top: 4px solid transparent;
        border-bottom: 4px solid transparent;

        &::before {
          content: "";
          bottom: 0;
          left: 50%;
          position: absolute;
          width: 0;
          transform: translate(0, 100%);
          height: 4px;
          background: transparent;
          transition: all 0.2s ease-out;
        }

        &:hover {
          &::before {
            width: 80%;
            transform: translate(-50%, 100%);
            background: ${defaultTheme["green-light"]};
          }
        }
      }
    }
  }
`;
