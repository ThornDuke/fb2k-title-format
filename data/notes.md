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
- [x] SCRIPT
  - [x] crea un file di snippets usando come dati la base dati creata
  - [x] aggiornano la sintassi a partire dalla base dati
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

## Richiesta

### snippets

Crea una funzione javascript che legge il file json "/data/tokens.json con la seguente struttura:

```json
[
  {
    "token": "add",
    "realm": "FB2K",
    "role": "function",
    "sign": "$add(a,b,...)",
    "snippet-body": ["\\$add(${1:num a},${2:num b}${3:[,...]})"],
    "description": [
      "Adds `a` and `b`.",
      "Can be used with an arbitrary number of arguments. `$add(a,b,...)` is the same as `$add($add(a,b),...)`."
    ],
    "example": [],
    "ref-link": "https://wiki.hydrogenaudio.org/index.php?title=Foobar2000:Title_Formatting_Reference#$add(a,b,_...)"
  },
  ...
]
```

e crea un file "/snippets/snippets.json" con la seguente struttura

```json
{
  "Function: $add(a,b,...)": {
    "prefix": "$add",
    "body": ["\\$add(${1:num a},${2:num b}${3:[,...]})"],
    "description": "FB2K: adds a and b"
  },
  ...
}
```

### syntaxes

Crea una funzione javascript che legge il file json "/data/tokens.json con la seguente struttura:

```json
[
  {
    "token": "add",
    "realm": "FB2K",
    "role": "function",
    "sign": "$add(a,b,...)",
    "snippet-body": ["\\$add(${1:num a},${2:num b}${3:[,...]})"],
    "description": [
      "Adds `a` and `b`.",
      "Can be used with an arbitrary number of arguments. `$add(a,b,...)` is the same as `$add($add(a,b),...)`."
    ],
    "example": [],
    "ref-link": "https://wiki.hydrogenaudio.org/index.php?title=Foobar2000:Title_Formatting_Reference#$add(a,b,_...)"
  },
  {
    "token": "div",
    "realm": "FB2K",
    "role": "function",
    "sign": "$div(a,b)",
    "snippet-body": ["\\$div(${1:num a},${2:num b}${3:[,...]})"],
    "description": [
      "Divides `a` by `b` and rounds down to an integer. If `b` evaluates to zero, it returns `a`.",
      "Can be used with an arbitrary number of arguments. `$div(a,b,...)` is the same as `$div($div(a,b),...)`."
    ],
    "example": [],
    "ref-link": "https://wiki.hydrogenaudio.org/index.php?title=Foobar2000:Title_Formatting_Reference#$div(a,b)"
  },
  {
    "token": "sub",
    "realm": "FB2K",
    "role": "function",
    "sign": "$sub(a,b)",
    "snippet-body": ["\\$sub(${1:num a},${2:num b}${3:[,...]})"],
    "description": [
      "Subtracts `b` from `a`.",
      "Can be used with an arbitrary number of arguments. `$sub(a,b,...)` is the same as `$sub($sub(a,b),...)`."
    ],
    "example": [],
    "ref-link": "https://wiki.hydrogenaudio.org/index.php?title=Foobar2000:Title_Formatting_Reference#$sub(a,b)"
  },
  {
    "token": "album artist",
    "realm": "FB2K",
    "role": "tag",
    "sign": "%album artist%",
    "snippet-body": ["%album artist%"],
    "description": [
      "Name of the artist of the album specified track belongs to.",
      "Checks following metadata fields, in this order: `album artist`, `artist`, `composer`, `performer`.",
      "The difference between this and `%artist%` is that `%album artist%` is intended for use where consistent value across entire album is needed even when per-track artists values vary."
    ],
    "example": [],
    "ref-link": "https://wiki.hydrogenaudio.org/index.php?title=Foobar2000:Title_Formatting_Reference#%album_artist%"
  },
  {
    "token": "album",
    "realm": "FB2K",
    "role": "tag",
    "sign": "%album%",
    "snippet-body": ["%album%"],
    "description": [
      "Name of the album specified track belongs to.",
      "Checks following metadata fields, in this order: `album`, `venue`."
    ],
    "example": [],
    "ref-link": "https://wiki.hydrogenaudio.org/index.php?title=Foobar2000:Title_Formatting_Reference#%album%"
  },
  {
    "token": "artist",
    "realm": "FB2K",
    "role": "tag",
    "sign": "%artist%",
    "snippet-body": ["%artist%"],
    "description": [
      "Name of the artist of the track.",
      "Checks following metadata fields, in this order: `artist`, `album artist`, `composer`, `performer`.",
      "For a SHOUTcast stream which contains metadata, it is the StreamTitle up to the first '-' character."
    ],
    "example": [],
    "ref-link": "https://wiki.hydrogenaudio.org/index.php?title=Foobar2000:Title_Formatting_Reference#%artist%"
  },
  {
    "token": "AFTER",
    "realm": "FB2K Query",
    "role": "keyword",
    "sign": "AFTER",
    "snippet-body": ["${1:time1} AFTER ${2:time2}"],
    "description": [
      "Returns only items where `time1` value is after `time2`.",
      "Time values must be in one of the following formats: YYYY, YYYY-MM, YYYY-MM-DD, YYYY-MM-DD hh, YYYY-MM-DD hh:mm, YYYY-MM-DD hh:mm:ss"
    ],
    "example": ["%last_modified% AFTER 2008"],
    "ref-link": "https://wiki.hydrogenaudio.org/index.php?title=Foobar2000:Query_syntax#Time_expressions"
  },
  {
    "token": "AND",
    "realm": "FB2K Query",
    "role": "keyword",
    "sign": "AND",
    "snippet-body": ["${1:expression1} AND ${2:expression2}"],
    "description": ["Returns only items where both `expressions` are `true`"],
    "example": ["artist IS blah AND title HAS blah"],
    "ref-link": "https://wiki.hydrogenaudio.org/index.php?title=Foobar2000:Query_syntax#Combined_queries_using_logical_operators"
  },
  {
    "token": "BEFORE",
    "realm": "FB2K Query",
    "role": "keyword",
    "sign": "BEFORE",
    "snippet-body": ["${1:time1} BEFORE ${2:time2}"],
    "description": [
      "Returns only items where `time1` value is before `time2`.",
      "Time values must be in one of the following formats: YYYY, YYYY-MM, YYYY-MM-DD, YYYY-MM-DD hh, YYYY-MM-DD hh:mm, YYYY-MM-DD hh:mm:ss"
    ],
    "example": ["%last_modified% BEFORE 2008"],
    "ref-link": "https://wiki.hydrogenaudio.org/index.php?title=Foobar2000:Query_syntax#Time_expressions"
  },
  ...
]
```

