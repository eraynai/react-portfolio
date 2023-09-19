import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Cube = () => {
  const textRef = useRef();
  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
  );
  return (
    <mesh>
      <boxGeometry />
      <meshMatcapMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["#da4ea2"]} />
          <Text ref={textRef} fontSize={1} color="#fff">
            Elevate
          </Text>
        </RenderTexture>
      </meshMatcapMaterial>
    </mesh>
  );
};
export default Cube;
