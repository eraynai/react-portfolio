import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Laptop from "./Laptop";
import styled from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 120px;
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

const ThemeDevelopment = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Laptop />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <Desc>
        Build a storefront on top of Shopify's native Online Store or enhance
        your existing theme.
      </Desc>
    </>
  );
};
export default ThemeDevelopment;
