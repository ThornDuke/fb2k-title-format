# Notes

## TODO

- [ ] dev--columnUI-language-tags
- [ ] dev--columnUI-language-functions
- [ ] dev--columnUI-snippets-tags
- [ ] dev--columnUI-snippets-functions

### Permanent

- Before releasing
  - [ ] Update the version number into `<package.json>.version`
  - [ ] In <README.md> change `[Unreleased]` to the released header
  - [ ] Package:
    - `vsce pack --githubBranch master [--pre-release]`
    - `npm run pack`
  - [ ] Install the `.vsix` file and check for the correctness of the `setting` page.
  - [ ] Uninstall the `.vsix` file.
- Releasing
  - [ ] login: `vsce login ThornDuke`
  - [ ] if asked, get the `<pwds>.common.Azure Devops.token.token`
  - [ ] publish:
    - `vsce publish --githubBranch master [--pre-release]`
    - `npm run publish`

### Next release

### Released

## Commit message types

| Text       | Description                                                        |
| ---------- | ------------------------------------------------------------------ |
| `feat`     | new feature for the user, not a new feature for build script       |
| `fix`      | bug fix for the user, not a fix to a build script                  |
| `docs`     | changes to the documentation                                       |
| `ver`      | new milestone                                                      |
| `style`    | formatting, missing semi colons, etc; no production code change    |
| `refactor` | refactoring production code, eg. renaming a variable               |
| `test`     | adding missing tests, refactoring tests; no production code change |
| `chore`    | updating grunt tasks etc; no production code change                |
