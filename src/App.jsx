const BRAND = "Soft Loops by SA";
const TAGLINE = "Knit With Love";
const PHONE = "923212869896";
const EMAIL = "shamiqaahsan@gmail.com";
const INSTAGRAM = "https://www.instagram.com/soft_loopsby_sa";
const INSTA_HANDLE = "@soft_loopsby_sa";

const img = (file) => `/images/${encodeURIComponent(file)}`;

const LOGO = img("Logo.jpeg");
// Pick your most beautiful, bright product photo for the big hero background
const HERO_IMG = img("Hero image.png");

// Edit names and prices here
const products = [
  { name: "Crochet Keychains", price: "Rs 200", img: img("Product 1.jpeg") },
  { name: "Crochet Shoulder Bag", price: "Rs 2100", img: img("Product 2.jpeg") },
  { name: "Floral Headband", price: "Rs 300", img: img("Product 3.jpeg") },
  { name: "Baby Girl Dress Set", price: "Rs 5000", img: img("Product 4.jpeg") },
  { name: "Rainbow Crochet HandClutch", price: "Rs 3500", img: img("Product 5.jpeg") },
  { name: "Crochet Rose Bouquet", price: "Rs 2300", img: img("Product 6.jpeg") },
];

const ABOUT = [
  "Hi, I'm Shamiqa Ahsan, the owner of Soft Loops by SA.",
  "I make cute, soft crochet pieces by hand, with love and care in every single stitch.",
  "Each item is made slowly and carefully, so no two pieces are exactly alike.",
  "I hope something here brings a little warmth to you or someone you love.",
];

const waLink = (text) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;

const WaIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.200Zm4.500-6.100c-.2-.1-1.500-.7-1.700-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.200-.3.200-.5.100a6.700 6.700 0 0 1-3.300-2.900c-.2-.4.200-.4.700-1.300.1-.2 0-.3 0-.5l-.8-1.800c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.100-.7.300-.2.300-.9.900-.9 2.200s.9 2.500 1 2.700c.1.200 1.800 2.800 4.400 3.900 1.600.7 2.300.7 3.100.6.500-.1 1.500-.6 1.700-1.200.2-.6.2-1.100.2-1.200-.1-.1-.3-.2-.5-.3Z" />
  </svg>
);

function Wave({ color = "#FFF3E2", flip = false }) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={`block h-10 w-full sm:h-16 ${flip ? "rotate-180" : ""}`}
    >
      <path
        d="M0,40 C240,90 480,0 720,40 C960,80 1200,10 1440,40 L1440,80 L0,80 Z"
        fill={color}
      />
    </svg>
  );
}

function SectionTitle({ children, sub }) {
  return (
    <div className="mb-10 text-center">
      <h2 className="font-hand text-4xl font-bold text-[#7A3E10] sm:text-5xl">
        {children}
      </h2>
      <div className="mx-auto mt-2 w-40 border-t-2 border-dashed border-[#D98E2F]" />
      {sub && <p className="mt-3 text-sm text-[#7A3E10]/80">{sub}</p>}
    </div>
  );
}

