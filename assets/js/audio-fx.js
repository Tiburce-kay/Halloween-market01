/**
 * Audio Engine d'Halloween - Musique Culte & Rires Terrifiants
 * Intègre la bande originale d'Halloween de John Carpenter et les rires démoniaques
 */

class HalloweenMusicEngine {
  constructor() {
    this.musicAudio = null;
    this.laughAudio = null;
    this.volume = 0.90; // Bon volume demandé
    this.isPlaying = false;
    this.userMuted = false;
    this.laughInterval = null;
    this.isAudioUnlocked = false;
    this.initialLaughDone = false;
    this.ctx = null;
    this._listenersAttached = false;
  }

  // Initialisation des éléments audio et Web Audio Context
  init() {
    if (!this.musicAudio) {
      this.musicAudio = document.getElementById('halloween-theme-audio') || new Audio('assets/audio/halloween_theme.mp3');
      this.musicAudio.loop = true;
      this.musicAudio.volume = this.volume;
      this.musicAudio.preload = 'auto';

      this.musicAudio.addEventListener('play', () => {
        this.isPlaying = true;
        this.updateButtonsUI(true);
      });

      this.musicAudio.addEventListener('pause', () => {
        if (this.userMuted) {
          this.isPlaying = false;
          this.updateButtonsUI(false);
        }
      });
    }

    if (!this.laughAudio) {
      this.laughAudio = document.getElementById('scary-laugh-audio') || new Audio('assets/audio/scary_laugh.mp3');
      this.laughAudio.volume = 1.0;
      this.laughAudio.preload = 'auto';
    }

    if (!this.ctx) {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioContext();
      } catch (e) {}
    } else if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  // Tente de lancer l'ambiance sonore
  playMusic() {
    this.init();
    this.userMuted = false;

    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }

    if (!this.musicAudio) return;

    this.musicAudio.volume = this.volume;
    const playPromise = this.musicAudio.play();

