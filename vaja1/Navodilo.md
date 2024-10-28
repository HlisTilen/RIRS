# 📝 Vaja 1: GitHub Flow Strategija in Implementacija Informacijskega Sistema

## 📑 Namen vaje
Ta vaja je razdeljena na dva dela. V prvem delu boste vzpostavili GitHub Flow strategijo z dolgoživečimi in kratkoživečimi vejami. V drugem delu boste implementirali informacijski sistem v obliki Minimalno Sprejemljivega Izdelka (MVP), ki vključuje frontend, backend in podatkovno bazo. Skozi celoten razvoj boste izvajali dva sprinta ter po koncu izvedli retrospektivo.

---

## 📅 Rok za oddajo

- **Ponedeljkova skupina:** 11. 11. 2024
- **Sredina skupina:** 13. 11. 2024

---

## 🛠️ Navodila - Prvi del: GitHub Flow Strategija

### 📌 [GitHub Flow](https://githubflow.github.io/)

1. **Ustvarite tri dolgoživeče (long-lived) veje** v svojem repozitoriju:
   - `main`
   - `pre-production`
   - `production`

2. **Zaščitite dolgoživeče veje pred direktnim pushanjem:**
   - Konfigurirajte GitHub nastavitve, da **ne dovolijo direktnega pushanja** na veje `main`, `pre-production` in `production`.
   - Zahtevajte, da se za vsako spremembo na teh vejah izvede **pull request (PR)**.

3. **GitHub Flow postopek:**
   - Za vsako novo funkcionalnost ustvarite **kratkoživečo (short-lived) vejo** imenovano `feature/[opis_funkcionalnosti]`.
   - Izvajajte spremembe znotraj te feature veje, dokler funkcionalnost ni dokončana.
   - Ko je funkcionalnost implementirana in testirana, ustvarite **pull request (PR)** za združitev veje z eno izmed dolgoživečih vej.
   - Po združitvi (merge) PR-ja, **izbrišite kratkoživečo feature vejo**, saj ni več potrebna.

4. **Pregled in potrditev PR-jev:**
   - Pred združitvijo pull requesta naj bo sprememba pregledana (če je mogoče, vključite sošolca, da pregleda kodo).

### 🧩 Primer Uporabe

1. **Začetek funkcionalnosti:** Ustvarite novo feature vejo, npr. `feature/dodaj-prikaz-uporabnika`.
2. **Razvoj:** Implementirajte kodo in jo večkrat komitajte v feature vejo.
3. **Pull request:** Ko je funkcionalnost dokončana, ustvarite PR za združitev veje z `pre-production`.
4. **Združitev in brisanje:** Po odobritvi PR-ja združite (merge) kodo in izbrišite `feature/dodaj-prikaz-uporabnika`.

### ✅ Cilji prvega dela

- Razumevanje GitHub Flow strategije in njene uporabe.
- Pravilna uporaba dolgoživečih in kratkoživečih vej.
- Uporaba pull requestov za organizirano združevanje kode.
- Učenje najboljših praks pri upravljanju verzij in sodelovanju.

---

## 🔄 Drugi del naloge: Implementacija informacijskega sistema

### 🎯 Cilj
Razviti osnovni informacijski sistem v obliki **Minimalno Sprejemljivega Izdelka (MVP)**, ki bo vseboval:
- **Frontend** (uporabniški vmesnik)
- **Backend** (logika aplikacije in API-ji)
- **Podatkovno bazo** (za shranjevanje podatkov)

> ⚠️ **Opomba:** Sistem **ni potreben v popolnoma dokončani obliki**; zadostuje, da funkcionalnosti pokrivajo ključne zahteve MVP-ja.

#### 🔧 Tehnologije
Izbor tehnologij za frontend, backend in podatkovno bazo je **poljuben**, zato izberite tiste, s katerimi se najbolje znajdete ali jih želite bolje spoznati.

### 🏃 Sprint 1: Načrtovanje in začetna implementacija
1. **Načrtovanje sistema:** Definirajte osnovno strukturo vašega informacijskega sistema in določite ključne funkcionalnosti za MVP.
2. **Postavitev okolja:** Nastavite repozitorij in konfigurirajte osnovno razvojno okolje (npr. frontend, backend in povezavo s podatkovno bazo).
3. **Implementacija ključnih funkcionalnosti:** Pričnite z razvojem MVP funkcionalnosti. Uporabite kratkoročne feature veje za vsako funkcionalnost in ob zaključku izvedite pull request.
4. **Zaključek sprinta:** Po koncu sprinta preverite, ali so cilji MVP-ja doseženi, in opravite pregled trenutnega stanja sistema.

### 🏃 Sprint 2: Dopolnitev in izboljšave
1. **Nadaljevanje razvoja:** Na podlagi rezultatov prvega sprinta nadaljujte z implementacijo in izboljšavami.
2. **Testiranje:** Preverite funkcionalnosti, ki ste jih razvili, in zagotovite, da delujejo brez napak.
3. **Dokumentacija:** Dodajte osnovno dokumentacijo za vse pomembne funkcije sistema.
4. **Zaključek sprinta:** Po koncu drugega sprinta preverite napredek in pripravite sistem za retrospektivo.

### 🔄 Retrospektiva sprintov
Po zaključku obeh sprintov opravite retrospektivo v obliki dokumenta:
- Pogovorite se o vseh pomembnih vidikih razvoja: kaj je šlo dobro, s kakšnimi težavami ste se soočili in kaj bi lahko izboljšali v prihodnjih projektih.
- Zabeležite zaključke v datoteko **`Retrospektiva.md`** v repozitoriju.

---

## ✅ Povzetek naloge

1. **Vzpostavitev GitHub Flow strategije** z dolgoživečimi in kratkoživečimi vejami.
2. **Implementacija informacijskega sistema** v obliki **Minimalno Sprejemljivega Izdelka (MVP)** z uporabo poljubnih tehnologij.
3. Izvedba **dveh sprintov** in **retrospektiva v obliki dokumenta**.

---