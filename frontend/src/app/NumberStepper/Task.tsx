
export default function Task() {
  return (
    <div className="max-w-2xl m-auto">

      <h2>Innledning</h2>
      <p>
        Dette er en oppgave for å for å avdekke hvordan kandidaten ville løst en
        kode-oppgave lik de man møter i jobb. Oppgaven blir bedømt på:
        ferdighetsgrad, kodekvalitet, testbarhet og valg som er gjort underveis.
        Det blir ikke lagt fokus på CSS/styling ut over det grunnleggende.
        Oppgaven kan løses med valgfri web-teknologi. Commit ofte, så er det
        enklere å se hvordan du jobber.
      </p>

      <h2>Tidsbruk</h2>
      <p>
        Kandidaten får en uke på seg til å løse oppgaven. Du står dermed fritt
        til å disponere tiden selv. Det er ok om du ikke får til all
        funksjonalitet - vi er like interessert i å se hvordan du jobber som
        hvordan den ferdige løsningen ser ut.
      </p>

      <h2>Oppgave</h2>
      <p>
        Kjernen i denne oppgaven er en komponent vi kaller en number stepper.
        Denne er en input-komponent for numeriske verdier, som skal være
        tilrettelagt for å kunne brukes fra nettbrett.
      </p>
      <p>
        Komponenten skal vise et visst antall siffer. Hvert siffer skal ha en
        &quot;+&quot;-knapp over seg og en &quot;-&quot;-knapp under seg. Disse endrer den viste
        verdien ref. sifferet de hører til. F.eks. hvis komponenten viser tallet
        123 og en trykker på &quot;+&quot;-knappen over 2-tallet, endres verdien til 133.
      </p>

      <p>
        I tillegg til sifrene skal komponenten kunne vise et valgfritt
        skilletegn, og det skal angis hvor mange siffer som skal vises foran og
        bak skilletegnet. F.eks. et kommatall som kan ha to siffer foran komma
        og et siffer bak, vil kunne bruke komponenten ved å oppgi to siffer
        foran skilletegnet, et siffer bak og &quot;,&quot; som skilletegn.
      </p>

      <p>
        Komponenten skal være &quot;dum&quot;. Validering skal gjøres av komponenten/sida
        som bruker komponenten. Dvs. hvis maks verdi av eksempelet over er 50,0
        og verdien nå er 45,0 og &quot;+&quot;-tegnet over 4-tallet klikkes, skal det være
        mulig sette verdien til 50,0 i stedet for 55,0 - men denne logikken skal
        ikke ligge i number-stepper&apos;en.
      </p>

      <p>
        I tillegg skal det være mulig å spesifisere en (valgfri) kort tekst som
        skal vises foran eller bak sifrene, f.eks. en enhet. Det må også oppgis
        utenifra om denne teksten skal vises foran eller bak. Komponenten
        trenger ikke støtte ekstra informasjon som negative tall.
      </p>

      <h3>Enkel bruk: Vise kommatall</h3>
      <p>
        I løsningen, vis en number stepper som kan vise og endre et tall mellom
        0,0 og 10,0, med et siffer etter komma.
      </p>

      <h3>Avansert bruk: Klokkeslett, dato og år</h3>

      <p>
        I løsningen, vis en side med tre number stepper&apos;e. Den første skal ha to
        siffer foran og to siffer bak skilletegnet, som skal være &quot;:&quot;. Denne
        skal vise et klokkeslett i 24-timers-format. Den andre skal også ha to
        siffer foran og bak skilletegnet, som skal være &quot;/&quot;. Dette skal vise en
        dato på formatet DD/MM. Den tredje komponenten skal ha fire siffer, og
        ikke noe skilletegn. Denne skal brukes til å vise et årstall. De tre
        komponentene skal henge sammen slik at hvis f.eks. klokkeslettet går fra
        23:30 til 00:30 (ved å trykke på &quot;+&quot;-knappen over det første
        &quot;3&quot;-tallet), skal også datoen økes med en dag.
      </p>
    </div>
  );
}
