# 📝 Vaja 3: Implementacija nove funkcionalnosti, testiranje in gradnja z GitHub Actions

## 📑 Namen vaje
Cilj te vaje je implementirati novo funkcionalnost v aplikacijo, napisati ustrezne teste za njeno delovanje, ter razširiti obstoječi CI/CD pipeline z ločeno fazo za **gradnjo aplikacije**. Študenti bodo prav tako implementirali **caching** za svoje odvisnosti, ne glede na uporabljeno tehnologijo, kar bo skrajšalo čas izvajanja pipeline-a.

---

## 📅 Rok za oddajo

- **Ponedeljkova skupina:** 9. 12. 2024  
- **Sredina skupina:** 11. 12. 2024  

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
- Dodajte novo fazo za **gradnjo aplikacije**:
  - Gradnja mora biti izvedena za frontend in/ali backend, odvisno od strukture vaše aplikacije.
  - Implementirajte **caching**, ki bo zapisoval in obnavljal **odvisnosti** vaše aplikacije (odvisno od uporabljene tehnologije):
    - **Primeri odvisnosti glede na tehnologijo:**
      - **Node.js:** `node_modules`.
      - **Python:** mapa z virtualnim okoljem (npr. `.venv` ali `__pycache__`).
      - **Java:** mapa `~/.m2` za Maven ali `build` za Gradle.
    - Uporabite ustrezne ključe za caching, da se odvisnosti shranijo in ponovno uporabijo, če se ne spremenijo.  

### 4. Shranjevanje artefaktov
- Shranite gradbene rezultate aplikacije kot artefakte:
  - **Frontend:** Npr. `dist` mapa za aplikacijo, pripravljeno za distribucijo.
  - **Backend:** Npr. `build` mapa ali binarne datoteke.

---

## 🎯 Zahteve za CI/CD pipeline
1. **Faza gradnje:**
   - Dodajte job za gradnjo aplikacije (frontend in/ali backend).
   - Implementirajte caching za odvisnosti glede na uporabljeno tehnologijo.
   - Shranite gradbene rezultate kot artefakte.

2. **Faza testiranja:**
   - Vključite obstoječe teste in novih 5 testov za novo funkcionalnost.
   - Preverite, da obstoječa funkcionalnost še vedno deluje brez napak.

---

## 📘 Primer rešitve
Za primer implementacije si oglejte [primer aplikacije v repozitoriju](https://github.com/HlisTilen/RIRS/tree/main/02_DevOps_Testing/primer) in [primer cevovodov v repozitoriju](https://github.com/HlisTilen/RIRS/tree/main/.github/workflows).

---

## 🔄 Povzetek naloge
1. **Dodajte novo funkcionalnost** v aplikacijo.  
2. **Napišite 5 novih unit testov** za novo funkcionalnost.  
3. **Dodajte novo fazo gradnje** za aplikacijo v CI/CD pipeline.  
4. **Implementirajte caching**, ki ustreza vaši tehnologiji.  
5. **Shranjujte artefakte** gradnje za poznejšo uporabo.  

---

## 🔍 Ocenjevanje
1. **Nova funkcionalnost (20%)**  
   - Funkcionalnost je pravilno implementirana.  

2. **Testi (20%)**  
   - Novi testi pokrivajo novo funkcionalnost.  

3. **Gradnja aplikacije (50%)**  
   - Gradnja je pravilno implementirana za frontend in/ali backend.  
   - Caching odvisnosti je pravilen in učinkovit.  

4. **Artefakti (10%)**  
   - Gradbeni artefakti so shranjeni v zavihku **Actions**.  

---
