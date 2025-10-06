const fs = require('fs');
const path = require('path');

function roleCount() {
  const tokensPath = path.join(__dirname, '..', 'data', 'fb2kTokens.json');
  try {
    const tokensData = fs.readFileSync(tokensPath, 'utf8');
    const tokens = JSON.parse(tokensData);

    let roles = [];

    tokens.forEach((token) => {
      if (!roles.includes(`${token.realm}/${token.role}`)) {
        roles.push(`${token.realm}/${token.role}`);
      }
    });
    return roles.sort();
  } catch (error) {
    console.error(`Error counting the roles: ${error}`);
  }
}

console.log(roleCount());
/*
[
  'CUI/function',
  'CUI/tag',
  'FB2K Album List/function',
  'FB2K Album List/tag',
  'FB2K Playback Statistics/tag',
  'FB2K Playlist Organizer/tag',
  'FB2K Query/keyword',
  'FB2K/function',
  'FB2K/tag'
]
*/
