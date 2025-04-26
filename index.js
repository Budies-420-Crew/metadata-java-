// index.js

import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { mplCandyMachine } from '@metaplex-foundation/mpl-candy-machine';
import { createSignerFromKeypair, signerIdentity } from '@metaplex-foundation/umi';
import { generateSigner, keypairIdentity } from '@metaplex-foundation/umi';
import { createKeypairFromFile } from '@metaplex-foundation/umi-node';
import { publicKey } from '@metaplex-foundation/umi';

// Set your RPC endpoint (can be local or a devnet/mainnet RPC provider)
const umi = createUmi('http://127.0.0.1:8899').use(mplCandyMachine());

async function setupWallet() {
  // Load a local keypair (change this path to your actual keypair location)
  const keypair = await createKeypairFromFile(
    require('os').homedir() + '/.config/solana/id.json'
  );

  umi.use(signerIdentity(keypair));

  console.log('Wallet set up with public key:', keypair.publicKey.toString());
}

setupWallet();
