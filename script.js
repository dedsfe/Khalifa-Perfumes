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
                word.classList.add('gold');
                word.classList.remove('lit');
            } else if (intensity > 0.2) {
                word.classList.add('lit');
                word.classList.remove('gold');
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
        requestAnimationFrame(() => {
            updateHighlight();
            ticking = false;
        });
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
// PRODUCTS BENTO GRID + FLIP MODAL
// ============================================================

const WHATSAPP_NUMBER = '5513999999999';

const products = [
    {
        id: 'afeef',
        name: 'Afeef',
        brand: 'Lattafa',
        image: './Assets/afeef_ai_nobg.png',
        glowColor: 'rgba(212, 154, 137, 0.3)',
        size: 'large',
        description: 'Uma fragrância floral e amadeirada que evoca a elegância do Oriente em cada nota.',
        notes: {
            top:   ['Bergamota', 'Limão', 'Aldeídos'],
            heart: ['Flor Branca', 'Tuberosa', 'Rosa'],
            base:  ['Almíscar', 'Amadeirado', 'Sândalo']
        }
    },
    {
        id: 'yara',
        name: 'Yara Pink',
        brand: 'Lattafa',
        image: './Assets/yara_ai_nobg.png',
        glowColor: 'rgba(201, 122, 126, 0.3)',
