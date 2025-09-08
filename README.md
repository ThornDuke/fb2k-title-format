# Foobar2000 Title Formatting Syntax

![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/thornduke.foobar2000-title-formatting-syntax.svg?style=plastic&logo=visualstudiocode)
![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/thornduke.foobar2000-title-formatting-syntax.svg?style=plastic)
![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/thornduke.foobar2000-title-formatting-syntax.svg?style=plastic)

Provides syntax highlighting and code snippets for [Foobar2000](https://www.foobar2000.org/) title formatting scripts.

Handles all scripting related to Foobar2000 [native tags and functions](https://wiki.hydrogenaudio.org/index.php?title=Foobar2000:Title_Formatting_Reference#Syntax), as well as those of [ColumnsUI](https://yuo.be/columns-ui).

## Features

### Syntax highlighting

All elements of the title-formatting syntax are recognized: comments, text, functions, tags, constants, query keywords and conditional blocks.

- **Functions** are highlighted in two ways:
  - _Predefined functions_ (recognized by Foobar2000) are colored as valid functions.
  - _Unrecognized functions_ (not supported by Foobar2000) are highlighted as errors.
- **Tags** are colored differently depending on their type:
  - _Predefined tags_ use one color.
  - _User-defined tags_ (custom tags) use a distinct color to differentiate them from the standard ones.

### Snippets

Complete code snippets are provided for all tags, functions and query keywords.

### Commands

The plugin provides the command `Join Lines Smart` to group a block of code into a single line. This is useful when a complex script has been written on multiple lines of text but needs to be copied into a single line of input text in the Foobar2000 interface.

- Keybindings: `Ctrl+K Ctrl+Z` (`Cmd+K Cmd+Z` on Mac)
- Command Palette: `Shift + Command + P` (Mac) `Ctrl + Shift + P` (Windows/Linux) then type `Join Lines Smart`

> **Note:** This command is only available in files with the `.f2k` extension.

## Usage

Open a file with the `.f2k` extension to activate syntax highlighting, snippets and commands.

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

## Acknowledgements

The icon is created by [ncrow](https://www.iconarchive.com/artist/ncrow.html)

## Disclaimer

Copyright 2025 Thorn Duke

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
associated documentation files (the “Software”), to deal in the Software without restriction,
including without limitation the rights to use, copy, modify, merge, publish, distribute,
sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial
portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES
OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
