# notes

struttura della base di elementi:

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

## popup:

```text
function $funcname(par1,par2,...)

description // prima lettera maiuscola e punto finale

example code

See <link> for more information.
```
