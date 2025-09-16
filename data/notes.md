# notes

## todo

- [x] Completare l'elenco di tag, funzioni e keywords
  - [x] aggiungere le keyword delle query
  - [x] aggiungere i tag `%__name"`
  - [x] cercare 'is available' in description e sistemare le maiuscole (o altro) per individuare dove è available
- [x] aggiungere le snippet body
  - [x] controllare che non esistano snippet vuote
  - [x] controllare la rimappabilità degli item `%<name>%`
- [x] Inserire gli esempi dal reference.
  - arrivato a `$directory_path(%path%)`, proseguire con `$ext(%path%)`
- [x] Cercare la stringa "example" nel sito wiki e inserirli negli esempi vuoti.
- [x] Eliminare tutte le stringhe vuote dagli array e lasciare un array vuoto.
- [x] Controllare l'errore "$$"
- [x] Controllare l'errore "\$"
- [ ] creare uno script che crea un file di snippets usando come dati la base dati creata
- [ ] creare script che aggiornano la sintassi a partire dalla base dati
- [ ] Adattare l'hover provider alla nuova base dati
  - [ ] Capire come usare il campo `token`: in qualche modo l'hover deve reagire solo se la stringa inizia con '$' o è racchiusa tra '%'.
  - [ ] Controllare la snippet "directory_path(path)"; la descrizione ha una serie di "\\" che devono risultare come divisori in un path
- [ ] nel README fare riferimento alla versione usata di FB e di CUI

## struttura della base di elementi

```json
[
  {
    "token": "add",
    "realm": "FB2K|CUI|other",
    "role": "function|tag|keyword",
    "sign": "$funcname(par1,par2,...)",
    "snippet-body": ["snippet-body"],
    "description": ["markdown text"],
    "example": ["code"],
    "ref-link": "https://www.example.com"
  },
  ...
]
```

## popup

```markdown
function $funcname(par1,par2,...) // forse in formato code è meglio

description // prima lettera maiuscola e punto finale

example code

See <link> for more information.
```
