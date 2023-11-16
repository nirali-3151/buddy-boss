import styled from "styled-components";

export const Toggle = styled.button`
  width:46px;
  height: 25px;
  position: absolute;
  cursor: pointer;
  border-radius: 20px;
  outline: none;
  right:60px;
  background-color: ${(props) => (props.on ? "#e0623c" : "#353b48")};
  border: 3px solid white;

  &::after {
    content: "";
    position: absolute;
    top: 4.4px;
    left:4px
    will-change: transform;
    transform: translate(${(props) => (props.on ? 6.0 : -16)}px);
    transition: transform 0.2s ease-out;
    width: 10px;
    height:  10px;
    background: white;
    outline: none;
    border-radius: 50%;
  }
`;