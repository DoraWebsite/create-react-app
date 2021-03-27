# VS Code Extensions

## Settings Cycler

keybindings.json

```
{ "key": "F4", "command": "settings.cycle.exclude" }
```

```
git update-index --skip-worktree .vscode/settings.json
git update-index --no-skip-worktree .vscode/settings.json
```
