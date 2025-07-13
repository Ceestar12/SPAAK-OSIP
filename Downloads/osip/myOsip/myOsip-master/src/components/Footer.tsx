
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="font-inter bg-brand-navy text-white pt-8 pb-3 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Motto */}
        {/* Logo & Motto */}
<div className="space-y-4 col-span-1">
  <div className="flex items-center gap-2">
    <img
      src="/decisionLogo.png"
      alt="DecisionSpaak Technologies Logo"
      className="h-11 w-11 bg-white object-contain rounded-md border-2 border-brand-gold"
    />
    <span className="font-bold text-lg text-brand-gold">
      DECISIONSPAAK <span className="text-white ml-1">TECHNOLOGIES</span>
    </span>
  </div>
  <div className="leading-snug text-[15px]">
    Innovating.<br />Empowering.<br />Transforming.
  </div>
  <div className="mt-3 space-y-1">
  <div className="flex items-center gap-2">
    <span role="img" aria-label="Nigeria" className="text-lg">🇳🇬</span>
    <span className="text-sm">DST Labs, Lagos, Nigeria</span>
  </div>
  <div className="flex items-center gap-2">
    <span role="img" aria-label="Qatar" className="text-lg">🇶🇦</span>
    <span className="text-sm">Floor 8, QFC Towers, Doha, Qatar</span>
  </div>
  {/* Contact Emails */}
  <div className="flex items-center gap-2">
    <Mail className="w-4 h-4 text-brand-gold" />
    <a
      href="mailto:info@decisionspaak.com"
      className="text-sm hover:text-brand-gold transition"
    >
      info@decisionspaak.com
    </a>
  </div>
  <div className="flex items-center gap-2">
    <Mail className="w-4 h-4 text-brand-gold" />
    <a
      href="mailto:osip@decisionspaak.com"
      className="text-sm hover:text-brand-gold transition"
    >
      osip@decisionspaak.com
    </a>
  </div>
</div>

</div>

        {/* Services */}
        <div>
          <div className="font-semibold text-base mb-2 text-brand-gold">Services</div>
          <ul className="text-[15px] space-y-1">
            <li>• DST Labs</li>
            <li>• DST Advisory</li>
            <li>• DST Training</li>
          </ul>
        </div>
        {/* Quick Links */}
        <div>
          <div className="font-semibold text-base mb-2 text-brand-gold">Quick Links</div>
          <ul className="text-[15px] space-y-1">
            <li><a href="#" className="hover:text-brand-gold transition">About us</a></li>
            <li><a href="#" className="hover:text-brand-gold transition">Career</a></li>
            <li><a href="#" className="hover:text-brand-gold transition">Blog</a></li>
            <li><a href="#" className="hover:text-brand-gold transition">Contact</a></li>
          </ul>
        </div>
        {/* Newsletter */}
        <div>
          <div className="font-semibold text-base mb-2 text-brand-gold">Newsletter</div>
          <div className="text-sm mb-2">Subscribe to our newsletter for the latest update and insight</div>
          <form className="flex mt-3">
            <input
              className="rounded-l-lg bg-white/90 px-3 py-2 w-full text-gray-900 outline-none focus:ring-2 focus:ring-brand-gold"
              type="email"
              placeholder="Your email"
              required
            />
            <button
              className="bg-brand-gold hover:bg-yellow-400 px-4 flex items-center rounded-r-lg transition-all"
              type="submit"
              aria-label="Subscribe"
            >
              <Mail className="text-brand-navy w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
      {/* Copyright */}
      <div className="border-t border-brand-gold/10 mt-8 pt-3 text-center text-gray-300 text-xs">
        © 2025 DecisionSpaak Technologies. All right reserved
      </div>
    </footer>
  );
};

export default Footer;
