/**
 * Canvas FX & Animations Réalistes d'Arrière-plan - Halloween
 * Fantômes réalistes flottants, Faucheuse spectrale, Chauves-souris et Braises
 */

class SpookyCanvasFX {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.particles = [];
    this.bats = [];
    this.ghosts = [];
    this.mouse = { x: this.width / 2, y: this.height / 2 };
    this.lanternMode = false;
    this.flickerTimer = 0;
    this.animId = null;

    // Chargement des images de décorations réalistes
    this.ghostImg = new Image();
    this.ghostImg.src = 'assets/images/ghost.png';

    this.reaperImg = new Image();
    this.reaperImg.src = 'assets/images/reaper.png';
  }

  init() {
    this.canvas = document.getElementById('spooky-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.resize();

    window.addEventListener('resize', () => this.resize());
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });

    // 1. Initialiser les braises spectrales
    for (let i = 0; i < 35; i++) {
      this.particles.push(this.createParticle());
    }

    // 2. Initialiser les chauves-souris
    for (let i = 0; i < 8; i++) {
      this.bats.push(this.createBat());
    }

    // 3. Initialiser les fantômes réalistes flottants
    for (let i = 0; i < 3; i++) {
      this.ghosts.push(this.createGhost(i));
    }

    this.animate();
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    if (this.canvas) {
      this.canvas.width = this.width;
      this.canvas.height = this.height;
    }
  }

  createParticle() {
    const isEmber = Math.random() > 0.35;
    return {
      x: Math.random() * this.width,
      y: Math.random() * this.height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: -0.4 - Math.random() * 0.8,
      size: isEmber ? Math.random() * 2.5 + 1 : Math.random() * 4 + 2,
      color: isEmber 
        ? `rgba(255, ${Math.floor(110 + Math.random() * 80)}, 20, `
        : `rgba(${Math.floor(130 + Math.random() * 60)}, 70, 255, `,
      alpha: Math.random() * 0.7 + 0.2,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.03 + Math.random() * 0.04
    };
  }

  createBat() {
    const fromLeft = Math.random() > 0.5;
    return {
      x: fromLeft ? -50 : this.width + 50,
      y: Math.random() * (this.height * 0.4) + 20,
      speed: (fromLeft ? 1 : -1) * (2.0 + Math.random() * 2.2),
      wingSpeed: 0.18 + Math.random() * 0.15,
      wingPhase: Math.random() * Math.PI * 2,
      size: 15 + Math.random() * 12,
      sinOffset: Math.random() * Math.PI * 2
    };
  }

  createGhost(index) {
    return {
      x: (index * (this.width / 3)) + Math.random() * 100,
      y: 120 + Math.random() * (this.height - 350),
      vx: 0.35 + Math.random() * 0.45,
      vyBase: Math.random() * Math.PI * 2,
      alpha: 0.25 + Math.random() * 0.35,
      width: 140 + Math.random() * 60,
      height: 190 + Math.random() * 80,
      floatSpeed: 0.018 + Math.random() * 0.015
    };
  }

  toggleLantern() {
    this.lanternMode = !this.lanternMode;
    const body = document.body;
    if (this.lanternMode) {
      body.classList.add('lantern-active');
    } else {
      body.classList.remove('lantern-active');
    }
    return this.lanternMode;
  }

  animate() {
    this.animId = requestAnimationFrame(() => this.animate());
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Dessiner les fantômes réalistes flottants
    if (this.ghostImg.complete && this.ghostImg.naturalWidth > 0) {
      for (let i = 0; i < this.ghosts.length; i++) {
        const g = this.ghosts[i];
        g.x += g.vx;
        g.vyBase += g.floatSpeed;
        const currentY = g.y + Math.sin(g.vyBase) * 25;

        // Si le fantôme sort à droite, le recycler à gauche
        if (g.x > this.width + 120) {
          g.x = -180;
          g.y = 120 + Math.random() * (this.height - 350);
        }

        this.ctx.save();
        this.ctx.globalAlpha = g.alpha * (0.8 + 0.2 * Math.sin(g.vyBase * 2));
        this.ctx.shadowBlur = 25;
        this.ctx.shadowColor = 'rgba(100, 200, 255, 0.4)';
        this.ctx.drawImage(this.ghostImg, g.x, currentY, g.width, g.height);
        this.ctx.restore();
      }
    }

    // Dessiner les braises spectrales
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.pulse += p.pulseSpeed;

      const currentAlpha = Math.max(0.1, p.alpha * (0.6 + 0.4 * Math.sin(p.pulse)));

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color + currentAlpha + ')';
      this.ctx.shadowBlur = p.size * 2;
      this.ctx.shadowColor = p.color + '1)';
      this.ctx.fill();

      if (p.y < -10 || p.x < -10 || p.x > this.width + 10) {
        p.x = Math.random() * this.width;
        p.y = this.height + 10;
      }
    }
    this.ctx.shadowBlur = 0;

    // Dessiner les chauves-souris
    for (let i = 0; i < this.bats.length; i++) {
      const b = this.bats[i];
      b.x += b.speed;
      b.y += Math.sin(b.sinOffset) * 0.9;
      b.sinOffset += 0.04;
      b.wingPhase += b.wingSpeed;

      const dx = b.x - this.mouse.x;
      const dy = b.y - this.mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        b.y -= 2.5;
        b.x += (dx / dist) * 3;
      }

      this.drawBat(b);

      if (b.speed > 0 && b.x > this.width + 60) {
        b.x = -50;
        b.y = Math.random() * (this.height * 0.4) + 20;
      } else if (b.speed < 0 && b.x < -60) {
        b.x = this.width + 50;
        b.y = Math.random() * (this.height * 0.4) + 20;
      }
    }

    // Effet Mode Lanterne
    if (this.lanternMode) {
      this.flickerTimer += 0.1;
      const flicker = 0.95 + Math.sin(this.flickerTimer * 4) * 0.04;
      const radius = 190 * flicker;

      const grad = this.ctx.createRadialGradient(
        this.mouse.x, this.mouse.y, radius * 0.3,
        this.mouse.x, this.mouse.y, radius
      );

      grad.addColorStop(0, 'rgba(0, 0, 0, 0)');
      grad.addColorStop(0.65, 'rgba(10, 6, 16, 0.65)');
      grad.addColorStop(1, 'rgba(5, 2, 8, 0.96)');

      this.ctx.fillStyle = grad;
      this.ctx.fillRect(0, 0, this.width, this.height);

      const glow = this.ctx.createRadialGradient(
        this.mouse.x, this.mouse.y, 0,
        this.mouse.x, this.mouse.y, radius * 0.6
      );
      glow.addColorStop(0, 'rgba(255, 170, 50, 0.22)');
      glow.addColorStop(0.5, 'rgba(255, 120, 20, 0.08)');
      glow.addColorStop(1, 'rgba(255, 100, 0, 0)');

      this.ctx.fillStyle = glow;
      this.ctx.fillRect(0, 0, this.width, this.height);
    }
  }

  drawBat(bat) {
    this.ctx.save();
    this.ctx.translate(bat.x, bat.y);
    if (bat.speed < 0) {
      this.ctx.scale(-1, 1);
    }

    const wingY = Math.sin(bat.wingPhase) * (bat.size * 0.6);
    this.ctx.fillStyle = '#08050e';
    this.ctx.strokeStyle = '#2d1840';
    this.ctx.lineWidth = 1;

    this.ctx.beginPath();
    this.ctx.ellipse(0, 0, bat.size * 0.35, bat.size * 0.18, 0, 0, Math.PI * 2);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.arc(bat.size * 0.3, -2, bat.size * 0.15, 0, Math.PI * 2);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.quadraticCurveTo(bat.size * 0.4, -wingY - bat.size * 0.5, bat.size * 0.9, -wingY);
    this.ctx.quadraticCurveTo(bat.size * 0.6, -wingY * 0.3, 0, bat.size * 0.15);
    this.ctx.moveTo(0, 0);
    this.ctx.quadraticCurveTo(-bat.size * 0.4, -wingY - bat.size * 0.5, -bat.size * 0.9, -wingY);
    this.ctx.quadraticCurveTo(-bat.size * 0.6, -wingY * 0.3, 0, bat.size * 0.15);
    this.ctx.fill();
    this.ctx.stroke();

    this.ctx.restore();
  }
}

const spookyCanvas = new SpookyCanvasFX();
