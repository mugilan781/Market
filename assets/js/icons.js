/**
 * FRESHMARKET — SVG VECTOR ICONS SYSTEM
 * High quality SVG vector icons replacing all emojis across the website.
 */

'use strict';

const SVG_ICONS = {
  // Produce & Food
  leaf: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.4 19 2c1 2 2 4.1 1.4 9-1 7.6-8.6 9-9.4 9z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
  sprout: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M7 20h10"/><path d="M12 20v-8"/><path d="M12 12a5 5 0 0 1 5-5c2 0 3-1 3-2-2 0-4 1-5 3-1-2-3-3-5-3 0 1 1 2 3 2a5 5 0 0 1 4 5z"/></svg>`,
  broccoli: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 13v8"/><path d="M9 21h6"/><path d="M7 11.5a4.5 4.5 0 0 1 3-4.24 5 5 0 0 1 9.5 1.74 4.5 4.5 0 0 1-2.5 8h-7a4.5 4.5 0 0 1-3-5.5z"/></svg>`,
  apple: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2c1 2 0 4-1 4"/><path d="M12 6c-2-2-5-2-7 0a6 6 0 0 0 0 9c2 2 4 4 7 4s5-2 7-4a6 6 0 0 0 0-9c-2-2-5-2-7 0z"/></svg>`,
  carrot: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M2.27 21.73a2.41 2.41 0 0 0 3.4 0l13.1-13.1a6 6 0 0 0-8.49-8.48L3.68 13.24a6 6 0 0 0-1.41 8.49z"/><path d="M18.5 5.5l2.5-2.5"/><path d="M16.5 3.5l1.5-1.5"/></svg>`,
  pepper: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2v3"/><path d="M8 8a5 5 0 0 1 8 0v7a5 5 0 0 1-10 0V8z"/><path d="M12 8v7"/></svg>`,
  lemon: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 6A9 9 0 0 1 6 18c-3-3-4-8-2-10s7-1 10 2z"/><path d="M20 4s1 2 0 3-3 0-3 0"/></svg>`,
  grapes: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="11" r="2.5"/><circle cx="8" cy="10" r="2.5"/><circle cx="16" cy="10" r="2.5"/><circle cx="10" cy="15" r="2.5"/><circle cx="14" cy="15" r="2.5"/><circle cx="12" cy="19" r="2.5"/><path d="M12 2v4.5"/></svg>`,
  avocado: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2C8 2 5 8 5 14a7 7 0 0 0 14 0c0-6-3-12-7-12z"/><circle cx="12" cy="14" r="3"/></svg>`,
  corn: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2a4 4 0 0 0-4 4v10a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4z"/><path d="M8 8h8"/><path d="M8 12h8"/><path d="M8 16h8"/></svg>`,
  strawberry: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2c-2 0-3 2-3 2s-1-2-3-2a4 4 0 0 0-4 4c0 7 8 16 8 16s8-9 8-16a4 4 0 0 0-4-4c-2 0-3 2-3 2z"/><circle cx="9" cy="9" r="1"/><circle cx="15" cy="9" r="1"/><circle cx="12" cy="13" r="1"/></svg>`,
  onion: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 3c-4.5 4.5-7 8.5-7 12a7 7 0 0 0 14 0c0-3.5-2.5-7.5-7-12z"/><path d="M12 8a4 4 0 0 0-4 4"/><path d="M12 12a2 2 0 0 0-2 2"/></svg>`,
  ginger: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 4a3 3 0 0 1 3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 1 0 6h-4a3 3 0 0 1-3-3v-2a3 3 0 0 0-6 0v3a3 3 0 0 1-6 0v-4a3 3 0 0 1 3-3h2a3 3 0 0 0 3-3V7a3 3 0 0 1 3-3z"/></svg>`,
  orange: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="13" r="9"/><path d="M12 4V2"/><path d="M10 2h4"/><path d="M12 13l3-3"/></svg>`,
  blueberry: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="9" cy="14" r="5"/><circle cx="16" cy="13" r="4"/><path d="M7 11l2-3 2 3"/></svg>`,
  mango: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 3c4 0 8 4 8 10a8 8 0 0 1-13 6C4 16 4 10 7 6a8 8 0 0 1 5-3z"/><path d="M12 3V1"/></svg>`,
  pineapple: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 9a6 6 0 0 0-6 6c0 4 3 7 6 7s6-3 6-7a6 6 0 0 0-6-6z"/><path d="M12 2l-2 5h4l-2-5z"/><path d="M9 13l6 6"/><path d="M15 13l-6 6"/></svg>`,
  salad: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 11a8 8 0 0 0 16 0H4z"/><path d="M6 9c0-3 3-5 6-5s6 2 6 5"/><path d="M12 2v2"/></svg>`,
  noodle: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 12h18"/><path d="M5 12a7 7 0 0 0 14 0"/><path d="M8 8v4"/><path d="M12 6v6"/><path d="M16 8v4"/></svg>`,
  wheat: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2v20"/><path d="M8 6l4-2 4 2"/><path d="M7 10l5-2 5 2"/><path d="M6 14l6-2 6 2"/><path d="M5 18l7-2 7 2"/></svg>`,

  // Logistics, Business & Tech
  truck: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="1" y="3" width="15" height="13" rx="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
  package: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
  refresh: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21.5 2v6h-6"/><path d="M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>`,
  store: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  building: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="9" y1="6" x2="9" y2="6.01"/><line x1="15" y1="6" x2="15" y2="6.01"/><line x1="9" y1="10" x2="9" y2="10.01"/><line x1="15" y1="10" x2="15" y2="10.01"/><line x1="9" y1="14" x2="9" y2="14.01"/><line x1="15" y1="14" x2="15" y2="14.01"/><line x1="9" y1="18" x2="15" y2="18"/></svg>`,
  gift: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>`,
  pin: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  phone: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  email: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  clock: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  chat: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  lock: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  clipboard: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>`,
  close: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  wrench: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  home: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,
  bag: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
  news: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1m2 13a2 2 0 0 1-2-2V7m2 13a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"/><line x1="7" y1="8" x2="11" y2="8"/><line x1="7" y1="12" x2="13" y2="12"/><line x1="7" y1="16" x2="11" y2="16"/></svg>`,
  book: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  user: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  users: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M17 21v-2a4 4 0 0 0-3-3.87"/><path d="M9 21v-2a4 4 0 0 1 3-3.87"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  star: `<svg class="icon-svg" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  award: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,
  shield: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>`,
  sunrise: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2v6"/><path d="M4.93 10.93l4.24 4.24"/><path d="M2 18h20"/><path d="M20 18a8 8 0 0 0-16 0"/><path d="M19.07 10.93l-4.24 4.24"/></svg>`,
  dollar: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
  camera: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  facebook: `<svg class="icon-svg" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
  twitter: `<svg class="icon-svg" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>`,
  youtube: `<svg class="icon-svg" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>`,
  whatsapp: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`,
  search: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  moon: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  sun: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
  check: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="20 6 9 17 4 12"/></svg>`,
  arrowRight: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  arrowLeft: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
  heart: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`
};

// Helper getter function
const getSvgIcon = (name) => SVG_ICONS[name] || '';

// Export globally for inline JS use
if (typeof window !== 'undefined') {
  window.SVG_ICONS = SVG_ICONS;
  window.getSvgIcon = getSvgIcon;
}
