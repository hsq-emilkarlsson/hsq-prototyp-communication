# Pusha projektet till GitHub

Följ dessa enkla steg för att pusha ditt projekt till GitHub:

## 1. Öppna Terminal

Öppna Terminal på din Mac.

## 2. Navigera till projektmappen

```bash
cd /Users/emilkarlsson/Documents/Dev/hsq-prototyp-communication
```

## 3. Kontrollera status (valfritt)

```bash
git status
```
Detta visar vilka filer som har ändrats och är redo att läggas till.

## 4. Lägg till alla filer

```bash
git add .
```

## 5. Skapa en commit

```bash
git commit -m "Initial commit - Husqvarna kommunikationsprototyp"
```

## 6. Konfigurera remote repository (görs bara första gången)

Om du inte redan har gjort detta:

```bash
git remote add origin https://github.com/hsq-emilkarlsson/hsq-prototyp-communication.git
```

## 7. Pusha till GitHub

```bash
git push -u origin main
```

För efterföljande push-kommandon räcker det med:

```bash
git push
```

## 8. Aktivera GitHub Pages

1. Gå till ditt repository på GitHub
2. Klicka på "Settings"
3. Klicka på "Pages" i sidomenyn (under "Code and automation")
4. Under "Source", välj "Deploy from a branch"
5. Välj "main" som branch och "/" (root) som mapp
6. Klicka på "Save"
7. Efter några minuter kommer din webbplats att vara tillgänglig på:
   `https://hsq-emilkarlsson.github.io/hsq-prototyp-communication/`

## Klart!

Din webbplats är nu publicerad och tillgänglig för alla via länken ovan.