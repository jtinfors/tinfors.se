import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Layout.module.css";

const SITE_URL = "https://tinfors.se";
const DEFAULT_DESCRIPTION =
  "Tinfors Fastigheter erbjuder trivsamma hyreslägenheter i norra Örebro, med promenadavstånd till centrum och natursköna rekreationsområden.";
const DEFAULT_IMAGE = `${SITE_URL}/trapphus_banner.jpg`;

export default function Layout({ children, title, description, image }) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => router.pathname === path;

  const pageTitle = title
    ? `${title} – Tinfors Fastigheter`
    : "Tinfors Fastigheter – Lägenheter i Örebro";
  const pageDescription = description || DEFAULT_DESCRIPTION;
  const pageImage = image || DEFAULT_IMAGE;
  const canonicalUrl = `${SITE_URL}${router.asPath.split("?")[0]}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="sv_SE" />
        <meta property="og:site_name" content="Tinfors Fastigheter" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:url" content={canonicalUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
      </Head>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoMark}>TF</span>
              <span className={styles.logoText}>Tinfors Fastigheter</span>
            </Link>
            <nav className={styles.nav}>
              <Link
                href="/fastigheterna"
                className={`${styles.navLink} ${
                  isActive("/fastigheterna") ? styles.active : ""
                }`}
              >
                Fastigheterna
              </Link>
              <Link
                href="/om"
                className={`${styles.navLink} ${
                  isActive("/om") ? styles.active : ""
                }`}
              >
                Om
              </Link>
              <Link
                href="/hyresinfo"
                className={`${styles.navLink} ${
                  isActive("/hyresinfo") ? styles.active : ""
                }`}
              >
                Hyresinfo
              </Link>
              <Link href="/intresseanmalan" className={styles.navLink}>
                Intresseanmälan
              </Link>
              <Link
                href="/hyresledigt"
                className={`${styles.navCta} ${
                  isActive("/hyresledigt") ? styles.active : ""
                }`}
              >
                Hyresledigt
              </Link>
            </nav>
            <button
              className={styles.hamburger}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Meny"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
          <nav className={`${styles.mobileNav} ${menuOpen ? styles.open : ""}`}>
            <Link
              href="/hyresledigt"
              className={`${styles.mobileNavLink} ${
                isActive("/hyresledigt") ? styles.active : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Hyresledigt
            </Link>
            <Link
              href="/fastigheterna"
              className={`${styles.mobileNavLink} ${
                isActive("/fastigheterna") ? styles.active : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Fastigheterna
            </Link>
            <Link
              href="/om"
              className={`${styles.mobileNavLink} ${
                isActive("/om") ? styles.active : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Om
            </Link>
            <Link
              href="/hyresinfo"
              className={`${styles.mobileNavLink} ${
                isActive("/hyresinfo") ? styles.active : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Hyresinfo
            </Link>
            <Link
              href="/intresseanmalan"
              className={styles.mobileNavCta}
              onClick={() => setMenuOpen(false)}
            >
              Intresseanmälan
            </Link>
          </nav>
        </header>

        <main className={styles.main}>{children}</main>

        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <div>
              <h3 className={styles.footerTitle}>Tinfors Fastigheter</h3>
              <p className={styles.footerText}>
                Vi erbjuder trivsamma lägenheter i norra Örebro med
                promenadavstånd till stadens centrum och natursköna områden.
              </p>
            </div>
            <div>
              <h4 className={styles.footerSubtitle}>Snabblänkar</h4>
              <ul className={styles.footerLinks}>
                <li>
                  <Link href="/hyresledigt">Hyresledigt</Link>
                </li>
                <li>
                  <Link href="/fastigheterna">Fastigheterna</Link>
                </li>
                <li>
                  <Link href="/intresseanmalan">Intresseanmälan</Link>
                </li>
                <li>
                  <Link href="/hyresinfo">Hyresinfo</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>© {new Date().getFullYear()} Tinfors Fastigheter</p>
          </div>
        </footer>
      </div>
    </>
  );
}
