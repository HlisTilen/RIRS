# 📝 Vaja: GitHub Pages in Environments

## 📑 Namen vaje
Cilj te vaje je, da se študenti naučijo uporabljati **GitHub Pages** za uvajanje statične spletne strani z opisom projekta in nastaviti **environments** za razlikovanje med testnimi in produkcijskimi okolji.

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

### **1. Uporaba GitHub Pages**
- Ustvarite **statično spletno stran** (npr. `index.html`) z opisom projekta.
  - Stran naj vsebuje:
    - Ime projekta.
    - Imena članov ekipe.
    - Kratek opis projekta.
  - Stran mora biti samodejno nameščena na **GitHub Pages** prek GitHub Actions.

### **2. Uporaba Environments**
- Ustvarite dva okolja v GitHub **Environments**:
  - **Development**:
    - Uporablja se za testne namestitve.
  - **Production**:
    - Uporablja se za končne namestitve in zahteva ročno odobritev.
- V cevovodu nastavite, da se spremembe iz veje `main` nameščajo na okolje Development, medtem ko se spremembe iz veje `production` nameščajo na Production.

---

## 🎯 Zahteve za CI/CD pipeline

### **Faza nameščanje na GitHub Pages:**
- Dodajte job, ki uvaja statično stran na GitHub Pages.

### **Faza nameščanje na okolja:**
- Dodajte ločena opravila za Development in Production environments.
- Za Production okolje zagotovite ročno odobritev pred uvajanjem.

---

## 📚 Primer rešitve
Za primer implementacije si oglejte primer aplikacije v repozitoriju in primer cevovodov v repozitoriju.

---

## 🔄 Povzetek naloge
1. **Dodajte fazo uvajanja na GitHub Pages**.  
2. **Nastavite environments** (Development in Production).  

---

## 🔍 Ocenjevanje

1. **GitHub Pages (40%)**  
   - Statična stran je pravilno objavljena.  

2. **Environments (60%)**  
   - Development in Production sta pravilno nastavljena.  

---