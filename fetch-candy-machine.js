import { createUmi } from '@metaplex-foundation/umi-bundle-defaults'
import { mplCandyMachine, fetchCandyMachine, fetchCandyGuard } from '@metaplex-foundation/mpl-candy-machine'
import { signerIdentity, publicKey } from '@metaplex-foundation/umi'
import { createKeypairFromFile } from '@metaplex-foundation/umi-node'
import os from 'os'
import path from 'path'

const umi = createUmi('http://127.0.0.1:8899').use(mplCandyMachine())

async function main() {
  // Load wallet keypair
  const keypairPath = path.join(os.homedir(), '.config', 'solana', 'id.json')
  const keypair = await createKeypairFromFile(keypairPath)

  // Set signer identity
  umi.use(signerIdentity(keypair))

  // Replace this with your Candy Machine address
  const candyMachineAddress = publicKey('PUT_YOUR_CANDY_MACHINE_ADDRESS_HERE')

  // Fetch candy machine
  const candyMachine = await fetchCandyMachine(umi, candyMachineAddress)
  console.log('Candy Machine:', candyMachine)

  // Fetch associated candy guard
  const candyGuard = await fetchCandyGuard(umi, candyMachine.mintAuthority)
  console.log('Candy Guard:', candyGuard)
}

main()
