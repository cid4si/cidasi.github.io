// ── GSAP via CDN ──────────────

const DATA = {
  name: "AĐΞMAR CIĐASI",
  bio: "fã de open source e emocore.",
  links: [
    { name: "behance",   url: "https://www.behance.net/cid4si",                                                        icon: "assets/icons/behance.svg",      platform: "behance"   },
    { name: "instagram", url: "https://www.instagram.com/cid4si/",                                                     icon: "assets/icons/instagram.svg",    platform: "instagram" },
    { name: "bluesky",   url: "https://bsky.app/profile/cidasi.bsky.social",                                           icon: "assets/icons/bluesky.svg",      platform: "bluesky"   },
    { name: "spotify",   url: "https://open.spotify.com/playlist/3aEgtDt1LdIJnRbUy6csSh?si=OtT_HysdSiq5tAoAZGvg0w", icon: "assets/icons/spotify.svg",      platform: "spotify"   },
    { name: "last.fm",   url: "https://www.last.fm/user/cid4si",                                                       icon: "assets/icons/lastfm.svg",       platform: "lastfm"    },
    { name: "github",    url: "https://github.com/cid4si",                                                             icon: "assets/icons/github.svg",       platform: "github"    },
    { name: "linkedin",  url: "https://www.linkedin.com/in/admrcds/",                                                  icon: "assets/icons/linkedin-in.svg",  platform: "linkedin"  },
  ],
};

document.addEventListener("DOMContentLoaded", function () {

  
  const bioText = document.querySelector('#bio-text .reveal-text');
  if (bioText) bioText.textContent = DATA.bio;


  const list = document.getElementById('links-list');
  if (list) {
    DATA.links.forEach((link) => {
      const a = document.createElement('a');
      a.className        = 'link-item';
      a.href             = link.url;
      a.target           = '_blank';
      a.rel              = 'noopener noreferrer';
      a.dataset.platform = link.platform;
      a.innerHTML = `
        <img src="${link.icon}" alt="${link.name}" class="link-icon">
        <div class="link-name">${link.name}</div>
        <div class="link-arrow">↗</div>
      `;
      list.appendChild(a);
    });
  }

  // ── GSAP Animations ──────────────────────────────────────────────
  gsap.registerPlugin(); 

  gsap.from('.brand h1', {
    opacity: 0,
    y: -14,
    duration: 0.7,
    ease: 'power3.out',
    delay: 0.1,
  });

  gsap.from('nav', {
    opacity: 0,
    y: -10,
    duration: 0.6,
    ease: 'power3.out',
    delay: 0.2,
  });

  gsap.from('.bio-section', {
    opacity: 0,
    duration: 0.5,
    ease: 'power2.out',
    delay: 2.0,
  });

  gsap.set('.link-item', { opacity: 0, y: 20 });
  gsap.to('.link-item', {
    opacity: 1,
    y: 0,
    duration: 0.55,
    ease: 'back.out(1.4)',
    stagger: 0.07,
    delay: 2.1,
  });

  
  gsap.from('footer', {
    opacity: 0,
    duration: 0.4,
    ease: 'power1.out',
    delay: 2.8,
  });

  document.querySelectorAll('.link-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      gsap.to(item, {
        x: 8,
        scale: 1.02,
        duration: 0.35,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    });
    item.addEventListener('mouseleave', () => {
      gsap.to(item, {
        x: 0,
        scale: 1,
        duration: 0.4,
        ease: 'elastic.out(1, 0.5)',
        overwrite: 'auto',
      });
    });
  });

  // ── Dark Mode Toggle ─────────────────────────────────────────────
  const themeBtn  = document.getElementById('themeBtn');
  const themeIcon = document.getElementById('themeIcon');
  const html      = document.documentElement;

  function applyTheme(theme) {
    html.dataset.theme = theme;
    localStorage.setItem('theme', theme);
    themeIcon.src = theme === 'dark'
      ? './assets/icons/lightbulb-night.svg'
      : './assets/icons/lightbulb-day.svg';
    themeIcon.alt = theme === 'dark' ? 'modo escuro' : 'modo claro';
  }

  // Carrega preferência salva ou detecta sistema
  const saved = localStorage.getItem('theme');
  if (saved) {
    applyTheme(saved);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('dark');
  }

  themeBtn.addEventListener('click', () => {
    // Spin no ícone ao trocar tema
    gsap.fromTo(themeIcon,
      { rotate: 0, scale: 1 },
      { rotate: 360, scale: 1.2, duration: 0.4, ease: 'power2.inOut',
        onComplete: () => {
          gsap.to(themeIcon, { rotate: 0, scale: 1, duration: 0 });
          applyTheme(html.dataset.theme === 'dark' ? 'light' : 'dark');
        }
      }
    );
  });

});