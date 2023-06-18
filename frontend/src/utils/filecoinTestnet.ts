import { Chain } from 'wagmi'

export const filecoinCalibration = {
  id: 314_159,
  name: 'Filecoin Testnet',
  network: 'filecoin-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Filecoin',
    symbol: 'tFil',
  },
  rpcUrls: {
    default: { http: ['https://api.calibration.node.glif.io/rpc/v1'] },
    public: { http: ['https://api.calibration.node.glif.io/rpc/v1'] },
  },
  blockExplorers: {
    default: {
      name: 'Filecoin Calibration Testnet Explorer',
      url: 'https://calibration.filfox.info/en',
    },
  },
} as const satisfies Chain