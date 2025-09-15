# notes

## todo

- [x] Completare l'elenco di tag, funzioni e keywords
  - [ ] aggiungere le keyword delle query
- [ ] aggiungere le snippet body
  - [ ] controllare che non esistano snippet vuote
- [ ] Eliminare tutte le stringhe vuote dagli array e lasciare un array vuoto.
- [ ] Inserire gli esempi dal reference.
- [ ] Cercare la stringa "example" nel sito wiki e inserirli negli esempi vuoti.
- [ ] creare uno script che crea un file di snippets usando come dati la base dati creata
- [ ] creare script che aggiornano la sintassi a partire dalla base dati
- [ ] Adattare l'hover provider alla nuova base dati
  - [ ] Capire come usare il campo `token`: in qualche modo l'hover deve reagire solo se la stringa inizia con '$' o è racchiusa tra '%'.
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
