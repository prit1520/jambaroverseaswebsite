#!/usr/bin/env bash
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

TMP_CFG=$(mktemp -d)
mkdir -p "$TMP_CFG/configstore"
cat << 'EOF' > "$TMP_CFG/configstore/firebase-tools.json"
{
  "apiEnablementCache": {
    "jambaroverseas-website": {
      "firebasehosting.googleapis.com": true,
      "cloudresourcemanager.googleapis.com": true,
      "firebase.googleapis.com": true
    }
  }
}
EOF

echo "Building website..."
npm run build

echo "Deploying to Firebase Hosting (jambaroverseas-website)..."
XDG_CONFIG_HOME="$TMP_CFG" GOOGLE_APPLICATION_CREDENTIALS="$SCRIPT_DIR/jambaroverseas-website-firebase-adminsdk-fbsvc-c8ee39f933.json" firebase deploy --only hosting --project jambaroverseas-website

rm -rf "$TMP_CFG"
echo "Deployment successful!"
