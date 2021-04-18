# Install

## Storybook

```sh
npx sb init
```

# VS Code Extensions

## Settings Cycler

keybindings.json

```json
{ "key": "F4", "command": "settings.cycle.exclude" }
```

settings are exclude from the git worktree

```sh
git update-index --skip-worktree .vscode/settings.json
```

```sh
git update-index --no-skip-worktree .vscode/settings.json
```
