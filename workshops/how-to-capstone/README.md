# How to Capstone summary – to share in slack channels

> 💡 Unfortunately, some of the Markdown formatting is lost when copying to Slack.

:rakete: :doktorhut: How to Capstone - Zusammenfassung :doktorhut: :rakete:
**Ablauf während Capstone-Phase**

- 09:00 Uhr startet euer Tag mit Anwesenheitsfoto
- 09:30 Uhr Checkin mit Daily Standup (mit Coaches)
- 17:00 Uhr Checkout
- Ab Woche 2 findet die Public Sprint Review statt
- Es besteht weiterhin Anwesenheitspflicht in Zoom von 9:00 Uhr bis 17:00 Uhr
- Anwesenheitsfotos bitte nicht vergessen

:schreibende_hand: Sprint Vorbereitung & User Story #user-stories

- User Story schreiben **Backlog** ablegen
- Link in Channel #user-stories posten
- Prüft User Stories, so kommen alle schneller voran und ihr habt keinen “Leerlauf”
  **Post Reactions**:
  - in review :eyes:
  - changes requested :starkes_häkchen:
  - approved :weißes_häkchen:
  - Coaches Veto :nach_oben_zeigen: - nur Coaches
- Bei Änderungen, die User Story erneut in #user-stories posten

:computer: User Story bearbeiten

- User Story im Board in die Spalte “In Progress” ziehen
- Auf den `main Branch` wechseln und `git pull` ausführen
- Neuen Branch für das nächste Feature erstellen
- Coden und möglichst viele kleine Commits machen
- Tasks aus der User Story abarbeiten
- Acceptance Criterias aus der User Story prüfen.

:mikroskop: PR & Code-Reviews #code-reviews

- Pull Request erstellen
- Achtet auf einen sinnvollen PR Titel
  - verlinkt gerne das dazugehörige Issue aus dem Board
- Keine Collaborators/Assignees/Reviewers hinzufügen oder direkt Personen anschreiben
- Postet den Link zu dem PR in den Slack Channel #code-reviews
- User Story im Board in Code Review ablegen
- Prüft PR und macht Code Reviews, so habt ihr keinen “Leerlauf”
  **Post Reactions:**
  - in review :eyes:
  - changes requested :starkes_häkchen:
  - approved :weißes_häkchen:
  - Coaches Veto :nach_oben_zeigen: - nur Coaches
- Wenn ihr Änderungen vornehmen musstest, postet diese erneut in #code-reviews
- Der Merge darf erst nach der QA ausgeführt werden! Ausnahme: bei einem PR, bei dem eine QA nicht sinnvoll ist, z.B. Code Refactoring.
- Reviews werden immer nach der Reihenfolge im Channel bearbeitet

:büste_silhouette: QA #quality-assurance

- Nach der Code-Review postet den Link zur App (Vercel) in den Slack Channel #quality-assurance
- Beschreibt worauf man ggf. achten soll bzw. was neu ist
- User Story im Board in die Spalte Quality Assurance / QA ablegen
  **Post Reactions:**
  - in review :eyes:
  - changes requested :starkes_häkchen:
  - approved :weißes_häkchen:
  - Coaches Veto :nach_oben_zeigen: - nur Coaches
- Feedback diesmal in dem Thread zu dem jeweiligen Post schreiben
- Reviews werden immer nach der Reihenfolge im Channel bearbeitet
- Bei Änderungen geht der Pull Request erneut durch die "Sationen" #code-reviews und #quality-assurance
- Der Merge darf erst NACH der Quality Assurance ausgeführt werden! Ausnahme: bei einem Pull Request, bei dem eine Quality Assurance nicht sinnvoll ist, z.B. Code Refactoring.
- Approved?! Dann in die Spalte Done des Boards ablegen

:pfeile_im_uhrzeigersinn: Nach dem Quality Assurance Approval

- Wenn die Quality Assurance Approved, kann der Merge des Pull Request durchgeführt werden
- Im Anschluss mit der nächsten User Story, dem nächsten Feature beginnen
  Pull Request mergen

:fragezeichen: Fragen & [GitHub Discussions Board](https://github.com/orgs/neuefische/discussions)

- Lest die Dokumentationen bzw. googelt.
- Fragt bei anderen Studierenden im Kurs nach.
- Wahrscheinlich hatten andere schon ähnliche Fragen und Probleme
- Im [GitHub Discussions Board](https://github.com/orgs/neuefische/discussions) nach ähnlichen Fragen suchen
- Im GitHub Discussions Board eine Frage stellen:
  - Formuliert eure Frage aus und orientiert euch dabei an folgendes Handout:
    :glühbirne: Orientiert euch dabei an: [How to ask good questions?](https://github.com/neuefische/questions/wiki/How-to-ask-good-questions)
    **Immer enthalten sein sollte:**
- Link zum/r betroffenen Branch / Datei / Zeile
- Erklärung was ihr bereits versucht habt
- Fehlermeldung (bitte als Text, kein Screenshot!)

:hände_als_herz: Teamwork makes the dream work: Teamwork ist Teil des Capstones
Helft euch gegenseitig, achtet auf die Slack Channel.
Macht User Story-Reviews, Code-Reviews, QAs und beantwortet Fragen.
