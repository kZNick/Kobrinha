export async function connectWallet() {
  if (!window.ethereum) {
    alert("MetaMask não encontrada!");
    return null;
  }

  try {
    // conectar conta
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    return accounts[0];
  } catch (error) {
    console.error("Erro ao conectar:", error);
    return null;
  }
}

export async function switchToArc() {
  if (!window.ethereum) {
    alert("MetaMask não encontrada!");
    return;
  }

  const arcChain = {
    chainId: "0x13E8", // 5096 hex
    chainName: "ARC Testnet",
    nativeCurrency: {
      name: "ARC",
      symbol: "ARC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc-test.arc.network"],
    blockExplorerUrls: ["https://testnet.arcscan.io"],
  };

  try {
    // tenta trocar pra ARC
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: arcChain.chainId }],
    });
  } catch (switchError) {
    // rede não existe → adicionar
    if (switchError.code === 4902) {
      try {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [arcChain],
        });
      } catch (addError) {
        console.error("Erro ao adicionar rede:", addError);
      }
    } else {
      console.error("Erro ao trocar rede:", switchError);
    }
  }
}
