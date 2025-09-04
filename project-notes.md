# Notes

## TODO

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
