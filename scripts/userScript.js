/* MORALIS PART */
const serverUrl = "https://60kpqisdow21.usemoralis.com:2053/server";
const appId = "FGrZ3fLzD4xtgcOEuTYdhpw1ndbmKW50ZAeM463S";
Moralis.start({ serverUrl, appId });

async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
}

/* CONNECT WALLET*/
const connectWallet = async () => {
  let user = Moralis.User.current();
  if (!user) {
    user = await Moralis.authenticate({
      signingMessage: "Log in using Moralis",
    })
      .then(function (user) {
        console.log("logged in user:", user);
        console.log(user.get("ethAddress"));
      })
      .catch(function (error) {
        console.log(error);
      });
      aboutScreen.classList.add("visible");
  } else {
    logOut();
    aboutScreen.classList.remove("visible");
  }
};

const save = async () => {
  Moralis.authenticate({signingMessage:"Save your character State"})
  console.log("Save on moralis");
};

const walletSection = document.getElementById("wallet-section");

const walletButton = walletSection.querySelector(".wallet-btn");

walletButton.addEventListener("click", connectWallet);

/* CUSTOMIZE CHARACTER*/

const addSpec = async () => {
  aboutDiv.querySelector(".characterImg").src = "https://bafkreickc4gjayro3kdsbfryrpa6vjff4o3odcxise5tsedzkgdgk7hdy4.ipfs.nftstorage.link/";
  console.log("Haa");
};

const addShoe = async () => {
  aboutDiv.querySelector(".characterImg").src = "https://bafybeig4rrj45dlxl3g2y2mwedpsfxx5zpzyo6va4mgm5n4wnk4rpeuofm.ipfs.nftstorage.link/";
  console.log("Naa");
};

const addGoggle = async () => {
  aboutDiv.querySelector(".characterImg").src = "map.jpg";
  console.log("Taa");
};

const aboutScreen = document.getElementById("about");
aboutScreen.classList.remove("visible");

const chooseSpec = document.getElementById("screen-one");

const chooseShoe = document.getElementById("screen-two");

// const chooseGoggle = document.getElementById("screen-three");

const x = document.getElementById("screen-four");

const aboutDiv = document.getElementById("about");

const addSpecs = chooseSpec.querySelector(".progress");
const addShoes = chooseShoe.querySelector(".progress");
// const addGoggles = chooseGoggle.querySelector(".progress");
const y = x.querySelector(".progresss");

addSpecs.addEventListener("click", addSpec);
addShoes.addEventListener("click", addShoe);
// addGoggles.addEventListener("click", addGoggle);
y.addEventListener("click", save);
