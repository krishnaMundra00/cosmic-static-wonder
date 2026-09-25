import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import type { Group } from "three";

type SceneColors = {
  ink: string;
  ivory: string;
  mineral: string;
  signal: string;
};

const atoms: Array<{ position: [number, number, number]; scale: number; tone: keyof SceneColors }> = [
  { position: [0, 0, 0], scale: 0.78, tone: "ivory" },
  { position: [-1.5, 0.9, 0.3], scale: 0.46, tone: "signal" },
  { position: [1.55, 0.82, -0.1], scale: 0.52, tone: "mineral" },
  { position: [-1.1, -1.25, -0.35], scale: 0.4, tone: "mineral" },
  { position: [1.18, -1.12, 0.45], scale: 0.42, tone: "signal" },
  { position: [0.1, 1.85, -0.5], scale: 0.33, tone: "ivory" },
];

function Molecule({ colors }: { colors: SceneColors }) {
  const group = useRef<Group>(null);

  useFrame((_, rawDelta) => {
    const delta = Math.min(rawDelta, 0.05);
    if (!group.current) return;
    group.current.rotation.y += delta * 0.18;
    group.current.rotation.x = Math.sin(group.current.rotation.y * 1.4) * 0.16;
  });

  return (
    <group ref={group} rotation={[0.2, -0.4, -0.12]}>
      <mesh rotation={[0.25, 0.5, 0.1]}>
        <torusGeometry args={[2.4, 0.035, 10, 100]} />
        <meshStandardMaterial color={colors.ivory} transparent opacity={0.42} metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh rotation={[1.15, -0.25, 0.5]}>
        <torusGeometry args={[1.75, 0.025, 10, 90]} />
        <meshStandardMaterial color={colors.signal} transparent opacity={0.42} metalness={0.6} roughness={0.25} />
      </mesh>
      {atoms.map((atom, index) => (
        <group key={index} position={atom.position}>
          <mesh castShadow scale={atom.scale}>
            <icosahedronGeometry args={[1, 5]} />
            <meshPhysicalMaterial
              color={colors[atom.tone]}
              roughness={0.12}
              metalness={0.12}
              transmission={atom.tone === "ivory" ? 0.45 : 0.08}
              thickness={1.2}
              clearcoat={1}
            />
          </mesh>
          <mesh scale={atom.scale * 1.18}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshBasicMaterial color={colors[atom.tone]} transparent opacity={0.08} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export function MolecularScene() {
  const [colors, setColors] = useState<SceneColors | null>(null);

  useEffect(() => {
    const styles = getComputedStyle(document.documentElement);
    setColors({
      ink: styles.getPropertyValue("--ink").trim(),
      ivory: styles.getPropertyValue("--ivory").trim(),
      mineral: styles.getPropertyValue("--mineral").trim(),
      signal: styles.getPropertyValue("--signal").trim(),
    });
  }, []);

  if (!colors) return <div className="h-full w-full" aria-hidden="true" />;

  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 7.8], fov: 42 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 6, 5]} intensity={3} color={colors.ivory} />
      <pointLight position={[-4, -2, 3]} intensity={15} color={colors.signal} />
      <Molecule colors={colors} />
      <Environment resolution={128}>
        <Lightformer intensity={4} color={colors.ivory} position={[0, 5, 4]} scale={[8, 2, 1]} />
        <Lightformer intensity={2} color={colors.mineral} position={[-5, 0, 1]} rotation-y={Math.PI / 2} scale={[6, 2, 1]} />
      </Environment>
    </Canvas>
  );
}