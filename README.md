Ich habe die Aufgabe als Programmierer umgesetzt und die Klassen Triangle.js und Triangle.test.js erstellt, wobei Triangle.test.js von Triangle.js abgeleitet ist. Als Automatisierungstester habe ich die Aufgabe ebenfalls mit Cucumber realisiert, indem ich das Page Object Model mit TriangleCalculator.js und triangle_steps.js verwendet habe, die von TriangleCalculator.js abgeleitet sind.

Um die Tests für den Dreiecksvalidator auszuführen, folgen Sie bitte diesen Schritten:

Cucumber-Tests ausführen: Verwenden Sie den Befehl
npx cucumber-js src/features/triangle.feature, um die Cucumber-Tests auszuführen. Diese Tests überprüfen die Anwendung aus der Benutzersicht und validieren die Funktionalität durch Szenarien in natürlicher Sprache.

Unit-Tests ausführen: Führen Sie die Unit-Tests mit folgendem Befehl aus:
npx node D:\MeineAufgabe\src\tests\Triangle.test.js. Diese Tests überprüfen die einzelnen Methoden der Triangle-Klasse und stellen sicher, dass die Logik korrekt implementiert ist.

HTML-Report generieren: Um einen visuellen Bericht der Testergebnisse zu erstellen, verwenden Sie den Befehl
npm run report. Der HTML-Report bietet eine übersichtliche Zusammenfassung der Testergebnisse, die sowohl für Entwickler als auch für Stakeholder zugänglich ist.
