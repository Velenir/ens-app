import Web3Connect from "web3connect";
import WalletConnectProvider from "@walletconnect/web3-provider";

export const requestProvider = () => {
  const web3Connect = new Web3Connect.Core({
    network: "mainnet", // optional
    providerOptions: {
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          // id from '@ensdomains/ui/web3'
          infuraId: "90f210707d3c450f847659dc9a3436ea" // required
        }
      },
    }
  })

  const providerPromise = new Promise((resolve, reject) => {
    // provider connected, resolve(provider)
    web3Connect.on('connect', resolve)
    // modal closed, resolve(null)
    web3Connect.on('close', () => resolve(null))
    // error during connection or modal opening, reject(error)
    web3Connect.on('error', reject)
  })

  web3Connect.toggleModal();

  return providerPromise
}