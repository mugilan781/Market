/**
 * FRESHMARKET — MAIN.JS
 * Core: Navbar, Dark/Light Mode, RTL/LTR Toggle,
 * Mobile Menu, Back-to-Top, Page Transitions, Toast
 */

'use strict';

/* ================================================================
   PAGE LOADER
   ================================================================ */
const initLoader = () => {
  const loader = document.getElementById('page-loader');
  if (!loader) return;
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.classList.add('page-enter');
    }, 800);
  });
};

/* ================================================================
   PAGE TRANSITIONS
   ================================================================ */
const initPageTransitions = () => {
  const overlay = document.getElementById('page-transition');
  if (!overlay) return;

  const triggerLinks = document.querySelectorAll('a[href]:not([href^="#"]):not([href^="mailto"]):not([href^="tel"]):not([target="_blank"])');

  triggerLinks.forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (!href || href === '#' || href.startsWith('javascript')) return;
      e.preventDefault();

      overlay.classList.add('entering');
      setTimeout(() => {
        window.location.href = href;
      }, 450);
    });
  });

  // On new page load, animate out
  overlay.classList.add('leaving');
  setTimeout(() => overlay.classList.remove('leaving'), 500);
};

/* ================================================================
   NAVBAR
   ================================================================ */
const initNavbar = () => {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const isHeroPage = document.querySelector('.hero-slider, .split-hero');

  const handleScroll = () => {
    const scrolled = window.scrollY > 50;
    navbar.classList.toggle('scrolled', scrolled);
    if (isHeroPage) navbar.classList.toggle('transparent', !scrolled);
  };

  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });

  // Active link highlighting
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
};

/* ================================================================
   MOBILE MENU
   ================================================================ */
const initMobileMenu = () => {
  const hamburger    = document.querySelector('.hamburger');
  const mobileNav    = document.querySelector('.mobile-nav');
  const overlay      = document.querySelector('.mobile-nav-overlay');
  const closeBtn     = document.querySelector('.mobile-close');

  if (!hamburger || !mobileNav) return;

  const openMenu  = () => {
    hamburger.classList.add('open');
    mobileNav.classList.add('open');
    overlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
    hamburger.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = () => {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
    overlay?.classList.remove('open');
    document.body.style.overflow = '';
    hamburger.setAttribute('aria-expanded', 'false');
  };

  hamburger.addEventListener('click', () => {
    mobileNav.classList.contains('open') ? closeMenu() : openMenu();
  });

  closeBtn?.addEventListener('click', closeMenu);
  overlay?.addEventListener('click', closeMenu);

  // Sub-menu toggles
  document.querySelectorAll('.mobile-nav-link[data-sub]').forEach(link => {
    link.addEventListener('click', () => {
      const target = link.dataset.sub;
      const subMenu = document.getElementById(target);
      if (subMenu) {
        subMenu.classList.toggle('open');
        const arrow = link.querySelector('.mobile-arrow');
        if (arrow) arrow.textContent = subMenu.classList.contains('open') ? '▲' : '▼';
      }
    });
  });

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });
};

/* ================================================================
   DARK / LIGHT MODE TOGGLE
   ================================================================ */
const initTheme = () => {
  const prefersDark  = window.matchMedia('(prefers-color-scheme: dark)');
  const savedTheme   = localStorage.getItem('fm-theme');
  const theme        = savedTheme || (prefersDark.matches ? 'dark' : 'light');

  document.documentElement.setAttribute('data-theme', theme);

  const updateToggleBtns = (currentTheme) => {
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      const icon = btn.querySelector('.theme-icon');
      const label = btn.querySelector('.theme-label');
      if (icon) icon.innerHTML = currentTheme === 'dark' ? (window.getSvgIcon?.('sun') || '☀️') : (window.getSvgIcon?.('moon') || '🌙');
      if (label) label.textContent = currentTheme === 'dark' ? 'Light' : 'Dark';
      btn.setAttribute('aria-label', `Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`);
      btn.setAttribute('data-current', currentTheme);
    });
  };

  updateToggleBtns(theme);

  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next    = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('fm-theme', next);
      updateToggleBtns(next);
    });
  });

  // Listen to system preference changes
  prefersDark.addEventListener('change', e => {
    if (!localStorage.getItem('fm-theme')) {
      const next = e.matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      updateToggleBtns(next);
    }
  });
};

/* ================================================================
   RTL / LTR TOGGLE
   ================================================================ */
