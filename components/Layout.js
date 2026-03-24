import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Layout.module.css";

export default function Layout({ children, title }) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => router.pathname === path;

  return (
    <>
      <Head>
        <title>
          {title
            ? `${title} – Tinfors Fastigheter`
            : "Tinfors Fastigheter – Lägenheter i Örebro"}
        </title>
        <meta
          name="description"
          content="Tinfors Fastigheter erbjuder trivsamma lägenheter i norra Örebro."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
                href="/hyresinfo"
                className={`${styles.navLink} ${
                  isActive("/hyresinfo") ? styles.active : ""
                }`}
              >
                Hyresinfo
              </Link>
              <Link
                href="/felanmalan"
                className={`${styles.navLink} ${
                  isActive("/felanmalan") ? styles.active : ""
                }`}
              >
                Felanmälan
              </Link>
              <Link
                href="/kontakt"
                className={`${styles.navLink} ${
                  isActive("/kontakt") ? styles.active : ""
                }`}
              >
                Kontakt
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
                Lediga lägenheter
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
              Lediga lägenheter
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
              href="/felanmalan"
              className={`${styles.mobileNavLink} ${
                isActive("/felanmalan") ? styles.active : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Felanmälan
            </Link>
            <Link
              href="/kontakt"
              className={`${styles.mobileNavLink} ${
                isActive("/kontakt") ? styles.active : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Kontakt
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
                  <Link href="/hyresledigt">Lediga lägenheter</Link>
                </li>
                <li>
                  <Link href="/intresseanmalan">Intresseanmälan</Link>
                </li>
                <li>
                  <Link href="/hyresinfo">Hyresinfo</Link>
                </li>
                <li>
                  <Link href="/felanmalan">Felanmälan</Link>
                </li>
                <li>
                  <Link href="/kontakt">Kontakt</Link>
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
