"use client";

import { ShaderGradient } from "shadergradient";
import * as THREE from "three";

export function ShaderGradientBackground() {
  return (
    <ShaderGradient
      // @ts-ignore
      color1="#ffffff"
      color2="#ffbb00"
      color3="#0700ff"
      uTime={0}
      uStrength={1}
      uDensity={1.1}
      uFrequency={5.5}
      uAmplitude={1.4}
      positionX={0}
      positionY={0}
      positionZ={0}
      rotationX={0}
      rotationY={0}
      rotationZ={0}
      type="sphere"
      // @ts-ignore
      cDistance={7.1}
      cPolarAngle={140}
      cAzimuthAngle={0}
      cameraZoom={17.3}
      lightType="3d"
      brightness={1.1}
      envPreset="city"
      reflection={0.1}
      wireframe={false}
      shader="defaults"
      animate="on"
      range="enabled"
      rangeStart={0}
      rangeEnd={40}
      uSpeed={0.1}
      grain="off"
      pixelDensity={1}
      fov={45}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    />
  );
}
