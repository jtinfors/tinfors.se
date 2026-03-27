import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Kontakt.module.css";

export default function KontaktPage() {
  return (
    <Layout title="Kontakt">
      <div className="page-header">
        <h1>Kontakt</h1>
        <p>Har du frågor? Vi finns här för dig.</p>
      </div>

      <div className="section">
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Kontaktuppgifter</h2>

            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>✉️</div>
              <div>
                <div className={styles.contactLabel}>Intresseanmälan</div>
                <div className={styles.contactValue}>
                  <a href="/intresseanmalan">
                    Använd formuläret för intresseanmälan
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>📍</div>
              <div>
                <div className={styles.contactLabel}>Besöksadress</div>
                <div className={styles.contactValue}>
                  Besök sker efter överenskommelse.
                  <br />
                  Örebro
                </div>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>🕐</div>
              <div>
                <div className={styles.contactLabel}>Svarstid</div>
                <div className={styles.contactValue}>
                  Vi svarar normalt inom 1–2 arbetsdagar.
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className={styles.card}>
              <h2>Intresseanmälan</h2>
              <p
                className={styles.contactValue}
                style={{ marginBottom: "1.25rem" }}
              >
                Vill du hyra lägenhet hos oss? Fyll i en intresseanmälan så
                kontaktar vi dig.
              </p>
              <Link href="/intresseanmalan" className="btn-secondary">
                Anmäl intresse
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
