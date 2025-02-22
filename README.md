# Solana Onchain Kit

Solana Onchain Kit is a TypeScript library that simplifies interactions with the Solana blockchain. The library provides tools and abstractions for working with tokens, NFTs and other Solana programs.

## Features

- SPL token management
- NFT interactions  
- Transaction building and sending
- Integration with popular Solana programs
- Full TypeScript support

## Installation

```bash
npm install solana-onchain-kit
```


## Usage

### Token Program

```typescript
import { TokenProgram } from 'solana-onchain-kit';

const tokenProgram = new TokenProgram(connection);

// Initialize connection
const connection = new Connection('YOUR_RPC_ENDPOINT');
// Create TokenProgram instance
const tokenProgram = new TokenProgram(connection);
// Get token account info
const accountInfo = await tokenProgram.getAccountInfo('TOKEN_ACCOUNT_ADDRESS');
```


## API Reference

### TokenProgram

- `getAccountInfo(address: string)`: Get account info of a token
- `createToken(owner, decimals, tokenName, symbol)`: Create a new token (under development)

## Contributing

We welcome contributions! Please create issues or pull requests on the GitHub repository.

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Dependencies

- @solana/web3.js
- @solana/spl-token

## Development

```bash
// Install dependencies
npm install

// Run the development server
npm run dev
```


## Contact

Website: https://onchainkit.org

