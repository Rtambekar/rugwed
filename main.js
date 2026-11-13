const RES = "assets/Rugwed_Tambekar_Resume.pdf",
  dl = (o) =>
    `<a class="btn ${o ? "o" : ""}" href="${RES}" download>Download resume ↓</a>`;
const ids = Object.keys(P),
  $ = (s) => document.querySelector(s);
const img = (k) =>
  `<img src="${I[k]}" alt="" loading="lazy" class="${k[0] == "t" ? "wd" : k.slice(0, 2) == "ny" ? "fr" : ""}">`;
const words = (s, c) =>
  s
    .split(" ")
    .filter(Boolean)
    .map((x) => `<span class="w ${c || ""}" style="--i:@@i@@">${x}</span>`)
    .join(" ");
function hd(a) {
  let i = 0;
  return a
    .map((s, j) => words(s, j % 2 ? "h" : "").replace(/@@i@@/g, () => i++))
    .join(" ");
}
const chips = (a) =>
  `<ul class="ch">${a.map((x) => `<li>${x}</li>`).join("")}</ul>`;
const btn = (l, o) =>
  `<a class="btn ${o ? "o" : ""}" href="${l[1]}" target="_blank" rel="noopener">${l[0]} ↗</a>`;
function home() {
  const stack = [
    "React Native",
    "Expo",
    "TypeScript",
    "Firebase",
    "Laravel",
    "MongoDB",
    "PostgreSQL",
    "Convex",
    "Tailwind",
    "Unity",
    "MySQL",
    "JavaScript",
  ];
  const m = stack
    .concat(stack)
    .map((x) => `<span>${x}</span>`)
    .join("");
  return `<div class="c hero"><div><h1>${hd(["I build ", "mobile apps that farmers, buyers and travellers ", "use every day."])}</h1><p>React Native developer in Pune. I ship apps to the App Store and Play Store, from marketplace flows and payments to push notifications and KYC. Off screen.</p><a class="btn" href="#work">See my work ↓</a> <a class="btn o" href="#music" data-go>Hear me play ♪</a> ${dl(1)}</div>
<div class="trio"><img src="${I.mk_home}" alt="Maikisaan home feed"><img src="${I.mk_mandi}" alt="Price Mandi wishlist"><img src="${I.mk_price}" alt="Price trend chart"></div></div>
<div class="mq"><div>${m}</div></div>
<section class="s" id="work"><div class="c"><h2>Three shipped products, each built for a different crowd.</h2>
${ids
  .map((k, i) => {
    const p = P[k];
    return `<a class="card rv" href="#${k}" style="--t:${p.t};--a:${p.a};--d:${i * 0.08}s"><div class="tx"><div><div class="lbl">${p.tag}</div><h3>${p.n}</h3><p>${p.d}</p></div>${chips(p.ch.slice(0, 4))}<span class="btn" style="align-self:flex-start">View case study →</span></div><div class="cv">${p.cv.map(img).join("")}</div></a>`;
  })
  .join("")}</div></section>
<section class="s" id="about"><div class="c"><div class="me rv"><img src="${I.me}" alt="Rugwed Tambekar playing guitar"><div><h2 style="font-size:clamp(1.8rem,4vw,2.8rem);color:var(--mu);margin-bottom:18px">I’m Rugwed, a React Native developer</h2><p>I build the parts of an app people have to trust: marketplace listings, payments, KYC and notifications. Most of my work is in agritech, where a slow or confusing screen costs a farmer real money.</p><div class="kv"><span>Based in</span><b>Pune, India</b><span>Email</span><a href="${L.mail}">rugwedrjt21@gmail.com</a><span>Elsewhere</span><a href="${L.li}" target="_blank" rel="noopener">LinkedIn</a></div></div></div>
<div class="tl rv">
<div><span>Feb 2025 – now</span><p><b>React Native developer, Iconic Maikisaan Agrotech.</b> Maikisaan is an agricultural e-commerce platform that connects farmers directly with buyers. It covers farmer registration, status updates, product listings, enquiries and certifications. Built with React Native (Expo), React.js, Django, AWS and ONDC, with payment integration and analytics planned.</p></div>
<div><span>Dec 2024 – Feb 2025</span><p><b>Frontend developer intern, GuruCool Life.</b> Worked on an astrology website and app, helping astrologers reach new users.</p></div>
<div><span>2023 – 2025</span><p><b>MCA, MIT World Peace University.</b> Team Head of Curriculum Activities.</p></div>
<div><span>2019 – 2022</span><p><b>BBA (CA), Savitribai Phule Pune University.</b> Graduated with an A+ grade.</p></div></div>
<div class="sk rv"><div><span>Languages</span>C++, C, Java, C#, SQL, JavaScript</div><div><span>Frameworks</span>React Native (Expo), Laravel, Unity</div><div><span>Web</span>HTML, CSS, Bootstrap, TypeScript, Tailwind, TailAdmin</div><div><span>Databases</span>MongoDB, MySQL, PostgreSQL, Firebase, Convex</div></div></div></section>
<section class="s" id="music"><div class="c"><div class="mu rv"><div><h2>Sixteen beats, and a keyboard to play over them.</h2><p>Teental has sixteen beats in four groups of four, and everything lands on the first one. Press play, then jam on the keys or your A–K keys. I also sing, play piano and guitar, and compose and master my own music.</p><button class="btn" data-play>Play teental ▶</button></div>
<div><div class="tg">${BOL.map((b, i) => `<button class="bt ${i % 4 ? "" : "s"}" tabindex="-1" aria-hidden="true"><small>${i + 1}</small>${b}</button>`).join("")}</div>
<div class="kb">${"Sa Re Ga Ma Pa Dha Ni Sa"
    .split(" ")
    .map(
      (n, i) =>
        `<button data-k="${i}" aria-label="Note ${n}">${n}<small>${"ASDFGHJK"[i]}</small></button>`,
    )
    .join("")}</div></div></div></div></section>
<section class="ct" id="contact"><div class="c"><h2 class="rv">Let’s build your next app.</h2><div class="lk rv">${btn(["Email me", L.mail])}${dl(1)}${btn(["LinkedIn", L.li], 1)}${btn(["GitHub", L.gh], 1)}</div></div></section>`;
}
function detail(k) {
  const p = P[k],
    o = ids.filter((x) => x != k);
  return `<div style="--a:${p.a};--t:${p.t}"><div class="c"><div class="bn"><a class="lbl" href="#" onclick="location.hash='work';return false">← All projects</a><h1>${hd(p.h)}</h1>${chips(p.ch)}<div class="lk">${p.lk.map((l, i) => btn(l, i)).join("")}</div></div>
<div class="hp">${p.hero.map((x, i) => img(x).replace("<img", '<img data-sp="' + [0.05, 0.12, 0.07][i] + '"')).join("")}</div>
<div class="ov"><div><h2>Overview</h2></div><div><p style="margin:0;font-size:1.1rem">${p.d}</p></div></div>
${p.fx.length ? `<div class="fx">${p.fx.map((f) => `<div><b class="cu" data-n="${f[0]}">0</b><span>${f[1]}</span></div>`).join("")}</div>` : ""}
<div class="ov"><div><h2>What it does</h2></div><ul class="ft" style="margin:0">${p.ft.map((f) => `<li>${f}</li>`).join("")}</ul></div>
${p.sc.map((s) => `<div class="sc"><div class="tx rv"><h2>${s[0]}</h2><p>${s[1]}</p></div><div class="md rv">${s[2].map(img).join("")}</div></div>`).join("")}
<div class="ov"><div><h2>More work</h2></div><div class="more" style="margin:0">${o.map((x) => `<a href="#${x}"><small>${P[x].tag}</small><b>${P[x].n} →</b></a>`).join("")}</div></div></div></div>
<section class="ct"><div class="c"><h2 class="rv">Want something like this?</h2><div class="lk">${btn(["Email me", L.mail])}${dl(1)}</div></div></section>`;
}
const BOL = [
    "Dha",
    "Dhin",
    "Dhin",
    "Dha",
    "Dha",
    "Dhin",
    "Dhin",
    "Dha",
    "Dha",
    "Tin",
    "Tin",
    "Ta",
    "Ta",
    "Dhin",
    "Dhin",
    "Dha",
  ],
  KS = [261.63, 293.66, 329.63, 349.23, 392, 440, 493.88, 523.25];
