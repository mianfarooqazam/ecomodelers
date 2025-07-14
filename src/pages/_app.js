import "../app/globals.css";
import Image from "next/image";
import { Numans } from "next/font/google";
import Link from "next/link";

const numans = Numans({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-numans",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={`${numans.variable} antialiased sustainable-bg`}>
      <div className="eco-bg-overlay">
        <div className="eco-layout">
          <aside className="eco-sidebar">
            <div className="eco-logo">
              <Image src="/file.svg" alt="Logo" width={36} height={36} />
              <span className="eco-logo-text">Eco<br/>Modelers</span>
            </div>
            <nav className="eco-nav">
              <Link href="/" className="eco-nav-link font-black">Home</Link>
              <Link href="/whyus" className="eco-nav-link">Why Us</Link>
              <Link href="/core-values" className="eco-nav-link">Core Values</Link>
              <Link href="/services" className="eco-nav-link">Services</Link>
              <Link href="/portfolio" className="eco-nav-link">Portfolio</Link>
              <Link href="/team" className="eco-nav-link">Team</Link>
              <Link href="/contact" className="eco-nav-link">Contact</Link>
            </nav>
            <div className="eco-socials">
              <span className="eco-socials-label">Our socials:</span>
              <div className="eco-socials-icons">
                <a href="#" aria-label="Facebook" className="eco-social-icon">f</a>
                <a href="#" aria-label="Instagram" className="eco-social-icon">i</a>
                <a href="#" aria-label="LinkedIn" className="eco-social-icon">in</a>
              </div>
            </div>
          </aside>
          <main className="eco-main-content">
            <Component {...pageProps} />
          </main>
        </div>
      </div>
    </div>
  );
} 