e dato il file "syntaxes/mylanguage.json" con la seguente struttura:

```json
{
  "scopeName": "source.f2k",
  "name": "Foobar2000 Title Formatting",
  "fileTypes": ["fb2k"],
  "patterns": [
    { "include": "#comments" },
    { "include": "#strings" },
    { "include": "#functions" },
    { "include": "#tags" },
    { "include": "#keywords" },
    { "include": "#constants" }
  ],
  "repository": {
    "comments": {
      "patterns": [
        {
          "name": "comment.line.double-slash.fb2k",
          "match": "^\\/\\/.*$"
        }
      ]
    },
    "strings": {
      "patterns": [
        {
          "name": "string.quoted.single.fb2k",
          "match": "'([^']|'')*'"
        }
      ]
    },
    "functions": {
      "patterns": [
        {
          "name": "meta.fb2k",
          "begin": "\\$(add|div|sub)\\s*\\(",
          "end": "\\)",
          "captures": {
            "0": {
              "name": "support.function.fb2k"
            }
          },
          "patterns": [
            {
              "include": "$self"
            }
          ]
        },
        {
          "name": "invalid.illegal.function.fb2k",
          "begin": "\\$([a-zA-Z0-9_]+)\\s*\\(",
          "beginCaptures": {
            "1": {
              "name": "invalid.illegal.function.name.fb2k"
            }
          },
          "end": "\\)",
          "patterns": [
            {
              "include": "$self"
            }
          ]
        }
      ]
    },
    "tags": {
      "patterns": [
        {
          "name": "variable.other.tag.f2k",
          "match": "%(album artist|album|artist)%"
        },
        {
          "name": "constant.other.user-tag.fb2k",
          "match": "%([a-zA-Z0-9 _]+)%",
          "captures": {
            "1": {
              "name": "constant.other.user-tag.name.fb2k"
            }
          }
        },
        {
          "name": "variable.other.album-list-tag.f2k",
          "match": "%<(album artist|album|artist)>%"
        },
        {
          "name": "constant.other.album-list-tag.fb2k",
          "match": "%<([a-zA-Z0-9 _]+)>%",
          "captures": {
            "1": {
              "name": "constant.other.user-tag.name.fb2k"
            }
          }
        }
      ]
    },
    "keywords": {
      "patterns": [
        {
          "name": "keyword.operator.fb2k",
          "match": "\\b(AFTER|AND|BEFORE)\\b"
        }
      ]
    },
    "constants": {
      "patterns": [
        {
          "name": "meta.function.put-puts.fb2k",
          "begin": "\\$(put|puts)\\s*\\(",
          "beginCaptures": {
            "1": {
              "name": "support.function.fb2k"
            }
          },
          "end": "\\)",
          "patterns": [
            {
              "name": "constant.language.fb2k",
              "match": "^\\s*([a-zA-Z0-9_]+)",
              "captures": {
                "1": {
                  "name": "variable.parameter.fb2k"
                }
              }
            },
            {
              "begin": ",",
              "end": "(?=\\))",
              "patterns": [
                {
                  "include": "$self"
                }
              ]
            }
          ]
        },
        {
          "name": "meta.function.get.fb2k",
          "begin": "\\$get\\s*\\(",
          "beginCaptures": {
            "0": {
              "name": "support.function.fb2k"
            }
          },
          "end": "\\)",
          "patterns": [
            {
              "name": "constant.language.fb2k",
              "match": "[a-zA-Z0-9_]+"
            }
          ]
        }
      ]
    }
  }
}
```

prende i dati da "tokens.json" e aggiorna mylanguage.json in questo modo:

1. "repository.functions.patterns.begin" viene popolato con il token che in "tokens.json" corrisponde a "function": "function";
2. "tags.patterns.match" viene popolato con il token che in "tokens.json" corrisponde a "function": "tag";
   1. "match": "%<(album artist|album|artist)>%" viene popolato dai soli tag che in "tokens.json" hanno un campo "sign" con la struttura "sign": "%<...>%";
3. "keywords.patterns.match" viene popolato con il token che in "tokens.json" corrisponde a "function": "keyword";
