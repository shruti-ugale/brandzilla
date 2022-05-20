
import Web3 from "web3";

/* MORALIS PART */
const serverUrl = "https://60kpqisdow21.usemoralis.com:2053/server";
const appId = "FGrZ3fLzD4xtgcOEuTYdhpw1ndbmKW50ZAeM463S";
Moralis.start({ serverUrl, appId });

var account;
const contractAddress = "0xd1b11ac0ff012024a2D99C4dB149Ee6e06608139";
const abi = [
	{
		"inputs": [
			{
				"internalType": "string[]",
				"name": "tokenURIs",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "productCode",
				"type": "string[]"
			},
			{
				"internalType": "uint256",
				"name": "count",
				"type": "uint256"
			}
		],
		"name": "addProducts",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol",
				"type": "string"
			},
			{
				"internalType": "string[]",
				"name": "tokenURIs",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "productCode",
				"type": "string[]"
			},
			{
				"internalType": "uint256",
				"name": "count",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_productCode",
				"type": "string"
			}
		],
		"name": "claimNFT",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_tokenIds",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getUnlockTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenOfOwnerByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

async function logOut() {
	await Moralis.User.logOut();
	console.log("logged out");
  }
  
const loadBlockchainData = async () => {
	let user = Moralis.User.current();
	if (!user) {
	  user = await Moralis.authenticate({
		signingMessage: "Welcome to Brandzilla Metaverse",
	  })
		.then(function (user) {
		  console.log("logged in user:", user);
		  console.log(user.get("ethAddress"));
		})
		.catch(function (error) {
		  console.log(error);
		});
		homeScreen.classList.remove("visible");
		loginScreen.classList.add("visible");
	} else {
		logOut();
		homeScreen.classList.add("visible");
	  }

};

const initBlockchain = async () => {
  await loadBlockchainData();
};


const mintNFT = async () => {
  mintScreen.classList.remove("visible");
  loginScreen.classList.add("visible");
};

const claim = async () => {

  await Moralis.enableWeb3();
  const web3 = new Web3(Moralis.provider);
  console.log(web3);
  
  const accounts = await web3.eth.getAccounts()
  account = accounts[0];

  console.log(account);

  const nft = new web3.eth.Contract(abi, contractAddress);
  nft.methods
    .claimNFT("RBG001")
    .send({ from: account })
    .on("transactionHash", (hash) => {
      console.log(hash);
    });

  console.log("Claim NFT");
};

// ***************************************************** //

/* HOME SCREEN*/
const homeScreen = document.getElementById("screen-one");
homeScreen.classList.add("visible");

const loginScreen = document.getElementById("login");

const mintScreen = document.getElementById("mint");
const mint = mintScreen.querySelector(".btn-mint_1");

const login = homeScreen.querySelector(".btn-login");

const start = loginScreen.querySelector(".btn-start");
const event = loginScreen.querySelector(".btn-event");
const gameScreen = document.getElementById("screen-two");

gameScreen.classList.remove("visible");

const eventScreen = document.getElementById("event-zone");
eventScreen.classList.remove("visible");

login.addEventListener("click", initBlockchain);

const startGame = () => {
  loginScreen.classList.remove("visible");
  gameScreen.classList.add("visible");
};

const startEvent = () => {
  loginScreen.classList.remove("visible");
  eventScreen.classList.add("visible");
};

start.addEventListener("click", startGame);
event.addEventListener("click", startEvent);

mint.addEventListener("click", mintNFT);

const submitBtn = gameScreen.querySelector(".button");

submitBtn.addEventListener("click", claim);

// Game Instructions

var character = document.querySelector(".character");
var map = document.querySelector(".map");

var eventcharacter = document.querySelector(".characterevent");
var eventmap = document.querySelector(".mapevent");

//start in the middle of the map
var x = 90;
var y = 140;
var held_directions = []; //State of which arrow keys we are holding down
var speed = 1; //How fast the character moves in pixels per frame

const placeCharacter = () => {
  var pixelSize = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--pixel-size")
  );

  const held_direction = held_directions[0];
  if (held_direction) {
    if (held_direction === directions.right) {
      x += speed;
    }
    if (held_direction === directions.left) {
      x -= speed;
    }
    if (held_direction === directions.down) {
      y += speed;
    }
    if (held_direction === directions.up) {
      y -= speed;
    }
    character.setAttribute("facing", held_direction);
    eventcharacter.setAttribute("facing", held_direction);
  }
  character.setAttribute("walking", held_direction ? "true" : "false");
  eventcharacter.setAttribute("walking", held_direction ? "true" : "false");
  //Limits (gives the illusion of walls)
  var leftLimit = -2;
  var rightLimit = 16 * 10;
  var topLimit = -8 + 100;
  var bottomLimit = 20 * 7;
  if (x < leftLimit) {
    x = leftLimit;
  }
  if (x > rightLimit) {
    x = rightLimit;
  }
  if (y < topLimit) {
    y = topLimit;
  }
  if (y > bottomLimit) {
    y = bottomLimit;
  }

  var camera_left = pixelSize * 66;
  var camera_top = pixelSize * 44;

  map.style.transform = `translate3d( ${-x * pixelSize + camera_left}px, ${
    -y * pixelSize + camera_top
  }px, 0 )`;

  character.style.transform = `translate3d( ${x * pixelSize}px, ${
    y * pixelSize
  }px, 0 )`;
};

var a = 115;
var b = 40;

const placeEventCharacter = () => {
  var pixelSize = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--pixel-size")
  );

  const held_direction = held_directions[0];
  if (held_direction) {
    if (held_direction === directions.right) {
      a += speed;
    }
    if (held_direction === directions.left) {
      a -= speed;
    }
    if (held_direction === directions.down) {
      b += speed;
    }
    if (held_direction === directions.up) {
      b -= speed;
    }

    eventcharacter.setAttribute("facing", held_direction);
  }

  eventcharacter.setAttribute("walking", held_direction ? "true" : "false");

  //Limits (gives the illusion of walls)
  var leftLimit = -1;
  var rightLimit = 16 * 10 + 8;
  var topLimit = -8 + 32;
  var bottomLimit = 20 * 7;
  if (a < leftLimit) {
    a = leftLimit;
  }
  if (a > rightLimit) {
    a = rightLimit;
  }
  if (b < topLimit) {
    b = topLimit;
  }
  if (b > bottomLimit) {
    b = bottomLimit;
  }

  var camera_left = pixelSize * 66;
  var camera_top = pixelSize * 42;

  eventmap.style.transform = `translate3d( ${-a * pixelSize + camera_left}px, ${
    -b * pixelSize + camera_top
  }px, 0 )`;

  eventcharacter.style.transform = `translate3d( ${a * pixelSize}px, ${
    b * pixelSize
  }px, 0 )`;
};

//Set up the game loop
const step = () => {
  placeCharacter();
  placeEventCharacter();
  window.requestAnimationFrame(() => {
    step();
  });
};
step(); //kick off the first step!

/* Direction key state */
const directions = {
  up: "up",
  down: "down",
  left: "left",
  right: "right",
};
const keys = {
  38: directions.up,
  37: directions.left,
  39: directions.right,
  40: directions.down,
};
document.addEventListener("keydown", (e) => {
  var dir = keys[e.which];
  if (dir && held_directions.indexOf(dir) === -1) {
    held_directions.unshift(dir);
  }
});

document.addEventListener("keyup", (e) => {
  var dir = keys[e.which];
  var index = held_directions.indexOf(dir);
  if (index > -1) {
    held_directions.splice(index, 1);
  }
});
