import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function HomePage() {
  return (
    <Layout>
      {/* Hero */}
      <section className={styles.hero}>
        <img
          src="https://homeq-media-live.s3.amazonaws.com/2880/apartment_images/83c00bdfa3e448aa80ea2edc45a5448f.jpeg"
          alt="Flerbostadshus i Örebro"
          className={styles.heroImage}
        />
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Örebro · Norr</p>
          <h1 className={styles.heroTitle}>
            Trivsamma lägenheter i norra Örebro
          </h1>
          <p className={styles.heroSubtitle}>
            Vi erbjuder välskötta lägenheter i bra lägen med promenadavstånd
            till stadens centrum, resecentrum och natursköna rekreationsområden.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/hyresledigt" className="btn-primary">
              Se lediga lägenheter
            </Link>
            <Link href="/intresseanmalan" className="btn-outline">
              Intresseanmälan
            </Link>
          </div>
        </div>
      </section>

      {/* CTA cards */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaGrid}>
          <Link href="/hyresledigt" className={styles.ctaCard}>
            <div className={styles.ctaIcon}>🏠</div>
            <h3>Hyresledigt</h3>
            <p>Hitta din nästa lägenhet bland våra aktuella lediga objekt.</p>
            <span className={styles.ctaArrow}>Se lediga lägenheter →</span>
          </Link>
          <Link href="/intresseanmalan" className={styles.ctaCard}>
            <div className={styles.ctaIcon}>📋</div>
            <h3>Intresseanmälan</h3>
            <p>
              Inget ledigt just nu? Anmäl ditt intresse så kontaktar vi dig.
            </p>
            <span className={styles.ctaArrow}>Anmäl intresse →</span>
          </Link>
          <Link href="/felanmalan" className={styles.ctaCard}>
            <div className={styles.ctaIcon}>🔧</div>
            <h3>Felanmälan</h3>
            <p>
              Är något trasigt i din lägenhet? Anmäl felet så åtgärdar vi det.
            </p>
            <span className={styles.ctaArrow}>Anmäl fel →</span>
          </Link>
        </div>
      </section>

      {/* About */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutText}>
          <span className={styles.aboutEyebrow}>Om oss</span>
          <h2>Välkommen som hyresgäst hos oss</h2>
          <p>
            Tinfors Fastigheter förvaltar ett bestånd av lägenheter i den norra
            delen av Örebro. Här bor du i ett trivsamt område med bekvämt
            promenadavstånd till stadens centrum, resecentrum och till
            rekreationsområdet vid Hjälmarens strand.
          </p>
          <p>
            I naturreservatet Rynningeviken finns vintertid möjlighet till
            skridskoåkning på naturis och sommartid till ett dopp i
            Alnängsbadet. Vi värnar om en trygg och välskött boendemiljö för
            alla våra hyresgäster.
          </p>
          <Link href="/hyresledigt" className="btn-primary">
            Se lediga lägenheter
          </Link>
        </div>
        <div className={styles.aboutImage}>
          <img src="/SouthLillaStrand24.png" alt="Bostadshus i Örebro" />
        </div>
      </section>
    </Layout>
  );
}
