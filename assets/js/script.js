document.addEventListener("DOMContentLoaded", function () {
  // Main
});

const DATA = {
  name: "AĐΞMAR CIĐASI",
  bio: "Fã de open source e emocore.",
  portfolio: "https://www.behance.net/cid4si",
  blog: "#",
  projects: "#",
  links: [
    {
      name: "behance",
      url: "https://www.behance.net/cid4si",
      icon: "assets/icons/behance.svg",
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/cid4si/",
      icon: "assets/icons/instagram.svg",
    },
    {
      name: "bluesky",
      url: "https://bsky.app/profile/cidasi.bsky.social",
      icon: "assets/icons/bluesky.svg",
    },
    {
      name: "spotify",
      url: "https://open.spotify.com/playlist/3aEgtDt1LdIJnRbUy6csSh?si=OtT_HysdSiq5tAoAZGvg0w",
      icon: "assets/icons/spotify.svg",
    },
    {
      name: "last.fm",
      url: "https://www.last.fm/user/cid4si",
      icon: "assets/icons/lastfm.svg",
    },
    {
      name: "github",
      url: "https://github.com/cid4si",
      icon: "assets/icons/github.svg",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/admrcds/",
      icon: "assets/icons/linkedin-in.svg",
    },
  ],
};

const bioParagraph = document.getElementById('bio-text');
if (bioParagraph) {
  bioParagraph.textContent = DATA.bio;
}

const list = document.getElementById('links-list');
  if (list) {
    DATA.links.forEach((link, i) => {
      const a = document.createElement('a');
      a.className = 'link-item'; // chmar fade-up aqui
      a.href = link.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      
      a.style.animationDelay = `${0.3 + i * 0.06}s`; // efeito fade-in 
      
      a.innerHTML = `
        <img src="${link.icon}" alt="${link.name}" class="link-icon">
        <div class="link-name">${link.name}</div>
        <div class="link-arrow">↗</div>
      `;
      list.appendChild(a);
    });
  }

  // Dark Mode Toggle
  // const themeBtn = document.getElementById('themeBtn');