import { createContext, useState } from "react";
import { connectWallet, switchToArc } from "../services/metamask";

export const Web3Context = createContext();

export function Web3Provider({ children }) {
  const [account, setAccount] = useState(null);

  async function connect() {
    const acc = await connectWallet();
    if (acc) {
      await switchToArc();
      setAccount(acc);
    }
  }

  return (
    <Web3Context.Provider value={{ account, connect }}>
      {children}
    </Web3Context.Provider>
  );
}