let ac,
  tm = 0,
  bi = 0;
const au = () =>
  ac || (ac = new (window.AudioContext || window.webkitAudioContext)());
function tone(f, d, v, ty, g) {
  const c = au(),
    n = c.currentTime,
    o = c.createOscillator(),
    x = c.createGain();
  o.type = ty;
  o.frequency.setValueAtTime(f, n);
  if (g) o.frequency.exponentialRampToValueAtTime(f * g, n + d);
  x.gain.setValueAtTime(v, n);
  x.gain.exponentialRampToValueAtTime(0.0001, n + d);
  o.connect(x).connect(c.destination);
  o.start(n);
  o.stop(n + d);
}
function hit(b) {
  if (b == "Dha" || b == "Dhin") tone(120, 0.5, 0.55, "sine", 0.55);
  tone(
    { Dha: 330, Dhin: 392, Tin: 520, Ta: 440 }[b],
    b == "Ta" ? 0.14 : 0.3,
    0.22,
    "triangle",
  );
}
function tick() {
  document
    .querySelectorAll(".bt")
    .forEach((e, i) => e.classList.toggle("on", i == bi));
  hit(BOL[bi]);
  bi = (bi + 1) % 16;
}
function stop() {
  clearInterval(tm);
  tm = 0;
  bi = 0;
  document.querySelectorAll(".bt.on").forEach((e) => e.classList.remove("on"));
  document
    .querySelectorAll("[data-play]")
    .forEach((b) => (b.textContent = "Play teental ▶"));
}
function start() {
  if (tm) return;
  au().resume();
  tick();
  tm = setInterval(tick, 420);
  document
    .querySelectorAll("[data-play]")
    .forEach((b) => (b.textContent = "Pause ❚❚"));
}
function note(i) {
  const k = document.querySelector('[data-k="' + i + '"]');
  tone(KS[i], 1, 0.3, "triangle");
  if (k) {
    k.classList.add("on");
    setTimeout(() => k.classList.remove("on"), 160);
  }
}
document.addEventListener("click", (e) => {
  if (e.target.closest("[data-play]")) tm ? stop() : start();
  else if (e.target.closest("[data-go]")) start();
  const m = e.target.closest(".mb");
  if (m) document.querySelector("nav").classList.toggle("open");
  else if (e.target.closest("nav .nl a"))
    document.querySelector("nav").classList.remove("open");
});
addEventListener("pointerdown", (e) => {
  const k = e.target.closest("[data-k]");
  if (k) note(+k.dataset.k);
});
addEventListener("keydown", (e) => {
  const i = "asdfghjk".indexOf(e.key);
  if (
    i >= 0 &&
    !e.repeat &&
    !e.metaKey &&
    !e.ctrlKey &&
    !/INPUT|TEXTAREA/.test(e.target.tagName) &&
    document.querySelector(".kb")
  )
    note(i);
});
let io;
function init() {
  io && io.disconnect();
  io = new IntersectionObserver(
    (e) =>
      e.forEach((x) => {
        if (x.isIntersecting) {
          x.target.classList.add("in");
          if (x.target.classList.contains("cu")) cnt(x.target);
          io.unobserve(x.target);
        }
      }),
    { threshold: 0.15 },
  );
  document.querySelectorAll(".rv,.cu").forEach((e) => io.observe(e));
}
function cnt(e) {
  const n = +e.dataset.n,
    t0 = performance.now();
  if (matchMedia("(prefers-reduced-motion:reduce)").matches)
    return (e.textContent = n);
  (function f(t) {
    const k = Math.min(1, (t - t0) / 900);
    e.textContent = Math.round(n * (1 - Math.pow(1 - k, 3)));
    k < 1 && requestAnimationFrame(f);
  })(t0);
}
function route() {
  document.querySelector("nav").classList.remove("open");
  const h = location.hash.slice(1),
    a = $("#app");
  if (P[h]) stop();
  if (P[h]) {
    a.innerHTML = detail(h);
    a.dataset.v = h;
    scrollTo(0, 0);
  } else {
    if (a.dataset.v != "home") {
      a.innerHTML = home();
      a.dataset.v = "home";
    }
    const t = ["work", "about", "music", "contact"].includes(h) && $("#" + h);
    t
      ? t.scrollIntoView({
          behavior: matchMedia("(prefers-reduced-motion:reduce)").matches
            ? "auto"
            : "smooth",
        })
      : scrollTo(0, 0);
  }
  init();
}
let tk = 0;
addEventListener(
  "scroll",
  () => {
    if (tk) return;
    tk = 1;
    requestAnimationFrame(() => {
      tk = 0;
      const d = document.documentElement;
      $("#bar").style.width =
        (scrollY / Math.max(1, d.scrollHeight - innerHeight)) * 100 + "%";
      if (!matchMedia("(prefers-reduced-motion:reduce)").matches)
        document.querySelectorAll("[data-sp]").forEach((e) => {
          const r = e.getBoundingClientRect();
          e.style.transform = `translateY(${(r.top - innerHeight / 2) * -e.dataset.sp}px)`;
        });
    });
  },
  { passive: true },
);
addEventListener("hashchange", route);
route();
