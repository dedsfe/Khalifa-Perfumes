// Initialize Lucide Icons
lucide.createIcons();

// Handle Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ============================================================
// GOLD HIGHLIGHT — Manifesto Word Illumination
// ============================================================

const goldWords = new Set([
    'fragrância', 'história', 'árabes', 'originais', 'Oriente', 'Médio'
]);

function splitIntoWordSpans() {
    const el = document.getElementById('manifesto-text');
    if (!el) return;
    const text = el.innerText.trim();
    const words = text.split(/\s+/);
    el.innerHTML = words
        .map(w => {
            const clean = w.replace(/[^a-zA-ZÀ-ÿ]/g, '');
            const isGold = goldWords.has(clean);
            return `<span class="word${isGold ? ' word-gold-candidate' : ''}" data-word="${clean}">${w}</span> `;
        })
        .join('');
}

function updateHighlight() {
    const words = document.querySelectorAll('.manifesto-highlight-text .word');
    if (!words.length) return;

    const viewportCenter = window.innerHeight / 2;
    const range = window.innerHeight * 0.35;

    words.forEach(word => {
        const rect = word.getBoundingClientRect();
        const wordCenter = rect.top + rect.height / 2;
        const distance = Math.abs(wordCenter - viewportCenter);

        if (distance < range) {
            const intensity = 1 - distance / range;
            if (intensity > 0.55 && word.classList.contains('word-gold-candidate')) {
                word.classList.add('gold'); word.classList.remove('lit');
            } else if (intensity > 0.2) {
                word.classList.add('lit'); word.classList.remove('gold');
            } else {
                word.classList.remove('lit', 'gold');
            }
        } else {
            word.classList.remove('lit', 'gold');
        }
    });
}

splitIntoWordSpans();

let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => { updateHighlight(); ticking = false; });
        ticking = true;
    }
});

updateHighlight();

// ============================================================
// SHOWCASE SLIDER — Horizontal Drag & Dynamic Stats
// ============================================================

const track = document.getElementById('showcase-track');
const showcaseSection = document.getElementById('colecao');
const dragCursor = document.getElementById('drag-cursor');

if (showcaseSection && dragCursor) {
    showcaseSection.addEventListener('mousemove', (e) => {
        dragCursor.style.left = e.clientX + 'px';
        dragCursor.style.top = e.clientY + 'px';
    });
}

let isDown = false;
let startX;
let scrollLeft;

if (track) {
    track.addEventListener('mousedown', (e) => {
        isDown = true;
        showcaseSection.style.cursor = 'grabbing';
        startX = e.pageX - track.offsetLeft;
        scrollLeft = track.scrollLeft;
        track.style.scrollSnapType = 'none';
    });

    track.addEventListener('mouseleave', () => {
        isDown = false;
        showcaseSection.style.cursor = 'grab';
        track.style.scrollSnapType = 'x mandatory';
    });

    track.addEventListener('mouseup', () => {
        isDown = false;
        showcaseSection.style.cursor = 'grab';
        track.style.scrollSnapType = 'x mandatory';
    });

    track.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - track.offsetLeft;
        const walk = (x - startX) * 2;
        track.scrollLeft = scrollLeft - walk;
    });

    const slides = document.querySelectorAll('.showcase-slide');

    track.addEventListener('scroll', () => {
        slides.forEach(slide => {
            const slideLeft = slide.getBoundingClientRect().left;
            const viewportWidth = window.innerWidth;
            if (slideLeft > -viewportWidth && slideLeft < viewportWidth) {
                const percentage = slideLeft / viewportWidth;
                const bgText = slide.querySelector('.slide-bg-text');
                if (bgText) bgText.style.transform = `translate(calc(-50% + ${percentage * 150}px), -50%)`;
            }
        });
    });

    const barObserverOptions = { root: track, threshold: 0.5 };

    const barObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const bars = entry.target.querySelectorAll('.stat-bar-fill');
            if (entry.isIntersecting) {
                bars.forEach((bar, index) => {
                    const width = bar.getAttribute('data-width');
                    setTimeout(() => { bar.style.width = width + '%'; }, index * 150);
                });
            } else {
                bars.forEach(bar => { bar.style.width = '0%'; });
            }
        });
    }, barObserverOptions);

    slides.forEach(slide => { barObserver.observe(slide); });
}

// ============================================================
// PRODUCTS GRID + MODAL
// ============================================================

const WHATSAPP = '5513999999999';

