# Immortal Vault Native Tauri Client

## Usefull links

- [CLI](https://v2.tauri.app/reference/cli/)

## Setup

- [Prerequisites](https://v2.tauri.app/start/prerequisites/)
- Hero UI (yarn global add heroui-cli)
- [Updater (required)](https://v2.tauri.app/plugin/updater/)


Updater json example
latest.json

```json
{
  "version": "v0.0.1",
  "notes": "Your Release Notes go here",
  "pub_date": "2020-06-22T19:25:57Z",
  "platforms": {
    "windows-x86_64": {
      "signature": "Content of app-setup.nsis.sig or app.msi.sig, depending on the chosen format",
      "url": "https://github.com/username/reponame/releases/download/v1.0.0/app-x64-setup.nsis.zip"
    }
  }
}
```
