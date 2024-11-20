# 📝 Vaja 2: Implementacija CI/CD s testiranjem za frontend in backend z GitHub Actions

## 📑 Namen vaje
Cilj te vaje je vzpostaviti CI/CD pipeline z GitHub Actions, ki bo omogočal avtomatizirano testiranje `frontend` in `backend` dela aplikacije, ter generiranje poročil o pokritosti kode. Študenti bodo skozi nalogo spoznali ključne prakse za zagotavljanje kakovosti programske opreme v sodobnih razvojnih okoljih.

---

## 📅 Rok za oddajo

- **Ponedeljkova skupina:** 2. 12. 2024
- **Sredina skupina:** 4. 12. 2024

### Točkovnik
- Oddaja do roka: možnih 100%.
- Zamuda do 1 teden: največ 75%.
- Zamuda do konca semestra: največ 50%.

---

## 📋 Zahteve naloge
- Ustvarite repozitorij na GitHubu (vaša obstoječa aplikacija), ki vsebuje strukturo z `frontend` in `backend` aplikacijo (lahko uredite v obliki organizacije).
> ⚠️ Od te naloge naprej niste več v skupini ampak vsak študent posamezno (uporabite na primer fork skupnega repozitorija). ⚠️
- Napišite vsaj **20 testov** (npr. 10 za frontend in 10 za backend).
- Pripravite in konfigurirajte **GitHub Actions workflow**, ki bo izvajal teste za oba dela aplikacije (frontend in backend).
> 📝 **Namig:** Uporabite `jobs` in `steps` za izvajanje testov. Zaenkrat imamo samo test fazo.
- Vključite **artefakte**, ki bodo shranili poročila o pokritosti kode za poznejšo analizo.

---

## 📘 Primer rešitve
Za primer implementacije si oglejte [primer aplikacije v repozitoriju](https://github.com/HlisTilen/RIRS/tree/main/02_DevOps_Testing/primer) in [primer cevovodov v repozitoriju](https://github.com/HlisTilen/RIRS/tree/main/.github/workflows).

---

## 🔄 Povzetek naloge
1. **Vzpostavitev repozitorija** s strukturo `frontend` in `backend`.
2. **Pisanje testov** za oba dela aplikacije.
3. **Implementacija GitHub Actions** za avtomatizirano testiranje in generiranje poročil o pokritosti kode.

---

## 🔍 Ocenjevanje
1. **Vzpostavitev repozitorija (10%)**  
   - Repozitorij vsebuje jasno ločeno strukturo za `frontend` in `backend`.  
   - Koda je organizirana in pripravljena za uporabo z GitHub Actions.  

2. **Pisanje testov (30%)**  
   - Vključenih je **vsaj 20 testov** (npr. 10 za frontend in 10 za backend).  
   - Testi delujejo brez napak in pokrivajo ključno logiko aplikacije.  
   - Testi so raznoliki in smiselni (unit testi, validacije, poslovna logika).  

3. **Implementacija GitHub Actions (40%)**  
   - CI/CD pipeline pravilno izvaja avtomatizirano testiranje za oba dela aplikacije.  
   - Pipeline vključuje jasno definirane job-e in korake (`jobs`, `steps`).  
   - Prikazana je ustrezna organizacija testne faze.  

4. **Artefakti (20%)**  
   - Poročila o pokritosti kode so pravilno shranjena kot artefakti v zavihku **Actions**.  
   - Artefakti so dostopni in pravilno organizirani za pregled.  

---
