# 📝 Vaja: SonarCloud integracija

## 📑 Namen vaje
Cilj te vaje je, da se študenti naučijo uporabljati **SonarCloud** za analizo kakovosti kode in uvedbo kakovostnih pregrad (quality gates) z uporabo GitHub Actions.

---

## 📅 Rok za oddajo
- **Ponedeljkova skupina:** 6. 1. 2025  
- **Sredina skupina:** 8. 1. 2025  

### Točkovnik
- **Oddaja do roka:** možnih 100%.  
- **Zamuda do 1 teden:** največ 75%.  
- **Zamuda do konca semestra:** največ 50%.  

---

## 📋 Zahteve naloge

### **1. Nastavitev SonarCloud**
- Povežite vaš GitHub repozitorij s **SonarCloud**:
  1. Prijavite se na [SonarCloud](https://sonarcloud.io/).
  2. Ustvarite projekt in povežite vaš repozitorij.
  3. Pridobite **project key** in **organization key**.
  4. Ustvarite **token** in ga shranite kot GitHub Secret pod imenom `SONAR_TOKEN`.

### **2. Dodajanje `sonar-project.properties`** (opcijsko)
- Ustvarite datoteko `sonar-project.properties` v korenskem imeniku repozitorija z naslednjo vsebino (prilagodite vaši tehnologiji):

```properties
sonar.projectKey=<your-sonarcloud-project-key>
sonar.organization=<your-sonarcloud-organization>
sonar.host.url=https://sonarcloud.io
sonar.sources=.
sonar.exclusions=**/node_modules/**, **/dist/**
sonar.javascript.lcov.reportPaths=coverage/lcov.info
```

### **3. Uvedba SonarCloud analize v CI/CD pipeline**
- Dodajte job za SonarCloud analizo v vaš GitHub Actions workflow.
- Preverite, da analiza uspešno preveri kakovost kode in prikaže rezultate v SonarCloud nadzorni plošči.

### **4. Uvedba kakovostnih pregrad (quality gates)**
- Preverite, da so kakovostne pregrade izpolnjene pred namestitvijo na Production okolje.
- Če kakovostne pregrade niso izpolnjene, preprečite nadaljnje faze cevovoda.

---

## 🎯 Zahteve za CI/CD pipeline

### **Faza SonarCloud analize:**
- Analizirajte celotno kodo v repozitoriju (backend + frontend).
- Vključite vse izračunane metrike (npr. pokritost s testi, tehnični dolg).

### **Faza preverjanja kakovostnih pregrad:**
- Uporabite SonarCloud API za preverjanje kakovostnih pregrad.
- Prekinite cevovod, če kakovostne pregrade niso izpolnjene.

---

## 📚 Primer rešitve
Za primer implementacije si oglejte primer aplikacije v repozitoriju in primer cevovodov v repozitoriju.

---

## 🔄 Povzetek naloge
1. **Povežite SonarCloud z vašim repozitorijem.**  
2. **Dodajte `sonar-project.properties`.** (odvisno od tehnologije) 
3. **Uvedite SonarCloud analizo v CI/CD pipeline.**  
4. **Preverite kakovostne pregrade pred nadaljnjimi fazami.**  

---

## 🔍 Ocenjevanje

1. **Nastavitev SonarCloud (25%)**  
   - Povezava z repozitorijem in pravilna konfiguracija.  

2. **SonarCloud analiza (50%)**  
   - Analiza kode je uspešno izvedena in rezultati so vidni v SonarCloud.

3. **Kakovostne pregrade (25%)**  
   - Preverjanje kakovostnih pregrad deluje pravilno in blokira nadaljnje faze, če pregrade niso izpolnjene.  

---