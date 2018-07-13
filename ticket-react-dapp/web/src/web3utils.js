// ethjs wrap
import Eth from 'ethjs'

let eth = null;
let accounts = [];

if (typeof window.web3 !== 'undefined') {
    eth = new Eth(window.web3.currentProvider);

  // get accounts
  eth.accounts().then(accs => {
    accounts = accs;
    console.log(accounts);
  });
} else {
  console.error('No web3? You should consider trying MetaMask!');
}

export {
  accounts,
  eth
}