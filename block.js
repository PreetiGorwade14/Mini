// var web3;
// var address = "";

// async function Connect(){
//     await window.web3.currentProvider.enable();
//     web3 = new Web3(window.web3.currentProvider);
// }

// if(typeof web3!=="undefine"){
//     web3 = new Web3(window.web3.currentProvider);
// }else{
//     web3 = new Web3(new Web3.Provider.HttpProvider("HTTP://127.0.0.1:7545"));
// }

// var abi=[[
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "_campaignId",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "donate",
// 		"outputs": [],
// 		"stateMutability": "payable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "constructor"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": false,
// 				"internalType": "uint256",
// 				"name": "campaignId",
// 				"type": "uint256"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "address",
// 				"name": "donor",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "uint256",
// 				"name": "amount",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "DonationReceived",
// 		"type": "event"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "campaigns",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "campaignId",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "fundsRaised",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "balance",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "address payable",
// 				"name": "initiatorAddress",
// 				"type": "address"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "_campaignId",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "getCampaignDetails",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "totalCampaigns",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	}
// ]];

// var contract = new Web3.eth.Contract(abi,address);

// function deposit(){
//     var
// }

console.log("hi");