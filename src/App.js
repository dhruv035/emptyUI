import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import {ethers, BigNumber} from 'ethers';
import AProxy from './abi/AProxy.json';
import ERC20 from './abi/ERC20.json';
import AAVE from './abi/AAVE.json';
import {Biconomy} from '@biconomy/mexa';
import { parseEther } from 'ethers/lib/utils';

function App() {
  const proxyAddress="0xe642Cff5504b94267CcA5d4539AF78749751E397";
  const tokenAddress="0x4aAded56bd7c69861E8654719195fCA9C670EB45";
  const myadd = "0x620E1cf616444d524c81841B85f60F8d3Ea64751";
  const api = "M8SBoFeZB.ca8f79fd-aa9e-4613-8f21-ce4611287a0e";
  const aaveAddress="0xE039BdF1d874d27338e09B55CB09879Dedca52D8";

  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  // Prompt user for account connections
  
  
  async function handleClick(){
    await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner(myadd);
  //let tokenContract = new ethers.Contract(tokenAddress,ERC20,biconomy.getSignerByAddress(myadd));
  let contract = await new ethers.Contract(proxyAddress,ERC20,signer);
  //qsssslet r1 = await contract.addModerator("0x348e4Bcf6B0B21E8c32Ff06ACa264f9C34D19ab8");
  let r2 = await contract.viewMembers();
  console.log("AA",r2)
  }
  return (
    <div>
      <Button onClick={()=>handleClick()}>Hello</Button>
    </div>
  );
}

export default App;




