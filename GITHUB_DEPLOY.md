# Hur du laddar upp och delar projektet via GitHub Pages

Följ dessa steg för att ladda upp projektet till GitHub och visa det online via GitHub Pages.

## Steg 1: Skapa ett GitHub-konto (om du inte redan har ett)

1. Gå till [GitHub](https://github.com/) och skapa ett konto om du inte redan har ett.

## Steg 2: Skapa ett nytt repository

1. Logga in på GitHub
2. Klicka på "+" i övre högra hörnet och välj "New repository"
3. Namnge ditt repository, t.ex. "hsq-prototyp-communication"
4. Välj "Public" som synlighet (krävs för gratis GitHub Pages)
5. Klicka på "Create repository"

## Steg 3: Öppna terminal/kommandotolken

Öppna terminal (Mac/Linux) eller kommandotolken/Git Bash (Windows).

## Steg 4: Konfigurera git i ditt projekt

Navigera till din projektmapp:

```bash
cd /Users/emilkarlsson/Documents/Dev/hsq-prototyp-communication
```

Initiera git (om det inte redan är gjort):

```bash
git init
```

Konfigurera din användarinformation (om du inte redan gjort det):

```bash
git config --global user.name "Ditt Namn"
git config --global user.email "din.email@exempel.se"
```

## Steg 5: Lägg till dina filer och spåra ändringar

```bash
# Lägg till alla filer i projektet för spårning
git add .

# Skapa en första commit med dina ändringar
git commit -m "Initial commit - Husqvarna Kommunikationsprototyp"
```

## Steg 6: Koppla ihop ditt lokala repository med GitHub

```bash
git remote add origin https://github.com/ditt-användarnamn/hsq-prototyp-communication.git
```

Ersätt `ditt-användarnamn` med ditt GitHub-användarnamn.

## Steg 7: Ladda upp dina filer till GitHub

```bash
git branch -M main
git push -u origin main
```

## Steg 8: Aktivera GitHub Pages

1. Gå till ditt repository på GitHub
2. Klicka på "Settings"
3. Skrolla ner till "GitHub Pages" sektionen
4. Under "Source", välj "main" branch
5. Välj "/" (root) som source och klicka på "Save"

## Steg 9: Åtkomst till din publicerade webbplats

Efter att GitHub Pages har aktiverats (det kan ta några minuter), kommer din sida att vara tillgänglig på:

```
https://ditt-användarnamn.github.io/hsq-prototyp-communication/
```

Ersätt `ditt-användarnamn` med ditt GitHub-användarnamn.

## Tips för felsökning

1. **404-fel**: Om du ser en 404-sida, kontrollera att sökvägen är korrekt och att GitHub Pages har aktiverats för rätt branch.

2. **Filer visas inte**: Kontrollera att filerna är korrekt incheckade i git, att du har gjort en "push" till GitHub och att huvudsidan heter `index.html`.

3. **Uppdateringar syns inte**: GitHub Pages kan ha en kort fördröjning (vanligtvis några minuter) innan ändringar visas. Om ändringarna inte syns efter 10 minuter, kontrollera att dina ändringar har pushats korrekt.

## Fortsatt arbetsflöde

För att ladda upp framtida ändringar till din GitHub Pages-webbplats:

```bash
git add .
git commit -m "Beskrivning av dina ändringar"
git push
```

GitHub Pages uppdateras automatiskt när du pushar ändringar till main-branchen.