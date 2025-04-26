import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { mplCandyMachine, fetchCandyMachine, fetchCandyGuard } from '@metaplex-foundation/mpl-candy-machine';
import { publicKey } from '@metaplex-foundation/umi';

// Set up your RPC and Umi instance
const umi = createUmi('http://127.0.0.1:8899').use(mplCandyMachine());

// Replace this with your actual Candy Machine address
const candyMachinePublicKey = publicKey('YOUR_CANDY_MACHINE_ADDRESS');

const run = async () => {
  try {
    const candyMachine = await fetchCandyMachine(umi, candyMachinePublicKey);
    const candyGuard = await fetchCandyGuard(umi, candyMachine.mintAuthority);

    console.log('Candy Machine:', candyMachine);
    console.log('Candy Guard:', candyGuard);
  } catch (error) {
    console.error('Error fetching Candy Machine data:', error);
  }
};

run();
