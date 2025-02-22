import { Connection, PublicKey } from '@solana/web3.js';
import { TOKEN_PROGRAM_ID, Mint } from '@solana/spl-token';
import { SolanaProgram } from '../interfaces/program';

export class TokenProgram implements SolanaProgram {
  programId: string = TOKEN_PROGRAM_ID.toString();
  connection: Connection;

  constructor(connection: Connection) {
    this.connection = connection;
  }

  async getAccountInfo(address: string): Promise<any> {
    return await this.connection.getAccountInfo(new PublicKey(address));
  }

  async initialize(): Promise<void> {
    throw new Error('Not implemented');
  }

  async createToken(
    owner: PublicKey,
    decimals: number,
    tokenName: string,
    symbol: string
  ): Promise<Mint> {
    throw new Error('Not implemented');
  }
}
