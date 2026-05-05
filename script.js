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

    // Arrow navigation
    const prevBtn = document.getElementById('showcase-prev');
    const nextBtn = document.getElementById('showcase-next');
    
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            track.scrollBy({ left: -window.innerWidth * 0.8, behavior: 'smooth' });
        });
        nextBtn.addEventListener('click', () => {
            track.scrollBy({ left: window.innerWidth * 0.8, behavior: 'smooth' });
        });
    }

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

    // Auto-slide functionality
    let autoSlideInterval;

    function startAutoSlide() {
        if (!track) return;
        autoSlideInterval = setInterval(() => {
            if (isDown) return; // Don't auto-slide if user is dragging
            
            const maxScroll = track.scrollWidth - track.clientWidth;
            // If at the end, go back to start. Otherwise go to next slide.
            if (track.scrollLeft >= maxScroll - 10) {
                track.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                track.scrollTo({ left: track.scrollLeft + track.clientWidth, behavior: 'smooth' });
            }
        }, 3000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Start auto slide
    startAutoSlide();

    // Pause auto slide on interaction to improve UX
    track.addEventListener('mouseenter', stopAutoSlide);
    track.addEventListener('mouseleave', () => {
        if (!isDown) startAutoSlide();
    });
    track.addEventListener('touchstart', stopAutoSlide, {passive: true});
    track.addEventListener('touchend', startAutoSlide);
}

// ============================================================
// PRODUCTS GRID + MODAL
// ============================================================

const WHATSAPP = '5513988618110';

let currentPage = 1;
const PRODUCTS_PER_PAGE = 12;
let filteredProducts = [];
let currentFilter = 'all';
let searchQuery = '';
let perfumesToCompare = [];

function initProducts() {
    if (typeof windowProducts === 'undefined') return;
    filteredProducts = [...windowProducts];
    renderProductGrid(true);
    setupFilters();
    setupSearch();
    
    // Navbar search button smooth scroll to search
    const navSearchBtn = document.getElementById('nav-search-btn');
    if (navSearchBtn) {
        navSearchBtn.addEventListener('click', () => {
            const searchInput = document.getElementById('search-input');
            if (searchInput) {
                searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
                setTimeout(() => searchInput.focus(), 800);
            }
        });
    }
    
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            currentPage++;
            renderProductGrid(false);
        });
    }
    
    // Event delegation for opening modal & compare
    const grid = document.getElementById('products-grid');
    if (grid) {
        grid.addEventListener('click', (e) => {
            const compareBtn = e.target.closest('.btn-compare');
            if (compareBtn) {
                e.preventDefault();
                e.stopPropagation();
                const card = compareBtn.closest('.pcard');
                if (card) toggleCompare(card.dataset.id);
                return;
            }
            const card = e.target.closest('.pcard');
            if (card) {
                e.preventDefault();
                if (perfumesToCompare.length > 0) {
                    toggleCompare(card.dataset.id);
                } else {
                    const p = windowProducts.find(x => x.id === card.dataset.id);
                    if (p) openPModal(p);
                }
            }
        });
        grid.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                const card = e.target.closest('.pcard');
                if (card) {
                    e.preventDefault();
                    if (perfumesToCompare.length > 0) {
                        toggleCompare(card.dataset.id);
                    } else {
                        const p = windowProducts.find(x => x.id === card.dataset.id);
                        if (p) openPModal(p);
                    }
                }
            }
        });
    }
}

function renderProductGrid(clear = true) {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    if (clear) {
        grid.innerHTML = '';
        currentPage = 1;
    }

    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);

    const html = productsToShow.map((p, index) => {
        const isSelected = perfumesToCompare.includes(p.id);
        return `
        <div class="pcard" data-id="${p.id}" style="animation-delay: ${index * 0.05}s" role="button" tabindex="0" aria-label="Ver detalhes de ${p.name}">
            <img class="pcard-img" src="${p.coverImage}" alt="${p.name}" loading="lazy">
            <div class="pcard-overlay"></div>
            <div class="pcard-info">
                <span class="pcard-brand">${p.brand}</span>
                <span class="pcard-name">${p.name}</span>
                <div class="pcard-cta-group">
                    <div class="pcard-cta">
                        <div class="pcard-cta-line"></div>
                        <span class="pcard-cta-text">Ver Detalhes</span>
                    </div>
                    <button class="btn-compare ${isSelected ? 'selected' : ''}" title="Comparar" aria-label="Comparar ${p.name}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                    </button>
                </div>
            </div>
        </div>
    `}).join('');

    if (clear) {
        grid.innerHTML = html;
    } else {
        grid.insertAdjacentHTML('beforeend', html);
    }
    
    updateLoadMoreVisibility();
}

