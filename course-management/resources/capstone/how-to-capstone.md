🚀 🎓 **How to Capstone - Guide** 🎓 🚀

> to-do: Translate this guide in English

**Ablauf während Capstone-Phase**

- `<time>` Uhr startet euer Tag mit Anwesenheitsfoto
- `<time>` Uhr Checkin mit Daily Standup (mit Coaches)
- `<time>` Uhr Checkout
- Ab Woche 2 findet am `<day>` immer eine **Public Sprint Review** statt.
- Denkt daran, euch weiterhin um die **Anwesenheitsfotos** zu kümmern 😉

✍️ **User Story & Sprint Vorbereitung**

1. User Story schreiben und ins Backlog legen.
2. Link zur User Story im Slack Channel #user-stories posten.
3. Versucht selbst viele User Stories aus dem Channel zu prüfen. Sobald ihr euch einen anschaut mit 👀 auf den Post reagieren, wenn abgeschlossen dann mit ✅ (approved) oder ✔️ (changes requested) abhaken. So kommen alle schneller voran und ihr habt keinen “Leerlauf”, wenn ihr selbst auf eine Prüfung wartet.
4. Wenn ihr Änderungen vornehmen musstest, postet diese erneut in #user-stories.

_`<day>` im Sprint Planning werden die User Stories für den nächsten Sprint geplant und ins “Sprint Backlog” gelegt._

💻 **User Story bearbeiten**

1. User Story im Board in die Spalte “In Progress” ziehen.
2. Auf den `main` Branch wechseln und `git pull` ausführen.
3. Neuen Branch für das nächste Feature erstellen.
4. Coden und möglichst viele kleine Commits machen.
5. Acceptance Criteria und Tasks aus der User Story abarbeiten.

🔬 **PR/Code Reviews**

1. Mit eurem neuen Feature bzw. Branch per GitHub einen PR erstellen.
2. Achtet darauf, dass der PR einen sinnvolle/n Titel/Beschreibung beinhaltet und nicht zu groß wird.
3. Ihr müsst **keine** Collaborators/Assignees/Reviewers hinzufügen oder direkt Personen anschreiben.
4. User Story im Board in die Spalte “Code Review” ziehen.
5. Postet den Link direkt zu dem PR in den Slack Channel #code-reviews.
6. Versucht selbst viele Reviews aus dem Channel zu machen. Sobald ihr euch einen anschaut mit 👀 auf den Post reagieren, wenn abgeschlossen dann mit ✅ (approved) oder ✔️ (changes requested) abhaken. So kommen alle schneller voran und ihr habt keinen “Leerlauf”, wenn ihr selbst auf eine Review wartet.
7. Wenn ihr Änderungen vornehmen musstest, postet diese erneut in #code-reviews.
8. Wenn die Code Review komplett fertig ist, geht es in die QA.
9. **Der Merge darf erst nach der QA ausgeführt werden! Ausnahme: bei einem PR, bei dem eine QA nicht sinnvoll ist, z.B. Code Refactoring.**

👤 **QA**

1. Nach der Code-Review und ggf. Anpassungen etc. postet ihr den Link zu eurer App (Vercel) in den Slack Channel #quality-assurance.
2. Beschreibt kurz worauf man ggf. achten soll bzw. was neu ist.
3. User Story im Board in die Spalte “Quality Assurance” ziehen.
4. Gleiches System mit 👀 / ✅ / ✔️ wie bei Code Reviews.
5. Feedback einfach in dem Thread zu dem jeweiligen Post schreiben.
6. Wenn ihr entsprechende Änderungen vorgenommen habt, geht der PR noch einmal durch #code-reviews und #quality-assurance .
7. Wenn die QA durch ist, kann der Merge vom PR durchgeführt werden.

🔃 **Nach dem QA Approval**

1. Pull Request mergen nicht vergessen.
2. User Story im Board in die Spalte “Done” ziehen.
3. Mit der nächsten User Story beginnen.

❓ Fragen/Probleme
Wenn ihr Fragen oder Probleme habt, **folgt bitte diesen Schritten**:

1. Lest die Dokumentationen bzw. googelt.
2. Fragt in eurem Breakout-Room bzw. generell bei anderen Studierenden nach. Wahrscheinlich haben andere schon etwas Ähnliches gebaut.
3. Formuliert eure Frage aus und postet diese auf dem [GitHub Discussions Board](https://github.com/orgs/neuefische/discussions). (💡 Orientiert euch dabei an: [How to ask good questions?](https://github.com/neuefische/questions/wiki/How-to-ask-good-questions)) Immer enthalten sein sollte:

   a. ein Link zum/r betroffenen Branch / Datei / Zeile.

   b. eine Erklärung, was ihr bereits versucht habt.

   c. (falls vorhanden) die vollständige Fehlermeldung.

4. Wenn darauf noch immer keine Antwort kommt bzw. Lösung gefunden wurde, meldet euch bei uns.

**Für alle Bereiche gilt natürlich: Helft euch bitte gegenseitig und achtet immer auf die Slack Channel! Wir Coaches können nicht alle Code Reviews, QAs und Fragen/Probleme abfangen. 🤯😉 Daher sind wir alle auf eine gute Teamarbeit angewiesen.**
