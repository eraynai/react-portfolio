import styled from "styled-components";
import Navbar from "./Navbar";
import Line from "./Line";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;

  @media only screen and (max-width: 1010px) {
    height: 90vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  max-width: 1400px;
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1010px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding-left: 20px;
  @media only screen and (max-width: 1010px) {
    flex: 1;
    align-items: center;
    padding-left: 0;
    justify-content: center;
    gap: 30px;
    margin-top: 30px;
    width: 100%;
  }
`;
const Title = styled.h1`
  font-size: 45px;
  @media only screen and (max-width: 1010px) {
    text-align: center;
  }
`;
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Subtitle = styled.h2`
  color: #fff;
`;
const Desc = styled.p`
  font-size: 24px;
  color: #fff;
  @media only screen and (max-width: 1010px) {
    padding: 10px;
    text-align: center;
  }
`;
const Button = styled.button`
  background: #da4ea2;
  color: #fff;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
`;
const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 1010px) {
    width: 100%;
    flex: 1;
    display: none;
  }
`;

export const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Fluid Design, Seamless Development</Title>
          <WhatWeDo>
            <Line />
            <Subtitle>What I Do</Subtitle>
          </WhatWeDo>
          <Desc>
            Developing e-commerce mastery: Tailored Shopify solutions for your
            success.
          </Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2}>
              <MeshDistortMaterial
                color="#001f3f"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
