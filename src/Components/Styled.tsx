import styled from "@emotion/styled";

const colors = {
  color1: "#fafafa", // bg
  color2: "#0971f1", // accent
  text: "#191919"
};
export const Body = styled.div`
  background-color: ${colors.color1};
  height: 100%;
`;
export const Wrapper = styled.div`
  position: relative;
  overflow: auto;
  padding: 25px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 480px;
  height: 100%;
  color: ${colors.text};
`;
export const Timer = styled.div`
  position: absolute;
  right: 25px;
`
export const Title = styled.h1`
  margin: 0;
  margin-top: 25px;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  text-transform: capitalize;
`;
export const Taboos = styled.ul`
  padding: 30px;
  margin: 0;
  margin-top: 50px;
  background-color: rgba(255, 255, 255, 0.2);
  border: 4px solid ${colors.text};
  border-radius: 4px;
  color: ${colors.text};
  font-size: 1.25rem;
  text-transform: capitalize;
  list-style: none;
`;
export const Taboo = styled.li`
  & + & {
    margin-top: 25px;
  }
`;
export const Footer = styled.footer`
  position: absolute;
  right: 25px;
  bottom: 25px;
  left: 25px;
  display: flex;
  justify-content: space-between;
`;

type ButtonProps = {
  accent?: Boolean;
};

export const Button = styled.button`
  flex: 1;
  padding: 20px;
  border: 4px solid ${colors.color2};
  border-radius: 4px;
  background-color: ${(props: ButtonProps) =>
    props.accent ? colors.color2 : "transparent"};
  color: ${props => (props.accent ? colors.color1 : colors.color2)};
  font-size: 1.25rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: opacity 0.15s ease-in-out;

  &:hover,
  &:focus,
  &:active {
    opacity: 0.9;
  }
`;
