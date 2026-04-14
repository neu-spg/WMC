Damit ein script seinerseits weiter importieren kann, muss es ein module sein (type="module") 
Bei "module" sind die objekte des skriptes NICHT auf dem window-Object verfügbar, aber:

window.xy = xy macht dies möglich.

HÜ:

Phase 1 auch alle restlichen Spalten sollen sortieren können!

Tipp: string.localeCompare() zum Strings-sortieren.



Phase 2 jeder sortier-button möge ein "toggle" sein.