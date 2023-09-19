import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "./React";
import styled from "styled-components";
const Desc = styled.div`
  width: 200px;
  height: 80px;
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

const AdvancedStore = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <React />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <Desc>Seamlessly integrate with third-party tools and APIs.</Desc>
    </>
  );
};
export default AdvancedStore;
