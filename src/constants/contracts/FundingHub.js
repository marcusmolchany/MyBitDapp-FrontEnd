export const ADDRESS = '0xace8Edd5295d1D144b902438B26A03f55FB1c50D';
export const ABI = [
  {
    constant: false,
    inputs: [
      {
        name: '_assetID',
        type: 'bytes32',
      },
    ],
    name: 'initiateRefund',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_functionInitiator',
        type: 'address',
      },
      {
        name: '_holdingAddress',
        type: 'address',
      },
    ],
    name: 'destroy',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'database',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_assetID',
        type: 'bytes32',
      },
    ],
    name: 'refund',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_assetID',
        type: 'bytes32',
      },
    ],
    name: 'fund',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_assetID',
        type: 'bytes32',
      },
    ],
    name: 'payout',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_database',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    payable: false,
    stateMutability: 'nonpayable',
    type: 'fallback',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: '_funder',
        type: 'address',
      },
      {
        indexed: true,
        name: '_assetID',
        type: 'bytes32',
      },
      {
        indexed: true,
        name: '_timestamp',
        type: 'uint256',
      },
    ],
    name: 'LogNewFunder',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: '_sender',
        type: 'address',
      },
      {
        indexed: true,
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: true,
        name: '_timestamp',
        type: 'uint256',
      },
    ],
    name: 'LogAssetFunded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: '_assetID',
        type: 'bytes32',
      },
      {
        indexed: true,
        name: '_amountRaised',
        type: 'uint256',
      },
      {
        indexed: true,
        name: '_timestamp',
        type: 'uint256',
      },
    ],
    name: 'LogAssetFundingFailed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: '_assetID',
        type: 'bytes32',
      },
      {
        indexed: true,
        name: '_currentEthPrice',
        type: 'uint256',
      },
      {
        indexed: true,
        name: '_timestamp',
        type: 'uint256',
      },
    ],
    name: 'LogAssetFundingSuccess',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: '_funder',
        type: 'address',
      },
      {
        indexed: true,
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: true,
        name: '_timestamp',
        type: 'uint256',
      },
    ],
    name: 'LogRefund',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: '_assetID',
        type: 'bytes32',
      },
      {
        indexed: true,
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: true,
        name: '_blockNumber',
        type: 'uint256',
      },
    ],
    name: 'LogAssetPayout',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: '_locationSent',
        type: 'address',
      },
      {
        indexed: true,
        name: '_amountSent',
        type: 'uint256',
      },
      {
        indexed: true,
        name: '_caller',
        type: 'address',
      },
    ],
    name: 'LogDestruction',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: '_value1',
        type: 'uint256',
      },
      {
        indexed: false,
        name: '_value2',
        type: 'uint256',
      },
      {
        indexed: false,
        name: '_value3',
        type: 'uint256',
      },
    ],
    name: 'fundingLimitModifier',
    type: 'event',
  },
];
