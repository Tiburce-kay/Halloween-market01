/**
 * Application Principale - L'Antre des Âmes Perdues
 * Gestion e-commerce en FCFA, musique culte d'Halloween, modales et animations macabres
 */

// Formateur de prix en FCFA avec séparateur de milliers
function formatFCFA(amount) {
  return Math.round(amount).toLocaleString('fr-FR') + ' FCFA';
}

// SVG Artworks ultra-détaillés pour chaque relique
const PRODUCT_SVG_ART = {
  grimoire: `
    <svg viewBox="0 0 200 200" class="art-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="grimGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ff7b00" stop-opacity="0.45"/>
          <stop offset="100%" stop-color="#ff7b00" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="bookCover" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#2a151b"/>
          <stop offset="50%" stop-color="#180b0f"/>
          <stop offset="100%" stop-color="#0a0406"/>
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="85" fill="url(#grimGlow)" class="svg-pulse"/>
      <path d="M45,45 Q100,55 155,40 L160,150 Q100,165 40,155 Z" fill="#3d2314" stroke="#5a351e" stroke-width="3"/>
      <path d="M48,48 Q100,57 152,43 L150,147 Q100,161 44,151 Z" fill="#d4af72" opacity="0.6"/>
      <path d="M45,44 Q100,54 153,41 L151,149 Q100,163 43,153 Z" fill="url(#bookCover)" stroke="#8b1e2a" stroke-width="2.5"/>
      <path d="M43,44 L55,44 L43,58 Z" fill="#b8860b"/>
      <path d="M153,41 L141,41 L153,55 Z" fill="#b8860b"/>
      <path d="M43,153 L55,153 L43,139 Z" fill="#b8860b"/>
      <path d="M151,149 L139,149 L151,135 Z" fill="#b8860b"/>
      <circle cx="98" cy="98" r="32" fill="none" stroke="#e63946" stroke-width="2.2" stroke-dasharray="3 2" class="svg-spin"/>
      <polygon points="98,72 120,114 76,114" fill="none" stroke="#ff5a5f" stroke-width="1.8"/>
      <polygon points="98,124 120,82 76,82" fill="none" stroke="#ff5a5f" stroke-width="1.8"/>
      <circle cx="98" cy="98" r="6" fill="#ff0055" filter="drop-shadow(0 0 8px #ff0055)"/>
      <path d="M98,50 L98,175 L92,168 L86,175 L86,52" fill="#9d0208" filter="drop-shadow(2px 2px 4px #000)"/>
    </svg>
  `,
  potion: `
    <svg viewBox="0 0 200 200" class="art-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="skullPoisonGlow" cx="50%" cy="60%" r="50%">
          <stop offset="0%" stop-color="#00ff88" stop-opacity="0.5"/>
          <stop offset="100%" stop-color="#00ff88" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="poisonFluid" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#39ff14"/>
          <stop offset="50%" stop-color="#058c42"/>
          <stop offset="100%" stop-color="#04471c"/>
        </linearGradient>
      </defs>
      <circle cx="100" cy="115" r="75" fill="url(#skullPoisonGlow)" class="svg-pulse"/>
      <rect x="88" y="30" width="24" height="25" fill="#1b2838" stroke="#00ff88" stroke-width="2" rx="3"/>
      <path d="M85,18 L115,18 L110,32 L90,32 Z" fill="#58311a" stroke="#221107" stroke-width="2"/>
      <path d="M82,24 Q100,20 118,24" stroke="#9d0208" stroke-width="3" fill="none"/>
      <path d="M70,60 C50,75 50,130 75,155 C85,165 115,165 125,155 C150,130 150,75 130,60 Z" fill="url(#poisonFluid)" opacity="0.85" stroke="#00ff88" stroke-width="2.5"/>
      <circle cx="82" cy="100" r="13" fill="#042010" stroke="#00ff88" stroke-width="1.5"/>
      <circle cx="118" cy="100" r="13" fill="#042010" stroke="#00ff88" stroke-width="1.5"/>
      <path d="M96,120 L100,112 L104,120 Z" fill="#042010"/>
      <line x1="88" y1="140" x2="88" y2="148" stroke="#00ff88" stroke-width="2"/>
      <line x1="96" y1="140" x2="96" y2="149" stroke="#00ff88" stroke-width="2"/>
      <line x1="104" y1="140" x2="104" y2="149" stroke="#00ff88" stroke-width="2"/>
      <line x1="112" y1="140" x2="112" y2="148" stroke="#00ff88" stroke-width="2"/>
      <circle cx="80" cy="80" r="4" fill="#adff2f" class="svg-bubble1"/>
      <circle cx="112" cy="72" r="5" fill="#adff2f" class="svg-bubble2"/>
      <circle cx="95" cy="65" r="3" fill="#adff2f" class="svg-bubble3"/>
      <path d="M64,80 C60,100 65,130 78,145" stroke="#ffffff" stroke-width="3" fill="none" opacity="0.4" stroke-linecap="round"/>
    </svg>
  `,
  mask: `
    <svg viewBox="0 0 200 200" class="art-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="maskGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ff0055" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="#ff0055" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="85" fill="url(#maskGlow)" class="svg-pulse"/>
      <path d="M68,55 C45,15 20,25 15,10 C35,40 55,55 60,75 Z" fill="#1b131f" stroke="#ff0055" stroke-width="1.8"/>
      <path d="M132,55 C155,15 180,25 185,10 C165,40 145,55 140,75 Z" fill="#1b131f" stroke="#ff0055" stroke-width="1.8"/>
      <path d="M60,50 Q100,45 140,50 Q155,90 145,135 Q100,185 55,135 Q45,90 60,50 Z" fill="#e8e2d8" stroke="#2b1a29" stroke-width="3"/>
      <path d="M125,58 L115,80 L122,95 L118,115" stroke="#681320" stroke-width="1.5" fill="none"/>
      <path d="M115,80 L105,85" stroke="#681320" stroke-width="1.2" fill="none"/>
      <path d="M70,95 Q85,85 95,98 Q85,108 70,95 Z" fill="#0c070e" stroke="#6a040f" stroke-width="2"/>
      <circle cx="83" cy="97" r="3.5" fill="#ffb703" filter="drop-shadow(0 0 5px #ffb703)"/>
      <path d="M130,95 Q115,85 105,98 Q115,108 130,95 Z" fill="#0c070e" stroke="#6a040f" stroke-width="2"/>
      <circle cx="117" cy="97" r="3.5" fill="#ffb703" filter="drop-shadow(0 0 5px #ffb703)"/>
      <path d="M83,103 Q85,125 82,145" stroke="#720026" stroke-width="3" stroke-linecap="round" fill="none"/>
      <path d="M117,103 Q115,125 118,145" stroke="#720026" stroke-width="3" stroke-linecap="round" fill="none"/>
      <path d="M82,145 Q100,155 118,145" stroke="#1b0005" stroke-width="3.5" fill="none"/>
      <line x1="88" y1="142" x2="88" y2="149" stroke="#1b0005" stroke-width="2"/>
      <line x1="96" y1="144" x2="96" y2="152" stroke="#1b0005" stroke-width="2"/>
      <line x1="104" y1="144" x2="104" y2="152" stroke="#1b0005" stroke-width="2"/>
      <line x1="112" y1="142" x2="112" y2="149" stroke="#1b0005" stroke-width="2"/>
    </svg>
  `,
  lantern: `
    <svg viewBox="0 0 200 200" class="art-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="lanternSoulFlame" cx="50%" cy="55%" r="50%">
          <stop offset="0%" stop-color="#48cae4" stop-opacity="0.9"/>
          <stop offset="40%" stop-color="#0077b6" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#03045e" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="100" cy="110" r="80" fill="url(#lanternSoulFlame)" class="svg-pulse"/>
      <circle cx="100" cy="22" r="14" fill="none" stroke="#2b2024" stroke-width="4"/>
      <path d="M60,55 L100,32 L140,55 L130,68 L70,68 Z" fill="#1b1216" stroke="#48253b" stroke-width="2"/>
      <polygon points="100,28 105,34 95,34" fill="#e0a96d"/>
      <rect x="68" y="68" width="64" height="85" fill="#040b14" opacity="0.75" stroke="#1b1216" stroke-width="3"/>
      <line x1="72" y1="75" x2="128" y2="145" stroke="#48cae4" stroke-width="1.2" opacity="0.6"/>
      <line x1="128" y1="75" x2="72" y2="145" stroke="#48cae4" stroke-width="1.2" opacity="0.6"/>
      <path d="M100,135 Q85,120 90,105 Q95,90 100,80 Q105,90 110,105 Q115,120 100,135 Z" fill="#90e0ef" class="svg-flicker" filter="drop-shadow(0 0 10px #00b4d8)"/>
      <circle cx="97" cy="104" r="2" fill="#03045e"/>
      <circle cx="103" cy="104" r="2" fill="#03045e"/>
      <ellipse cx="100" cy="112" rx="2" ry="4" fill="#03045e"/>
      <path d="M62,153 L138,153 L145,170 L55,170 Z" fill="#1b1216" stroke="#48253b" stroke-width="2"/>
      <circle cx="65" cy="172" r="4" fill="#3a2333"/>
      <circle cx="135" cy="172" r="4" fill="#3a2333"/>
    </svg>
  `,
  dagger: `
    <svg viewBox="0 0 200 200" class="art-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bloodDaggerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#d90429" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="#d90429" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="80" fill="url(#bloodDaggerGlow)"/>
      <circle cx="160" cy="40" r="10" fill="#dedbd2" stroke="#5c4d3c" stroke-width="2"/>
      <circle cx="157" cy="38" r="2" fill="#221"/>
      <circle cx="163" cy="38" r="2" fill="#221"/>
      <line x1="155" y1="45" x2="130" y2="70" stroke="#f4f1de" stroke-width="8" stroke-linecap="round"/>
      <line x1="153" y1="48" x2="133" y2="68" stroke="#3d0c02" stroke-width="2" stroke-dasharray="3 3"/>
      <path d="M120,60 L140,80 L148,72 L128,52 Z" fill="#2b1823" stroke="#800f2f" stroke-width="2"/>
      <circle cx="135" cy="65" r="4" fill="#e63946"/>
      <path d="M125,75 L35,165 L30,170 L40,160 L95,105 Z" fill="#0d0c1d" stroke="#800f2f" stroke-width="2.5"/>
      <path d="M125,75 L30,170 L80,120 Z" fill="#1c0f13"/>
      <path d="M110,88 L102,94 L98,90" stroke="#ff0054" stroke-width="2" fill="none" filter="drop-shadow(0 0 5px #ff0054)"/>
      <path d="M85,113 L78,118 L74,115" stroke="#ff0054" stroke-width="2" fill="none" filter="drop-shadow(0 0 5px #ff0054)"/>
      <path d="M60,138 L55,142" stroke="#ff0054" stroke-width="2" fill="none" filter="drop-shadow(0 0 5px #ff0054)"/>
      <circle cx="28" cy="172" r="3.5" fill="#d90429" filter="drop-shadow(0 0 4px #d90429)"/>
    </svg>
  `,
  doll: `
    <svg viewBox="0 0 200 200" class="art-svg" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="100" cy="135" rx="34" ry="42" fill="#8c6d48" stroke="#4a3728" stroke-width="3"/>
      <circle cx="100" cy="65" r="28" fill="#a48057" stroke="#4a3728" stroke-width="3"/>
      <line x1="72" y1="110" x2="45" y2="135" stroke="#8c6d48" stroke-width="10" stroke-linecap="round"/>
      <line x1="128" y1="110" x2="155" y2="135" stroke="#8c6d48" stroke-width="10" stroke-linecap="round"/>
      <line x1="85" y1="170" x2="78" y2="195" stroke="#8c6d48" stroke-width="10" stroke-linecap="round"/>
      <line x1="115" y1="170" x2="122" y2="195" stroke="#8c6d48" stroke-width="10" stroke-linecap="round"/>
      <line x1="100" y1="40" x2="100" y2="88" stroke="#720026" stroke-width="2" stroke-dasharray="3 3"/>
      <line x1="100" y1="100" x2="100" y2="170" stroke="#720026" stroke-width="2" stroke-dasharray="4 4"/>
      <circle cx="88" cy="62" r="6" fill="#1b1216" stroke="#fff" stroke-width="1"/>
      <line x1="86" y1="60" x2="90" y2="64" stroke="#ff0055" stroke-width="1.5"/>
      <line x1="90" y1="60" x2="86" y2="64" stroke="#ff0055" stroke-width="1.5"/>
      <circle cx="112" cy="60" r="9" fill="#e0a96d" stroke="#543d2b" stroke-width="1.5"/>
      <path d="M86,80 Q100,75 114,83" stroke="#221115" stroke-width="2.5" fill="none"/>
      <line x1="135" y1="95" x2="105" y2="125" stroke="#dee2e6" stroke-width="2.5"/>
      <circle cx="137" cy="93" r="5" fill="#d90429" filter="drop-shadow(0 0 5px #d90429)"/>
      <line x1="60" y1="115" x2="95" y2="135" stroke="#dee2e6" stroke-width="2"/>
      <circle cx="58" cy="113" r="4.5" fill="#111"/>
    </svg>
  `,
  crown: `
    <svg viewBox="0 0 200 200" class="art-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="crownEmber" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ff7b00" stop-opacity="0.4"/>
          <stop offset="100%" stop-color="#ff7b00" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="80" fill="url(#crownEmber)" class="svg-pulse"/>
      <ellipse cx="100" cy="115" rx="70" ry="24" fill="none" stroke="#2c1913" stroke-width="8"/>
      <ellipse cx="100" cy="112" rx="72" ry="23" fill="none" stroke="#160c09" stroke-width="4"/>
      <polygon points="50,110 40,88 56,108" fill="#3a1f18"/>
      <polygon points="80,105 75,70 88,103" fill="#3a1f18"/>
      <polygon points="100,103 100,60 106,102" fill="#5c2419"/>
      <polygon points="120,105 125,70 114,103" fill="#3a1f18"/>
      <polygon points="150,110 160,88 144,108" fill="#3a1f18"/>
      <circle cx="70" cy="112" r="10" fill="#1a0c16" stroke="#48122f" stroke-width="2"/>
      <circle cx="130" cy="112" r="10" fill="#1a0c16" stroke="#48122f" stroke-width="2"/>
      <polygon points="100,85 112,100 100,115 88,100" fill="#ff5400" stroke="#ffd166" stroke-width="1.5" filter="drop-shadow(0 0 8px #ff7b00)"/>
    </svg>
  `,
  chalice: `
    <svg viewBox="0 0 200 200" class="art-svg" xmlns="http://www.w3.org/2000/svg">
      <path d="M60,45 C60,105 90,115 95,125 L95,160 L80,165 L75,175 L125,175 L120,165 L105,160 L105,125 C110,115 140,105 140,45 Z" fill="#2d2d38" stroke="#4e4e61" stroke-width="3"/>
      <ellipse cx="100" cy="45" rx="40" ry="10" fill="#1c1c24" stroke="#ff0055" stroke-width="2"/>
      <ellipse cx="100" cy="48" rx="35" ry="7" fill="#800020" filter="drop-shadow(0 0 4px #d90429)"/>
      <path d="M100,75 Q90,65 80,72 Q90,82 100,88 Q110,82 120,72 Q110,65 100,75 Z" fill="#121218" stroke="#d4af72" stroke-width="1.5"/>
      <polygon points="100,132 106,140 100,148 94,140" fill="#d90429" filter="drop-shadow(0 0 6px #ff0055)"/>
    </svg>
  `,
  musicbox: `
    <svg viewBox="0 0 200 200" class="art-svg" xmlns="http://www.w3.org/2000/svg">
      <polygon points="40,110 160,110 175,165 25,165" fill="#2b1810" stroke="#4a2c1f" stroke-width="3"/>
      <polygon points="35,110 165,110 185,50 55,50" fill="#3d2317" stroke="#5c3827" stroke-width="2.5"/>
      <ellipse cx="120" cy="80" rx="30" ry="16" fill="#0d1b2a" stroke="#8d775f" stroke-width="2" transform="rotate(-15 120 80)"/>
      <ellipse cx="95" cy="112" rx="4" ry="4" fill="#dee2e6"/>
      <line x1="95" y1="116" x2="95" y2="135" stroke="#dee2e6" stroke-width="2"/>
      <line x1="95" y1="125" x2="88" y2="132" stroke="#dee2e6" stroke-width="1.5"/>
      <path d="M160,140 L185,140 L185,130" stroke="#b8860b" stroke-width="3.5" fill="none"/>
      <circle cx="185" cy="128" r="4" fill="#8c6d48"/>
      <text x="60" y="85" fill="#ff7b00" font-size="20" opacity="0.9" class="svg-float">♫</text>
      <text x="135" y="45" fill="#ffa200" font-size="24" opacity="0.9" class="svg-float">♪</text>
    </svg>
  `,
  mirror: `
    <svg viewBox="0 0 200 200" class="art-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="mirrorAbyss" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#14213d" stop-opacity="0.9"/>
          <stop offset="70%" stop-color="#050811" stop-opacity="0.95"/>
          <stop offset="100%" stop-color="#000000" stop-opacity="1"/>
        </radialGradient>
      </defs>
      <rect x="45" y="25" width="110" height="150" rx="20" fill="#2d2208" stroke="#a67c1e" stroke-width="6"/>
      <rect x="52" y="32" width="96" height="136" rx="14" fill="#140f04" stroke="#4a370b" stroke-width="3"/>
      <rect x="60" y="40" width="80" height="120" rx="8" fill="url(#mirrorAbyss)"/>
      <circle cx="100" cy="80" r="16" fill="#48cae4" opacity="0.3" class="svg-pulse"/>
      <ellipse cx="100" cy="120" rx="24" ry="20" fill="#48cae4" opacity="0.2"/>
      <circle cx="94" cy="78" r="2.5" fill="#ff0055" opacity="0.8"/>
      <circle cx="106" cy="78" r="2.5" fill="#ff0055" opacity="0.8"/>
      <path d="M60,40 L85,40 M60,40 L60,65 M60,40 L78,58" stroke="#ffffff" stroke-width="1" opacity="0.4"/>
      <path d="M140,40 L115,40 M140,40 L140,65 M140,40 L122,58" stroke="#ffffff" stroke-width="1" opacity="0.4"/>
    </svg>
  `,
  broom: `
    <svg viewBox="0 0 200 200" class="art-svg" xmlns="http://www.w3.org/2000/svg">
      <line x1="30" y1="170" x2="165" y2="35" stroke="#3e2723" stroke-width="6" stroke-linecap="round"/>
      <line x1="32" y1="168" x2="163" y2="37" stroke="#ff7b00" stroke-width="1.2" stroke-dasharray="8 6"/>
      <polygon points="25,175 10,195 40,195 70,140 45,135" fill="#1f1610" stroke="#3e2723" stroke-width="2"/>
      <line x1="20" y1="195" x2="55" y2="140" stroke="#0e0a07" stroke-width="2"/>
      <line x1="30" y1="195" x2="60" y2="142" stroke="#0e0a07" stroke-width="2"/>
      <rect x="48" y="132" width="16" height="10" fill="#7f1d1d" rx="2" transform="rotate(-45 56 137)"/>
      <circle cx="56" cy="137" r="4" fill="#eae2b7"/>
      <circle cx="155" cy="45" r="3" fill="#ff7b00" class="svg-float"/>
      <circle cx="140" cy="65" r="2.5" fill="#ffd166" class="svg-float"/>
      <circle cx="120" cy="80" r="3" fill="#ffa200" class="svg-float"/>
    </svg>
  `,
  skull: `
    <svg viewBox="0 0 200 200" class="art-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="skullRayGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ff0000" stop-opacity="0.4"/>
          <stop offset="100%" stop-color="#ff0000" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="100" cy="95" r="75" fill="url(#skullRayGlow)" class="svg-pulse"/>
      <path d="M55,95 C45,60 70,35 100,35 C130,35 155,60 145,95 C145,115 138,125 135,135 L65,135 C62,125 55,115 55,95 Z" fill="#d6ccc2" stroke="#5e503f" stroke-width="3.5"/>
      <path d="M100,35 L98,52 L105,62 L100,75" stroke="#3a2e2b" stroke-width="2" fill="none"/>
      <ellipse cx="78" cy="92" rx="14" ry="16" fill="#120e0d" stroke="#3a2e2b" stroke-width="2"/>
      <ellipse cx="122" cy="92" rx="14" ry="16" fill="#120e0d" stroke="#3a2e2b" stroke-width="2"/>
      <polygon points="78,86 84,92 78,98 72,92" fill="#d90429" filter="drop-shadow(0 0 8px #ff0055)"/>
      <polygon points="122,86 128,92 122,98 116,92" fill="#d90429" filter="drop-shadow(0 0 8px #ff0055)"/>
      <polygon points="100,105 105,118 95,118" fill="#1a1412"/>
      <rect x="72" y="135" width="56" height="24" rx="4" fill="#c5b9ad" stroke="#5e503f" stroke-width="2"/>
      <line x1="82" y1="135" x2="82" y2="159" stroke="#3a2e2b" stroke-width="2"/>
      <line x1="91" y1="135" x2="91" y2="159" stroke="#3a2e2b" stroke-width="2"/>
      <line x1="100" y1="135" x2="100" y2="159" stroke="#3a2e2b" stroke-width="2"/>
      <line x1="109" y1="135" x2="109" y2="159" stroke="#3a2e2b" stroke-width="2"/>
      <line x1="118" y1="135" x2="118" y2="159" stroke="#3a2e2b" stroke-width="2"/>
    </svg>
  `
};