export default function App() {
  return (
    <div className="text-[#5A3012]">
      {/* FLOATING MENU */}
      <nav className="fixed left-3 right-3 top-3 z-30 mx-auto flex max-w-5xl items-center justify-between rounded-full border-2 border-dashed border-[#D98E2F] bg-[#FFF3E2]/95 py-1.5 pl-2 pr-4 shadow-md backdrop-blur">
        <a href="#top" className="flex items-center gap-2">
          <span className="h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-[#D98E2F] bg-[#FFEBD6]">
            <img
              src={LOGO}
              alt={`${BRAND} logo`}
              className="h-full w-full scale-[1.5] object-cover"
            />
          </span>
          <span className="font-hand hidden text-xl font-bold text-[#7A3E10] sm:inline">
            {BRAND} <span className="text-[#D98E2F]">♡</span>
          </span>
        </a>
        <div className="font-hand flex items-center gap-1 text-lg font-bold sm:gap-2 sm:text-xl">
          <a href="#top" className="rounded-full bg-[#D98E2F] px-3 py-1 text-white sm:px-4">
            Home
          </a>
          <a href="#products" className="rounded-full px-3 py-1 hover:bg-[#FBE3C4]">
            Shop
          </a>
          <a href="#about" className="rounded-full px-3 py-1 hover:bg-[#FBE3C4]">
            About
          </a>
          <a href="#contact" className="hidden rounded-full px-3 py-1 hover:bg-[#FBE3C4] sm:block">
            Contact
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <img
          src={HERO_IMG}
          alt="Handmade crochet by Soft Loops by SA"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* lighter peach overlay: photo stays clear, text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FBE3C4]/60 via-[#F6CFA0]/30 to-[#FFF3E2]/90" />

        <div className="relative z-10 px-5 pb-24 pt-28 text-center">
          <p className="font-hand text-2xl font-bold text-[#B8691C] sm:text-3xl">
            ♡ Handmade with love ♡
          </p>
          <h1
            className="font-hand mt-2 text-6xl font-bold leading-none text-[#7A3E10] sm:text-8xl"
            style={{ textShadow: "0 3px 0 #FFF3E2, 0 6px 18px rgba(255,243,226,.9)" }}
          >
            Soft Loops
            <br className="sm:hidden" /> by SA
          </h1>
          <p
            className="font-hand mt-4 text-3xl font-bold text-[#5A3012] sm:text-4xl"
            style={{ textShadow: "0 2px 10px rgba(255,243,226,.95)" }}
          >
            {TAGLINE} <span className="text-[#D98E2F]">♡</span>
          </p>
          <a
            href="#products"
            className="font-hand mt-8 inline-block rounded-full border-2 border-dashed border-[#FFF3E2] bg-[#B8691C] px-9 py-3 text-2xl font-bold text-white shadow-lg outline-2 outline-offset-2 outline-[#B8691C] transition hover:bg-[#7A3E10]"
          >
            Shop Now →
          </a>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <Wave color="#FFF3E2" />
        </div>
      </header>

      {/* PRODUCTS */}
      <section id="products" className="scroll-mt-4 bg-[#FFF3E2] px-4 pb-6 pt-8">
        <div className="mx-auto max-w-5xl">
          <SectionTitle sub="Explore more products on my Instagram">My Collection</SectionTitle>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
            {products.map((p) => (
              <div
                key={p.name}
                className="rounded-3xl border-2 border-dashed border-[#D98E2F]/70 bg-[#FFF9F0] p-2.5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-3"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="aspect-square w-full object-cover"
                  />
                  <span className="font-hand absolute right-2 top-2 rounded-full bg-[#FFF3E2]/95 px-3 py-0.5 text-lg font-bold text-[#B8691C] shadow">
                    {p.price}
                  </span>
                </div>
                <h3 className="font-hand mt-3 px-1 text-xl font-bold text-[#7A3E10] sm:text-2xl">
                  {p.name}
                </h3>
                <a
                  href={waLink(`Hi ${BRAND}, I want to order the ${p.name}`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#B8691C] py-2 text-xs font-bold text-white transition hover:bg-[#7A3E10] sm:text-sm"
                >
                  <WaIcon /> Order on WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Wave color="#FBE3C4" />

      {/* ABOUT */}
      <section id="about" className="scroll-mt-4 bg-[#FBE3C4] px-4 pb-6 pt-4">
        <div className="mx-auto max-w-3xl">
          <SectionTitle>About Me</SectionTitle>
          <div className="flex flex-col items-center gap-6 rounded-[2rem] border-2 border-dashed border-[#D98E2F] bg-[#FFF3E2] p-6 text-center shadow md:flex-row md:text-left">
            <span className="h-32 w-32 shrink-0 overflow-hidden rounded-full border-4 border-[#D98E2F] bg-[#FFEBD6] shadow">
              <img
                src={LOGO}
                alt={`${BRAND} logo`}
                className="h-full w-full scale-[1.5] object-cover"
              />
            </span>
            <p className="text-base leading-relaxed sm:text-lg">{ABOUT.join(" ")}</p>
          </div>
        </div>
      </section>

      <Wave color="#D98E2F" />

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-4 bg-[#D98E2F] px-5 pb-12 pt-2 text-center">
        <div className="mx-auto max-w-md">
          <h2 className="font-hand text-4xl font-bold text-white sm:text-5xl">
            Let's Connect ♡
          </h2>
          <p className="mt-2 text-sm text-white/90">
            Message me to order or ask anything.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3">
            <a
              href={waLink(`Hi ${BRAND}!`)}
              target="_blank"
              rel="noreferrer"
              className="font-hand flex w-72 items-center justify-center gap-2 rounded-full bg-[#FFF3E2] py-2.5 text-2xl font-bold text-[#7A3E10] shadow transition hover:bg-white"
            >
              <WaIcon /> WhatsApp
            </a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="font-hand w-72 rounded-full bg-[#7A3E10] py-2.5 text-2xl font-bold text-white shadow transition hover:bg-[#5A3012]"
            >
              Instagram {INSTA_HANDLE}
            </a>
            <a href={`mailto:${EMAIL}`} className="mt-1 text-sm text-white underline">
              {EMAIL}
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#7A3E10] py-5 text-center text-xs text-[#FFF3E2]">
        <span className="font-hand text-lg">{TAGLINE} ♡</span>
        <br />© {new Date().getFullYear()} {BRAND}
      </footer>
    </div>
  );
}

