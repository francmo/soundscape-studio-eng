// Soundscape Field Recording Exercises - Esercizi Professionali Riscritti
// Basati sugli esercizi di R. Murray Schafer - "Educazione al Suono"
// Totale: 96 esercizi professionali completamente dettagliati

var fieldRecordingExercises = {
  'ascolto-base': [
    {
      title: "\ud83d\udcdd Catalogo Acustico Personale",
      description: "Documenta ogni elemento sonoro che percepisci nel momento presente",
      prompt: "Dedica alcuni minuti a trascrivere meticolosamente ogni fonte sonora che raggiunge le tue orecchie. Se lavori in gruppo, condividete poi le liste ad alta voce, notando le differenze individuali. L'ascolto \u00e8 profondamente soggettivo: ogni persona percepir\u00e0 e annoter\u00e0 suoni diversi, e tutte le risposte sono ugualmente valide, indipendentemente dalla lunghezza dell'elenco. Ripeti questo esercizio in contesti acustici differenti per allenare sistematicamente la tua capacit\u00e0 di ascolto attivo.",
      duration: "10-15 min",
      examples: [
        "\ud83d\udccd Esempio in casa: ronzio frigorifero, ticchettio orologio, passi piano superiore, ventilazione",
        "\ud83c\udf33 Esempio all'aperto: fruscio foglie, voci lontane, motori auto, cinguettio uccelli",
        "\ud83c\udfe2 Esempio in ufficio: tastiere, telefoni, ventilatore PC, conversazioni sottovoce"
      ]
    },
    {
      title: "\ud83c\udff7\ufe0f Classificazione Sistematica",
      description: "Organizza il tuo inventario sonoro secondo criteri multipli",
      prompt: "Riprendi l'elenco appena compilato e applica diversi sistemi di codifica. Per prima cosa, assegna a ogni suono una lettera: 'N' per origine naturale, 'U' per origine umana, 'T' per origine tecnologica. Qual \u00e8 la tipologia dominante nel tuo ambiente? Successivamente, marca con una 'X' i suoni che tu stesso hai generato. Conta: sei pi\u00f9 produttore o ricevitore di suoni? Infine, classifica la temporalit\u00e0: 'C' per continuo, 'R' per ripetitivo, 'U' per unico.",
      duration: "15 min",
      examples: [
        "\ud83d\udca1 Traffico stradale = T + altri + C (tecnologico, prodotto da altri, continuo)",
        "\ud83d\udde3\ufe0f La tua voce = U + X + U (umano, prodotto da te, unico)",
        "\ud83c\udf0a Fontana nel parco = N + altri + C (naturale, continuo)"
      ]
    },
    {
      title: "\ud83d\udcca Mappatura dell'Intensit\u00e0",
      description: "Visualizza il paesaggio sonoro secondo volume e preferenza emotiva",
      prompt: "Prendi un foglio bianco e dividilo mentalmente in due zone: la met\u00e0 superiore rappresenta i suoni forti, quella inferiore i suoni deboli. Trascrivi ogni elemento acustico che percepisci posizionandolo verticalmente secondo la sua intensit\u00e0 percepita. Dopo aver completato questa prima mappa, prendi un secondo foglio e ripeti l'operazione, questa volta usando la parte superiore per i suoni piacevoli e quella inferiore per quelli sgradevoli. Confronta le due mappe: c'\u00e8 correlazione tra volume e gradevolezza nel tuo ambiente?",
      duration: "20 min",
      examples: [
        "\ud83d\udd0a Suoni forti: traffico, sirena ambulanza, martello pneumatico, grida bambini",
        "\ud83d\udd09 Suoni deboli: ronzio frigorifero, fruscio foglie, respiro, orologio da polso",
        "\ud83d\ude0a Piacevoli: canto uccelli, risate lontane, fontana / \ud83d\ude23 Sgradevoli: motosega, clacson, allarme auto"
      ]
    },
    {
      title: "\ud83c\udfaf Mappatura Spaziale Radiale",
      description: "Crea una rappresentazione geografica del tuo ambiente acustico",
      prompt: "Gira il foglio in orizzontale. Disegna un cerchio di medie dimensioni al centro: questo sei tu. All'interno del cerchio annota tutti i suoni che produci direttamente (voce, passi, respiro, movimento vestiti). Attorno al cerchio, distribuisci tutti gli altri suoni secondo la loro distanza effettiva e direzione rispetto a te. Usa la posizione sul foglio per indicare se provengono da destra, sinistra, davanti, dietro. Pi\u00f9 lontano \u00e8 il suono, pi\u00f9 distante dal cerchio centrale lo posizionerai.",
      duration: "15 min",
      examples: [
        "\ud83e\uddcd Centro: respiro, battito cardiaco percepito, fruscio vestiti, deglutizione",
        "\u27a1\ufe0f Destra vicino: voce collega, tastiera, ventilatore / Destra lontano: traffico strada",
        "\u2b06\ufe0f Sopra: passi piano superiore, aereo in quota / \u2b07\ufe0f Sotto: impianto riscaldamento seminterrato"
      ]
    },
    {
      title: "\ud83d\udd22 Conteggio Selettivo",
      description: "Addestra l'attenzione concentrata su categorie sonore specifiche",
      prompt: "Scegli una tipologia sonora particolare e conta quante occorrenze percepisci in un intervallo di tempo definito. Potrebbe trattarsi di stridii di freni, abbaiamenti canini, passaggi di motociclette, colpi di clacson, porte che si chiudono. Focalizzando l'attenzione su pattern specifici acquisisci una conoscenza intima e strutturata del paesaggio sonoro complessivo. Ripeti l'esercizio con categorie diverse per costruire un profilo statistico del tuo ambiente.",
      duration: "20 min",
      examples: [
        "\ud83d\ude97 In 15 minuti a un incrocio: 23 frenate, 7 clacson, 3 motociclette, 12 chiusure portiere",
        "\ud83d\udc15 In parco pubblico: 5 cani diversi riconoscibili, 18 abbaiamenti totali, 3 guaiti acuti",
        "\ud83d\udd14 Centro storico: 4 campanili distinguibili, segnatura ogni 15 minuti, 1 concerto mezzogiorno"
      ]
    },
    {
      title: "\ud83d\udc5e Biblioteca delle Calzature",
      description: "Sviluppa capacit\u00e0 di riconoscimento delle tipologie di passi",
      prompt: "Posizionati in un angolo di strada o corridoio trafficato. Chiudi gli occhi e concentrati esclusivamente sui passi delle persone che transitano. Quante tipologie differenti di scarpe riesci a distinguere? Tacchi alti, suole gommose, scarpe da ginnastica, anfibi, ciabatte, scarpe eleganti in cuoio producono signature acustiche uniche. Se lavori in gruppo, create piccole improvvisazioni sonore in cui ogni partecipante porta calzature diverse e sperimenta ritmi, velocit\u00e0 e dinamiche di movimento.",
      duration: "15 min",
      examples: [
        "\ud83d\udc60 Tacchi alti: click-clack ritmico, frequenza alta, risonanza su marmo",
        "\ud83d\udc5f Sneakers: suono attutito, strisciamento gomma, respiro della suola",
        "\ud83d\udc5e Scarpe eleganti: passi decisi, cuoio su asfalto, risonanza media, precisione ritmica"
      ]
    },
    {
      title: "\ud83d\udcfb Memoria del Tono Continuo",
      description: "Allena la memoria tonale attraverso un riferimento costante",
      prompt: "Identifica un suono continuo presente nel tuo ambiente (ronzio elettrico, ventilazione, impianto di condizionamento). Riproducilo canticchiando fino a trovare l'altezza esatta. Fissa questa nota nella tua memoria tonale, poi fai un giro del quartiere di almeno 15-20 minuti. Al ritorno, prima di rientrare nell'ambiente originale, canta nuovamente la nota che ricordi. Solo dopo verifica: stai ancora cantando l'altezza corretta oppure la tua memoria tonale si \u00e8 spostata durante la passeggiata?",
      duration: "30 min",
      examples: [
        "\u26a1 Ronzio elettrico da 50Hz (circa Sol#1): dopo 20 min all'aperto ero salito di un semitono",
        "\ud83d\udca8 Ventilatore da soffitto (La3): memoria perfetta dopo passeggiata breve",
        "\ud83c\udfe2 Impianto condizionamento (Re2): dopo esposizione a traffico intenso ero sceso di 2 semitoni"
      ]
    },
    {
      title: "\ud83c\udfea Geografia del Silenzio Commerciale",
      description: "Mappa i livelli acustici degli spazi commerciali",
      prompt: "Entra in diversi negozi della tua zona e valuta il livello sonoro di ciascuno. Quale tipo di esercizio commerciale offre l'ambiente pi\u00f9 silenzioso? Quale il pi\u00f9 rumoroso? Esiste correlazione tra tipo merceologico e paesaggio sonoro? Le librerie sono pi\u00f9 silenziose dei negozi di elettronica? I bar sono pi\u00f9 rumorosi delle farmacie? Costruisci una classifica e rifletti sulle strategie acustiche, intenzionali o casuali, di ogni categoria commerciale.",
      duration: "45 min",
      examples: [
        "\ud83d\udcda Libreria indipendente: 35dB, sussurri, pagine sfogliate, silenzio reverenziale",
        "\ud83d\udd0a Negozio elettronica: 75dB, musica pop commerciale, demo TV, conversazioni forzate",
        "\u2615 Caffetteria artigianale: 65dB, macchina espresso, conversazioni, sottofondo musicale jazz"
      ]
    },
    {
      title: "\ud83e\ude9c Asimmetria della Scala",
      description: "Analizza le differenze acustiche tra salita e discesa",
      prompt: "Trova una scala frequentata (stazione metro, centro commerciale, edificio pubblico) e osserva il traffico pedonale. Posizionati a met\u00e0 scala e ascolta attentamente. Le persone che salgono producono lo stesso tipo di suono di quelle che scendono? Analizza ritmo, peso del passo, respirazione, uso del corrimano. La fatica della salita modifica il paesaggio sonoro? La prudenza della discesa genera signature diverse? Registra le differenze e crea una descrizione dettagliata dell'asimmetria acustica.",
      duration: "20 min",
      examples: [
        "\u2b06\ufe0f Salita: passi pi\u00f9 lenti, respiro pi\u00f9 udibile, maggior uso del corrimano, peso su avampiede",
        "\u2b07\ufe0f Discesa: passi pi\u00f9 rapidi, calcagno percussivo, scivolamenti occasionali, minor uso del corrimano",
        "\ud83d\udc65 Confronto: la salita ha ritmo 60bpm, la discesa 90bpm con maggior variabilit\u00e0 dinamica"
      ]
    },
    {
      title: "\ud83d\udeb6 Passeggiata d'Ascolto Guidata",
      description: "Esperienza di ascolto profondo in movimento collettivo",
      prompt: "Organizza una camminata silenziosa con un gruppo, mantenendo distanza di 3-4 metri tra i partecipanti, disposti in fila indiana. Percorrete un tracciato di 20-30 minuti senza parlare, concentrando tutta l'attenzione sull'ambiente acustico. Al ritorno, ogni partecipante risponde a domande precise: qual \u00e8 stato il suono pi\u00f9 forte? Il pi\u00f9 debole? Il pi\u00f9 acuto? Quali suoni erano in movimento? Quali provenivano dall'alto? Qual \u00e8 stato il suono pi\u00f9 sgradevole? Il pi\u00f9 bello? Il pi\u00f9 lontano? Il pi\u00f9 interessante dal punto di vista compositivo?",
      duration: "60 min",
      examples: [
        "\ud83d\udd0a Pi\u00f9 forte: camion spazzatura alle 6:30 / \ud83d\udd09 Pi\u00f9 debole: ali di farfalla su fiore",
        "\ud83c\udfb5 Pi\u00f9 acuto: allarme antifurto auto / \ud83d\udd3b Pi\u00f9 grave: tuono lontano",
        "\u2728 Pi\u00f9 interessante: dialogo ritmico tra due picchi che si chiamavano da alberi opposti"
      ]
    },
    {
      title: "\ud83c\udfaf Focalizzazione Sensoriale Sequenziale",
      description: "Sposta sistematicamente l'attenzione tra diverse zone dello spazio acustico",
      prompt: "Siediti in un ambiente sonoro complesso. Dedica 2 minuti a ascoltare SOLO i suoni alla tua sinistra, ignorando completamente destra, fronte, retro. Poi 2 minuti solo destra. Poi solo davanti. Poi solo dietro. Poi solo sopra. Poi solo sotto. Infine 2 minuti di ascolto globale integrando tutto. Questo esercizio di scanning sistematico sviluppa controllo attenzionale volontario e rivela quanto dell'ambiente acustico normalmente ignoriamo.",
      duration: "15 min",
      examples: [
        "\u2b05\ufe0f Solo sinistra 2 min: finestra, traffico, uccelli su albero, 8 elementi distinti",
        "\u27a1\ufe0f Solo destra 2 min: porta ingresso, vicino, frigo, 6 elementi",
        "\ud83c\udf10 Globale finale: integrazione difficile, sovraccarico, selezione automatica riprende"
      ]
    },
    {
      title: "\u23f3 Persistenza della Memoria Immediata",
      description: "Quanto dell'ultimo minuto acustico riesci a ricordare?",
      prompt: "Ascolta attentamente il tuo ambiente per esattamente 1 minuto. Appena scade il minuto, scrivi immediatamente tutti i suoni che ricordi in ordine cronologico. Quanti ne ricordi? Li ricordi nell'ordine corretto? I suoni forti o inattesi sono pi\u00f9 memorabili dei costanti? Ripeti questo esercizio sviluppa memoria acustica a breve termine, fondamentale per field recording professionale.",
      duration: "20 min (multipli tentativi)",
      examples: [
        "\ud83d\udcdd Tentativo 1: ricordati 6 suoni su circa 15 effettivi, bias verso inizi e fine del minuto",
        "\ud83d\udcdd Tentativo 3: miglioramento a 10 suoni, ordine cronologico ancora incerto",
        "\ud83d\udcdd Tentativo 5: 12 suoni, ordine corretto per 8, eventi salienti 100% catturati"
      ]
    },
    {
      title: "\ud83c\udfa8 Texture Acustiche",
      description: "Identifica e categorizza le qualit\u00e0 tattili dei suoni",
      prompt: "I suoni hanno texture \"tattili\" metaforiche: ruvidi, lisci, vellutati, taglienti, viscosi, cristallini, ovattati, granulari. Ascolta il tuo ambiente e assegna texture tattili a ogni suono. Il traffico \u00e8 ruvido? Il vento \u00e8 vellutato? Il cinguettio \u00e8 cristallino? Una sirena \u00e8 tagliente? Questa sinestesia tattile-uditiva rivela come percepiamo qualit\u00e0 multisensoriali anche in stimoli puramente acustici.",
      duration: "25 min",
      examples: [
        "\ud83e\udea8 Ruvido: motore diesel, carta vetrata, ghiaia calpestata",
        "\ud83e\uddc8 Liscio: tono sinusoidale puro, acqua calma, scivolamento seta",
        "\ud83d\udd2a Tagliente: sirena, grido acuto, vetro rotto, feedback audio"
      ]
    },
    {
      title: "\ud83c\udf0a Ritmi Nascosti",
      description: "Scopri pattern temporali periodici nel paesaggio sonoro",
      prompt: "Molti suoni ambientali hanno ciclicit\u00e0 nascoste: semafori che cambiano ogni 45 secondi, campane ogni quarto d'ora, aerei che passano ogni 3 minuti (rotte aeree), treni ogni 12 minuti. Durante 30 minuti di ascolto attento, identifica tutti i pattern ciclici e cronometra i loro periodi. Quanti ritmi simultanei coesistono? Il paesaggio sonoro \u00e8 una poliritmia complessa.",
      duration: "30 min",
      examples: [
        "\ud83d\udea6 Semaforo: ciclo 90 secondi (40s verde, 5s giallo, 45s rosso)",
        "\ud83d\udd14 Campane chiesa: ogni 15 minuti (quarti) + ogni ora (rintocchi pieni)",
        "\u2708\ufe0f Aerei: media 1 ogni 4 min 20s (rotta commerciale overhead)"
      ]
    },
    {
      title: "\ud83d\udc65 Ascolto Collettivo Divergente",
      description: "Confronta le percezioni individuali di uno stesso ambiente",
      prompt: "Con 3-5 persone, ascoltate tutti lo stesso ambiente per 5 minuti, poi separatamente scrivete una descrizione dettagliata. Confrontate: quanto divergono le descrizioni? Alcune persone notano uccelli, altre traffico, altre dettagli architettonici? Quali bias personali emergono? L'ascolto \u00e8 profondamente soggettivo e questa divergenza \u00e8 affascinante quanto istruttiva.",
      duration: "30 min",
      examples: [
        "\ud83c\udfb5 Persona A (musicista): focus su pattern ritmici, altezze, aspetti musicali",
        "\ud83c\udfd7\ufe0f Persona B (ingegnere): focus su sorgenti meccaniche, identificazione macchine",
        "\ud83c\udf3f Persona C (naturalista): focus esclusivo su fauna, ignora totalmente elementi urbani"
      ]
    }
  ],
  'movimento-suono': [
    {
      title: "\ud83d\udeb6\u200d\u2642\ufe0f Tassonomia del Movimento Sonoro",
      description: "Classifica i suoni secondo la loro cinematica relativa",
      prompt: "I suoni si dividono in tre categorie cinematiche fondamentali: suoni fermi nello spazio che tu oltrepassi (campanili, sirene di fabbrica, impianti fissi), suoni che si muovono autonomamente attraverso l'ambiente (traffico, aerei, animali), e suoni che si muovono con te (la tua voce, i tuoi passi, i tuoi vestiti, il tuo respiro). Durante una passeggiata di 30 minuti, compila tre liste separate per queste categorie, notando come il tuo movimento relativo modifica la percezione e le caratteristiche di ciascun suono.",
      duration: "30 min",
      examples: [
        "\ud83c\udfdb\ufe0f Suoni fermi: campanile chiesa, fontana piazza, sirena fabbrica, trasformatore elettrico",
        "\ud83d\ude97 Suoni mobili: auto che passa, aereo in volo, cane che corre, foglie nel vento",
        "\ud83c\udfc3 Suoni che mi accompagnano: mio respiro, miei passi, fruscio giacca, tintinnio chiavi"
      ]
    },
    {
      title: "\ud83c\udfa4 Localizzazione Dinamica della Voce",
      description: "Traccia una sorgente sonora mobile attraverso lo spazio",
      prompt: "Questo esercizio richiede un gruppo. Un partecipante cammina avanti e indietro in uno spazio ampio (parco, piazza, sala) parlando o cantando continuamente, mentre gli altri, a occhi chiusi, tentano di localizzare la voce indicandola con il braccio teso. La sorgente sonora pu\u00f2 variare il percorso: lineare, circolare, casuale, con cambi di velocit\u00e0 e direzione. Quanto \u00e8 accurata la localizzazione? Il movimento genera confusione? Dove si verificano pi\u00f9 errori: davanti, dietro, ai lati?",
      duration: "25 min",
      examples: [
        "\u27a1\ufe0f Movimento lineare: accuratezza 90%, errori minimi nelle svolte",
        "\ud83d\udd04 Movimento circolare: accuratezza 70%, confusione nei cambi di direzione rapidi",
        "\ud83c\udfb2 Movimento casuale: accuratezza 60%, massima difficolt\u00e0 nel tracciare direzione dietro la testa"
      ]
    },
    {
      title: "\ud83d\udea6 L'Incrocio Acustico",
      description: "Immersione totale nella complessit\u00e0 sonora urbana",
      prompt: "Scegli un incrocio trafficato della tua citt\u00e0. Posizionati in un angolo sicuro, chiudi gli occhi, e dedica 15 minuti all'ascolto totale dei movimenti sonori che ti circondano. Veicoli che accelerano e frenano, pedestri che attraversano, semafori che cliccano, porte di negozi che si aprono, conversazioni che passano. Prova a costruire una mappa mentale tridimensionale di tutti i flussi acustici, identificando pattern ricorrenti, momenti di pausa, esplosioni di complessit\u00e0. Questo esercizio rivela la struttura ritmica nascosta della vita urbana.",
      duration: "20 min",
      examples: [
        "\ud83d\udfe2 Semaforo verde: flusso continuo 10 secondi, crescendo poi decrescendo",
        "\ud83d\udd34 Semaforo rosso: 30 secondi di accumulo, motori al minimo, tensione crescente",
        "\ud83d\udeb6 Fase pedonale: 40 secondi, passi rapidi, carrozzine, cani, biciclette che zigzagano"
      ]
    },
    {
      title: "\ud83d\udeb4 Velocit\u00e0 e Percezione Doppler",
      description: "Sperimenta l'effetto Doppler a diverse velocit\u00e0",
      prompt: "L'effetto Doppler (il cambiamento di pitch per sorgenti in movimento relativo) \u00e8 esperibile in bicicletta, auto, o anche correndo. Passa accanto a una sorgente sonora continua (fontana, campanaccio fisso, altoparlante) a velocit\u00e0 crescenti. A piedi lenti (5km/h) l'effetto \u00e8 impercettibile. Correndo (15km/h) \u00e8 sottile. In bici (25km/h) diventa evidente. In auto (50km/h) \u00e8 drammatico. Documenta a quale velocit\u00e0 inizi a percepire il pitch shift.",
      duration: "45 min",
      examples: [
        "\ud83d\udeb6 5km/h a piedi: nessun Doppler percepibile",
        "\ud83c\udfc3 15km/h corsa: shift di ~5Hz su sorgente 440Hz, appena percettibile",
        "\ud83d\ude97 50km/h auto: shift di ~20Hz su sirena, chiaramente udibile"
      ]
    },
    {
      title: "\ud83c\udf00 Traiettorie Sonore Circolari",
      description: "Analizza suoni che si muovono in orbita attorno a te",
      prompt: "Posizionati al centro di uno spazio aperto (piazza, parcheggio vuoto, campo). Un collaboratore cammina/corre in cerchio attorno a te a distanza costante (10m di raggio) producendo un suono continuo (voce, campanello, fischietto). Chiudi gli occhi e traccia mentalmente la posizione. Dove perdi precisione? Davanti/dietro? Lati? La velocit\u00e0 di movimento influenza la localizzazione? Prova con diverse velocit\u00e0 e distanze.",
      duration: "30 min",
      examples: [
        "\u27a1\ufe0f Settore frontale (90\u00b0 centrale): errore medio \u00b18\u00b0, ottima localizzazione",
        "\u2b05\ufe0f Settori laterali: errore medio \u00b115\u00b0, discreta localizzazione",
        "\ud83d\udd04 Settore posteriore (90\u00b0 centrale): errore medio \u00b135\u00b0, confusione destra/sinistra"
      ]
    },
    {
      title: "\ud83c\udfa2 Accelerazione e Decelerazione",
      description: "Percepisci i cambi di velocit\u00e0 attraverso il suono",
      prompt: "Bendato, ascolta un collaboratore che si muove cambiando velocit\u00e0: fermo, avvio lento, accelerazione, velocit\u00e0 costante, decelerazione, stop. Riesci a identificare ogni fase solo dal suono? I passi rivelano peso, ritmo, intenzione. Un'auto che passa mostra Doppler e volume che cambiano. Registra vari esempi di movimento accelerato/decelerato e analizza quali parametri acustici rivelano la cinematica.",
      duration: "25 min",
      examples: [
        "\ud83d\udeb6 Avvio: ritmo incerto, peso progressivo, aumento graduale volume",
        "\ud83c\udfc3 Accelerazione: ritmo che si accorcia, dinamica crescente, pitch percussivo pi\u00f9 alto",
        "\u23f8\ufe0f Decelerazione: allungamento ritmo, peso su tallone, respiro pi\u00f9 udibile"
      ]
    },
    {
      title: "\u2708\ufe0f Geometria del Sorvolo",
      description: "Traccia le traiettorie tridimensionali di velivoli",
      prompt: "Gli aerei offrono opportunit\u00e0 uniche di studiare sorgenti mobili in 3D. Sdraiati in uno spazio aperto e ascolta un aereo che passa. Senza guardare, traccia mentalmente la sua traiettoria: direzione, altitudine relativa, velocit\u00e0. Il pitch Doppler rivela se si avvicina o allontana. L'intensit\u00e0 indica distanza. Il timbro (pi\u00f9/meno filtrato da umidit\u00e0) suggerisce altitudine. Dopo il passaggio, verifica guardando: quanto eri accurato?",
      duration: "30 min (multipli passaggi)",
      examples: [
        "\ud83d\udeeb Decollo: Doppler forte (salita rapida), volume crescente poi stabile, timbro che si filtra",
        "\u2708\ufe0f Crociera: Doppler minimo (perpendicolare), volume costante, timbro molto filtrato",
        "\ud83d\udeec Atterraggio: Doppler inverso, volume crescente continuo, timbro pi\u00f9 presente"
      ]
    },
    {
      title: "\ud83c\udfaa Rotazione Personale e Percezione",
      description: "Esplora come il tuo movimento rotatorio modifica la percezione spaziale",
      prompt: "In un ambiente ricco di suoni provenienti da diverse direzioni, ruota lentamente su te stesso a occhi chiusi compiendo un giro completo di 360\u00b0 in 60 secondi. Mentre ruoti, presta attenzione a come i suoni sembrano muoversi attorno a te, quando diventano pi\u00f9 forti (orientamento diretto dell'orecchio), quando si attenuano (ombra acustica della testa). Riesci a creare una mappa mentale stabile mentre il tuo frame di riferimento ruota?",
      duration: "20 min",
      examples: [
        "\ud83c\udfaf Traffico a nord: massimo volume quando orientato 0\u00b0, minimo a 180\u00b0",
        "\ud83d\udd14 Campana a est: boost di 6-8dB quando orecchio destro punta verso sorgente",
        "\ud83e\udded Confusione spaziale: difficile mantenere mappa mentale stabile durante rotazione continua"
      ]
    },
    {
      title: "\ud83d\ude82 Analisi del Passaggio Ferroviario",
      description: "Studia la complessa evoluzione acustica di un treno in transito",
      prompt: "Posizionati a distanza sicura da un passaggio a livello ferroviario. Documenta in dettaglio l'intera sequenza acustica: avviso sonoro del passaggio, campane o sirene, rumore crescente del treno in avvicinamento, massimo volume al passaggio (individua: rumore rotaie, fischio vento, vibrazioni), decadimento Doppler in allontanamento, silenzio finale. Quanto dura l'intero evento? Come varia il contenuto spettrale nelle diverse fasi?",
      duration: "45 min",
      examples: [
        "\ud83d\udd14 Fase 1 (60s prima): campane passaggio 75dB, ripetute ogni 2 secondi",
        "\ud83d\udcc8 Fase 2 (30s prima): crescendo dal rumore di fondo, Doppler ascendente, vibrazioni terra",
        "\ud83d\udca5 Fase 3 (transito): picco 95dB, dominanza 500-2000Hz, durata 8 secondi per 8 vagoni"
      ]
    },
    {
      title: "\ud83c\udfc3\u200d\u2640\ufe0f Eco del Movimento Personale",
      description: "Percepire le tue riflessioni sonore mentre ti muovi",
      prompt: "Cammina o corri in spazi con forte riverbero (tunnel, sottopasso, cortile chiuso, porticato) producendo suoni ritmici (battiti mani, passi accentuati, voce). Concentrati sulle riflessioni del suono che tornan indietro. Come cambiano quando acceleri o deceleri? Riesci a percepire la distanza delle pareti dall'eco? In movimento, le riflessioni creano pattern complessi. Sperimenta con diverse velocit\u00e0 e tipologie di suono emesso.",
      duration: "30 min",
      examples: [
        "\ud83d\udc4f Battiti mani lenti: eco chiaro separato, ritardo ~200ms in tunnel largo 35m",
        "\ud83c\udfc3 Corsa veloce: eco si fonde con suono diretto, percezione di \"scia\" sonora dietro",
        "\ud83d\udde3\ufe0f Voce cantata: riverbero crea armonizzazioni naturali, effetto cathedral"
      ]
    }
  ],
  'ascolto-estremo': [
    {
      title: "\ud83d\udd2d Il Suono Pi\u00f9 Lontano",
      description: "Espandi i confini della tua percezione acustica",
      prompt: "Trova un luogo con buona visibilit\u00e0 acustica (collina, spazio aperto, riva del mare). Siediti comodamente, chiudi gli occhi, e inizia a espandere gradualmente il tuo raggio d'attenzione sonora. Prima i suoni vicini, poi quelli a media distanza, infine concentrati sul suono pi\u00f9 remoto che riesci a percepire. Cos'\u00e8? Riesci a stimarne la distanza effettiva? \u00c8 continuo o intermittente? Naturale o antropico? Prova a rimanere focalizzato su questo suono limite per alcuni minuti, notando come la tua percezione si affina con l'attenzione sostenuta.",
      duration: "30 min",
      examples: [
        "\u2708\ufe0f Aereo in quota: stimato 10km, rombo intermittente, si muove da est a ovest",
        "\ud83c\udf0a Onde oceaniche: 3km di distanza, continuo, variazioni ogni 7-8 secondi",
        "\ud83d\udd14 Campane villaggio montano: 5km linea d'aria, rintocchi ogni 15 minuti, eco multipla"
      ]
    },
    {
      title: "\ud83c\udf05 Alba Sonora Completa",
      description: "Documenta l'intera transizione acustica dall'oscurit\u00e0 alla luce",
      prompt: "Svegliati prima dell'alba e posizionati in un punto di ascolto privilegiato (parco, campagna, collina). Registra mentalmente o su carta l'evoluzione del paesaggio sonoro dall'oscurit\u00e0 pre-alba fino a un'ora dopo il sorgere del sole. Come cambia la presenza degli uccelli? Quando inizia il traffico? Quali suoni notturni scompaiono? L'alba \u00e8 un momento di trasformazione acustica drammatica che rivela la struttura temporale del paesaggio sonoro.",
      duration: "120 min",
      examples: [
        "\ud83c\udf11 Ore 5:00 (buio): gufi, ultimo canto notturno, silenzio profondo 25dB",
        "\ud83c\udf04 Ore 5:30 (pre-alba): primi uccelli (pettirosso), crescendo graduale, 35dB",
        "\u2600\ufe0f Ore 6:30 (post-alba): coro pieno, traffico inizia, dominanza diurna stabilita 55dB"
      ]
    },
    {
      title: "\ud83c\udf0a Il Suono Dietro al Suono",
      description: "Ascolta strati nascosti mascherati da suoni dominanti",
      prompt: "In un ambiente con un suono dominante forte e costante (cascata, traffico intenso, ventilatore industriale), allena la tua attenzione selettiva per penetrare quel \"muro sonoro\" e identificare suoni pi\u00f9 deboli che esistono simultaneamente ma sono mascherati. Usa concentrazione meditativa per \"guardare attraverso\" il rumore di fondo. Quanti strati riesci a distinguere? Questo esercizio sviluppa ascolto penetrante.",
      duration: "40 min",
      examples: [
        "\ud83c\udf0a Dietro cascata 80dB: voci umane 60dB a 10m, canto uccelli 45dB, passi su ghiaia 50dB",
        "\ud83d\ude97 Dietro traffico 75dB: campanelli bici 55dB, risata bambino 65dB, porta che sbatte 70dB",
        "\ud83d\udca8 Dietro ventilatore 70dB: ticchettio orologio 35dB (totalmente mascherato per 5 min)"
      ]
    },
    {
      title: "\ud83e\udd87 Ascolto Notturno Estremo",
      description: "Esplora il paesaggio sonoro in totale oscurit\u00e0",
      prompt: "In una notte senza luna, in un luogo sicuro ma buio (parco chiuso, giardino, campagna), passa 45 minuti ad ascoltare senza alcun riferimento visivo. La deprivazione della vista amplifica drammaticamente l'acuit\u00e0 uditiva. Quali suoni emergono che di giorno ignori completamente? Come cambia la tua percezione di distanza senza feedback visivo? Il buio trasforma l'ascolto in esperienza immersiva totale.",
      duration: "45 min",
      examples: [
        "\ud83e\udd97 Dettagli emersi: singoli grilli distinguibili (non massa sonora), distanza stimata entro 2m",
        "\ud83c\udf43 Micro-eventi: foglia singola che cade udibile a 5m, percezione tridimensionale precisa",
        "\ud83d\udc63 Propri movimenti: ogni passo amplificato, consapevolezza acustica del corpo raddoppiata"
      ]
    },
    {
      title: "\ud83d\udd07 Il Suono pi\u00f9 Debole",
      description: "Trova la soglia inferiore della tua percezione acustica",
      prompt: "In un ambiente molto silenzioso (meno di 30dB), cerca sistematicamente il suono pi\u00f9 debole che riesci a percepire. Potrebbe essere il tuo respiro, il battito cardiaco, il fruscio dei vestiti, il ticchettio di un orologio lontano, la ventilazione impercettibile. Quanto ti devi concentrare per mantenerlo in attenzione? Questo esercizio esplora i limiti inferiori della sensibilit\u00e0 uditiva umana e la relazione tra attenzione e percezione.",
      duration: "30 min",
      examples: [
        "\ud83d\udc93 Battito cardiaco: percepibile in silenzio totale, circa 20-25dB, concentrazione intensa",
        "\ud83d\udc42 Tinnito personale: ronzio interno orecchio, sempre presente ma normalmente ignorato",
        "\ud83c\udf2c\ufe0f Micro-correnti aria: movimento impercettibile, udibile solo con attenzione assoluta"
      ]
    },
    {
      title: "\ud83c\udfd4\ufe0f Eco di Montagna",
      description: "Sperimenta riflessioni acustiche a lunghissima distanza",
      prompt: "In montagna, di fronte a una parete rocciosa distante (500m-2km), produce suoni forti (grido, battito mani amplificato, fischio) e cronometra il ritardo dell'eco. Calcola la distanza usando la velocit\u00e0 del suono (343 m/s). L'eco torna con fedelt\u00e0 o \u00e8 filtrato? Prova con diverse frequenze. Le alte frequenze si perdono pi\u00f9 delle basse? L'eco ti permette di \"vedere\" con il suono la geografia invisibile.",
      duration: "60 min",
      examples: [
        "\u23f1\ufe0f Parete 1000m: eco ritorna dopo 5.8s, frequenze alte (>4kHz) perse completamente",
        "\ud83d\udde3\ufe0f Grido vs fischio: grido (500Hz) eco chiaro, fischio (3kHz) molto attenuato",
        "\ud83c\udfd4\ufe0f Echo multipli: parete complessa genera 3-4 riflessioni successive, delay diversi"
      ]
    },
    {
      title: "\ud83c\udf0c Silenzio Assoluto",
      description: "Cerca l'ambiente pi\u00f9 silenzioso possibile",
      prompt: "Esplora diversi ambienti cercando il silenzio pi\u00f9 profondo accessibile. Bosco fitto, cripta, camera anecoica (se disponibile), grotta profonda, biblioteca vuota di notte, chiesa antica. Misura (anche solo percettivamente) quanto riesci ad avvicinarti al silenzio assoluto. Nel silenzio estremo, cosa senti? Solo il tuo corpo? Il \"silenzio\" esiste davvero o \u00e8 sempre pieno di suoni sottilissimi?",
      duration: "90 min (pi\u00f9 location)",
      examples: [
        "\ud83d\udcda Biblioteca notte: 28dB, ventilazione impercettibile, ticchettio neon",
        "\u26ea Cripta chiesa: 22dB, solo battito cardiaco e respiro udibili",
        "\ud83c\udf32 Bosco neve fresca: 18dB, assorbimento totale, sensazione di ovattamento"
      ]
    }
  ],
  'produzione-imitazione': [
    {
      title: "\ud83d\udca7 Repertorio di Sintesi Sonora",
      description: "Riproduci suoni specifici usando voce e corpo",
      prompt: "Prova a creare convincenti imitazioni vocali e corporee di questi suoni comuni: goccia d'acqua che cade in una pozza, telefono che squilla (vecchio stile e smartphone), persona che cammina su ghiaia, vento tra i rami, campana di bronzo, bussare a una porta di legno, colpo secco tipo schiocco di dita amplificato, fruscio di carta, piccola esplosione. Non usare parole onomatopeiche convenzionali: cerca di riprodurre fedelmente le caratteristiche fisiche di ogni suono. Registra i tuoi tentativi e perfezionali attraverso iterazioni successive.",
      duration: "30 min",
      examples: [
        "\ud83d\udca7 Goccia: lingua contro palato, rilascio d'aria, controllo del pitch per profondit\u00e0 pozza",
        "\ud83d\udcde Telefono vecchio: trill vibrato con corde vocali tese, ritmo bi-tonale",
        "\ud83d\udeb6 Passi su ghiaia: sfregamento mani, variazioni di peso, ritmo irregolare"
      ]
    },
    {
      title: "\ud83c\udfad Suoni Complessi Trasformativi",
      description: "Crea sequenze sonore con morfologie definite",
      prompt: "Sfida avanzata di design sonoro: trova o crea un suono che inizia con una tessitura raschiante e termina con un tintinnio cristallino. Poi crea un suono che inizia con un tonfo sordo e finisce con un cinguettio acuto. Queste trasformazioni timbriche richiedono controllo fine delle tecniche di produzione vocale e corporea, oppure l'esplorazione creativa di oggetti quotidiani. L'obiettivo \u00e8 padroneggiare l'arco trasformativo completo, non solo i punti estremi.",
      duration: "25 min",
      examples: [
        "\ud83c\udfbb Raschiare\u2192tintinnio: unghia su carta vetrata che scivola su bicchiere di cristallo",
        "\ud83e\udd41 Tonfo\u2192cinguettio: pugno su cuscino seguito da pizzicato di elastico teso",
        "\ud83c\udfaa Sequenza trovata: sfregare bastone su ringhiera metallica che termina con oscillazione libera"
      ]
    },
    {
      title: "\ud83c\udfa8 Disegno Gesturale del Suono",
      description: "Traduci i suoni in tracce visive astratte",
      prompt: "Mentre esegui o ascolti suoni, disegnali in tempo reale su un grande foglio, senza rappresentare gli oggetti che li producono ma solo la loro impressione morfologica. Un suono acuto diventa una linea sottile e alta? Un suono grave una macchia scura in basso? Un suono pulsante genera onde ripetute? Un suono che decresce si assottiglia? Questo esercizio crea una notazione personale che bypassa i simboli musicali convenzionali, rivelando come percepisci intuitivamente parametri come altezza, intensit\u00e0, durata, timbro.",
      duration: "20 min",
      examples: [
        "\ud83d\udcc8 Sirena: linea che sale a spirale con spessore variabile secondo intensit\u00e0",
        "\ud83c\udf0a Onde: curve ripetute con ampiezze irregolari, densit\u00e0 di tratto per la schiuma",
        "\ud83d\udca5 Esplosione: punto denso al centro con raggi esplosivi che si diradano verso esterno"
      ]
    },
    {
      title: "\ud83c\udf08 Sinestesia: Il Colore dei Suoni",
      description: "Esplora le corrispondenze cross-modali tra udito e vista",
      prompt: "I suoni evocano colori nella tua percezione? Questo fenomeno, chiamato sinestesia, \u00e8 comune anche in persone non-sinestetiche. Ascolta vari suoni e assegna spontaneamente un colore a ciascuno, senza razionalizzare: affidati alla prima impressione intuitiva. Un clacson \u00e8 rosso o giallo? Il vento \u00e8 blu o grigio? Una campana \u00e8 oro o argento? Il cinguettio degli uccelli \u00e8 verde o celeste? Compila una palette sonora personale, notando se esistono pattern ricorrenti nelle tue associazioni.",
      duration: "20 min",
      examples: [
        "\ud83d\udd34 Rosso: clacson auto, allarme, grido acuto, sirena d'emergenza",
        "\ud83d\udd35 Blu: vento, acqua corrente, toni bassi di violoncello, ronzio lontano",
        "\ud83d\udfe1 Giallo: campanellino, risata bambino, trillo telefono, uccellino"
      ]
    },
    {
      title: "\u2b1b Geometria del Suono",
      description: "Associa forme geometriche a texture sonore",
      prompt: "Un suono pu\u00f2 essere rotondo o angolare? Morbido o spigoloso? Questa sinestesia geometrica rivela come percepiamo le qualit\u00e0 tattili e spaziali del suono. Cerca suoni da abbinare a forme geometriche specifiche: cerchio, triangolo, quadrato, stella, spirale, linea retta, forme irregolari. Un tamburo \u00e8 circolare? Un colpo di piatto \u00e8 triangolare o a stella? Un tono puro \u00e8 una linea perfetta? Un rumore bianco \u00e8 una nuvola informe? Crea un catalogo di corrispondenze suono-forma.",
      duration: "20 min",
      examples: [
        "\u2b55 Cerchio: gong, campana tibetana, tono sinusoidale puro, bolla che scoppia",
        "\u25b2 Triangolo: colpo secco di piatto, battuta di mani, click metallico",
        "\ud83c\udf00 Spirale: glissando ascendente, sirena, fischio che sale, feedback controllato"
      ]
    },
    {
      title: "\ud83c\udf3f Concerto Naturale Collettivo",
      description: "Crea composizioni vocali imitative di ambienti naturali",
      prompt: "Dividetevi in gruppi di 4-6 persone. Ogni gruppo sceglie un ambiente naturale specifico (foresta temperata, spiaggia oceanica, prateria ventosa, palude notturna, deserto al tramonto) e crea un \"concerto\" di 3-5 minuti usando esclusivamente le voci per imitare tutti i suoni caratteristici di quell'ambiente. Non limitatevi ai versi animali: includete vento, acqua, fruscii, spostamenti. Lavorate sulla stratificazione, sulle dinamiche collettive, sui momenti di densit\u00e0 e rarefazione. Eseguite poi per gli altri gruppi.",
      duration: "45 min",
      examples: [
        "\ud83c\udf32 Foresta: vento tra foglie (sussurri), picchi (click lingua), gufo (vocale scura), ruscello (sibili)",
        "\ud83c\udfd6\ufe0f Spiaggia: onde (respiri ritmici), gabbiani (glissandi acuti), risacca (suoni granulari)",
        "\ud83c\udf3e Prateria: vento forte (soffi), insetti (ronzii acuti), uccelli di terra (trilli brevi)"
      ]
    },
    {
      title: "\ud83d\udcd6 Trasmissione Orale della Composizione",
      description: "Insegna e impara composizioni senza notazione scritta",
      prompt: "Un gruppo crea una breve composizione sonora (2-3 minuti) usando voce, corpo, o oggetti. Dopo averla perfezionata, la esegue per un secondo gruppo che osserva e ascolta attentamente, senza prendere note scritte. Il secondo gruppo deve poi riprodurre la composizione basandosi solo sulla memoria acustica e visiva. Quanto \u00e8 accurata la trasmissione? Quali elementi si perdono? Quali si trasformano? Quali si preservano meglio? Questo esercizio rivela come funziona la tradizione orale.",
      duration: "40 min",
      examples: [
        "\u2705 Ben preservati: struttura ritmica generale, ordine delle sezioni, gesti corporei evidenti",
        "\u26a0\ufe0f Parzialmente alterati: dinamiche precise, durate esatte, dettagli timbrici sottili",
        "\u274c Persi: microritmi complessi, altezze precise non rinforzate, intenzioni non evidenti"
      ]
    },
    {
      title: "\ud83d\udcac Dizionario Onomatopeico Personale",
      description: "Inventa parole-suono per fenomeni acustici specifici",
      prompt: "Crea neologismi onomatopeici originali per questi suoni, evitando le onomatopee convenzionali della tua lingua: campana di bronzo che oscilla, starnuto umano, esplosione lontana, gatto che fa le fusa, chiaro di luna (s\u00ec, trova un suono per tradurre visivamente il chiaro di luna). Le tue parole-suono devono usare le qualit\u00e0 fonetiche della lingua per evocare le caratteristiche acustiche: consonanti dure per suoni percussivi, vocali aperte per risonanze, ripetizioni per pulsazioni.",
      duration: "25 min",
      examples: [
        "\ud83d\udd14 Campana: \"DONNNGG-ghelinn-ghelinn-ghel...\" (attacco forte, risonanze metalliche decrescenti)",
        "\ud83e\udd27 Starnuto: \"AATCH-CI\u00d9\u00d9\u00d9\" (compressione, esplosione, rilascio d'aria)",
        "\ud83c\udf19 Chiaro di luna: \"sss\u00ec\u00ec\u00eclium-sss\u00ec\u00ec\u00eclium\" (qualit\u00e0 sibilante, argentea, eterea, ondulante)"
      ]
    },
    {
      title: "\ud83d\udca7 Morfologie dell'Acqua",
      description: "Crea un vocabolario sonoro delle manifestazioni acquatiche",
      prompt: "L'acqua produce una gamma sonora vastissima secondo velocit\u00e0, volume, superficie, ostacoli. Inventa parole onomatopeiche distinte per: gocce di pioggia su varie superfici (vetro, foglie, terra, metallo), acqua corrente di piccolo ruscello, cascata impetuosa, fiume ampio, onde oceaniche che si infrangono. Ogni parola deve catturare la texture granulare, il ritmo, il pitch generale, la densit\u00e0 del suono specifico. Registra poi veri suoni d'acqua e verifica quanto le tue parole siano evocative.",
      duration: "30 min",
      examples: [
        "\ud83c\udf27\ufe0f Pioggia su foglie: \"tlic-tlac-tluc\" (irregolare, pitch variabile, attutito)",
        "\ud83c\udfde\ufe0f Cascata: \"SHHHROOAAAHHH\" (denso, continuo, con sottotoni gravi dal volume)",
        "\ud83c\udf0a Onde: \"fSSSHHHuuuuuuhhhh-CRASH-sssss...\" (crescendo, impatto, decadimento spumoso)"
      ]
    }
  ],
  'giochi-vocali': [
    {
      title: "\ud83e\udd81 Il Richiamo del Branco",
      description: "Gioco di riconoscimento vocale con bendaggio",
      prompt: "Dividete i partecipanti in quattro gruppi: lupi, cavalli, mucche, galli. Ogni gruppo impara il verso caratteristico del proprio animale. Tutti vengono bendati e dispersi in uno spazio ampio. Al segnale, ogni persona deve trovare i membri del proprio branco usando solo i versi, senza parlare. Vince il gruppo che si riunisce per primo in formazione compatta. Il gioco sviluppa localizzazione acustica, proiezione vocale, e coordinamento sonoro in condizioni di deprivazione visiva.",
      duration: "20 min",
      examples: [
        "\ud83d\udc3a Lupi: ululato lungo \"AUUUUUUH\" con armonizzazioni quando si trovano",
        "\ud83d\udc34 Cavalli: nitriti \"IH-IH-IH-IHHH\" con variazioni dinamiche per segnalare distanza",
        "\ud83d\udc14 Galli: \"CHICCHIRICHIII\" ripetuto, timing pi\u00f9 rapido quando vicini"
      ]
    },
    {
      title: "\ud83d\udde3\ufe0f Babele di Lingue Immaginarie",
      description: "Improvvisazione di comunicazione in idiomi inventati",
      prompt: "Prima fase: tutti camminano nello spazio salutandosi in lingue immaginarie, inventando sul momento fonemi, prosodie, ritmi che non appartengono ad alcuna lingua reale. Seconda fase: a turno, ognuno interpreta un personaggio usando la propria lingua inventata: dittatore militare che arringa, cantante d'opera in assolo, disc jockey radiofonico iperattivo, bambino di 3 anni capriccioso, orso solitario, anziano che racconta storie, persona balbuziente, leone che si sveglia. L'obiettivo \u00e8 comunicare emozioni e carattere attraverso pura prosodia, ritmo, timbro.",
      duration: "35 min",
      examples: [
        "\ud83d\udc68\u200d\u2708\ufe0f Dittatore: lingua con molte consonanti dure, ritmo marziale, crescendo di intensit\u00e0",
        "\ud83c\udfb5 Cantante opera: fonemi aperti, melismi estremi, vibrato esagerato, gesti ampi",
        "\ud83d\udc3b Orso: vocali scure, grugniti bassi, ritmo lento, pause lunghe, borbottii"
      ]
    },
    {
      title: "\ud83c\udfa4 Eco Umano Crescente",
      description: "Crea catene di ripetizioni vocali sovrapposte",
      prompt: "Con un gruppo di almeno 6 persone, formate un cerchio. Una persona inizia con un suono breve (sillaba, nota, rumore). La seconda persona ripete esattamente quel suono, ma la prima continua ripetendolo. La terza si aggiunge, poi la quarta, fino a che tutti ripetono simultaneamente lo stesso suono creando un \"eco umano\" crescente. Poi si passa a un nuovo suono. Il risultato \u00e8 una texture corale che si costruisce organicamente.",
      duration: "25 min",
      examples: [
        "\ud83d\udd0a Suono 1 \"SHH\": inizia singolo, dopo 10s sei voci sovrapposte, texture densa",
        "\ud83c\udf0a Suono 2 \"OOO\": inizio preciso, poi deriva microtonale, battimenti emergono",
        "\u26a1 Difficolt\u00e0: mantenere pitch esatto, sincronizzazione respirazione"
      ]
    },
    {
      title: "\ud83c\udf0d Catena Linguistica Globale",
      description: "Passa un messaggio attraverso \"traduzioni\" in lingue immaginarie",
      prompt: "Come il telefono senza fili, ma ogni persona deve \"tradurre\" il messaggio ricevuto in una lingua immaginaria completamente nuova prima di passarlo. La prima persona dice una frase in lingua inventata. La seconda ascolta, interpreta emotivamente, poi ripete il \"significato\" in una NUOVA lingua inventata. E cos\u00ec via. Alla fine confrontate: il messaggio emotivo si \u00e8 preservato o trasformato completamente?",
      duration: "30 min",
      examples: [
        "\ud83d\ude0a Messaggio originale: tono allegro, ritmo veloce, vocali aperte",
        "\ud83d\udd04 Dopo 5 passaggi: ancora allegro ma ritmo rallentato, consonanti diverse",
        "\ud83c\udfad Dopo 10 passaggi: trasformato in tono misterioso, significato emotivo mutato"
      ]
    },
    {
      title: "\ud83c\udfba Orchestra Vocale Istantanea",
      description: "Crea sezioni orchestrali usando solo la voce",
      prompt: "Dividete il gruppo in sezioni: bassi (voci pi\u00f9 basse, drone fondamentale), celli (toni medi, armonie), violini (voci alte, melodie), percussioni (click, pop, battiti). Un direttore improvvisa gestures: entrata sezioni, crescendo, diminuendo, fermata. Senza prove, riuscite a creare musica coesa? Il corpo diventa orchestra.",
      duration: "40 min",
      examples: [
        "\ud83c\udfbb Sezione violini: vocale \"II\" alta, vibrato naturale, seguono gesto melodico",
        "\ud83e\udd41 Sezione percussioni: click lingua + battiti piedi, pattern ritmici complessi",
        "\ud83c\udfb5 Risultato: brano di 3 minuti con dinamiche, sviluppo tematico, culminazione"
      ]
    }
  ],
  'registrazione-analisi': [
    {
      title: "\ud83c\udf9a\ufe0f Morfologia Comparativa",
      description: "Documentazione sistematica di variazioni tipologiche",
      prompt: "Scegli una categoria di suoni quotidiani (porte che si chiudono, clacson di automobili, aspirapolvere in funzione, campanelli di bicicletta) e registra il maggior numero possibile di variazioni distinte. L'obiettivo \u00e8 creare una collezione che mostri gli estremi morfologici della categoria: il clacson pi\u00f9 acuto vs il pi\u00f9 grave, la porta pi\u00f9 cigolante vs la pi\u00f9 silenziosa, l'aspirapolvere pi\u00f9 potente vs il pi\u00f9 delicato. Analizza poi le registrazioni identificando i parametri che creano le differenze: materiali, dimensioni, meccanismi, stato di manutenzione.",
      duration: "90 min",
      examples: [
        "\ud83d\udeaa 20 porte registrate: legno massello vs compensato, cardini oliati vs arrugginiti, chiusura delicata vs sbattuta",
        "\ud83d\udcef 15 clacson: range da 250Hz (camion) a 1200Hz (citycar), durata 0.3-3 secondi",
        "\ud83e\uddf9 10 aspirapolvere: 60-80dB, timbro da ronzio industriale a sibilo aerodinamico"
      ]
    },
    {
      title: "\ud83c\udfdb\ufe0f L'Impronta Acustica dell'Architettura",
      description: "Registra la stessa sorgente in ambienti differenti",
      prompt: "Registra la tua voce (recitando lo stesso testo di 30 secondi) in una dozzina di ambienti architettonici diversi: bagno piastrellato, camera da letto con tappeti, chiesa vuota, parcheggio sotterraneo, bosco, piazza aperta, corridoio stretto, sala concerti, grotta, riva del mare. Ogni spazio imprime una firma acustica unica attraverso riflessioni, riverbero, assorbimento. Confronta le registrazioni: riesci a identificare gli ambienti solo ascoltando? Quali caratteristiche architettoniche producono gli effetti pi\u00f9 drammatici?",
      duration: "120 min",
      examples: [
        "\ud83d\udebf Bagno piastrellato: riverbero brillante 1.2s, riflessioni metalliche, boost 2-4kHz",
        "\u26ea Chiesa: riverbero 4-6s, diffusione complessa, perdita di chiarezza consonanti",
        "\ud83c\udf32 Bosco: assorbimento totale alte frequenze, suono asciutto, nessuna riflessione"
      ]
    },
    {
      title: "\ud83c\udf99\ufe0f Signature Sonore Personali",
      description: "Documenta le caratteristiche acustiche uniche di oggetti personali",
      prompt: "Registra e analizza i suoni caratteristici di 10-15 oggetti che usi quotidianamente: la tua porta d'ingresso, le tue chiavi, la tua auto, la tua tazza da caff\u00e8, le tue scarpe preferite. Dopo una settimana, rimescola le registrazioni e prova a riconoscere ogni oggetto solo dal suono. Quanto sei accurato? Sviluppi un \"orecchio\" per le tue signature sonore personali? Questo esercizio esplora memoria acustica e familiarit\u00e0.",
      duration: "120 min + 7 giorni",
      examples: [
        "\ud83d\udeaa Porta casa: riconosciuta 100%, ciglio unico del cardine superiore, chiusura morbida",
        "\ud83d\udd11 Chiavi: 80% accuratezza, pattern di tintinnio familiare ma simile ad altre",
        "\u2615 Tazza ceramica: 60%, difficile distinguere da altre tazze simili solo dal suono"
      ]
    },
    {
      title: "\ud83d\udccf Analisi Spettrale Comparativa",
      description: "Confronta il contenuto frequenziale di suoni simili",
      prompt: "Se hai accesso a software di analisi audio (anche app gratis per smartphone), registra pi\u00f9 versioni di uno stesso tipo di suono (diverse porte, diversi clacson, diverse campane) e analizzane gli spettrogrammi. Quali frequenze caratterizzano ogni variante? Un clacson grave ha fondamentale a 250Hz, uno acuto a 800Hz? Le porte di legno hanno pi\u00f9 energia sotto 500Hz rispetto a quelle metalliche? L'analisi visuale rivela differenze impercettibili all'orecchio.",
      duration: "90 min",
      examples: [
        "\ud83d\udd14 Campane bronzo vs acciaio: bronzo pi\u00f9 ricco di armoniche alte, acciaio pi\u00f9 puro",
        "\ud83d\udeaa Porte legno vs metallo: legno picco 200-400Hz, metallo 800-2kHz",
        "\ud83d\ude97 Motori benzina vs diesel: diesel pi\u00f9 rumble <200Hz, benzina pi\u00f9 whine 500Hz-1kHz"
      ]
    },
    {
      title: "\ud83c\udf27\ufe0f Cronologia Meteorologica Sonora",
      description: "Registra lo stesso punto durante diversi fenomeni meteorologici",
      prompt: "Scegli una location fissa (finestra, balcone, punto in parco) e registra l'ambiente acustico durante condizioni meteorologiche diverse: sereno, pioggia leggera, pioggia intensa, temporale, vento forte, neve, nebbia. Come cambia radicalmente il paesaggio sonoro? La pioggia maschera altri suoni? Il vento crea turbolenze nel microfono? La neve assorbe tutto? Crea un archivio meteorologico-acustico del tuo ambiente.",
      duration: "10-15 sessioni da 20 min",
      examples: [
        "\u2600\ufe0f Sereno: baseline 45dB, uccelli chiari, traffico distinto",
        "\ud83c\udf27\ufe0f Pioggia media: 60dB, mascheramento totale di uccelli, rumore broadband",
        "\u2744\ufe0f Neve: 30dB, assorbimento drammatico, silenzio ovattato innaturale"
      ]
    },
    {
      title: "\ud83c\udfd9\ufe0f Mappa Sonora Urbana 24h",
      description: "Documenta l'evoluzione temporale di un punto urbano",
      prompt: "Registra lo stesso punto urbano (piazza, incrocio, parco) per 5 minuti ogni ora per 24 ore consecutive. Crea poi un montaggio cronologico. Come si trasforma il paesaggio sonoro? Quando il traffico \u00e8 minimo? Quando emergono uccelli? Quando inizia attivit\u00e0 umana? Il risultato \u00e8 un \"time-lapse acustico\" che rivela i ritmi circadiani della citt\u00e0.",
      duration: "24 ore",
      examples: [
        "\ud83d\udd50 02:00: 35dB, traffico quasi nullo, eco passi solitari amplificato",
        "\ud83d\udd58 09:00: 75dB, picco traffico, voci, commercio, caos massimo",
        "\ud83d\udd56 19:00: 65dB, traffico ancora alto ma voci cambiano (tono sociale vs lavorativo)"
      ]
    },
    {
      title: "\ud83c\udf9a\ufe0f Catena di Degradazione",
      description: "Studia come il suono degrada attraverso trasmissioni successive",
      prompt: "Registra un suono originale. Riproducilo e re-registralo. Ripeti il processo 10 volte (generazione 1 \u2192 generazione 2 \u2192 generazione 3... \u2192 generazione 10). Come si degrada la qualit\u00e0? Quali frequenze si perdono prima? Dopo quante generazioni diventa irriconoscibile? Questo \"gioco del telefono acustico\" mostra i limiti della trasmissione audio e introduce concetti di compressione e perdita.",
      duration: "60 min",
      examples: [
        "\ud83c\udfb5 Generazione 1: voce chiara, 20-18kHz range",
        "\ud83d\udcc9 Generazione 5: perdita sopra 12kHz, artefatti di compressione evidenti",
        "\ud83d\udc80 Generazione 10: quasi irriconoscibile, solo 200-3kHz residuo, rumore >50%"
      ]
    },
    {
      title: "\ud83d\udd0a Limiti Dinamici del Tuo Equipaggiamento",
      description: "Testa i confini tecnici del tuo sistema di registrazione",
      prompt: "Con il tuo registratore (anche smartphone), prova a catturare il suono pi\u00f9 debole possibile e il pi\u00f9 forte possibile senza clipping. Qual \u00e8 il range dinamico effettivo? Registra un sussurro a 30dB e poi un grido a 100dB. Il sussurro \u00e8 pieno di rumore? Il grido distorce? Questa conoscenza tecnica \u00e8 fondamentale per recording sul campo efficaci.",
      duration: "45 min",
      examples: [
        "\ud83e\udd2b Sussurro 30dB: rumore di fondo 25dB, SNR appena 5dB, quasi inutilizzabile",
        "\ud83d\udce2 Grido 100dB: clip evidente sopra 95dB con gain normale",
        "\ud83d\udcca Range dinamico utile: circa 35-90dB con questo equipment"
      ]
    },
    {
      title: "\ud83c\udfa4 Confronto Posizionamenti Microfonici",
      description: "Esplora come la posizione del microfono altera drasticamente la cattura",
      prompt: "Registra la stessa sorgente sonora (fontana, strada trafficata, persona che parla) con il microfono in 8-10 posizioni diverse: vicino, lontano, alto, basso, dietro ostacolo, in riflesso, in configurazione stereo, mono. Come cambia la percezione? La vicinanza esalta dettagli ma perde contesto? La distanza cattura ambiente ma perde definizione? Il posizionamento \u00e8 arte quanto tecnica.",
      duration: "90 min",
      examples: [
        "\ud83d\udccd Posizione 1 (20cm dalla fontana): acqua dominante, dettagli gocce, no contesto",
        "\ud83d\udccd Posizione 2 (5m): bilanciato, fontana + ambiente urbano, realismo",
        "\ud83d\udccd Posizione 3 (dietro pilastro): riflessioni, suono mediato, artificiale"
      ]
    },
    {
      title: "\ud83c\udf10 Acustica di Confine",
      description: "Registra esattamente al limite tra due ambienti acustici",
      prompt: "Trova confini netti tra ambienti sonori diversi: porta aperta tra stanza silenziosa e strada rumorosa, limite tra parco e zona industriale, soglia tra bosco e campo aperto. Posiziona il microfono esattamente sul confine. La registrazione cattura simultaneamente entrambi i mondi? Come coesistono nella stessa registrazione? Questi \"boundary recordings\" hanno qualit\u00e0 surreali.",
      duration: "60 min",
      examples: [
        "\ud83d\udeaa Soglia porta: interno 30dB (eco, reverb) + esterno 65dB (traffico), discontinuit\u00e0 netta",
        "\ud83c\udf33 Margine bosco-campo: sinistra uccelli+fruscii, destra vento aperto, mix asimmetrico",
        "\ud83c\udfed Parco-fabbrica: natura vs industria in giustapposizione disturbante"
      ]
    }
  ],
  'silenzio-memoria': [
    {
      title: "\ud83e\udd2b Definizioni del Silenzio",
      description: "Riflessione filosofica sulla natura dell'assenza sonora",
      prompt: "Completa questa frase in almeno dieci modi diversi: \"Il silenzio \u00e8...\". Le tue risposte possono essere poetiche, tecniche, filosofiche, personali, contraddittorie. Il silenzio \u00e8 l'assenza di suono? Ma noi percepiamo mai vera assenza? Il silenzio \u00e8 uno spazio per ascoltare i suoni sottili? \u00c8 uno stato mentale? \u00c8 relativo al contesto? \u00c8 culturalmente definito? Dopo aver scritto le tue definizioni, passa 10 minuti nel luogo pi\u00f9 silenzioso che riesci a trovare, poi rivedi e arricchisci le tue risposte.",
      duration: "30 min",
      examples: [
        "\ud83c\udf0c \"Il silenzio \u00e8 lo sfondo su cui tutti i suoni si stagliano\"",
        "\ud83d\udcad \"Il silenzio \u00e8 l'attenzione rivolta ai suoni pi\u00f9 deboli\"",
        "\u23f8\ufe0f \"Il silenzio \u00e8 lo spazio tra due eventi sonori, denso di possibilit\u00e0\""
      ]
    },
    {
      title: "\ud83e\udde0 Memoria Acustica Differita",
      description: "Allenamento del ricordo sonoro a lungo termine",
      prompt: "Chiedi a qualcuno di pronunciare una parola inusuale o una breve frase in tua presenza. Ascoltala attentamente, ma senza ripeterla. Il giorno dopo, prova a riprodurla esattamente: stesse inflessioni, stesso ritmo, stesso timbro. Poi aspetta tre giorni e riprova. Poi una settimana. Quanto decade la fedelt\u00e0 del ricordo? Quali elementi si preservano meglio: pitch, ritmo, timbro, consonanti, vocali? Questo esercizio rivela come la memoria acustica degrada e trasforma nel tempo.",
      duration: "7 giorni",
      examples: [
        "\ud83d\udcc5 Giorno 1: riproduzione 90% accurata, piccole variazioni di timbro",
        "\ud83d\udcc5 Giorno 3: pitch ancora corretto, ritmo leggermente accelerato, dettagli timbrici sfumati",
        "\ud83d\udcc5 Giorno 7: struttura ritmica preservata, pitch approssimato, timbro completamente personalizzato"
      ]
    },
    {
      title: "\ud83c\udfbc Memoria Tonale Sostenuta",
      description: "Ritenzione di altezze precise senza riferimento esterno",
      prompt: "Ascolta un suono musicale di riferimento (nota di pianoforte, diapason, oscillatore). Fissalo nella memoria. Dopo 5 minuti, senza riascoltare il riferimento, canta quella nota. Verifica l'accuratezza. Ripeti dopo 10 minuti. Poi dopo 20. La tua memoria tonale decade linearmente o a gradini? Riesci a mantenere il riferimento per un'ora? Il tuo orecchio assoluto temporaneo come si comporta?",
      duration: "60 min",
      examples: [
        "\u23f1\ufe0f 5 min: accuratezza perfetta, La440 mantenuto",
        "\u23f1\ufe0f 10 min: deriva di 5 cents verso il basso, quasi impercettibile",
        "\u23f1\ufe0f 20 min: deriva di 25 cents, nota percepita chiaramente pi\u00f9 bassa"
      ]
    },
    {
      title: "\ud83e\udd95 Archeologia Sonora Personale",
      description: "Recupera i suoni estinti della tua biografia acustica",
      prompt: "Fai un elenco di tutti i suoni che ricordi dalla tua infanzia o giovinezza che ora sono estinti o rarissimi: telefoni a disco, modem 56k, mangianastri, macchine da scrivere, fischi dei treni a vapore, campanelli meccanici, sveglie a carica. Per ogni suono, descrivi dettagliatamente come lo ricordi: altezza, timbro, ritmo, contesto emotivo. Alcuni li ricordi con precisione assoluta? Altri sono sfumati? Alcuni sono completamente svaniti ma sai che esistevano? Questa \u00e8 la tua archeologia acustica personale.",
      duration: "45 min",
      examples: [
        "\u260e\ufe0f Telefono a disco: click meccanici di ritorno, campanello squillante metallico, tonalit\u00e0 di occupato",
        "\ud83d\udcfc Mangianastri: motore ronzante, click di avvio, sibilo del nastro, fine cassetta",
        "\u23f0 Sveglia meccanica: ticchettio continuo notturno, trillo vibrante violento, molla che si scarica"
      ]
    },
    {
      title: "\u23f0 Ritmi Circadiani Personali",
      description: "Traccia come la tua sensibilit\u00e0 acustica varia nelle 24 ore",
      prompt: "Ogni 3 ore per un'intera giornata (quindi 8 misurazioni), fai un test identico: ascolta lo stesso ambiente per 2 minuti e conta quanti suoni distinti percepisci. La tua acuit\u00e0 uditiva varia? Sei pi\u00f9 sensibile al mattino o sera? Dopo pasti? Durante stanchezza? Crea un grafico del tuo ritmo circadiano acustico. La percezione fluttua molto pi\u00f9 di quanto pensiamo.",
      duration: "24 ore (8 sessioni)",
      examples: [
        "\ud83c\udf05 Ore 6:00: 18 suoni distinti, acuit\u00e0 massima, fresco e riposato",
        "\u2600\ufe0f Ore 12:00: 14 suoni, diminuzione dopo pranzo, pesantezza",
        "\ud83c\udf19 Ore 21:00: 16 suoni, recupero serale, pre-sonno vigile"
      ]
    },
    {
      title: "\ud83e\udde0 Costruzione Ricordo Sonoro Composito",
      description: "Assembla un paesaggio sonoro dalla memoria di pi\u00f9 visite",
      prompt: "Visita un luogo 5 volte in momenti diversi, ogni volta per solo 5 minuti. Non registrare nulla. Poi, solo dalla memoria, descrivi o registra una versione \"composita\" che integra tutti gli elementi di tutte le visite. Quali suoni si preservano meglio in memoria? Questa versione composita \u00e8 pi\u00f9 \"vera\" o pi\u00f9 \"filtrata\" della realt\u00e0?",
      duration: "5 giorni + 60 min ricostruzione",
      examples: [
        "\ud83d\udcdd Visita 1 mattina: uccelli dominanti, traffico leggero",
        "\ud83d\udcdd Visita 3 sera: voci umane, traffico pesante, senza uccelli",
        "\ud83c\udfa8 Composito finale: integra tutti elementi ma perde dettagli temporali, diventa \"archetipo\" del luogo"
      ]
    },
    {
      title: "\ud83d\udd0a Threshold di Rilevamento Personale",
      description: "Determina la soglia minima di volume che riesci a percepire",
      prompt: "Con un assistente che controlla il volume, ascolta un tono semplice (1000Hz) che parte da silenzioso e aumenta lentissimamente. Alza la mano appena lo senti. Poi ripeti partendo da forte e diminuendo fino a scomparsa. La soglia \u00e8 identica? Ripeti con diverse frequenze (100Hz, 500Hz, 2000Hz, 8000Hz). La tua sensibilit\u00e0 varia con la frequenza? Stai mappando la tua curva di soglia uditiva personale.",
      duration: "45 min",
      examples: [
        "\ud83d\udd09 1000Hz: soglia rilevamento a circa 15dB SPL",
        "\ud83c\udfb5 100Hz: soglia pi\u00f9 alta ~30dB (orecchio meno sensibile ai bassi)",
        "\ud83e\udd87 8000Hz: soglia ~20dB, ma grande variabilit\u00e0 individuale"
      ]
    },
    {
      title: "\ud83c\udfbc Melodie Fantasma",
      description: "Quanto a lungo persiste un'earworm dopo esposizione?",
      prompt: "Ascolta una melodia molto orecchiabile per 30 secondi. Poi cronometra quanto tempo riesce a persistere nella tua \"memoria acustica involontaria\" (earworm). Dopo 10 minuti la senti ancora nella testa? Dopo un'ora? Dopo un giorno? Prova con 5 melodie diverse. Quali persistono pi\u00f9 a lungo? Quelle semplici o complesse? Questo esplora la memoria acustica involontaria.",
      duration: "48 ore tracking",
      examples: [
        "\ud83c\udfb5 Melodia 1 (jingle semplice): persistenza 6 ore, riemergenze spontanee",
        "\ud83c\udfb6 Melodia 2 (complessa): 30 minuti, poi svanisce",
        "\ud83d\udd01 Melodia 3 (con testo): 24 ore!, parole rinforzano memoria"
      ]
    },
    {
      title: "\ud83c\udf2b\ufe0f Ricostruzione da Frammenti",
      description: "Quanto riesci a dedurre da brevi campioni",
      prompt: "Registra 60 secondi di un paesaggio sonoro complesso. Poi estrai 10 campioni casuali di solo 2 secondi ciascuno. Ascoltando SOLO questi frammenti, riesci a ricostruire mentalmente il contesto completo? Il cervello \"riempie i buchi\"? Quante inferenze corrette vs sbagliate fai? Questo mostra come la memoria e l'aspettativa influenzano la percezione.",
      duration: "60 min",
      examples: [
        "\ud83c\udfaf Frammento 1 (2s): clacson \u2192 deduzione corretta: traffico urbano",
        "\u274c Frammento 5 (2s): cinguettio \u2192 deduzione errata: pensavo bosco, era parco urbano",
        "\ud83d\udca1 Frammento 9 (2s): campana \u2192 rivelazione: conferma ipotesi centro storico"
      ]
    }
  ],
  'comunita-ambiente': [
    {
      title: "\ud83d\udcca Indagine Statistica sul Disturbo",
      description: "Raccogli dati quantitativi sulle percezioni acustiche della comunit\u00e0",
      prompt: "Intervista almeno 30 persone nella tua comunit\u00e0 chiedendo di elencare i 3 suoni che li disturbano maggiormente nel loro ambiente quotidiano. Compila i dati in una tabella, identificando pattern demografici (et\u00e0, zona residenziale, occupazione). Quali suoni emergono come pi\u00f9 disturbanti? Esistono differenze generazionali? Le persone in zone diverse hanno fastidi diversi? Crea grafici e statistiche per visualizzare i risultati. Questa \u00e8 vera ricerca etnografica sul paesaggio sonoro.",
      duration: "180 min",
      examples: [
        "\ud83d\udd1d Top 3 generale: traffico (67%), vicini rumorosi (45%), lavori edili (38%)",
        "\ud83d\udc74 Over 60: traffico 80%, musica alta 60%, motorini 55%",
        "\ud83d\udc66 Under 30: lavori edili 50%, traffico 45%, campanelli mattutini 30%"
      ]
    },
    {
      title: "\ud83d\udcdc Regolamento Acustico Ideale",
      description: "Progetta una normativa antinrumore per la tua comunit\u00e0",
      prompt: "Basandoti sui dati dell'indagine statistica (o sulle tue osservazioni), redigi un progetto di regolamento-modello contro i rumori urbani. Quali suoni dovrebbero essere regolati? In quali fasce orarie? Con quali limiti di decibel? Quali esenzioni prevedi? Come bilanci le esigenze produttive, commerciali, ricreative con il diritto al riposo? Considera: traffico, locali notturni, cantieri, eventi pubblici, campane, allerte sonore. Il regolamento deve essere specifico, applicabile, equilibrato.",
      duration: "90 min",
      examples: [
        "\ud83c\udf19 22:00-07:00: limite 40dB in zone residenziali, esenzione per emergenze",
        "\ud83c\udfd7\ufe0f Cantieri: 08:00-18:00 nei giorni feriali, vietati domeniche e festivi",
        "\ud83d\udd14 Campane: preservate come patrimonio culturale, limite 85dB, max 3 min/ora"
      ]
    },
    {
      title: "\ud83d\udcd0 Percezione vs Realt\u00e0",
      description: "Confronta stime soggettive con misurazioni oggettive",
      prompt: "Intervista residenti di una zona chiedendo: \"Quante volte al giorno senti [suono specifico: sirene, campane, aerei]?\" Raccogli le stime soggettive. Poi posizionati nello stesso luogo per un'intera giornata e conta effettivamente quante volte il suono si verifica. Quanto differiscono le percezioni dalla realt\u00e0? Le persone sovrastimano i suoni fastidiosi? Sottostimano quelli abituali? Quali bias cognitivi emergono?",
      duration: "480 min (giornata)",
      examples: [
        "\ud83d\udea8 Sirene - Stima media: 25/giorno, Realt\u00e0: 8/giorno (sovrastima 312%)",
        "\u2708\ufe0f Aerei - Stima media: 50/giorno, Realt\u00e0: 73/giorno (sottostima 46%)",
        "\ud83d\udd14 Campane - Stima media: 6/giorno, Realt\u00e0: 24/giorno (sottostima 400% - suono ignorato)"
      ]
    },
    {
      title: "\ud83c\udfdb\ufe0f Le Impronte Sonore della Comunit\u00e0",
      description: "Identifica i soundmarks che definiscono l'identit\u00e0 acustica locale",
      prompt: "I soundmarks (termine di R.M. Schafer) sono i suoni emblematici di una comunit\u00e0, quelli che la rendono acusticamente unica e riconoscibile. Quali sono i soundmarks della tua citt\u00e0 o quartiere? La campana di una chiesa storica? La sirena di una fabbrica? Il mercato del gioved\u00ec? Il treno che passa? Per ogni soundmark identificato, ricerca la sua storia: da quanto esiste, come si \u00e8 evoluto, cosa significa per la comunit\u00e0, se rischia l'estinzione. Crea una mappa sonora del patrimonio acustico locale.",
      duration: "120 min",
      examples: [
        "\ud83d\udd14 Campanile S.Marco Venezia: 5 campane, ogni combinazione ha significato specifico, 900 anni storia",
        "\ud83d\ude82 Treno delle 18:23: attraversa centro da 1887, regola orologi locali, parte identit\u00e0 collettiva",
        "\ud83d\udce2 Banditore mercato: tradizione orale 200 anni, cadenza dialettale unica, rischio estinzione"
      ]
    },
    {
      title: "\ud83c\udfe1 Migliora l'Acustica Domestica",
      description: "Introduci un elemento sonoro piacevole nel tuo spazio abitativo",
      prompt: "Trova un suono che migliori genuinamente la qualit\u00e0 acustica della tua abitazione. Potrebbe essere una fontana da tavolo, un carillon eolico, un orologio dal ticchettio piacevole, una radio sintonizzata su frequenza vuota (rumore bianco naturale), piante che frusciano vicino a una finestra. Non suoni registrati o artificiali: elementi fisici che producono suoni reali. Introducilo nel tuo spazio e osserva come modifica la tua percezione dell'ambiente domestico nel corso di una settimana.",
      duration: "7 giorni",
      examples: [
        "\u26f2 Piccola fontana zen: mascheramento piacevole del traffico, ritmo irregolare rilassante",
        "\ud83c\udf90 Carillon eolico in balcone: indica direzione vento, tintinnio casuale, connessione con meteo",
        "\ud83e\udeb4 Bamb\u00f9 vicino finestra: fruscio delicato con brezza, presenza della natura in citt\u00e0"
      ]
    },
    {
      title: "\ud83d\udeab Elimina un Disturbo Acustico",
      description: "Identifica e rimuovi una fonte di inquinamento sonoro domestico",
      prompt: "Individua il suono pi\u00f9 sgradevole o disturbante all'interno della tua abitazione. Potrebbe essere un elettrodomestico rumoroso, una porta cigolante, un rubinetto che gocciola, un ventilatore sbilanciato. Non limitarti a tollerarlo: intervieni fisicamente per eliminarlo o ridurlo drasticamente. Oliare cardini, riparare rubinetti, sostituire apparecchi, isolare sorgenti. Documenta il prima e il dopo con registrazioni e descrizioni. Quanto migliora la tua qualit\u00e0 della vita acustica?",
      duration: "3 giorni",
      examples: [
        "\ud83d\udeaa Porta ingresso cigolante: prima 65dB peak ad ogni apertura, dopo lubrificazione 35dB",
        "\ud83d\udca7 Rubinetto gocciolante: 52 gocce/ora, 45dB, eliminato con guarnizione nuova",
        "\ud83d\udca8 Ventilatore bagno: ronzio 55dB continuo, sostituito con modello silenzioso 28dB"
      ]
    },
    {
      title: "\ud83c\udfb5 Aggiungi un Suono alla Tua Persona",
      description: "Incorpora un elemento acustico piacevole nella tua presenza quotidiana",
      prompt: "Trova un suono piacevole da aggiungere alla tua persona, qualcosa che ti accompagni e diventi parte della tua signature acustica. Potrebbe essere un piccolo campanellino in una borsa, scarpe con suola particolare, un braccialetto che tintinna, una chiave con portachiavi sonoro, vestiti di tessuto frusciate. L'obiettivo \u00e8 scegliere consapevolmente un suono che rifletta la tua identit\u00e0 e che le persone potrebbero associare a te. Portalo per una settimana e osserva le reazioni.",
      duration: "7 giorni",
      examples: [
        "\ud83d\udd14 Piccolo campanellino tibetano su borsa: tintinnio delicato 40dB camminando",
        "\ud83d\udc5e Scarpe con tacco in legno: click distintivo, ritmo personale riconoscibile",
        "\ud83d\udcff Bracciale con elementi bamb\u00f9: suono naturale leggero nei movimenti del braccio"
      ]
    },
    {
      title: "\ud83d\ude4a Elimina un Tuo Suono Fastidioso",
      description: "Identifica e correggi un rumore personale che disturba gli altri",
      prompt: "Chiedi onestamente a persone vicine se produci qualche suono abituale che trovano fastidioso. Potrebbe essere: tamburellare con le dita, masticare rumorosamente, trascinare i piedi, schiarirsi spesso la gola, schioccare le dita, far tintinnare chiavi. Senza giustificarti, lavora consapevolmente per eliminare o ridurre questo comportamento acustico per due settimane. Richiedi poi un feedback: c'\u00e8 stato miglioramento? Quanto \u00e8 difficile modificare abitudini sonore radicate?",
      duration: "14 giorni",
      examples: [
        "\ud83e\udd41 Tamburellare dita: prima inconsapevole 15-20 volte/giorno, dopo 2 settimane 2-3 volte/giorno",
        "\ud83d\udeb6 Trascinare piedi: modificato appoggio tallone, riduzione 70% del rumore percepito",
        "\ud83d\udd11 Tintinnio chiavi: spostamento tasche, uso portachiavi silenzioso, eliminazione completa"
      ]
    }
  ],
  'parchi-spazi': [
    {
      title: "\ud83c\udf33 Audit Acustico del Parco",
      description: "Valuta le qualit\u00e0 sonore di uno spazio verde pubblico",
      prompt: "Visita lo stesso parco in almeno tre momenti diversi (mattina presto, pomeriggio, sera). Per ogni visita, documenta: quali suoni naturali sono presenti? Quali suoni antropici penetrano dall'esterno? Esistono zone di rifugio acustico dal rumore urbano? Il parco offre variet\u00e0 di esperienze acustiche o \u00e8 omogeneo? Ci sono elementi che producono suoni piacevoli (fontane, fruscii)? Compila un rapporto dettagliato che valuti se il parco fornisce genuine attrattive per l'udito oltre che per la vista.",
      duration: "180 min (3 visite)",
      examples: [
        "\ud83c\udf05 Mattina 6:30: uccelli dominanti 70%, traffico lontano 20%, passi joggers 10%",
        "\u2600\ufe0f Pomeriggio 15:00: voci bambini 50%, traffico 30%, uccelli 15%, fontana 5%",
        "\ud83c\udf06 Sera 19:00: traffico 60%, voci adulti 25%, uccelli crepuscolari 10%, grilli 5%"
      ]
    },
    {
      title: "\ud83c\udfa8 Variet\u00e0 Acustica del Paesaggio",
      description: "Analizza e proponi miglioramenti alla diversit\u00e0 sonora",
      prompt: "Il parco che hai analizzato possiede variet\u00e0 di ambienti acustici distinti? Zone silenziose, zone vivaci, zone con acqua, zone con elementi risonanti? O \u00e8 acusticamente uniforme? Disegna una mappa del parco indicando le diverse zone acustiche. Poi progetta modifiche possibili per arricchire la diversit\u00e0: dove aggiungere fontane, elementi eolici, superfici risonanti, barriere vegetali per creare nicchie silenziose. L'obiettivo \u00e8 creare un paesaggio sonoro stratificato e interessante.",
      duration: "90 min",
      examples: [
        "\ud83d\udd35 Zona silenziosa: angolo nord-est protetto da siepe densa, 35-40dB ambiente",
        "\ud83d\udfe2 Zona vivace: area giochi, 55-70dB, voci bambini, attrezzature metalliche",
        "\ud83d\udca7 Proposta fontana: centro parco, masking piacevole del traffico perimetrale"
      ]
    },
    {
      title: "\ud83d\uddff Scultura Sonora Interattiva",
      description: "Progetta un'installazione musicale per spazio pubblico",
      prompt: "Disegna il progetto dettagliato di una scultura sonora da installare in un parco. Deve essere: interattiva (azionabile dal pubblico), resistente alle intemperie, sicura, acusticamente interessante, esteticamente integrata. Potrebbe essere: tubi metallici accordati che suonano col vento, xilofono gigante in legno, gong sospeso, arpa eolica, campane tubolari. Specifica materiali, dimensioni, meccanismo di produzione del suono, posizionamento ideale nel parco, manutenzione necessaria. Disegna schizzi e scrivi una descrizione completa.",
      duration: "120 min",
      examples: [
        "\ud83c\udfb5 Arpa eolica verticale: 12 corde metallo, lunghezza 2m, accordatura pentatonica, installazione area ventosa",
        "\ud83d\udd14 Foresta di campane tubolari: 8 tubi alluminio lunghezze 50-150cm, percuotibili con martelli morbidi",
        "\ud83c\udfb9 Xilofono da terra: 13 barre legno duro, disposizione semicircolare, battenti inclusi, accessibile carrozzine"
      ]
    },
    {
      title: "\ud83c\udfde\ufe0f Il Parco Acustico Ideale",
      description: "Progetta uno spazio verde con focus sul design sonoro",
      prompt: "Crea il progetto completo di un parco modello dove il paesaggio sonoro \u00e8 considerato prioritario quanto quello visivo. Include: zone silenziose per meditazione, aree con attrazioni acustiche (fontane, sculture sonore, elementi eolici), sentieri con superfici diverse (ghiaia, legno, pietra) per variet\u00e0 di passi, vegetazione progettata per fruscii e per attrarre uccelli, barriere acustiche verdi per isolare dal rumore urbano, anfiteatro naturale per eventi. Disegna una mappa annotata e scrivi le specifiche di ogni elemento.",
      duration: "180 min",
      examples: [
        "\ud83e\uddd8 Giardino del silenzio: area 500m\u00b2, circondata da siepe 3m, fontana zen, divieto dispositivi elettronici",
        "\ud83c\udfaa Anfiteatro naturale: semicerchio 30m diametro, acustica naturale, concerti estivi",
        "\ud83c\udf3f Sentiero sensoriale: 200m con 5 superfici diverse, pannelli descrittivi elementi acustici"
      ]
    },
    {
      title: "\ud83d\udee3\ufe0f Ridisegna la Tua Strada",
      description: "Progetta miglioramenti acustici per il tuo ambiente stradale",
      prompt: "Come modificheresti la tua strada residenziale per migliorarne drasticamente il paesaggio sonoro? Considera: limitazioni di traffico, cambiamenti della pavimentazione, aggiunta di elementi vegetali fonoassorbenti, installazione di fontane pubbliche, creazione di isole pedonali, regolamentazione oraria del traffico pesante. Il progetto deve essere realistico ma ambizioso. Presenta le tue proposte con disegni, giustificazioni acustiche, benefici stimati in termini di riduzione decibel e miglioramento qualit\u00e0 della vita.",
      duration: "120 min",
      examples: [
        "\ud83d\ude97 Limitazione: ZTL 22:00-06:00, riduzione stimata -15dB notturni",
        "\ud83c\udf33 Barriera verde: doppia fila alberi + siepe, assorbimento 6-8dB traffico",
        "\u26f2 Fontana piazza: masking piacevole rumori residui, aggregazione sociale"
      ]
    },
    {
      title: "\u23f0 Tabella Oraria dei Suoni",
      description: "Regolamentazione temporale delle attivit\u00e0 acustiche",
      prompt: "Immagina di poter circoscrivere certi suoni a fasce orarie precise per ottimizzare il comfort acustico della tua comunit\u00e0. Crea una tabella dettagliata che assegni orari specifici a: raccolta rifiuti, consegne commerciali, lavori edili, tagli erba, eventi musicali, campane, traffico pesante, attivit\u00e0 sportive rumorose. La tabella deve bilanciare le necessit\u00e0 operative con il diritto al riposo, considerando giorni feriali, weekend, festivit\u00e0. Presenta giustificazioni per ogni scelta temporale.",
      duration: "90 min",
      examples: [
        "\ud83d\uddd1\ufe0f Raccolta rifiuti: 09:00-11:00 giorni feriali (evita sveglia mattutina)",
        "\ud83d\udd28 Lavori edili: 08:00-13:00 e 14:30-18:00 feriali, vietati sabato pomeriggio e domenica",
        "\ud83d\udd14 Campane: preservate, ma volume ridotto 25% nelle ore 22:00-07:00"
      ]
    },
    {
      title: "\ud83d\uddfa\ufe0f Caccia al Tesoro Sonora",
      description: "Crea un gioco esplorativo basato su indizi acustici",
      prompt: "Progetta una caccia al tesoro per una zona specifica (quartiere, parco, campus) dove tutti gli indizi sono descrizioni sonore. Esempio: \"Trova il luogo dove senti 3 campane diverse\", \"Cerca il punto dove il traffico \u00e8 pi\u00f9 forte\", \"Identifica dove scorre acqua corrente\", \"Localizza l'eco pi\u00f9 lunga\". Fornisci ai partecipanti una mappa muta dove annotare le posizioni. L'obiettivo \u00e8 far esplorare il territorio attraverso l'ascolto attivo. Crea almeno 15 indizi con difficolt\u00e0 crescente e soluzioni verificabili.",
      duration: "120 min progettazione + 60 min gioco",
      examples: [
        "\ud83d\udd0d Indizio facile: \"Trova la fontana del parco\" (suono acqua continuo)",
        "\ud83d\udd0d Indizio medio: \"Dove senti campane di 2 chiese sovrapposte?\" (incrocio specifico)",
        "\ud83d\udd0d Indizio difficile: \"Localizza l'eco che dura pi\u00f9 di 2 secondi\" (sottopasso particolare)"
      ]
    },
    {
      title: "\ud83c\udfa7 Passeggiata Sonora al Tesoro",
      description: "Guidatura usando esclusivamente segnali acustici",
      prompt: "Progetta un percorso in uno spazio che conosci bene. Guida i partecipanti bendati lungo questo percorso usando esclusivamente suoni come indicazioni: battiti di mani per \"vai dritto\", campanellino a sinistra per \"gira a sinistra\", fischio per \"fermati\", shaker per \"gira a destra\". I partecipanti devono affidarsi completamente all'ascolto per navigare. Alla fine, rimuovono le bende: sono arrivati dove pensavano? Questo esercizio ribalta la gerarchia sensoriale abituale e rivela quanto dipendiamo dalla vista.",
      duration: "45 min",
      examples: [
        "\ud83d\udc4f 2 battiti lenti = avanza 5 passi / 3 battiti veloci = avanza 10 passi",
        "\ud83d\udd14 Campanellino continuo = gira a sinistra 90\u00b0 / Shaker = gira a destra 90\u00b0",
        "\ud83d\udce2 Fischio = stop assoluto / Voce \"ok\" = puoi togliere benda, sei arrivato"
      ]
    }
  ],
  'esperimenti-creativi': [
    {
      title: "\ud83c\udfad Paesaggi Sonori Impossibili",
      description: "Immagina e descrivi ambienti acustici che non esistono",
      prompt: "Cosa suonerebbe una foresta di campanelli di vetro? Una piazza dove tutti parlano al contrario? Un oceano di carta? Inventa 5 paesaggi sonori completamente fantastici e impossibili, descrivili in dettaglio. Poi prova a creare versioni approssimate usando voce, oggetti, strumenti. L'immaginazione acustica libera dalla realt\u00e0 rivela nuove possibilit\u00e0 compositive.",
      duration: "45 min",
      examples: [
        "\ud83d\udd14 Foresta cristallina: campanelli multipli mossi da vento, armonizzazioni casuali pentatoniche",
        "\ud83d\udcc4 Oceano cartaceo: onde di fruscii, schiuma di strappi, tempesta di fogli volanti",
        "\u23ea Piazza retrospettiva: voci riavvolte, passi al contrario, temporalit\u00e0 inversa"
      ]
    },
    {
      title: "\ud83d\udd04 Inversione Temporale",
      description: "Esplora come i suoni rovesciati rivelano strutture nascoste",
      prompt: "Registra 10-15 suoni diversi (voce, porte, acqua, passi, musica). Riproducili al contrario usando software o app. Alcuni diventano irriconoscibili? Altri mantengono identit\u00e0? Un piatto rovesciato suona come uno swell. L'acqua rovesciata \u00e8 aliena. La voce diventa incomprensibile ma mantiene prosodia. Il reverse audio rivela l'asimmetria temporale fondamentale dei suoni naturali.",
      duration: "60 min",
      examples: [
        "\ud83d\udde3\ufe0f Voce forward vs reverse: forward chiara, reverse mantiene ritmo ma perde semantica",
        "\ud83d\udca7 Acqua gocciolante reverse: suona come gocce che \"risalgono\", innaturale",
        "\ud83c\udfb5 Piatto cymbal reverse: diventa swell crescente, effetto musicale usato"
      ]
    },
    {
      title: "\ud83d\udc0c Rallentamento Estremo",
      description: "Scopri microstrutture allungando suoni brevi",
      prompt: "Registra suoni molto brevi (battito mani, click, goccia, schiocco dita). Rallentali 4x, 8x, 16x usando software. Cosa emerge? Una battuta di mani a 16x diventa un drone evolutivo complesso. Il click contiene risonanze multiple. Il rallentamento estremo rivela che ogni suono \"semplice\" \u00e8 in realt\u00e0 un universo microtemporale di dettagli sovrapposti.",
      duration: "60 min",
      examples: [
        "\ud83d\udc4f Battuta mani 16x: dura 3 secondi, rivela attacco multiplo percussivo, riverbero corpo",
        "\ud83d\udca7 Goccia 32x: texture granulare complessa, modulazione timbrica, impatto+rimbalzo separati",
        "\ud83d\udcf1 Click mouse 8x: risonanza plastica nascosta, doppio attacco, coda metallica"
      ]
    },
    {
      title: "\ud83c\udfb0 Collage Aleatorio",
      description: "Giustapponi suoni non correlati per creare significati emergenti",
      prompt: "Registra 20 suoni completamente diversi e non correlati. Riproducili in ordine casuale (tira dadi, usa random generator). Le giustapposizioni casuali creano narrative inattese? Un uccello seguito da traffico suggerisce natura minacciata? Una risata seguita da sirena crea tensione drammatica? L'aleatoriet\u00e0 rivela come il cervello cerca pattern e significati anche in sequenze random.",
      duration: "45 min",
      examples: [
        "\ud83c\udfb2 Sequenza 1: campana + risata + sirena = narrativa di emergenza durante festa?",
        "\ud83c\udfb2 Sequenza 2: uccello + motore + silenzio = partenza, abbandono?",
        "\ud83c\udfb2 Sequenza 3: acqua + passi + porta = arrivo a casa, rituali quotidiani"
      ]
    },
    {
      title: "\ud83c\udf08 Traduzione Intermodale",
      description: "Traduci stimoli visivi in composizioni sonore",
      prompt: "Scegli un'immagine (foto, dipinto, grafico). \"Traduci\" gli elementi visivi in suoni: colori caldi = frequenze basse? Forme spigolose = suoni percussivi? Sfumature = glissandi? Composizione bilanciata = armonie? Crea una versione sonora dell'immagine di 2-3 minuti. Pu\u00f2 qualcun altro \"riconoscere\" l'immagine dall'audio? Questo esercizio esplora sinestesia e mapping cross-modale.",
      duration: "90 min",
      examples: [
        "\ud83c\udf05 Tramonto: rosso/arancio = toni bassi caldi, azzurro = frequenze alte, progressione temporale",
        "\ud83c\udfd9\ufe0f Skyline urbano: grattacieli = note tenute diverse altezze, simmetria = pattern ritmici",
        "\ud83c\udf0a Hokusai \"Onda\": crescendo drammatico, picco violento, decadimento spumoso"
      ]
    },
    {
      title: "\ud83c\udfaa Paesaggio Sonoro Emotivo",
      description: "Crea soundscape che evocano emozioni specifiche",
      prompt: "Componi brevi paesaggi sonori (2 min ciascuno) progettati per evocare emozioni precise: gioia, tristezza, ansia, pace, nostalgia, speranza. Usa solo suoni concreti registrati (no musica). Quali suoni evocano quali emozioni? \u00c8 universale o culturale? La pioggia \u00e8 triste o meditativa? Gli uccelli sono allegri o nostalgici? L'emozione emerge dalle associazioni o dalle qualit\u00e0 acustiche intrinseche?",
      duration: "120 min",
      examples: [
        "\ud83d\ude0a Gioia: risate bambini, uccelli vivaci, acqua zampillante, ritmi veloci",
        "\ud83d\ude14 Tristezza: pioggia lenta, vento basso, campana singola, spazi vuoti",
        "\ud83d\ude30 Ansia: traffico caotico, orologi multipli, sirene distanti, crescendo senza risoluzione"
      ]
    },
    {
      title: "\ud83d\udd2e Profezia Acustica",
      description: "Prevedi l'evoluzione del paesaggio sonoro nel prossimo minuto",
      prompt: "Ascolta il tuo ambiente per 30 secondi, poi scrivi una previsione dettagliata di cosa accadr\u00e0 acusticamente nel prossimo minuto: auto che passer\u00e0? Uccello canter\u00e0? Porta si aprir\u00e0? Verifica quanto sei accurato. Con la pratica migliori? Questo esercizio sviluppa modelli mentali predittivi del paesaggio sonoro, fondamentali per field recordists che anticipano eventi.",
      duration: "30 min (multipli cicli)",
      examples: [
        "\ud83c\udfaf Previsione corretta: semaforo cambier\u00e0 in 40s (ciclicit\u00e0 conosciuta)",
        "\u274c Previsione errata: pensavo aereo, passato elicottero invece",
        "\u2705 Sorpresa anticipata: riconosciuto pattern pre-ambulanza (traffico che si ferma) 20s prima sirena"
      ]
    },
    {
      title: "\ud83c\udfbc Partitura Grafica del Quotidiano",
      description: "Crea notazione visuale non-standard di eventi sonori",
      prompt: "Ascolta un ambiente per 5 minuti e crea una \"partitura grafica\" personale: usa forme, colori, linee, simboli inventati per rappresentare cosa hai sentito. Non usare notazione musicale standard. Poi scambia la partitura con qualcun altro: pu\u00f2 \"leggere\" ed eseguire la tua partitura? Le partiture grafiche sono ponti tra ascolto e visualizzazione.",
      duration: "45 min",
      examples: [
        "\ud83d\udcca Sistema personale: cerchi = suoni continui, linee = eventi brevi, colore = frequenza, spessore = volume",
        "\ud83c\udfa8 Partitura risultante: astratta ma contiene info temporale, intensit\u00e0, layering",
        "\ud83d\udd04 Esecuzione: altra persona interpreta al 60% simile, dettagli divergono ma struttura riconoscibile"
      ]
    },
    {
      title: "\ud83c\udf0d Soundscape di Una Stanza Vuota",
      description: "Quanto \u00e8 \"silenzioso\" lo spazio apparentemente vuoto?",
      prompt: "Entra in una stanza apparentemente silenziosa e vuota. Dedicai 20 minuti ad ascoltare solo quella stanza. Quanti suoni scopri che esistono ma normalmente ignori? Risonanza strutturale dell'edificio, ventilazione impercettibile, elettronica nascosta, suoni da stanze adiacenti filtrati, vibrazioni urbane che permeano le fondamenta. La stanza \"vuota\" \u00e8 un ecosistema acustico complesso.",
      duration: "20 min",
      examples: [
        "\ud83c\udfe2 Stanza ufficio \"vuota\": ventilazione 32dB, neon 28dB, traffico filtrato 30dB, PC vicino 26dB",
        "\ud83c\udfe0 Camera letto \"silenziosa\": frigorifero cucina 25dB, impianto riscaldamento 22dB, orologio 18dB",
        "\ud83d\udcca Totale sorgenti in \"silenzio\": 12 suoni continui distinti, nessun vero silenzio"
      ]
    },
    {
      title: "\ud83c\udfa7 Concerto per Oggetti Quotidiani",
      description: "Componi musica usando solo oggetti non-musicali",
      prompt: "Crea una composizione di 3-4 minuti usando solo suoni prodotti da oggetti quotidiani non-musicali: bicchieri, posate, chiavi, porte, carta, bottiglie, scatole. Esplora ogni oggetto: quanti suoni differenti produce? Scrivi una \"partitura\" e prova ad eseguirla ripetutamente. Pu\u00f2 raggiungere coerenza come composizione musicale? Gli oggetti diventano strumenti.",
      duration: "90 min",
      examples: [
        "\ud83c\udf77 Bicchieri: percussione (colpi), tono (bordo sfregato), riempimento (pitch variabile)",
        "\ud83d\udcc4 Carta: fruscio (texture), strappo (percussione), accartocciamento (crescendo)",
        "\ud83c\udfb5 Risultato: composizione con intro-sviluppo-climax-coda, struttura musicale riconoscibile"
      ]
    },
    {
      title: "\u23f1\ufe0f Dilatazione e Compressione Temporale",
      description: "Riassumi o espandi eventi acustici cambiando la scala temporale",
      prompt: "Registra 1 ora di paesaggio sonoro. Crea poi una versione compressa a 2 minuti che catturi l'essenza. Poi al contrario: registra 10 secondi e crea un'espansione dettagliata a 5 minuti aggiungendo layers, manipolazioni, estrapolazioni. Questo esercizio esplora editing e composizione time-based.",
      duration: "120 min",
      examples: [
        "\u23e9 1 ora\u21922 min: sampling key moments, crossfade veloci, mantenimento evoluzione generale",
        "\u23ea 10 sec\u21925 min: rallentamento, layering, loop multipli, esplorazione microtemporale",
        "\ud83c\udfaf Essenza preservata: entrambe le versioni comunicano \"identit\u00e0\" dell'originale"
      ]
    },
    {
      title: "\ud83d\udd01 Loop Ipnotico",
      description: "Scopri come la ripetizione trasforma la percezione",
      prompt: "Registra un suono breve (1-5 secondi). Mettilo in loop perfetto per 10 minuti. Ascoltalo dall'inizio alla fine. Come cambia la tua percezione? Inizialmente lo senti chiaramente. Dopo 2 minuti inizia ad assomigliare a un drone. Dopo 5 minuti entri in trance. Dettagli che non avevi notato emergono. Il loop ripetuto all'infinito diventa meditazione acustica.",
      duration: "60 min (preparazione + ascolto)",
      examples: [
        "\ud83d\udd04 Goccia d'acqua loopata: dopo 3 min diventa pattern ipnotico, percezione del \"singolo evento\" scompare",
        "\ud83c\udf00 Sirena loopata: dopo 5 min diventa quasi musicale, pitch emerge chiaramente",
        "\ud83c\udfb5 Effetti psicologici: alterazione percezione temporale, emergenza di pattern fantasma"
      ]
    },
    {
      title: "\ud83c\udf10 Stereofonia Ambientale",
      description: "Esplora le differenze tra orecchio sinistro e destro",
      prompt: "Con due registratori (o smartphone), registra simultaneamente orecchio sinistro e destro (microfoni separati a distanza testa). Ascolta poi le due tracce separate. Quanto differiscono? L'orecchio sinistro ha captato suoni che il destro ha perso? Le differenze di timing e intensit\u00e0 creano la nostra percezione spaziale. Questo esercizio rivela la fondazione della stereofonia naturale.",
      duration: "60 min",
      examples: [
        "\u2b05\ufe0f Orecchio sinistro: traffico +6dB, voce vicino +8dB",
        "\u27a1\ufe0f Orecchio destro: uccelli +4dB, porta +10dB",
        "\ud83c\udfa7 Differenza di timing: sorgenti laterali hanno delay <1ms tra orecchie, ma percepibile"
      ]
    },
    {
      title: "\ud83c\udfa8 Field Recording come Fotografia",
      description: "Cattura \"istantanee sonore\" con approccio fotografico",
      prompt: "Come un fotografo cerca la \"foto perfetta\", cerca il \"suono perfetto\": aspetta il momento giusto, il bilanciamento giusto di elementi, la luce (acustica) giusta. Passa 60 minuti cercando di catturare LA registrazione di 30 secondi che cattura perfettamente l'essenza di un luogo. Un solo take, come una fotografia. Quando premare \"rec\"? L'attesa e la scelta del momento sono arte.",
      duration: "60 min",
      examples: [
        "\ud83c\udfaf Momento perfetto: campanile + uccelli + bambini che ridono + vento, tutti simultanei per 25s",
        "\u23f0 Attesa: 45 minuti di ascolto, solo 3 tentativi, il terzo perfetto",
        "\ud83c\udfc6 Risultato: singola registrazione che \"dice tutto\" del luogo"
      ]
    },
    {
      title: "\ud83c\udf19 Paesaggio Sonoro dei Sogni",
      description: "Ricrea l'acustica irreale e surreale dei sogni",
      prompt: "I sogni hanno paesaggi sonori strani: voci ovattate, echi impossibili, suoni che morphano, spazialit\u00e0 distorta. Prova a ricreare l'atmosfera acustica di un sogno che ricordi, usando manipolazioni (reverb estremi, pitch shift, layering impossibile). Il risultato dovrebbe suonare \"dreamlike\". Questo esplora i confini tra realt\u00e0 acustica e immaginazione.",
      duration: "90 min",
      examples: [
        "\ud83d\udc7b Voci remote: pitch shifted -20%, reverb 8s, filtro passa-basso, risultato spettrale",
        "\ud83c\udf00 Spazio impossibile: eco che ritorna dopo 15s (implicherebbe parete a 2.5km)",
        "\ud83d\udd2e Morfologia fluida: suono che inizia come campana e diventa voce senza transizione netta"
      ]
    }
  ]
};