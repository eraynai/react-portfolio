import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Stats from "./Stats";
import styled from "styled-components";
const Desc = styled.div`
  width: 200px;
  height: 150px;
  background: #da4ea2;
  padding: 20px;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;
  @media only screen and (max-width: 1010px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const Optimizations = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Stats />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <Desc>
        Optimizing performance, SEO, and accessibility with a focus on Core Web
        Vitals and storefront a11y.
      </Desc>
    </>
  );
};
export default Optimizations;
