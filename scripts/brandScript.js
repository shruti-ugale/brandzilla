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
  } 
  collectionScreen.classList.add("visible");
  contractScreen.classList.add("visible");
};

const walletSection = document.getElementById("wallet-section");

const walletButton = walletSection.querySelector(".wallet-btn");

walletButton.addEventListener("click", connectWallet);

const collectionScreen = document.getElementById("blog");
collectionScreen.classList.remove("visible");

const contractScreen = document.getElementById("free-quote");
contractScreen.classList.remove("visible");