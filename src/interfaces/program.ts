import { Transaction } from "@solana/web3.js";

export interface SolanaProgram {
  programId: string;
  initialize(): Promise<void>;
  getAccountInfo(address: string): Promise<any>;
}

export interface TransactionBuilder {
  add(instruction: any): void;
  build(): Promise<Transaction>;
}
