# Foobar2000 Title Formatting Syntax

Provides syntax highlighting, code snippets and code context for [Foobar2000](https://www.foobar2000.org/) title formatting scripts.

Handles all scripting related to Foobar2000 [native tags and functions](https://wiki.hydrogenaudio.org/index.php?title=Foobar2000:Title_Formatting_Reference#Syntax), as well as those of [ColumnsUI](https://yuo.be/columns-ui).

Updated with Foobar2000 v2.25.2 and ColumnsUI v3.1.0.

<details open>
<summary><strong>Table of Contents</strong></summary>

- [Features](#features)
  - [Syntax highlighting](#syntax-highlighting)
  - [Snippets](#snippets)
  - [Code Context](#code-context)
  - [Markdown fenced blocks](#markdown-fenced-blocks)
  - [Folding](#folding)
  - [Commands](#commands)
    - [`Remove Indentation`](#remove-indentation)
    - [`Join Lines`](#join-lines)
    - [`Join Lines No Comments`](#join-lines-no-comments)
- [Customizing Syntax Highlighting Colors](#customizing-syntax-highlighting-colors)
  - [1. Global Customization](#1-global-customization)
  - [2. Project-Level Customization](#2-project-level-customization)
- [Usage](#usage)
- [Installation](#installation)
- [Contributing](#contributing)
- [Disclaimer](#disclaimer)

</details>

## Features

### Syntax highlighting

All elements of the title-formatting syntax are recognized

| element            | example                                  |
| ------------------ | ---------------------------------------- |
| comments           | `// text`                                |
| text               | `'text'`                                 |
| functions          | `$function(%field%,text)`                |
| tags               | `%field_one% ... %<remapped_field_one>%` |
| constants          | `$puts(name,42) ... $get(name)`          |
| query keywords     | `field GREATER expression`               |
| conditional blocks | `[%field_one%[ - %field_two%]]`          |

- **Functions** are highlighted in two ways:
  - _Predefined functions_ (recognized by Foobar2000) are colored as valid functions.
  - _Unrecognized functions_ (not supported by Foobar2000) are highlighted as errors.
- **Tags** are colored differently depending on their type:
  - _Predefined tags_ use one color.
  - _User-defined tags_ (custom tags) use a distinct color to differentiate them from the standard ones.

### Snippets

Complete code snippets are provided for all predefined tags, functions and query keywords.

### Code Context

This plugin delivers detailed, contextual information directly to your cursor via a simple hover. For each element of the language, a link to the official documentation is provided.

### Markdown fenced blocks

This plugin introduces support for fenced code blocks within your markdown files, specifically utilizing the tag 'fb2k' for dedicated syntax highlighting. By wrapping code segments with three backticks and the 'fb2k' identifier, you can embed title formatting like the following example:

````markdown
```fb2k
$puts(
  artist,
  $stripprefix(
    $trim(%artist%),
    'The'
  )
)
$get(artist)
```
````

### Folding

Indentation-based folding is supported when writing title formatting scripts: a folding region starts when a line has a smaller indent than one or more following lines, and ends when there is a line with the same or smaller indent. Empty lines are ignored.

Additionally, you can define a folding region.

The start of a folding region is defined by a line starting with

```fb2k
//section>
```

The end of a folding region is defined by a line starting with

```fb2k
//endsection>
```

For example:

```fb2k
//section> tags normalization
$puts(
  artist,
  $stripprefix(
    $trim(%artist%),
    'The'
  )
)
//endsection> tags normalization
```

Folding regions can be nested inside each other.

### Commands

The plugin provides the following commands:

#### `Remove Indentation`

To simplify writing and reading complex scripts, code is indented within functions. For example:

```fb2k
$puts(
  target,
  $if(
    %series%,
    $stripprefix(
      %series%,
      'The'
    ),
    $stripprefix(
      %album artist%,
      'The'
    )
  )
)
```

To use this function in Foobar2000, you must remove indentation, since all spaces are significant in FB2k title formatting, even those at the beginning of the lines.

This command removes indentation from all selected lines, or from all unselected lines between blank or commented lines.

- Keybinding: `Ctrl+K Ctrl+H` (`Cmd+K Cmd+H` on Mac)
- Command Palette: `Shift+Ctrl+P` (Windows/Linux) `Shift+Cmd+P` (Mac) then type `Remove Indentation`

#### `Join Lines`

This command joins into a single line all selected lines of code, or all unselected lines between blank or commented lines.

This is useful when a complex script has been written on multiple lines of text but needs to be copied into a single line of input text in the Foobar2000 interface.

- Keybinding: `Ctrl+K Ctrl+Z` (`Cmd+K Cmd+Z` on Mac)
- Command Palette: `Shift+Ctrl+P` (Windows/Linux) `Shift+Cmd+P` (Mac) then type `Join Lines`

#### `Join Lines No Comments`

This command joins all selected lines of code, or all unselected lines between blank lines, into a single line, _after removing the commented lines_.

This is useful when there are commented lines within a script that must be removed before the script can be used in Foobar2000.

- Keybinding: `Ctrl+K Ctrl+Y` (`Cmd+K Cmd+Y` on Mac)
- Command Palette: `Shift+Ctrl+P` (Windows/Linux) `Shift+Cmd+P` (Mac) then type `Join Lines No Comments`

> **note**: these commands are only available in files with the '.f2k' extension.

Certamente. Ecco una spiegazione tecnica e diretta in inglese su come personalizzare i colori della sintassi in VS Code, strutturata in base ai punti richiesti:

## Customizing Syntax Highlighting Colors

VS Code allows for granular control over syntax highlighting colors using **TextMate scopes**. This customization can be applied either globally (affecting all projects) or locally (per-project).

### 1\. Global Customization

To apply color changes globally, you must edit your VS Code **User Settings** file (`settings.json`).

1. Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`).
2. Type and select "**Preferences: Open User Settings (JSON)**."
3. Add or modify the `editor.tokenColorCustomizations` object. Within the `textMateRules` array, you define rules by targeting specific TextMate scopes (like `support.function.fb2k` for your built-in functions) and setting the desired `foreground` color and `fontStyle`.

```json
{
  "editor.tokenColorCustomizations": {
    "textMateRules": [
      {
        "scope": "comment.line.double-slash.fb2k",
        "settings": {
          "foreground": "#6A9955"
        }
      },
      {
        "scope": "support.function.fb2k",
        "settings": {
          "foreground": "#DCDCAA",
          "fontStyle": "bold"
        }
      }
    ]
  }
}
```

### 2\. Project-Level Customization

For changes that apply only to the current workspace, you must create a file named **`settings.json`** inside the **`.vscode`** folder at the root of your project.

1. Create the folder `.vscode/` in your project root.
2. Create the file `.vscode/settings.json`.
3. Apply the same `editor.tokenColorCustomizations` structure shown above. These settings will override the global settings only when this specific project is open.

You can use [this file](https://github.com/ThornDuke/fb2k-title-format/blob/master/examples/settings.json) as a reference for the specific TextMate scopes defined in the syntax grammar for Foobar2000 Title Formatting.

## Usage

Open a file with the **`.f2k`** extension to activate all the features of the plugin.

## Installation

1. Open **Extensions** sidebar panel in VS Code. `View → Extensions`
2. Search for `Foobar2000 Title Formatting Syntax`
3. Click `Install` to install it.

## Contributing

Contributions to this project are welcomed!

Whether you have

- questions, concerns, or suggestions for improving this extension
- want to report a bug
- submit a fix
- propose new features

please don't hesitate to reach out to us on GitHub and
[open an issue](https://github.com/ThornDuke/fb2k-title-format/issues).

## Disclaimer

Copyright 2025 Thorn Duke

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the “Software”), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