// État de l'application
const StoreState = {
  cart: [],
  wishlist: new Set(),
  activeCategory: 'all',
  activeCurse: 'all',
  searchQuery: '',
  appliedPromo: null,
  activeModalProduct: null
};

// Initialisation au chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
  loadStateFromStorage();
  initHalloweenCountdown();
  renderProducts();
  setupEventListeners();
  setupTarotGame();
  setupEasterEggs();
  updateCartUI();
  updateWishlistUI();

  // Initialisation Canvas FX
  if (typeof spookyCanvas !== 'undefined') {
    spookyCanvas.init();
  }

});

// Sauvegarde et chargement de l'état
function loadStateFromStorage() {
  try {
    const savedCart = localStorage.getItem('halloween_cart_fcfa');
    if (savedCart) {
      StoreState.cart = JSON.parse(savedCart);
    }
    const savedWish = localStorage.getItem('halloween_wishlist');
    if (savedWish) {
      StoreState.wishlist = new Set(JSON.parse(savedWish));
    }
  } catch (e) {}
}

function saveCartToStorage() {
  try {
    localStorage.setItem('halloween_cart_fcfa', JSON.stringify(StoreState.cart));
  } catch (e) {}
}

function saveWishlistToStorage() {
  try {
    localStorage.setItem('halloween_wishlist', JSON.stringify(Array.from(StoreState.wishlist)));
  } catch (e) {}
}