const products = [
    {
        id: 'afeef', name: 'Afeef', brand: 'Lattafa',
        coverImage: './Assets/afeef_ai.png',
        modalImage: './Assets/afeef_ai_nobg.png',
        glowColor: 'rgba(212,154,137,0.3)',
        description: 'Uma fragrância floral e amadeirada que evoca a elegância do Oriente em cada nota.',
        notes: {
            top:   ['Bergamota', 'Limão', 'Aldeídos'],
            heart: ['Flor Branca', 'Tuberosa', 'Rosa'],
            base:  ['Almíscar', 'Amadeirado', 'Sândalo']
        }
    },
    {
        id: 'yara', name: 'Yara Pink', brand: 'Lattafa',
        coverImage: './Assets/yara_ai.png',
        modalImage: './Assets/yara_ai_nobg.png',
        glowColor: 'rgba(201,122,126,0.3)',
        description: 'Doçura tropical com alma árabe. Uma fragrância irresistivelmente feminina.',
        notes: {
            top:   ['Pêssego', 'Frutas Tropicais', 'Lichia'],
            heart: ['Flor de Laranjeira', 'Baunilha', 'Rosa'],
            base:  ['Almíscar Branco', 'Atalcado', 'Sândalo']
        }
    },
    {
        id: 'asad', name: 'Asad', brand: 'Lattafa',
        coverImage: './Assets/asad_ai.png',
        modalImage: './Assets/asad_ai_nobg.png',
        glowColor: 'rgba(212,175,55,0.25)',
        description: 'Intensidade e poder em cada gota. O leão do Oriente Médio.',
        notes: {
            top:   ['Canela', 'Pimenta Preta', 'Cardamomo'],
            heart: ['Âmbar', 'Oud', 'Rosa'],
            base:  ['Baunilha', 'Madeira de Cedro', 'Almíscar']
        }
    },
    {
        id: 'dalal', name: 'Dalal', brand: 'Al Rehab',
        coverImage: './Assets/dalal_ai.png',
        modalImage: './Assets/dalal_ai_nobg.png',
        glowColor: 'rgba(212,175,55,0.2)',
        description: 'Sofisticação árabe com doçura envolvente. Uma fragrância que seduz.',
        notes: {
            top:   ['Cítrico', 'Laranja', 'Bergamota'],
            heart: ['Caramelo', 'Baunilha', 'Doce'],
            base:  ['Almíscar', 'Âmbar', 'Sândalo']
        }
    }
];

function renderProductGrid() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    grid.innerHTML = products.map(p => `
        <div class="pcard" data-id="${p.id}" role="button" tabindex="0" aria-label="Ver detalhes de ${p.name}">
            <img class="pcard-img" src="${p.coverImage}" alt="${p.name}" loading="lazy">
            <div class="pcard-overlay"></div>
            <div class="pcard-info">
                <span class="pcard-brand">${p.brand}</span>
                <span class="pcard-name">${p.name}</span>
                <div class="pcard-cta">
                    <div class="pcard-cta-line"></div>
                    <span class="pcard-cta-text">Ver Detalhes</span>
                </div>
            </div>
        </div>
    `).join('');

    grid.querySelectorAll('.pcard').forEach(card => {
        const open = () => {
            const p = products.find(x => x.id === card.dataset.id);
            if (p) openPModal(p);
        };
        card.addEventListener('click', open);
        card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') open(); });
    });
}

// Modal elements
const pOverlay = document.getElementById('pmodal-overlay');
const pClose   = document.getElementById('pmodal-close');
const pImg     = document.getElementById('pmodal-img');
const pGlow    = document.getElementById('pmodal-glow');
const pBrand   = document.getElementById('pmodal-brand');
const pName    = document.getElementById('pmodal-name');
const pDesc    = document.getElementById('pmodal-desc');
const pTagsTop = document.getElementById('pnote-tags-top');
const pTagsHrt = document.getElementById('pnote-tags-heart');
const pTagsBse = document.getElementById('pnote-tags-base');
const pWaBtn   = document.getElementById('pmodal-wa-btn');

let pModalOpen = false;

function openPModal(product) {
    if (pModalOpen) return;
    pModalOpen = true;

    pImg.src   = product.modalImage;
    pImg.alt   = product.name;
    pBrand.textContent = product.brand;
    pName.textContent  = product.name;
    pDesc.textContent  = product.description;
    pGlow.style.background = `radial-gradient(circle, ${product.glowColor} 0%, transparent 65%)`;
    pWaBtn.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Olá! Tenho interesse no perfume ' + product.name + ' (' + product.brand + ').')}`;

    const tags = (el, arr) => { el.innerHTML = arr.map(n => `<span class="pnote-tag">${n}</span>`).join(''); };
    tags(pTagsTop, product.notes.top);
    tags(pTagsHrt, product.notes.heart);
    tags(pTagsBse, product.notes.base);

    pOverlay.classList.add('active');
    pOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lucide.createIcons();
}

function closePModal() {
    if (!pModalOpen) return;
    pModalOpen = false;
    pOverlay.classList.remove('active');
    pOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

if (pClose)   pClose.addEventListener('click', closePModal);
if (pOverlay) pOverlay.addEventListener('click', e => { if (e.target === pOverlay) closePModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && pModalOpen) closePModal(); });

renderProductGrid();
