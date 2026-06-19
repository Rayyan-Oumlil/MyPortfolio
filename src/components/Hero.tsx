import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useLang } from "../context/LanguageContext";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { t } = useLang();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x0a0a0a, 5, 20);

    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.set(0, 0, 7);

    const geo = new THREE.IcosahedronGeometry(2.1, 1);
    const wire = new THREE.WireframeGeometry(geo);
    const wireMat = new THREE.LineBasicMaterial({ color: 0xF97316, transparent: true, opacity: 0.55 });
    const ico = new THREE.LineSegments(wire, wireMat);
    scene.add(ico);

    const innerMat = new THREE.MeshBasicMaterial({ color: 0xF97316, transparent: true, opacity: 0.04, side: THREE.DoubleSide });
    const innerMesh = new THREE.Mesh(geo, innerMat);
    scene.add(innerMesh);

    const particleCount = 1800;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const r = 3 + Math.random() * 9;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const pMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.018, transparent: true, opacity: 0.7, sizeAttenuation: true });
    const points = new THREE.Points(pGeo, pMat);
    scene.add(points);

    const accentCount = 600;
    const accentPos = new Float32Array(accentCount * 3);
    for (let i = 0; i < accentCount; i++) {
      const r = 6 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      accentPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      accentPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      accentPos[i * 3 + 2] = r * Math.cos(phi);
    }
    const aGeo = new THREE.BufferGeometry();
    aGeo.setAttribute("position", new THREE.BufferAttribute(accentPos, 3));
    const aMat = new THREE.PointsMaterial({ color: 0xF97316, size: 0.03, transparent: true, opacity: 0.55, sizeAttenuation: true });
    const accentPoints = new THREE.Points(aGeo, aMat);
    scene.add(accentPoints);

    const resize = () => {
      // Size from the canvas's own displayed box, not the window.
      // Using window dimensions breaks on mobile (100vh vs visible height),
      // when min-height kicks in, and with scrollbars/zoom — the camera
      // aspect no longer matches what's on screen, distorting the sphere.
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (w === 0 || h === 0) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    // ResizeObserver catches mobile URL-bar height changes and layout shifts
    // that a window "resize" event misses.
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    window.addEventListener("resize", resize);

    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMouseMove = (e: MouseEvent) => {
      mouse.tx = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.ty = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);

    let scrollProgress = 0;
    const onScroll = () => {
      scrollProgress = Math.min(window.scrollY / window.innerHeight, 1.5);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      const t = clock.getElapsedTime();
      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;

      ico.rotation.x = t * 0.12 + mouse.y * 0.5;
      ico.rotation.y = t * 0.18 + mouse.x * 0.6;
      innerMesh.rotation.copy(ico.rotation);

      const s = 1 + Math.sin(t * 0.8) * 0.04;
      ico.scale.setScalar(s);
      innerMesh.scale.setScalar(s);

      points.rotation.y = t * 0.04 + mouse.x * 0.2;
      points.rotation.x = t * 0.02 + mouse.y * 0.15;
      accentPoints.rotation.y = -t * 0.03 - mouse.x * 0.15;
      accentPoints.rotation.x = -t * 0.015;

      camera.position.z = 7 - scrollProgress * 1.5;
      camera.position.x = mouse.x * 0.4;
      camera.position.y = mouse.y * 0.3;
      camera.lookAt(0, 0, 0);

      canvas.style.opacity = String(Math.max(0, 1 - scrollProgress * 1.1));

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      renderer.dispose();
    };
  }, []);

  return (
    <section className="hero" id="index">
      <canvas ref={canvasRef} id="hero-canvas" />
      <div className="hero-content">
        <div className="hero-meta">
          <div className="meta-block">
            <span>// Status</span>
            <span>Currently at BNC</span>
          </div>
          <div className="meta-block" style={{ textAlign: "right" }}>
            <span>// Based in</span>
            <span>45.5019° N, 73.5674° W</span>
          </div>
        </div>

        <h1 className="hero-name">
          Rayyan <em>Oumlil</em>.
        </h1>
        <p className="hero-tagline">
          {t(
            "Full Stack Engineer building production-grade AI systems. Currently shipping at National Bank of Canada.",
            "Ingénieur Full Stack qui construit des systèmes IA en production. Actuellement à la Banque Nationale du Canada."
          )}
        </p>

        <div className="hero-bottom">
          <div className="scroll-indicator">
            <span>{t("Scroll", "Défiler")}</span>
            <span className="bar" />
            <span>02 →</span>
          </div>
          <div className="availability">
            {t("Currently shipping — National Bank of Canada", "En poste — Banque Nationale du Canada")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
