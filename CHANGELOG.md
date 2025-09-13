# Change Log

<!--
## [major.minor.patch] - yyyy-mm-dd
### Added
- filena.me {function}: description
### Fixed
### Changed
### Removed

## [Unreleased]

https://gist.github.com/ThornDuke/64da76cd4a56b16492d5101691f6108f
-->

## [1.4.18] - 2025-09-13

### Changed

- foobar2000.tmLanguage.json: completely restructured
- README.md: removed the badges
- README.md: minor updates
- a new icon

### Added

- config/language-configuration.json: "%%" and "<>" are surrounding pairs and can envelope a selected string

## [1.4.7] - 2025-09-10

### Fixed

- src/extension.js: fixed the issue of snippets not loading

## [1.4.0] - 2025-09-09

### Added

- syntaxes/foobar2000.tmLanguage.json: query keywords
- snippets/FB2k-title-formatting.code-snippets: query keywords
- snippets/FB2k-title-formatting.code-snippets: all the snippets:
  - FB2K
  - Now playing info
  - Playlist-only fields
  - Album List
  - Playback Statistics
  - Playlist Organizer
  - CUI
- syntaxes/foobar2000.tmLanguage.json: all the syntaxes
  - FB2K
  - Now playing info
  - Playlist-only fields
  - Album List
  - Playback Statistics
  - Playlist Organizer
  - CUI
- README.md: badges
- config/language-configuration.json: indentation after parentheses
- src/extension.js: commands `Join Lines No Comments` and `Remove Indentation`
- syntaxes/foobar2000.tmLanguage.json: Album List tags
- snippets/FB2k-title-formatting.code-snippets: Album List tags
- src/extension.js: autocomplete

## [1.3.0] - 2025-09-07

### Added

- syntaxes/foobar2000.tmLanguage.json: non-default functions are treated as errors
- syntaxes/foobar2000.tmLanguage.json: user-created tags are colored differently than the default tags

### Changed

- README.md: various updates

## [1.2.1] - 2025-09-06

### Added

- package.json: keybindings for Win and Linux

### Changed

- README.md: some updates

## [1.2.0] - 2025-09-06

### Added

- extension.js: added the command to join multiple lines of code

### Changed

- README.md: all file rewritten
- syntaxes/foobar2000.tmLanguage.json: better separation between identifiers

### Fixed

- syntaxes/foobar2000.tmLanguage.json: conditional blocks correctly parsed

## [1.1.0] 2025-09-05

### Added

- 2025-09-04 Created the repo
- fb2k.jsonc: snippets
- language.configuration.json: working
- snippets/FB2k-title-formatting.code-snippets: working
- snippets/FB2k-title-formatting.code-snippets: full list of FB2K tags and functions
- snippets/FB2k-title-formatting.code-snippets: full list of ColumnsUI tags and functions
