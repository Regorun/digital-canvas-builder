import { useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  life: number; maxLife: number;
  color: string;
}

interface GridNode {
  x: number; y: number;
  baseAlpha: number;
}

const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -100, y: -100 });
  const connectorRef = useRef({ x: -100, y: -100 });
  const particlesRef = useRef<Particle[]>([]);
  const gridNodesRef = useRef<GridNode[]>([]);
  const connectingRef = useRef(false);
  const connectTargetRef = useRef({ x: 0, y: 0 });
  const connectedRef = useRef(false);
  const animFrameRef = useRef<number>();
  const location = useLocation();
  const hasMouse = useRef(false);

  const getColors = useCallback(() => {
    const isDark = document.documentElement.classList.contains('dark');
    return {
      connector: isDark ? '#0FA4AF' : '#024950',
      connectorLight: isDark ? '#AFDDE5' : '#003135',
      cable: isDark ? 'rgba(15,164,175,0.5)' : 'rgba(2,73,80,0.4)',
      cableOuter: isDark ? 'rgba(2,73,80,0.3)' : 'rgba(0,49,53,0.2)',
      spark: isDark ? '#AFDDE5' : '#964734',
      sparkAlt: isDark ? '#0FA4AF' : '#0FA4AF',
      grid: isDark ? 'rgba(15,164,175,0.08)' : 'rgba(2,73,80,0.06)',
      gridActive: isDark ? 'rgba(15,164,175,0.3)' : 'rgba(2,73,80,0.2)',
      glow: isDark ? 'rgba(15,164,175,0.15)' : 'rgba(15,164,175,0.1)',
    };
  }, []);

  const createSparks = useCallback((x: number, y: number, count = 16) => {
    const colors = getColors();
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const speed = 2 + Math.random() * 5;
      particlesRef.current.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        maxLife: 0.4 + Math.random() * 0.6,
        color: Math.random() > 0.5 ? colors.spark : colors.sparkAlt,
      });
    }
  }, [getColors]);

  const buildGrid = useCallback((w: number, h: number) => {
    const nodes: GridNode[] = [];
    const spacing = 60;
    for (let x = spacing; x < w; x += spacing) {
      for (let y = spacing; y < h; y += spacing) {
        nodes.push({ x, y, baseAlpha: 0.3 + Math.random() * 0.4 });
      }
    }
    gridNodesRef.current = nodes;
  }, []);

  // Handle route change - animate connector to title
  useEffect(() => {
    const timeout = setTimeout(() => {
      const h1 = document.querySelector('h1');
      if (h1 && hasMouse.current) {
        const rect = h1.getBoundingClientRect();
        connectTargetRef.current = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
        connectingRef.current = true;
        connectedRef.current = false;
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      buildGrid(canvas.width, canvas.height);
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      hasMouse.current = true;
      if (connectedRef.current) {
        connectingRef.current = false;
        connectedRef.current = false;
      }
    };

    const onClick = (e: MouseEvent) => {
      createSparks(e.clientX, e.clientY, 20);
    };

    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      mouseRef.current = { x: t.clientX, y: t.clientY };
      hasMouse.current = true;
    };

    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      createSparks(t.clientX, t.clientY, 12);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('click', onClick);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });

    const drawRJ45 = (x: number, y: number) => {
      const colors = getColors();
      const w = 36, h = 24, tabH = 10, tabW = 14;
      const isDark = document.documentElement.classList.contains('dark');

      ctx.save();

      // Shadow / glow under connector
      ctx.shadowColor = colors.connector;
      ctx.shadowBlur = 18;

      // Main housing - transparent plastic look
      const bodyGrad = ctx.createLinearGradient(x - w / 2, y - h / 2, x + w / 2, y + h / 2);
      bodyGrad.addColorStop(0, isDark ? 'rgba(15,164,175,0.9)' : 'rgba(2,73,80,0.85)');
      bodyGrad.addColorStop(0.5, isDark ? 'rgba(175,221,229,0.7)' : 'rgba(2,73,80,0.6)');
      bodyGrad.addColorStop(1, isDark ? 'rgba(15,164,175,0.85)' : 'rgba(0,49,53,0.8)');
      ctx.fillStyle = bodyGrad;
      ctx.beginPath();
      ctx.roundRect(x - w / 2, y - h / 2, w, h, 4);
      ctx.fill();

      ctx.shadowBlur = 0;

      // Housing outline
      ctx.strokeStyle = isDark ? 'rgba(175,221,229,0.5)' : 'rgba(0,49,53,0.5)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(x - w / 2, y - h / 2, w, h, 4);
      ctx.stroke();

      // Release tab (the clip on top)
      ctx.fillStyle = isDark ? 'rgba(15,164,175,0.7)' : 'rgba(2,73,80,0.5)';
      ctx.beginPath();
      ctx.moveTo(x - tabW / 2, y - h / 2);
      ctx.lineTo(x - tabW / 2 + 2, y - h / 2 - tabH);
      ctx.lineTo(x + tabW / 2 - 2, y - h / 2 - tabH);
      ctx.lineTo(x + tabW / 2, y - h / 2);
      ctx.closePath();
      ctx.fill();
      // Tab outline
      ctx.strokeStyle = isDark ? 'rgba(175,221,229,0.4)' : 'rgba(0,49,53,0.4)';
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // Tab ridge line
      ctx.beginPath();
      ctx.moveTo(x - tabW / 2 + 3, y - h / 2 - tabH + 3);
      ctx.lineTo(x + tabW / 2 - 3, y - h / 2 - tabH + 3);
      ctx.strokeStyle = isDark ? 'rgba(175,221,229,0.3)' : 'rgba(0,49,53,0.3)';
      ctx.lineWidth = 0.6;
      ctx.stroke();

      // Gold contact pins (8 pins for RJ45)
      const pinAreaW = w - 8;
      const pinSpacing = pinAreaW / 8;
      for (let i = 0; i < 8; i++) {
        const px = x - pinAreaW / 2 + pinSpacing * i + pinSpacing / 2;
        const pinGrad = ctx.createLinearGradient(px, y - 2, px, y + h / 2 - 2);
        pinGrad.addColorStop(0, isDark ? '#FFD700' : '#DAA520');
        pinGrad.addColorStop(0.5, isDark ? '#FFF8DC' : '#FFD700');
        pinGrad.addColorStop(1, isDark ? '#DAA520' : '#B8860B');
        ctx.fillStyle = pinGrad;
        ctx.fillRect(px - 1, y - 1, 2, h / 2);
      }

      // Inner cavity (dark slot at bottom)
      ctx.fillStyle = isDark ? 'rgba(0,20,25,0.6)' : 'rgba(0,0,0,0.3)';
      ctx.beginPath();
      ctx.roundRect(x - w / 2 + 3, y + h / 2 - 6, w - 6, 4, 1);
      ctx.fill();

      // Highlight / reflection on housing
      ctx.fillStyle = isDark ? 'rgba(175,221,229,0.12)' : 'rgba(255,255,255,0.15)';
      ctx.beginPath();
      ctx.roundRect(x - w / 2 + 2, y - h / 2 + 1, w - 4, h / 3, 2);
      ctx.fill();

      ctx.restore();
    };

    const drawCable = (endX: number, endY: number) => {
      const colors = getColors();
      const isDark = document.documentElement.classList.contains('dark');
      const startX = 0;
      const startY = canvas.height;

      const dx = endX - startX;
      const dy = endY - startY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const sag = Math.min(dist * 0.3, 200);

      const cp1x = startX + dx * 0.3;
      const cp1y = startY + sag * 0.5;
      const cp2x = startX + dx * 0.7;
      const cp2y = endY + sag;

      // Cable shadow
      ctx.strokeStyle = isDark ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.15)';
      ctx.lineWidth = 10;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(startX + 2, startY + 2);
      ctx.bezierCurveTo(cp1x + 2, cp1y + 2, cp2x + 2, cp2y + 2, endX + 2, endY + 13);
      ctx.stroke();

      // Outer cable jacket
      const cableGrad = ctx.createLinearGradient(startX, startY, endX, endY);
      cableGrad.addColorStop(0, isDark ? 'rgba(2,73,80,0.7)' : 'rgba(0,49,53,0.5)');
      cableGrad.addColorStop(0.5, isDark ? 'rgba(15,164,175,0.5)' : 'rgba(2,73,80,0.4)');
      cableGrad.addColorStop(1, isDark ? 'rgba(2,73,80,0.6)' : 'rgba(0,49,53,0.45)');
      ctx.strokeStyle = cableGrad;
      ctx.lineWidth = 7;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY + 12);
      ctx.stroke();

      // Inner cable highlight (gives roundness)
      ctx.strokeStyle = isDark ? 'rgba(175,221,229,0.15)' : 'rgba(255,255,255,0.12)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.bezierCurveTo(cp1x, cp1y - 1, cp2x, cp2y - 1, endX, endY + 11);
      ctx.stroke();

      // Boot/strain relief at connector end
      const bootGrad = ctx.createLinearGradient(endX - 6, endY + 8, endX + 6, endY + 16);
      bootGrad.addColorStop(0, isDark ? 'rgba(15,164,175,0.8)' : 'rgba(2,73,80,0.6)');
      bootGrad.addColorStop(1, isDark ? 'rgba(2,73,80,0.9)' : 'rgba(0,49,53,0.7)');
      ctx.fillStyle = bootGrad;
      ctx.beginPath();
      ctx.moveTo(endX - 8, endY + 12);
      ctx.quadraticCurveTo(endX - 10, endY + 18, endX - 5, endY + 20);
      ctx.lineTo(endX + 5, endY + 20);
      ctx.quadraticCurveTo(endX + 10, endY + 18, endX + 8, endY + 12);
      ctx.closePath();
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const colors = getColors();

      // Draw grid
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      gridNodesRef.current.forEach(node => {
        const dx = node.x - mx;
        const dy = node.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - dist / 200);

        ctx.beginPath();
        ctx.arc(node.x, node.y, 1.5 + influence * 2, 0, Math.PI * 2);
        ctx.fillStyle = influence > 0 ? colors.gridActive : colors.grid;
        ctx.fill();

        if (influence > 0.3) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, 4 + influence * 8, 0, Math.PI * 2);
          ctx.fillStyle = colors.glow;
          ctx.fill();
        }
      });

      // Update connector position
      const conn = connectorRef.current;
      if (connectingRef.current) {
        const t = connectTargetRef.current;
        conn.x += (t.x - conn.x) * 0.08;
        conn.y += (t.y - conn.y) * 0.08;
        const dx = t.x - conn.x;
        const dy = t.y - conn.y;
        if (Math.sqrt(dx * dx + dy * dy) < 5 && !connectedRef.current) {
          connectedRef.current = true;
          createSparks(t.x, t.y, 24);
        }
      } else {
        conn.x += (mx - conn.x) * 0.12;
        conn.y += (my - conn.y) * 0.12;
      }

      if (hasMouse.current) {
        drawCable(conn.x, conn.y);
        drawRJ45(conn.x, conn.y);
      }

      // Draw particles
      particlesRef.current = particlesRef.current.filter(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.1;
        p.vx *= 0.98;
        p.life -= 1 / (60 * p.maxLife);

        if (p.life <= 0) return false;

        ctx.save();
        ctx.globalAlpha = p.life;
        ctx.strokeStyle = p.color;
        ctx.lineWidth = 2;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x - p.vx * 3, p.y - p.vy * 3);
        ctx.stroke();
        ctx.restore();

        return true;
      });

      // Connection glow effect
      if (connectedRef.current) {
        const t = connectTargetRef.current;
        ctx.save();
        ctx.globalAlpha = 0.4 + Math.sin(Date.now() * 0.005) * 0.2;
        ctx.beginPath();
        ctx.arc(t.x, t.y, 30, 0, Math.PI * 2);
        const grad = ctx.createRadialGradient(t.x, t.y, 0, t.x, t.y, 30);
        grad.addColorStop(0, colors.sparkAlt);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.restore();
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('click', onClick);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchstart', onTouchStart);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [buildGrid, createSparks, getColors]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ width: '100vw', height: '100vh' }}
    />
  );
};

export default InteractiveBackground;
