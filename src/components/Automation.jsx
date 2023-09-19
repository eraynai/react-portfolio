import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import TechConsole from "./Tech-console";
import styled from "styled-components";
const Desc = styled.div`
  width: 200px;
  height: 100px;
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
const Automation = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <TechConsole />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <Desc>
        Boost efficiency with custom automations, reducing manual tasks and
        errors.
      </Desc>
    </>
  );
};
export default Automation;
