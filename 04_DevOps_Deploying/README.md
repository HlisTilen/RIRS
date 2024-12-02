
# 📝 Vaja 4: GitHub Actions - gradnja docker slik in namestitev

## 📑 Namen vaje

Cilj te vaje je implementirati novo funkcionalnost v aplikacijo, napisati ustrezne teste za njeno delovanje, ter razširiti obstoječi CI/CD pipeline z ločenimi fazami za **gradnjo Docker slik**, **nalaganje Docker slik na Docker Hub**, in **namestitev aplikacije** na izbrano storitev.

---

## 📅 Rok za oddajo

- **Vse skupine:** 23. 12. 2024

### Točkovnik

- Oddaja do roka: možnih 100%.
- Zamuda do 1 teden: največ 75%.
- Zamuda do konca semestra: največ 50%.

---

## 📋 Zahteve naloge

### 1. Implementacija nove funkcionalnosti

- Dodajte **novo funkcionalnost** v aplikacijo.
  - Funkcionalnost mora biti smiselna in uporabna.
  - Primeri:
    - Dodajanje nove strani ali obrazca (frontend).
    - Nova API metoda za obdelavo podatkov (backend).
    - Validacija ali obogatitev obstoječih podatkov.
  - Funkcionalnost je lahko implementirana v **frontend**, **backend**, ali oboje.

### 2. Pisanje testov za novo funkcionalnost

- Napišite **vsaj 5 novih unit testov**, ki preverjajo delovanje nove funkcionalnosti.
  - Testi so lahko na frontendu, backendu ali kombinacija obojega.

### 3. Razširitev CI/CD pipeline

- Dodajte novo fazo za **gradnjo Docker slike**:
  - Docker slika mora biti izdelana na osnovi vaše aplikacije.
  - Docker datoteka (`Dockerfile`) mora biti pravilno nastavljena za gradnjo slike.

### 4. Nalaganje Docker slike na Docker Hub

- Dodajte fazo za **nalaganje Docker slike**:
  - Poskrbite za prijavo v Docker Hub z uporabo GitHub Secrets (npr. `DOCKER_USERNAME` in `DOCKER_PASSWORD`).
  - Naložite dokončno izdelano Docker sliko na Docker Hub z uporabo ukaza `docker push`.
  - Preverite, da je slika uspešno naložena in vidna na vašem Docker Hub računu.

### 5. Namestitev aplikacije na izbrano storitev

- Dodajte fazo za **namestitev aplikacije**:
  - Izberite eno od naslednjih storitev za namestitev:
    - Firebase Hosting
    - Vercel
    - Heroku
    - Render
    - Azure
    - AWS
    - Druga ustrezna storitev po vaši izbiri.
  - Uporabite ustrezne ukaze ali orodja za namestitev (npr. `firebase deploy`, `vercel deploy`, ali `heroku deploy`).
  - Preverite, da je aplikacija uspešno nameščena in dostopna na izbrani storitvi.
- Ne pozabite na namestitev podatkovne baze in povezovanja z aplikacijo, če je potrebno (tudi povezava frontend - backend)🚨

---

## 🎯 Zahteve za CI/CD pipeline

1. **Faza gradnje:**

   - Dodajte job za gradnjo Docker slike.
   - Poskrbite, da je Docker slika pravilno izdelana.

2. **Faza testiranja:**

   - Vključite obstoječe teste in novih 5 testov za novo funkcionalnost.
   - Preverite, da obstoječa funkcionalnost še vedno deluje brez napak.

3. **Faza nalaganja na Docker Hub:**

   - Dodajte job za nalaganje Docker slike na Docker Hub.
   - Poskrbite, da se uporablja varna prijava z GitHub Secrets.
   - Preverite, da je nalaganje izvedeno brez napak.

4. **Faza namestitve:**

   - Dodajte job za namestitev aplikacije na izbrano storitev.
   - Poskrbite, da je aplikacija uspešno nameščena in dostopna.

---

## 📚 Primer rešitve

Za primer implementacije si oglejte [primer aplikacije v repozitoriju](https://github.com/HlisTilen/RIRS/tree/main/04_DevOps_Deploying/primer) in [primer cevovodov v repozitoriju](https://github.com/HlisTilen/RIRS/tree/main/.github/workflows).

---

## 🔄 Povzetek naloge

1. **Dodajte novo funkcionalnost** v aplikacijo.
2. **Napišite 5 novih unit testov** za novo funkcionalnost.
3. **Dodajte novo fazo gradnje** Docker slike v CI/CD pipeline.
4. **Naložite Docker sliko** na Docker Hub.
5. **Namestite aplikacijo** na izbrano storitev.

---

## 🔍 Ocenjevanje

1. **Nova funkcionalnost (10%)**

   - Funkcionalnost je pravilno implementirana.

2. **Testi (10%)**

   - Novi testi pokrivajo novo funkcionalnost.

3. **Gradnja Docker slike (30%)**

   - Gradnja je pravilno implementirana.

4. **Nalaganje na Docker Hub (20%)**

   - Docker slika je uspešno naložena na Docker Hub.

5. **Namestitev aplikacije (30%)**

   - Aplikacija je uspešno nameščena in dostopna na izbrani storitvi.

---