    if (playPromise !== undefined) {
      playPromise.then(() => {
        this.isPlaying = true;
        this.isAudioUnlocked = true;
        this.updateButtonsUI(true);

        // Premier rire d'angoisse au bout de 1,2s
        if (!this.initialLaughDone) {
          this.initialLaughDone = true;
          setTimeout(() => {
            if (this.isPlaying && !this.userMuted) {
              this.playScaryLaugh();
            }
          }, 1200);
        }

        // Rires périodiques toutes les 28s
        if (!this.laughInterval) {
          this.laughInterval = setInterval(() => {
            if (this.isPlaying && !this.userMuted) {
              this.playScaryLaugh();
            }
          }, 28000);
        }
      }).catch(err => {
        // En cas de blocage d'autoplay strict du navigateur (avant toute interaction utilisateur)
        console.warn("Autoplay restreint par la politique du navigateur (en attente d'interaction) :", err);
        this.isPlaying = false;
        // Indique à l'utilisateur de cliquer n'importe où pour lancer
        this.updateButtonsUI('pending');
        this.setupUnlockListeners();
      });
    }
  }

  // Couper la musique
  pauseMusic() {
    if (this.musicAudio) {
      try {
        this.musicAudio.pause();
      } catch (e) {}
    }
    this.isPlaying = false;
    this.updateButtonsUI(false);
    if (this.laughInterval) {
      clearInterval(this.laughInterval);
      this.laughInterval = null;
    }
  }

  // Bascule entre Activé et Muet au clic sur le bouton
  toggleMusic() {
    this.init();

    if (this.isPlaying) {
      // Actuellement en cours de lecture -> Couper et marquer comme muet
      this.userMuted = true;
      this.pauseMusic();
      return false;
    } else {
      // Actuellement arrêté (ou en attente du navigateur) -> Lancer !
      this.userMuted = false;
      this.playMusic();
      return true;
    }
  }

  // Écoute les interactions utilisateur pour débloquer le son dès le premier contact
  setupUnlockListeners() {
    if (this._listenersAttached) return;
    this._listenersAttached = true;

    const handleUnlock = () => {
      if (this.userMuted) return;
      if (!this.isPlaying) {
        this.playMusic();
      }
    };

    const events = ['click', 'touchend', 'keydown'];
    events.forEach(evt => {
      document.addEventListener(evt, handleUnlock, { passive: true });
    });
  }

  // Démarrage automatique au chargement ou à l'actualisation
  startAutoAmbience() {
    this.init();
    this.setupUnlockListeners();
    this.playMusic();
  }

  setVolume(vol) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.musicAudio) this.musicAudio.volume = this.volume;
    if (this.laughAudio) this.laughAudio.volume = Math.min(1, this.volume * 1.2);
  }

  playScaryLaugh() {
    if (this.userMuted) return;
    try {
      if (this.laughAudio) {
        this.laughAudio.currentTime = 0;
        this.laughAudio.play().catch(() => {});
      }
      document.body.classList.add('screen-tremble');
      setTimeout(() => document.body.classList.remove('screen-tremble'), 600);
    } catch (e) {}
  }

  playGothicBell() {
    if (this.userMuted) return;
    this.init();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const fundamental = 150;
    const harmonics = [1, 2.76, 5.4, 8.9];
    const gains = [0.45, 0.28, 0.18, 0.09];

    harmonics.forEach((h, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(fundamental * h, t);

      gain.gain.setValueAtTime(gains[i], t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 4.5);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 4.5);
    });
  }

  playBloodDrip() {
    if (this.userMuted) return;
    this.init();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(900, t);
    osc.frequency.exponentialRampToValueAtTime(220, t + 0.12);

    gain.gain.setValueAtTime(0.3, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(t);
    osc.stop(t + 0.13);
  }

  playGhostlyChime() {
    if (this.userMuted) return;
    this.init();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const notes = [440, 554.37, 659.25, 830.61];

    notes.forEach((freq, index) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, t + index * 0.04);

      gain.gain.setValueAtTime(0.001, t + index * 0.04);
      gain.gain.exponentialRampToValueAtTime(0.06, t + index * 0.04 + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + index * 0.04 + 1.0);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t + index * 0.04);
      osc.stop(t + index * 0.04 + 1.1);
    });
  }

  playThunder() {
    if (this.userMuted) return;
    this.init();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const bufferSize = this.ctx.sampleRate * 2.5;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (this.ctx.sampleRate * 0.8));
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(220, t);
    filter.frequency.exponentialRampToValueAtTime(50, t + 2.0);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.55, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 2.5);

    whiteNoise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    whiteNoise.start(t);
    whiteNoise.stop(t + 2.6);
  }

  updateButtonsUI(status) {
    const mainBtn = document.getElementById('sound-toggle-btn');
    const heroBtn = document.getElementById('hero-music-btn');

    if (mainBtn) {
      if (status === true) {
        // En lecture active
        mainBtn.className = 'ctrl-btn active';
        mainBtn.title = "Couper l'ambiance sonore (Mettre en sourdine)";
        mainBtn.innerHTML = `<span class="icon">🔊</span><span class="label">Ambiance : Activée</span>`;
      } else if (status === 'pending') {
        // En attente d'un geste utilisateur (bloqué par l'autoplay)
        mainBtn.className = 'ctrl-btn active pending';
        mainBtn.title = "Cliquez n'importe où pour libérer l'ambiance sonore";
        mainBtn.innerHTML = `<span class="icon">🔊</span><span class="label">Ambiance : Cliquez pour lancer</span>`;
      } else {
        // Muet (choisi par l'utilisateur)
        mainBtn.className = 'ctrl-btn';
        mainBtn.title = "Activer l'ambiance sonore";
        mainBtn.innerHTML = `<span class="icon">🔇</span><span class="label">Ambiance : Muet</span>`;
      }
    }

    if (heroBtn) {
      const active = (status === true);
      heroBtn.classList.toggle('active', active);
      heroBtn.innerHTML = active
        ? `<span>⏸️ Arrêter l'Ambiance</span>`
        : `<span>🎵 Lancer l'Ambiance</span>`;
    }
  }
}

const spookyAudio = new HalloweenMusicEngine();

// Démarrer l'ambiance dès que possible
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    spookyAudio.startAutoAmbience();
  });
} else {
  spookyAudio.startAutoAmbience();
}
