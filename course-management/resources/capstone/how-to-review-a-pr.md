# How to Review a Pull Request (PR)

## English Version

1. Post your PR in a designated Slack thread.
2. Add the eyes emoji 👀 as a reaction to the PR you will review.
3. Click on the link to the PR and afterwards on the tab `Commits` to get a general overview. You
   can get insights what to focus on during your review. (When writing your own commit messages
   consider this step to provide an easy to follow guide through meaningful commit messages)
4. Click on the tab `Files changed` to review Changes in the code.

   - on the right side of the screen you can tick checkboxes of the pages you have already
     reviewed, this serves only for your personal overview
   - when hovering over a line of code you want to want to comment on, a small blue `+` symbol
     appears on the line. Click or drag this symbol down over all lines you want to comment on
   - if you have a specific suggestion for one or several lines of code you can click
     `Add a suggestion` inside of the comment section or use the shortcut `Cmd + g`

5. Pay special attention to:

   - Correct and semantic structure of the code
   - Does the code take accessibility principles into account?
   - Are variables, classes and functions named properly? Is it easy to understand what is happening
     in the code through the naming? If not, what could be improved?
   - No unnecessary code, no empty classes, no comments or console.logs
   - Are HTML Elements used properly? (z.B. no links inside of buttons -> tools like
     [caninclude](https://caninclude.glitch.me/) can be very helpful)

6. In case of very complex code, it might be necessary to clone the whole repository to understand
   the code in the context of the whole project. Comments still need to be added only via GitHub.

7. Once you are done with your review, click on the green Button `Review changes` on the top right.
   Write a summary message for the author of the code. Select whether you want to `Comment`,
   `Approve` or `Request changes`.

8. If you approved the PR, exchange the eye emoji 👀 in Slack with the green tick ✅.

9. If you requested changes, exchange the eye emoji 👀 in Slack with the black tick ✔️ .

10. As soon as the author of the code adapted the requested changes, exchange the black tick ✔️ with
    the green tick ✅.

11. Every PR should receive a green tick ✅ on Slack before they are merged. Have fun!! 🙌🏽

## German Version

1. PR zur Review im Thread posten.
2. den zu reviewenden PR mit 👀 markieren.
3. Auf den Reiter Commits klicken, um einen grobem Überblick zu bekommen worauf der Fokus der Review
   liegen sollte (denkt an aussagekräftige Commit-messages um eurem Reviewer das Leben zu
   erleichtern)
4. Auf den Reiter files changed klicken und die Änderungen im Code überprüfen.
   - auf der rechten Seite eures Screens könnt ihr die files die ihr bereits reviewt habe "checken",
     dies dient nur eurer eigenen Übersicht
   - wenn ihr über eine Zeile hovert, die ihr verändern wollt, erscheint ein blaues Plus auf der
     Zeile, dieses klickt ihr oder zieht ihr über alle Zeilen, die ihr kommentieren möchtet
   - wenn ihr einen konkreten Verbesserungsvorschlag geben möchtet klickt auf `Add a suggestion`
     innerhalb des Kommentarfeldes, rechts neben dem Reiter Preview, oder benutzt den Shortcut
     `Cmd + g`
5. Achtet vor allem auf:
   - Korrekte, semantische Struktur des Codes
   - Accessible Code
   - Sind Variablen, Klassen (und später Funktionen) sinnvoll benannt? Könnt ihr den Code als
     Außenstehende gut nachvollziehen? Wenn nicht, woran kann dies liegen?
   - Kein überflüssiger Code, keine leeren Klassen, keine überflüssigen Kommentare (und später
     console.logs)
   - Werden HTML Elemente korrekt verwendet? (e.g. keine Links in Buttons verwenden -> Nutzt gerne
     Tools wie [caninclude](https://caninclude.glitch.me/))
6. Falls die Komplexität des Codes es bedarf müsst oder könnt ihr das Repository auf euren eigenen
   Rechner klonen. Kommentare müssen trotzdem in GitHub abgegeben werden.
7. Sobald ihr fertig seid mit der Review, klickt auf den grünen Button `Review changes` rechts oben.
   Verfasst eine zusammenfassende Nachricht für den/die Autor/in des Codes. Wählt aus ob ihr den PR
   kommentieren, genehmigen oder Änderungen anfordern wollt.
8. Wenn ihr den PR genehmigt habt tauscht den Augen Emoji mit ✅
9. Wenn ihr im PR Änderungen angefordert habt tauscht den Augen Emoji mit ✔️ aus.
10. Sobald der/die Autor/in des Codes die vorgeschlagen Änderungen umgesetzt hat könnt ihr den
    schwarzen Haken auch mit dem ✅ austauschen.
11. Jeder PR sollte ein ✅ bekommen haben, bevor der Branch gemerged wird. Have fun!! 🙌🏽
