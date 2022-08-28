import styled from "styled-components";

export const StyledTimeline = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(${(props) => props.length}, 1fr);
  width: 100%;
  height: ${(props) => props.height};
  position: relative;
  background-color: ${(props) => props.bg};
`;

export const StyledInterval = styled.span`
  grid-column: ${(props) => props.positionX};
  position: absolute;
  top: -2rem;
  transform: rotate(-45deg);
`;

export const StyledEvent = styled.span`
  grid-column: ${(props) => props.positionX};
  top: ${(props) => props.positionY};
  left: 0;
  position: absolute;
  margin: 0;
  padding: 0;
`;

export const StyledEventIcon = styled.div`
  display: inline-block;
  width: 5px;
  height: 5px;
  transform: rotate(45deg);
  background-color: black;
  margin-right: 0.3rem;
`;

export const StyledPeriod = styled.span`
  width: 100%;
  text-align: center;
  grid-column: ${(props) => props.start} / ${(props) => props.end};
  top: ${(props) => props.positionY};
  background-color: ${(props) => props.bg};
  left: 0;
  position: absolute;
  margin: 0;
  padding: 0;
`;
