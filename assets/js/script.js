document.addEventListener("DOMContentLoaded", function () {
  // Main
});

    const DATA = { // links e informações do perfil
      name: "AĐΞMAR CIĐASI",
      bio: "Fã de open source, e emocore.",
      portfolio: "https://www.behance.net/cid4si",
      blog: "#",
      projects: "#",
      links: [
      {
      name: "behance",
      url: "https://www.behance.net/cid4si",
      desc: "behance.net/cid4si"
      },
      {
      name: "instagram",
      url: "https://www.instagram.com/cid4si/",
      desc: "instagram.com/cid4si/"
      },
      {
      name: "bluesky",
      url: "https://bsky.app/profile/cidasi.bsky.social",
      desc: "bsky.app/profile/cidasi.bsky.social"
      },
      {
      name: "spotify",
      url: "https://open.spotify.com/playlist/3aEgtDt1LdIJnRbUy6csSh?si=OtT_HysdSiq5tAoAZGvg0w",
      desc: "open.spotify.com/playlist/3aEgtDt1LdIJnRbUy6csSh"
      },
      {
      name: "last.fm",
      url: "https://www.last.fm/user/cid4si",
      desc: "last.fm/user/cid4si"
      },
      {
      name: "github",
      url: "https://github.com/cid4si",
      desc: "github.com/cid4si"
      },
      {
      name: "linkedin",
      url: "https://www.linkedin.com/in/admrcds/",
      desc: "linkedin.com/in/admrcds/"
      }
    ]
};

document.getElementById('bio').textContent = DATA.bio; // Exibe a bio


const list = document.getElementById('links-list'); // Container para os links
DATA.links.forEach(link => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = link.url;
  a.textContent = link.name;
  a.target = '_blank';
  li.appendChild(a);
  list.appendChild(li);
});