function updateLoadMoreVisibility() {
    const loadMoreContainer = document.getElementById('products-load-more');
    if (!loadMoreContainer) return;
    
    if (currentPage * PRODUCTS_PER_PAGE >= filteredProducts.length) {
        loadMoreContainer.style.display = 'none';
    } else {
        loadMoreContainer.style.display = 'flex';
    }
}

function applyFiltersAndSearch() {
    let results = [...windowProducts];

    // 1. Filter by category/brand/gender
    if (currentFilter !== 'all') {
        if (currentFilter.startsWith('brand-')) {
            const brand = currentFilter.substring(6);
            results = results.filter(p => p.brand === brand);
        } else if (currentFilter.startsWith('cat-')) {
            const cat = currentFilter.substring(4);
            results = results.filter(p => p.category === cat);
        } else if (currentFilter.startsWith('gender-')) {
            const gender = currentFilter.substring(7);
            results = results.filter(p => p.gender === gender);
        }
    }

    // 2. Search query
    if (searchQuery) {
        results = results.filter(p => 
            p.name.toLowerCase().includes(searchQuery) || 
            p.brand.toLowerCase().includes(searchQuery) ||
            p.category.toLowerCase().includes(searchQuery)
        );
    }

    filteredProducts = results;
    
    const grid = document.getElementById('products-grid');
    grid.style.transition = 'opacity 0.3s ease';
    grid.style.opacity = 0;
    setTimeout(() => {
        renderProductGrid(true);
        grid.style.opacity = 1;
    }, 300);
}

function setupSearch() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        applyFiltersAndSearch();
    });
}

function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            currentFilter = btn.dataset.filter;
            applyFiltersAndSearch();
        });
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
const pCompareBtn = document.getElementById('pmodal-compare-btn');

let pModalOpen = false;
let currentProductId = null;

function openPModal(product) {
    if (pModalOpen) return;
    pModalOpen = true;
    currentProductId = product.id;

    pImg.src   = product.modalImage;
    pImg.alt   = product.name;
    pBrand.textContent = product.brand;
    pName.textContent  = product.name;
    pDesc.textContent  = product.description;
    pGlow.style.background = `radial-gradient(circle, ${product.glowColor} 0%, transparent 65%)`;
    pWaBtn.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Olá, eu vim do site! Tenho interesse no perfume ' + product.name + ' (' + product.brand + ').')}`;

    const tags = (el, arr) => { el.innerHTML = arr.map(n => `<span class="pnote-tag">${n.name}</span>`).join(''); };
    tags(pTagsTop, product.notes.top);
    tags(pTagsHrt, product.notes.heart);
    tags(pTagsBse, product.notes.base);

    // Update Compare button state based on whether it's already in the comparison array
    if (pCompareBtn) {
        if (perfumesToCompare.includes(product.id)) {
            pCompareBtn.innerHTML = '<i data-lucide="check" stroke-width="1.5"></i> Selecionado';
            pCompareBtn.style.color = 'var(--color-gold)';
            pCompareBtn.style.borderColor = 'var(--color-gold)';
        } else {
            pCompareBtn.innerHTML = '<i data-lucide="scale" stroke-width="1.5"></i> Comparar';
            pCompareBtn.style.color = 'var(--color-white)';
            pCompareBtn.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        }
        
        pCompareBtn.onclick = (e) => {
            e.preventDefault();
            if (!perfumesToCompare.includes(currentProductId) && perfumesToCompare.length < 2) {
                toggleCompare(currentProductId);
            } else if (perfumesToCompare.includes(currentProductId)) {
                toggleCompare(currentProductId); // removes it
            } else {
                alert("Você já selecionou 2 perfumes para comparar.");
            }
            closePModal();
        };
    }

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

initProducts();
initCompare();

// Preloader Scroll Lock
document.body.style.overflow = 'hidden';
window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.style.overflow = '';
    }, 2800);
});

// ============================================================
// COMPARE FUNCTIONALITY
// ============================================================

function toggleCompare(id) {
    if (perfumesToCompare.includes(id)) {
        perfumesToCompare = perfumesToCompare.filter(x => x !== id);
    } else {
        if (perfumesToCompare.length < 2) {
            perfumesToCompare.push(id);
        } else {
            perfumesToCompare[1] = id;
        }
    }
    updateCompareUI();
    if (perfumesToCompare.length === 2) {
        setTimeout(openCompareModal, 350);
    }
}

