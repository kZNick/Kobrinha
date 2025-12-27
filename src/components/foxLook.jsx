import foxImg from "../assets/img/iconMetamesck.png"
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  perspective: 600px;        /* cria o efeito 3D */
  width: 30px;
  height: 30px;
`;

const Fox = styled.img`
  width: 100%;
  height: 100%;
  image-rendering: pixelated;
  transform-style: preserve-3d;
  transition: transform 0.08s linear;
`;

export default function Fox3D() {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMove(e) {
      const box = ref.current.getBoundingClientRect();
      const cx = box.left + box.width / 2;
      const cy = box.top + box.height / 2;

      const dx = e.clientX - cx;
      const dy = e.clientY - cy;

      // controla o quanto inclina (quanto maior, mais forte)
      const maxTilt = 2;

      const rotateY = (dx / box.width) * maxTilt;  // esquerda / direita
      const rotateX = -(dy / box.height) * maxTilt; // cima / baixo

      setTilt({ x: rotateX, y: rotateY });
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <Wrapper ref={ref}>
      <Fox
        src={foxImg}
        alt="fox"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
        }}
      />
    </Wrapper>
  );
}

