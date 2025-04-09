const fs = require('fs');
const path = require('path');

const version = process.env.VERSION;
const pubDate = new Date().toISOString();

const signaturePath = path.join(
  process.env.CARGO_TARGET_DIR,
  'release',
  'bundle',
  'nsis',
  `Immortal.Vault_${version}_x64-setup.exe.sig`
);
const signature = fs.readFileSync(signaturePath, 'utf8').trim();

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

fs.writeFileSync('./latest.json', JSON.stringify(latest, null, 2));
console.log('✅ latest.json created');
