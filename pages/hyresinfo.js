import { useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Hyresinfo.module.css";

const tabs = [
  { id: "viktigt", label: "Viktigt" },
  { id: "inflytt", label: "Inflytt" },
  { id: "utflytt", label: "Utflytt" },
  { id: "faq", label: "Vanliga frågor" },
];

function TabViktigt({ s }) {
  return (
    <div className={s.content}>
      <h2>Viktigt att känna till</h2>
      <div className={s.infoBox}>
        <p>
          Har du frågor om något nedan? Kontakta oss på info@tinfors.se eller
          via formuläret på sidan Felanmälan.
        </p>
      </div>

      <h3>Brandvarnare</h3>
      <p>
        Som hyresgäst ansvarar du för att brandvarnaren fungerar. Testa den
        regelbundet och byt batteri vid behov.
      </p>

      <h3>Ventilation</h3>
      <p>
        Rengör ventilationsgaller regelbundet för att säkerställa god
        luftcirkulation. Täck aldrig över ventiler.
      </p>

      <h3>Avlopp</h3>
      <p>
        Häll inte matolja, kaffegrounds eller annat ned i avloppet. Använd
        alltid hårsil i badrum och dusch för att förhindra stopp.
      </p>

      <h3>Golv och väggar</h3>
      <p>
        Tork upp vattenspill omgående för att förhindra fuktskador. Vid sprickor
        eller skador i golv och väggar, anmäl detta via felanmälan.
      </p>

      <h3>Sopsortering</h3>
      <p>
        Vi sorterar avfall i enlighet med Örebro kommuns riktlinjer. Använd rätt
        kärl för respektive fraktion. Grovsopor lämnas vid miljöstationen.
      </p>

      <h3>Störningar</h3>
      <p>
        Visa hänsyn till dina grannar. Höga ljud bör undvikas mellan kl. 22.00
        och 07.00. Vid återkommande störningar kontaktar du oss.
      </p>

      <h3>Husdjur</h3>
      <p>
        Husdjur är tillåtna efter skriftligt godkännande från oss. Husdjur får
        aldrig vistas i gemensamma utrymmen utan koppel.
      </p>
    </div>
  );
}

function TabInflytt({ s }) {
  return (
    <div className={s.content}>
      <h2>Inflytt</h2>
      <p>Välkommen som hyresgäst! Här är vad som gäller när du flyttar in.</p>

      <h3>Besiktning</h3>
      <p>
        Vid inflytt görs en gemensam besiktning av lägenheten. Eventuella
        anmärkningar noteras i ett besiktningsprotokoll som du som hyresgäst
        skriver under.
      </p>

      <h3>Nycklar</h3>
      <p>
        Du hämtar dina nycklar på avtalad tid. Kvittera alltid ut nycklarna.
        Förlust av nyckel debiteras hyresgästen.
      </p>

      <h3>El och hemförsäkring</h3>
      <p>
        Teckna elavtal och hemförsäkring i god tid före inflytt. Hemförsäkring
        är ett krav för att få bo hos oss.
      </p>

      <h3>Adressändring</h3>
      <p>
        Glöm inte att anmäla adressändring till Skatteverket så snart du vet
        ditt inflyttningsdatum.
      </p>
    </div>
  );
}

function TabUtflytt({ s }) {
  return (
    <div className={s.content}>
      <h2>Utflytt</h2>
      <p>Planerar du att flytta? Här finns information om vad som gäller.</p>

      <h3>Uppsägningstid</h3>
      <p>Uppsägningstiden är tre månader. Uppsägningen ska göras skriftligt.</p>

      <h3>Städning</h3>
      <p>
        Lägenheten ska vara ordentligt städad vid utflytt. Alla ytor, skåp,
        vitvaror och fönster ska vara rengjorda. Vid brister debiteras
        hyresgästen för städning.
      </p>

      <h3>Återlämning av nycklar</h3>
      <p>
        Samtliga nycklar som kvitterats ut ska återlämnas senast på avtalad
        utflyttningsdag. Saknade nycklar debiteras hyresgästen.
      </p>

      <h3>Besiktning</h3>
      <p>
        En slutbesiktning genomförs i samband med utflytt. Du som hyresgäst är
        välkommen att närvara.
      </p>

      <h3>Återbetalning av deposition</h3>
      <p>
        Eventuell deposition återbetalas efter avdrag för eventuella skador,
        inom 30 dagar efter utflytt.
      </p>
    </div>
  );
}

function TabFaq({ s }) {
  const faqs = [
    {
      q: "Vad ingår i hyran?",
      a: "Hyran inkluderar värme, vatten och bredband. El tecknar du själv.",
    },
    {
      q: "Hur anmäler jag ett fel i lägenheten?",
      a: "Använd vår felanmälningssida. Vi svarar så snart vi kan och bokar in en tid för åtgärd.",
    },
    {
      q: "Kan jag ha husdjur?",
      a: "Husdjur är tillåtna med skriftligt godkännande. Kontakta oss så ser vi vad som gäller för din lägenhet.",
    },
    {
      q: "Vad gör jag om jag tappat bort min nyckel?",
      a: "Kontakta oss omgående. En ny nyckel kan beställas mot en avgift.",
    },
    {
      q: "Får jag måla om lägenheten?",
      a: "Nej. Kontakta oss så hittar vi en lösning.",
    },
    {
      q: "Hur lång är kötiden?",
      a: "Kötiden varierar. Anmäl ditt intresse så kontaktar vi dig när en passande lägenhet blir ledig.",
    },
  ];

  return (
    <div className={s.content}>
      <h2>Vanliga frågor</h2>
      {faqs.map((faq, i) => (
        <div key={i} className={s.faqItem}>
          <h3>{faq.q}</h3>
          <p>{faq.a}</p>
        </div>
      ))}
    </div>
  );
}

export default function HyresinfoPage() {
  const [active, setActive] = useState("viktigt");

  return (
    <Layout title="Hyresinfo">
      <div className="page-header">
        <h1>Hyresinfo</h1>
        <p>Praktisk information för dig som bor eller ska flytta in hos oss</p>
      </div>

      <div className="section">
        <div className={styles.tabs}>
          {tabs.map((t) => (
            <button
              key={t.id}
              className={`${styles.tab} ${
                active === t.id ? styles.active : ""
              }`}
              onClick={() => setActive(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {active === "viktigt" && <TabViktigt s={styles} />}
        {active === "inflytt" && <TabInflytt s={styles} />}
        {active === "utflytt" && <TabUtflytt s={styles} />}
        {active === "faq" && <TabFaq s={styles} />}
      </div>
    </Layout>
  );
}
