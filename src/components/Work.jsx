import { useState } from "react";
import styled, { keyframes } from "styled-components";
import ThemeDevelopment from "./ThemeDevelopment";
import Optimizations from "./Optimizations";
import AdvancedStore from "./AdvancedStore";
import Automation from "./Automation";

const data = [
  "Theme Development",
  "Advanced Storefronts",
  "Optimization",
  "Automation",
];

const moveText = keyframes`
  to {
    width: 100%;
  }
`;

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1010px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 1010px) {
    padding: 20px;
    justify-content: center;
    width: 100%;
  }
`;

const Right = styled.div`
  flex: 1;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 55px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  @media only screen and (max-width: 1010px) {
    font-size: 34px;
    color: #fff;
    -webkit-text-stroke: 0px;
  }

  &::after {
    content: "${(props) => props.text}";
    color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    color: #da4ea2;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    &::after {
      animation: ${moveText} 0.5s linear both;
    }
  }
`;

export const Work = () => {
  const [work, setWork] = useState("Theme Development");
  return (
    <Section id="workSection">
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === "Theme Development" ? (
            <ThemeDevelopment />
          ) : work === "Advanced Storefronts" ? (
            <AdvancedStore />
          ) : work === "Optimization" ? (
            <Optimizations />
          ) : (
            <Automation />
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Work;