const initRTL = () => {
  const savedDir = localStorage.getItem('fm-dir') || 'ltr';
  document.documentElement.setAttribute('dir', savedDir);

  document.querySelectorAll('.rtl-toggle').forEach(btn => {
    const updateBtn = (dir) => {
      btn.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
      btn.setAttribute('aria-label', `Switch to ${dir === 'rtl' ? 'LTR' : 'RTL'} direction`);
    };

    updateBtn(savedDir);

    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('dir');
      const next    = current === 'rtl' ? 'ltr' : 'rtl';
      document.documentElement.setAttribute('dir', next);
      localStorage.setItem('fm-dir', next);
      updateBtn(next);
    });
  });
};

/* ================================================================
   BACK TO TOP
   ================================================================ */
const initBackToTop = () => {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
};

/* ================================================================
   TOAST NOTIFICATIONS
   ================================================================ */
window.showToast = (title, message = '', type = 'success', duration = 4000) => {
  const container = document.querySelector('.toast-container') || createToastContainer();
  const getIcon = window.getSvgIcon || (() => '');
  const icons = {
    success: getIcon('check') || '✓',
    error: getIcon('close') || '✕',
    warning: getIcon('wrench') || '!',
    info: getIcon('sprout') || 'i',
    cart: getIcon('bag') || '🛒',
    heart: getIcon('heart') || '♥'
  };

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.setAttribute('role', 'alert');
  toast.innerHTML = `
    <div class="toast-icon">${icons[type] || icons.success}</div>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      ${message ? `<div class="toast-msg">${message}</div>` : ''}
    </div>
    <button onclick="this.parentElement.remove()" style="background:none;border:none;cursor:pointer;color:var(--text-muted);font-size:1.1rem;margin-left:0.5rem;padding:0;line-height:1;" aria-label="Close">✕</button>
  `;

  container.appendChild(toast);
  setTimeout(() => { toast.classList.add('removing'); setTimeout(() => toast.remove(), 300); }, duration);
};

const createToastContainer = () => {
  const div = document.createElement('div');
  div.className = 'toast-container';
  document.body.appendChild(div);
  return div;
};

/* ================================================================
   RIPPLE EFFECT
   ================================================================ */
const initRipple = () => {
  document.querySelectorAll('.btn, .ripple-container').forEach(el => {
    el.addEventListener('click', e => {
      const rect   = el.getBoundingClientRect();
      const size   = Math.max(rect.width, rect.height);
      const x      = e.clientX - rect.left - size / 2;
      const y      = e.clientY - rect.top  - size / 2;
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px`;
      el.style.position = 'relative';
      el.style.overflow = 'hidden';
      el.appendChild(ripple);
      setTimeout(() => ripple.remove(), 700);
    });
  });
};

/* ================================================================
   STICKY HEADER ACTIVE STATE
   ================================================================ */
const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const id = anchor.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--navbar-h')) || 72;
        const top  = target.getBoundingClientRect().top + window.scrollY - navH - 16;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
};

/* ================================================================
   WISHLIST TOGGLE
   ================================================================ */
const initWishlist = () => {
  document.querySelectorAll('.product-card-wishlist').forEach(btn => {
    const heartSvg = window.getSvgIcon?.('heart') || '♥';
    btn.addEventListener('click', e => {
      e.stopPropagation();
      btn.classList.toggle('active');
      const name = btn.closest('.product-card')?.querySelector('.product-name')?.textContent || 'Item';
      if (btn.classList.contains('active')) {
        btn.innerHTML = `<span style="color:#EF4444">${heartSvg}</span>`;
        showToast('Added to Wishlist', `${name} saved`, 'heart');
      } else {
        btn.innerHTML = heartSvg;
        showToast('Removed', `${name} removed from wishlist`, 'info');
      }
    });
  });
};

/* ================================================================
   ADD TO CART
   ================================================================ */
const initCart = () => {
  let cartCount = 0;
  const badge = document.querySelector('.cart-badge');

  document.querySelectorAll('.btn-cart, .btn-add-cart').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      cartCount++;
      if (badge) {
        badge.textContent = cartCount;
        badge.style.display = 'block';
        badge.classList.add('anim-pulse-gold');
        setTimeout(() => badge.classList.remove('anim-pulse-gold'), 1000);
      }
      const name = btn.closest('.product-card')?.querySelector('.product-name')?.textContent || 'Item';
      showToast('Added to Cart', name, 'cart');
    });
  });
};

/* ================================================================
   INIT ALL
   ================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initTheme();
  initRTL();
  initNavbar();
  initMobileMenu();
  initBackToTop();
  initRipple();
  initSmoothScroll();
  initWishlist();
  initCart();
  initPageTransitions();
});