// Rendu des produits avec filtres et prix en FCFA
function renderProducts() {
  const grid = document.getElementById('products-grid');
  const countLabel = document.getElementById('products-count');
  if (!grid) return;

  const filtered = HALLOWEEN_PRODUCTS.filter(item => {
    const matchesCat = StoreState.activeCategory === 'all' || item.category === StoreState.activeCategory;
    const matchesCurse = StoreState.activeCurse === 'all' || item.curseLevelClass === StoreState.activeCurse;
    const matchesSearch = !StoreState.searchQuery || 
      item.name.toLowerCase().includes(StoreState.searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(StoreState.searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(StoreState.searchQuery.toLowerCase());
    return matchesCat && matchesCurse && matchesSearch;
  });

  if (countLabel) {
    countLabel.textContent = `${filtered.length} relique${filtered.length > 1 ? 's' : ''} scellée${filtered.length > 1 ? 's' : ''}`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-crypt">
        <div class="empty-crypt-icon">🕯️</div>
        <h3>La crypte est déserte...</h3>
        <p>Aucune relique ne correspond à vos critères d'invocation.</p>
        <button class="btn btn-secondary" onclick="resetFilters()">Purifier les filtres</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(product => {
    const isWish = StoreState.wishlist.has(product.id);
    const svgArtwork = PRODUCT_SVG_ART[product.iconType] || PRODUCT_SVG_ART.grimoire;

    return `
      <article class="product-card" data-id="${product.id}" onmouseenter="onProductHover()">
        <div class="card-inner">
          <div class="card-badges">
            <span class="badge ${product.curseLevelClass}">${product.curseLevel}</span>
            ${product.badge ? `<span class="badge badge-accent">${product.badge}</span>` : ''}
          </div>

          <button class="wishlist-btn ${isWish ? 'active' : ''}" onclick="toggleWishlist('${product.id}', event)" title="Garder cette âme captive">
            ${isWish ? '♥' : '♡'}
          </button>

          <div class="card-visual" onclick="openProductModal('${product.id}')">
            ${svgArtwork}
            <div class="card-visual-glow"></div>
            <button class="quick-view-badge">Inspecter l'Artefact</button>
          </div>

          <div class="card-content">
            <div class="card-category">${product.categoryName}</div>
            <h3 class="card-title" onclick="openProductModal('${product.id}')">${product.name}</h3>
            <p class="card-subtitle">${product.subtitle}</p>

            <div class="card-meta">
              <div class="card-rating">
                <span class="stars">★★★★★</span>
                <span class="rating-val">${product.rating}</span>
                <span class="reviews-count">(${product.reviewsCount})</span>
              </div>
              <div class="card-stock">
                <span class="stock-dot"></span>
                <span>${product.inStock} en crypte</span>
              </div>
            </div>

            <div class="card-footer">
              <div class="card-pricing">
                <span class="card-price">${formatFCFA(product.price)}</span>
                ${product.oldPrice ? `<span class="card-old-price">${formatFCFA(product.oldPrice)}</span>` : ''}
              </div>
              <button class="btn btn-blood add-cart-btn" onclick="addToCart('${product.id}', event)">
                <span class="btn-icon">⚡</span>
                <span>Acquérir</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function onProductHover() {
  if (typeof spookyAudio !== 'undefined') {
    spookyAudio.playGhostlyChime();
  }
}

// Filtres et Recherche
function resetFilters() {
  StoreState.activeCategory = 'all';
  StoreState.activeCurse = 'all';
  StoreState.searchQuery = '';
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';

  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  const allCat = document.querySelector('.cat-btn[data-cat="all"]');
  if (allCat) allCat.classList.add('active');

  const curseSelect = document.getElementById('curse-filter');
  if (curseSelect) curseSelect.value = 'all';

  renderProducts();
}

function setupEventListeners() {
  // Filtres par catégorie
  const catBtns = document.querySelectorAll('.cat-btn');
  catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      catBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      StoreState.activeCategory = btn.dataset.cat;
      if (typeof spookyAudio !== 'undefined') spookyAudio.playBloodDrip();
      renderProducts();
    });
  });

  // Filtre par niveau de malédiction
  const curseSelect = document.getElementById('curse-filter');
  if (curseSelect) {
    curseSelect.addEventListener('change', (e) => {
      StoreState.activeCurse = e.target.value;
      if (typeof spookyAudio !== 'undefined') spookyAudio.playBloodDrip();
      renderProducts();
    });
  }

  // Recherche en direct
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      StoreState.searchQuery = e.target.value.trim();
      renderProducts();
    });
  }

  // Bouton Musique d'Halloween Principale (Header)
  const soundBtn = document.getElementById('sound-toggle-btn');
  if (soundBtn) {
    soundBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (typeof spookyAudio !== 'undefined') {
        spookyAudio.toggleMusic();
      }
    });
  }

  // Bouton Musique d'Halloween dans le Hero
  const heroMusicBtn = document.getElementById('hero-music-btn');
  if (heroMusicBtn) {
    heroMusicBtn.addEventListener('click', () => {
      if (typeof spookyAudio !== 'undefined') {
        spookyAudio.toggleMusic();
      }
    });
  }

  // Bouton Mode Lanterne
  const lanternBtn = document.getElementById('lantern-toggle-btn');
  if (lanternBtn) {
    lanternBtn.addEventListener('click', () => {
      if (typeof spookyCanvas !== 'undefined') {
        const active = spookyCanvas.toggleLantern();
        lanternBtn.classList.toggle('active', active);
        if (typeof spookyAudio !== 'undefined') spookyAudio.playBloodDrip();
      }
    });
  }

  // Cloche d'Halloween au clic sur le bouton promo hero
  const heroBell = document.getElementById('hero-bell-btn');
  if (heroBell) {
    heroBell.addEventListener('click', () => {
      if (typeof spookyAudio !== 'undefined') {
        spookyAudio.playGothicBell();
        spookyAudio.playScaryLaugh();
      }
      const shopSec = document.getElementById('shop-section');
      if (shopSec) shopSec.scrollIntoView({ behavior: 'smooth' });
    });
  }
}

// Gestion du Panier (Chaudron)
function addToCart(productId, event) {
  if (event) event.stopPropagation();

  const product = HALLOWEEN_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = StoreState.cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    StoreState.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      subtitle: product.subtitle,
      curseLevel: product.curseLevel,
      curseLevelClass: product.curseLevelClass,
      iconType: product.iconType,
      quantity: 1
    });
  }

  saveCartToStorage();
  updateCartUI();
  showFloatingSoul(event);

  if (typeof spookyAudio !== 'undefined') {
    spookyAudio.playBloodDrip();
  }

  const cartBtn = document.getElementById('cart-toggle-btn');
  if (cartBtn) {
    cartBtn.classList.remove('cart-bounce');
    void cartBtn.offsetWidth;
    cartBtn.classList.add('cart-bounce');
  }
}

function updateCartQuantity(productId, delta) {
  const item = StoreState.cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    StoreState.cart = StoreState.cart.filter(i => i.id !== productId);
  }

  saveCartToStorage();
  updateCartUI();
  if (typeof spookyAudio !== 'undefined') spookyAudio.playBloodDrip();
}

function removeFromCart(productId) {
  StoreState.cart = StoreState.cart.filter(i => i.id !== productId);
  saveCartToStorage();
  updateCartUI();
  if (typeof spookyAudio !== 'undefined') spookyAudio.playBloodDrip();
}

function updateCartUI() {
  const badge = document.getElementById('cart-count');
  const itemsContainer = document.getElementById('cart-items-container');
  const totalSubtotal = document.getElementById('cart-subtotal');
  const totalDiscount = document.getElementById('cart-discount');
  const totalFinal = document.getElementById('cart-total');
  const checkoutBtn = document.getElementById('cart-checkout-btn');

  const totalCount = StoreState.cart.reduce((sum, item) => sum + item.quantity, 0);
  if (badge) badge.textContent = totalCount;

  if (!itemsContainer) return;

  if (StoreState.cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="empty-cart-view">
        <div class="empty-cart-cauldron">🫕</div>
        <p class="empty-text">Votre chaudron est vide et froid...</p>
        <p class="empty-sub">Jetez-y quelques artefacts maudits avant la levée du jour.</p>
      </div>
    `;
    if (totalSubtotal) totalSubtotal.textContent = "0 FCFA";
    if (totalDiscount) totalDiscount.textContent = "- 0 FCFA";
    if (totalFinal) totalFinal.textContent = "0 FCFA";
    if (checkoutBtn) checkoutBtn.disabled = true;
    return;
  }

  if (checkoutBtn) checkoutBtn.disabled = false;

  const rawTotal = StoreState.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  let discountAmount = 0;

  if (StoreState.appliedPromo) {
    discountAmount = (rawTotal * StoreState.appliedPromo.discount) / 100;
  }

  const finalTotal = Math.max(0, rawTotal - discountAmount);

  if (totalSubtotal) totalSubtotal.textContent = formatFCFA(rawTotal);
  if (totalDiscount) totalDiscount.textContent = `- ${formatFCFA(discountAmount)} (${StoreState.appliedPromo ? StoreState.appliedPromo.code : '0%'})`;
  if (totalFinal) totalFinal.textContent = formatFCFA(finalTotal);

  itemsContainer.innerHTML = StoreState.cart.map(item => {
    const svg = PRODUCT_SVG_ART[item.iconType] || PRODUCT_SVG_ART.grimoire;
    return `
      <div class="cart-item">
        <div class="cart-item-art">
          ${svg}
        </div>
        <div class="cart-item-info">
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-price">${formatFCFA(item.price)}</div>
          <span class="badge ${item.curseLevelClass}">${item.curseLevel}</span>
        </div>
        <div class="cart-item-actions">
          <div class="quantity-controller">
            <button class="qty-btn" onclick="updateCartQuantity('${item.id}', -1)">-</button>
            <span class="qty-val">${item.quantity}</span>
            <button class="qty-btn" onclick="updateCartQuantity('${item.id}', 1)">+</button>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart('${item.id}')" title="Bannir du chaudron">✕</button>
        </div>
      </div>
    `;
  }).join('');
}

function toggleCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (!drawer || !overlay) return;

  const isOpen = drawer.classList.contains('open');
  if (isOpen) {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
  } else {
    drawer.classList.add('open');
    overlay.classList.add('open');
    if (typeof spookyAudio !== 'undefined') spookyAudio.playBloodDrip();
  }
}

// Wishlist
function toggleWishlist(productId, event) {
  if (event) event.stopPropagation();

  if (StoreState.wishlist.has(productId)) {
    StoreState.wishlist.delete(productId);
  } else {
    StoreState.wishlist.add(productId);
  }

  saveWishlistToStorage();
  updateWishlistUI();
  renderProducts();

  if (typeof spookyAudio !== 'undefined') spookyAudio.playBloodDrip();
}

function updateWishlistUI() {
  const badge = document.getElementById('wishlist-count');
  if (badge) badge.textContent = StoreState.wishlist.size;
}

function showFloatingSoul(event) {
  if (!event) return;
  const soul = document.createElement('div');
  soul.className = 'floating-soul-particle';
  soul.textContent = '👻';
  soul.style.left = `${event.clientX}px`;
  soul.style.top = `${event.clientY}px`;
  document.body.appendChild(soul);

  setTimeout(() => {
    soul.remove();
  }, 950);
}

// Application du Code Promo avec rire effrayant
function applyPromoCode() {
  const input = document.getElementById('promo-code-input');
  const feedback = document.getElementById('promo-feedback');
  if (!input || !feedback) return;

  const code = input.value.trim().toUpperCase();

  const validPromos = {
    'HALLOWEEN666': { code: 'HALLOWEEN666', discount: 30, text: 'Malédiction de -30% appliquée !' },
    'SANG13': { code: 'SANG13', discount: 13, text: 'Pacte du Vendredi 13 : -13% !' },
    'MORTEL20': { code: 'MORTEL20', discount: 20, text: 'Offrande du Fossoyeur : -20% !' },
    'CODE666': { code: 'CODE666', discount: 25, text: 'Pacte Cornu : -25% !' },
    'LUNE15': { code: 'LUNE15', discount: 15, text: 'Lumière d\'Éclipse : -15% !' },
    'ESPRITFREE': { code: 'ESPRITFREE', discount: 10, text: 'Invocation : -10% immédiats !' }
  };

  if (validPromos[code]) {
    StoreState.appliedPromo = validPromos[code];
    feedback.className = 'promo-feedback promo-success';
    feedback.textContent = `⚡ ${validPromos[code].text}`;

    if (typeof spookyAudio !== 'undefined') {
      spookyAudio.playScaryLaugh();
      spookyAudio.playThunder();
    }
    triggerScreenFlash();
    updateCartUI();
  } else {
    feedback.className = 'promo-feedback promo-error';
    feedback.textContent = '❌ Formule magique invalide. Les esprits rejettent cette offrande.';
    if (typeof spookyAudio !== 'undefined') spookyAudio.playBloodDrip();
  }
}

function triggerScreenFlash() {
  const flash = document.createElement('div');
  flash.className = 'lightning-flash-overlay';
  document.body.appendChild(flash);
  setTimeout(() => flash.remove(), 400);
}

// Modale de Détails du Produit en FCFA
function openProductModal(productId) {
  const product = HALLOWEEN_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  StoreState.activeModalProduct = product;
  const modal = document.getElementById('product-modal');
  const modalBody = document.getElementById('modal-product-content');
  if (!modal || !modalBody) return;

  const svg = PRODUCT_SVG_ART[product.iconType] || PRODUCT_SVG_ART.grimoire;

  modalBody.innerHTML = `
    <div class="modal-grid">
      <div class="modal-artwork-box">
        <div class="modal-art-wrapper">
          ${svg}
        </div>
        <div class="modal-curse-warning">
          <span class="warning-icon">⚠️</span>
          <div>
            <strong>Avertissement Occulte :</strong>
            <p>${product.warnings}</p>
          </div>
        </div>
      </div>

      <div class="modal-details-box">
        <div class="modal-badges">
          <span class="badge ${product.curseLevelClass}">Malédiction : ${product.curseLevel}</span>
          <span class="badge badge-accent">${product.categoryName}</span>
          ${product.badge ? `<span class="badge badge-ghost">${product.badge}</span>` : ''}
        </div>

        <h2 class="modal-title">${product.name}</h2>
        <p class="modal-subtitle">${product.subtitle}</p>

        <div class="modal-rating">
          <span class="stars">★★★★★</span>
          <strong>${product.rating}/5</strong>
          <span>(${product.reviewsCount} invocations réussies)</span>
        </div>

        <div class="modal-price-box">
          <span class="modal-price">${formatFCFA(product.price)}</span>
          ${product.oldPrice ? `<span class="modal-old-price">${formatFCFA(product.oldPrice)}</span>` : ''}
          <span class="modal-vat">Taxe sur les âmes incluse</span>
        </div>

        <p class="modal-desc">${product.description}</p>

        <div class="modal-specs">
          <h4>Propriétés de la Relique :</h4>
          <ul>
            ${product.details.map(d => `<li>✦ ${d}</li>`).join('')}
          </ul>
        </div>

        <div class="modal-actions">
          <button class="btn btn-blood btn-lg" onclick="addToCart('${product.id}', event)">
            <span>🩸 Sceller dans le Chaudron</span>
          </button>
          <button class="btn btn-secondary btn-lg" onclick="toggleWishlist('${product.id}', event)">
            <span>${StoreState.wishlist.has(product.id) ? '♥ Âme Enchaînée' : '♡ Enchaîner cette Âme'}</span>
          </button>
        </div>

        <div class="modal-reviews-section">
          <h4>Derniers Murmures d'Acheteurs :</h4>
          ${product.reviews.map(r => `
            <div class="review-item">
              <div class="review-header">
                <strong>${r.author}</strong>
                <span class="review-date">${r.date}</span>
              </div>
              <p class="review-text">"${r.comment}"</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
  if (typeof spookyAudio !== 'undefined') spookyAudio.playGhostlyChime();
}

function closeProductModal() {
  const modal = document.getElementById('product-modal');
  if (modal) modal.classList.remove('open');
}

// Modale de Commande / Pacte de Sang
function openCheckoutModal() {
  if (StoreState.cart.length === 0) return;
  toggleCartDrawer();

  const modal = document.getElementById('checkout-modal');
  if (modal) modal.classList.add('open');

  if (typeof spookyAudio !== 'undefined') {
    spookyAudio.playGothicBell();
  }
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  if (modal) modal.classList.remove('open');
}

function submitBloodPact(event) {
  event.preventDefault();
  const form = document.getElementById('blood-pact-form');
  const resultBox = document.getElementById('pact-result-box');

  if (typeof spookyAudio !== 'undefined') {
    spookyAudio.playScaryLaugh();
    spookyAudio.playThunder();
  }
  triggerScreenFlash();

  if (form) form.style.display = 'none';
  if (resultBox) {
    resultBox.style.display = 'block';
    resultBox.innerHTML = `
      <div class="pact-success-card">
        <div class="pact-pentagram">⛧</div>
        <h3>PACTE SCELLÉ DANS LE SANG !</h3>
        <p>Votre commande a été gravée dans les archives éternelles de la crypte.</p>
        <div class="pact-code">N° D'INVOCATION : #MALEDICTION-${Math.floor(100000 + Math.random() * 900000)}</div>
        <p class="pact-warning">Un corbeau messager déposera vos reliques sous la brume de minuit. Ne laissez aucune bougie s'éteindre.</p>
        <button class="btn btn-blood" onclick="finalizeOrder()">Terminer le Rituel</button>
      </div>
    `;
  }

  StoreState.cart = [];
  saveCartToStorage();
  updateCartUI();
}

function finalizeOrder() {
  closeCheckoutModal();
  const form = document.getElementById('blood-pact-form');
  const resultBox = document.getElementById('pact-result-box');
  if (form) {
    form.reset();
    form.style.display = 'block';
  }
  if (resultBox) resultBox.style.display = 'none';
}

// Mini-jeu : Tarot de l'Infortune
function setupTarotGame() {
  const grid = document.getElementById('tarot-cards-grid');
  if (!grid) return;

  grid.innerHTML = TAROT_CARDS.map((card, idx) => `
    <div class="tarot-card" onclick="flipTarotCard(${idx}, this)">
      <div class="tarot-card-flipper">
        <div class="tarot-back">
          <div class="tarot-back-pattern">
            <span class="tarot-eye">👁</span>
            <div class="tarot-runes">✦ ⛧ ✦</div>
          </div>
        </div>
        <div class="tarot-front">
          <div class="tarot-symbol">${card.symbol}</div>
          <h4 class="tarot-name">${card.name}</h4>
          <p class="tarot-prophecy">${card.prophecy}</p>
          <div class="tarot-promo-badge">CODE : ${card.code}</div>
          <button class="btn btn-blood btn-sm" onclick="copyTarotCode('${card.code}', event)">Copier la Formule</button>
        </div>
      </div>
    </div>
  `).join('');
}

function flipTarotCard(index, element) {
  if (element.classList.contains('flipped')) return;
  element.classList.add('flipped');

  if (typeof spookyAudio !== 'undefined') {
    spookyAudio.playScaryLaugh();
    spookyAudio.playThunder();
  }
  triggerScreenFlash();
}

function copyTarotCode(code, event) {
  if (event) event.stopPropagation();
  navigator.clipboard.writeText(code).then(() => {
    alert(`La formule secrète "${code}" a été mémorisée par votre esprit ! Utilisez-la dans votre chaudron.`);
  }).catch(() => {
    alert(`Formule secrète : ${code}`);
  });
}

// Compte à rebours jusqu'à Minuit d'Halloween
function initHalloweenCountdown() {
  const daysEl = document.getElementById('timer-days');
  const hoursEl = document.getElementById('timer-hours');
  const minsEl = document.getElementById('timer-mins');
  const secsEl = document.getElementById('timer-secs');
  if (!daysEl) return;

  function update() {
    const now = new Date();
    const currentYear = now.getFullYear();
    let halloween = new Date(currentYear, 9, 31, 23, 59, 59);
    if (now > halloween) {
      halloween = new Date(currentYear + 1, 9, 31, 23, 59, 59);
    }

    const diff = halloween - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / 1000 / 60) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minsEl.textContent = String(mins).padStart(2, '0');
    secsEl.textContent = String(secs).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

// Easter Eggs (Citrouilles, Cercueil Réaliste & Monstres)
function setupEasterEggs() {
  // Citrouilles interactives
  const spookyPumpkins = document.querySelectorAll('.interactive-pumpkin');
  spookyPumpkins.forEach(pumpkin => {
    pumpkin.addEventListener('click', () => {
      if (typeof spookyAudio !== 'undefined') {
        spookyAudio.playScaryLaugh();
      }
      pumpkin.classList.add('pumpkin-glow-burst');
      setTimeout(() => pumpkin.classList.remove('pumpkin-glow-burst'), 1200);
    });
  });

  // Cercueil gothique interactif
  const coffinEl = document.getElementById('interactive-coffin');
  if (coffinEl) {
    coffinEl.addEventListener('click', () => {
      if (typeof spookyAudio !== 'undefined') {
        spookyAudio.playScaryLaugh();
        spookyAudio.playThunder();
      }
      triggerScreenFlash();
      coffinEl.classList.add('coffin-creak');
      setTimeout(() => coffinEl.classList.remove('coffin-creak'), 1500);
    });
  }

  // Faucheuse / Monstre interactif
  const reaperEl = document.getElementById('interactive-reaper');
  if (reaperEl) {
    reaperEl.addEventListener('click', () => {
      if (typeof spookyAudio !== 'undefined') {
        spookyAudio.playScaryLaugh();
      }
      reaperEl.classList.add('reaper-strike');
      setTimeout(() => reaperEl.classList.remove('reaper-strike'), 1200);
    });
  }

  // Chuchotement aléatoire en bas de page
  const whisperEl = document.getElementById('spooky-whisper-text');
  if (whisperEl) {
    setInterval(() => {
      const randomText = CREEPY_WHISPERS[Math.floor(Math.random() * CREEPY_WHISPERS.length)];
      whisperEl.style.opacity = '0';
      setTimeout(() => {
        whisperEl.textContent = `« ${randomText} »`;
        whisperEl.style.opacity = '0.85';
      }, 600);
    }, 9000);
  }
}