function updateCompareUI() {
    const bar = document.getElementById('compare-bar');
    const countText = document.getElementById('compare-count-text');
    if (!bar) return;

    // Update bar
    if (perfumesToCompare.length > 0) {
        bar.classList.add('active');
        if (countText) countText.textContent = perfumesToCompare.length;
    } else {
        bar.classList.remove('active');
    }

    // Update card button highlights and card borders
    document.querySelectorAll('.btn-compare').forEach(btn => {
        const card = btn.closest('.pcard');
        if (card) {
            const isSelected = perfumesToCompare.includes(card.dataset.id);
            btn.classList.toggle('selected', isSelected);
            card.classList.toggle('selected-for-compare', isSelected);
        }
    });
}

function resetCompare() {
    perfumesToCompare = [];
    updateCompareUI();
}

function openCompareModal() {
    const modal = document.getElementById('compare-modal');
    const container = document.getElementById('cmodal-container');
    if (!modal || !container || perfumesToCompare.length !== 2) return;

    const p1 = windowProducts.find(x => x.id === perfumesToCompare[0]);
    const p2 = windowProducts.find(x => x.id === perfumesToCompare[1]);
    if (!p1 || !p2) return;



    function renderNoteSliders(notes, label) {
        return `
            <div class="cmodal-note-group">
                <span class="cmodal-note-label">${label}</span>
                <div class="cmodal-note-sliders">
                    ${notes.map(n => {
                        const val = n.value;
                        return `<div class="cmodal-slider-item">
                            <span class="cmodal-slider-name">${n.name}</span>
                            <div class="cmodal-slider-track">
                                <div class="cmodal-slider-fill" style="width: ${val}%"></div>
                                <div class="cmodal-slider-dot" style="left: ${val}%"></div>
                            </div>
                        </div>`;
                    }).join('')}
                </div>
            </div>
        `;
    }

    function renderSide(p) {
        return `
            <div class="cmodal-side">
                <div class="cmodal-img-wrapper">
                    <img src="${p.coverImage}" class="cmodal-img" alt="${p.name}">
                </div>
                <div class="cmodal-brand">${p.brand}</div>
                <h3 class="cmodal-name">${p.name}</h3>
                <div class="cmodal-notes-section">
                    ${renderNoteSliders(p.notes.top, 'Notas de Topo')}
                    ${renderNoteSliders(p.notes.heart, 'Notas de Coração')}
                    ${renderNoteSliders(p.notes.base, 'Notas de Fundo')}
                </div>
            </div>
        `;
    }

    // Build tabs for mobile
    const tabsHtml = `
        <div class="cmodal-tabs">
            <button class="cmodal-tab active" data-tab="0">${p1.name}</button>
            <button class="cmodal-tab" data-tab="1">${p2.name}</button>
        </div>
    `;

    container.innerHTML = tabsHtml + renderSide(p1, 0) + '<div class="cmodal-vs-badge">vs</div>' + renderSide(p2, 1);
    
    // Add data-index to sides
    const sides = container.querySelectorAll('.cmodal-side');
    sides.forEach((s, i) => s.setAttribute('data-index', i));

    // Tab switching logic
    container.querySelectorAll('.cmodal-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const idx = tab.dataset.tab;
            container.querySelectorAll('.cmodal-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            sides.forEach(s => {
                s.classList.toggle('cmodal-side--active', s.dataset.index === idx);
                s.classList.toggle('cmodal-side--hidden', s.dataset.index !== idx);
            });
        });
    });

    // Set initial state on mobile
    if (sides[0]) sides[0].classList.add('cmodal-side--active');
    if (sides[1]) sides[1].classList.add('cmodal-side--hidden');

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    lucide.createIcons();
}

function closeCompareModal() {
    const modal = document.getElementById('compare-modal');
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = '';
    resetCompare();
}

function initCompare() {
    const cancelBtn = document.getElementById('compare-cancel-btn');
    if (cancelBtn) cancelBtn.addEventListener('click', resetCompare);

    const closeBtn = document.getElementById('cmodal-close');
    if (closeBtn) closeBtn.addEventListener('click', closeCompareModal);

    const modal = document.getElementById('compare-modal');
    if (modal) modal.addEventListener('click', (e) => {
        if (e.target === modal) closeCompareModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) closeCompareModal();
    });
}
