import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const version = process.argv[2];
if (!version) {
  console.error("❌ Version is required as the first argument.");
  process.exit(1);
}

const pubDate = new Date().toISOString();

const sigPath = path.join(__dirname, '..', 'target', 'release', 'bundle', 'nsis', `Immortal Vault_${version}_x64-setup.exe.sig`);

let signature;
try {
  signature = readFileSync(sigPath, 'utf8').trim();
} catch (err) {
  console.error(`❌ Failed to read signature file at: ${sigPath}`);
  console.error(err);
  process.exit(1);
}

const latest = {
  version,
  notes: `Release ${version}`,
  pub_date: pubDate,
  platforms: {
    "windows-x86_64": {
      signature,
      url: `https://github.com/Immortal-Vault/desktop-client/releases/latest/download/Immortal.Vault_${version}_x64-setup.exe`
    }
  }
};

writeFileSync(path.join(__dirname, '..', 'latest.json'), JSON.stringify(latest, null, 2));
console.log("✅ latest.json successfully generated");
