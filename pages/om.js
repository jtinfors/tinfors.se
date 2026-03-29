import Layout from "../components/Layout";
import styles from "../styles/Om.module.css";

export default function OmPage() {
  return (
    <Layout title="Om Tinfors Fastigheter">
      <section className={styles.hero}>
        <img
          src="/trapphus_banner.jpg"
          alt="Trapphus i Tinfors Fastigheters bestånd"
          className={styles.heroImage}
        />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Om oss</p>
          <h1 className={styles.title}>Tinfors Fastigheter</h1>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.inner}>
          <p className={styles.lead}>
            Sedan 1976 har vi som litet familjeföretag erbjudit trygga och
            trivsamma hem i Örebro.
          </p>
          <p>
            Hos oss är personlig service och omtanke alltid i centrum – vi vill
            att både hyresgäster och fastigheter ska må bra. Vår styrka ligger i
            närheten till våra hyresgäster, hög standard i våra bostäder och ett
            långsiktigt engagemang som gått i arv i familjen i flera
            generationer.
          </p>
        </div>
      </section>
    </Layout>
  );
}
