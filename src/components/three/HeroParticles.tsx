"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function makeSpriteTexture() {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  const gradient = ctx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2
  );
  gradient.addColorStop(0, "rgba(255, 246, 222, 1)");
  gradient.addColorStop(0.4, "rgba(232, 198, 126, 0.65)");
  gradient.addColorStop(1, "rgba(232, 198, 126, 0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function Particles({ count = 200 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const texture = useMemo(() => makeSpriteTexture(), []);

  useEffect(() => {
    const handle = (e: PointerEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", handle);
    return () => window.removeEventListener("pointermove", handle);
  }, []);

  const basePositions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 17;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 7;
    }
    return pos;
  }, [count]);

  const seeds = useMemo(() => {
    const sd = new Float32Array(count);
    for (let i = 0; i < count; i++) sd[i] = Math.random() * Math.PI * 2;
    return sd;
  }, [count]);

  const livePositions = useMemo(
    () => new Float32Array(basePositions),
    [basePositions]
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const geom = pointsRef.current?.geometry;
    if (!geom) return;
    const arr = geom.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      arr[i * 3] = basePositions[i * 3] + Math.cos(t * 0.15 + seeds[i]) * 0.3;
      arr[i * 3 + 1] =
        basePositions[i * 3 + 1] + Math.sin(t * 0.22 + seeds[i]) * 0.35;
    }
    geom.attributes.position.needsUpdate = true;

    if (pointsRef.current) {
      const targetRotY = mouseRef.current.x * 0.18;
      const targetRotX = -mouseRef.current.y * 0.1;
      pointsRef.current.rotation.y +=
        (targetRotY - pointsRef.current.rotation.y) * 0.03;
      pointsRef.current.rotation.x +=
        (targetRotX - pointsRef.current.rotation.x) * 0.03;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[livePositions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.22}
        map={texture ?? undefined}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        color="#e8c67e"
        opacity={0.85}
        sizeAttenuation
      />
    </points>
  );
}

export default function HeroParticles() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
      style={{ width: "100%", height: "100%" }}
    >
      <Particles />
    </Canvas>
  );
}
