// ✅ Home Button Function
function goHome() {
    window.location.href = "home.html";
}

// ✅ Transaction History Function
function viewHistory() {
    alert("📜 Transaction History Coming Soon!");
}

// ✅ Open Withdraw Popup & Hide Wallet
function openWithdraw() {
    document.getElementById("withdrawPopup").style.display = "flex";
    document.getElementById("walletSection").style.display = "none";
}

// ✅ Close Withdraw Popup & Show Wallet
function closeWithdraw() {
    document.getElementById("withdrawPopup").style.display = "none";
    document.getElementById("walletSection").style.display = "block";
}

// ✅ Open Direct Bank Option
function openBank() {
    document.getElementById("comingSoon").style.display = "flex";
    document.getElementById("withdrawPopup").style.display = "none";
}

// ✅ Open UPI Input
function openUPI() {
    document.getElementById("upiPopup").style.display = "flex";
    document.getElementById("withdrawPopup").style.display = "none";
}

// ✅ Close UPI Input
function closeUPI() {
    document.getElementById("upiPopup").style.display = "none";
    document.getElementById("walletSection").style.display = "block";
}

// ✅ Process UPI Withdrawal
function processWithdrawal() {
    let upiID = document.getElementById("upiInput").value;
    if (upiID.trim() === "") {
        alert("⚠ Please Enter a UPI ID!");
    } else {
        document.getElementById("upiPopup").style.display = "none";
        document.getElementById("comingSoon").style.display = "flex";
    }
}

// ✅ Close Coming Soon Popup
function closeComingSoon() {
    document.getElementById("comingSoon").style.display = "none";
    document.getElementById("walletSection").style.display = "block";
}

// ✅ Open Top-up Section (Coming Soon)
function openTopup() {
    document.getElementById("comingSoon").style.display = "flex";
}






// ✅ Wallet Balance Data Load Karo
let walletCoins = localStorage.getItem("coins") ? parseInt(localStorage.getItem("coins")) : 500;
let wonCoins = localStorage.getItem("wonCoins") ? parseInt(localStorage.getItem("wonCoins")) : 200;
let depositedCoins = localStorage.getItem("depositedCoins") ? parseInt(localStorage.getItem("depositedCoins")) : 250;
let bonusCoins = localStorage.getItem("bonusCoins") ? parseInt(localStorage.getItem("bonusCoins")) : 50;

// ✅ Wallet Page Update Function
function updateWalletDisplay() {
    document.getElementById("coinBalance").innerHTML = `💰 ${walletCoins} Coins`;
    document.getElementById("wonCoins").innerText = wonCoins;
    document.getElementById("depositedCoins").innerText = depositedCoins;
    document.getElementById("bonusCoins").innerText = bonusCoins;
}

// ✅ Top-up Function (Wallet Page Se Call Hoga)
function walletAddCoins(amount) {
    walletCoins += amount;
    depositedCoins += amount;
    localStorage.setItem("coins", walletCoins);
    localStorage.setItem("depositedCoins", depositedCoins);
    updateWalletDisplay();
}

// ✅ Withdraw Function (Coming Soon Logic)
function withdrawCoins(amount) {
    if (walletCoins >= amount) {
        walletCoins -= amount;
        localStorage.setItem("coins", walletCoins);
        updateWalletDisplay();
    } else {
        alert("⚠ Not enough coins to withdraw!");
    }
}

// ✅ Page Load Pe Wallet Data Show Karo
updateWalletDisplay();// ✅ Home Button Function







// ✅ Top-up Section Show Karo
function openTopup() {
    document.getElementById("topupSection").style.display = "flex";
}

// ✅ Top-up Section Hide Karo
function closeTopup() {
    document.getElementById("topupSection").style.display = "none";
}

// ✅ Wallet Balance Data Load Karo
walletCoins = localStorage.getItem("coins") ? parseInt(localStorage.getItem("coins")) : 500;
  wonCoins = localStorage.getItem("wonCoins") ? parseInt(localStorage.getItem("wonCoins")) : 200;
 depositedCoins = localStorage.getItem("depositedCoins") ? parseInt(localStorage.getItem("depositedCoins")) : 250;
 bonusCoins = localStorage.getItem("bonusCoins") ? parseInt(localStorage.getItem("bonusCoins")) : 50;

// ✅ Wallet Page Update Function
function updateWalletDisplay() {
    document.getElementById("coinBalance").innerHTML = `💰 ${walletCoins} Coins`;
    document.getElementById("wonCoins").innerText = wonCoins;
    document.getElementById("depositedCoins").innerText = depositedCoins;
    document.getElementById("bonusCoins").innerText = bonusCoins;
}

// ✅ Top-up Function (Button Se Call Hoga)
function walletAddCoins(amount) {
    walletCoins += amount;
    depositedCoins += amount;
    localStorage.setItem("coins", walletCoins);
    localStorage.setItem("depositedCoins", depositedCoins);
    updateWalletDisplay();
    closeTopup(); // ✅ Coins add hone ke baad Top-up window band ho jayega
}

// ✅ Page Load Pe Wallet Data Show Karo
updateWalletDisplay();





// ✅ Transaction History Data Load Karo
let transactionHistory = JSON.parse(localStorage.getItem("history")) || [];

// ✅ Transaction History Show Karne Ka Function
function viewHistory() {
    let historyList = document.getElementById("historyList");
    historyList.innerHTML = ""; // Pehle history clear karo

    if (transactionHistory.length === 0) {
        historyList.innerHTML = "<li>No transactions yet.</li>";
    } else {
        transactionHistory.forEach(item => {
            let listItem = document.createElement("li");
            listItem.innerHTML = item;
            historyList.appendChild(listItem);
        });
    }

    document.getElementById("transactionHistory").style.display = "flex";
}

// ✅ Close Transaction History
function closeHistory() {
    document.getElementById("transactionHistory").style.display = "none";
}

// ✅ Transaction Add Karne Ka Function
function addTransaction(type, amount) {
    let transactionText = `${type}: ${amount} Coins - ${new Date().toLocaleString()}`;
    transactionHistory.push(transactionText);
    localStorage.setItem("history", JSON.stringify(transactionHistory));
}

// ✅ Top-up Function (Button Se Call Hoga)
function walletAddCoins(amount) {
    walletCoins += amount;
    depositedCoins += amount;
    addTransaction("Top-up", amount);
    localStorage.setItem("coins", walletCoins);
    localStorage.setItem("depositedCoins", depositedCoins);
    updateWalletDisplay();
    closeTopup(); // ✅ Coins add hone ke baad Top-up window band ho jayega
}

// ✅ Withdraw Function (Coming Soon Logic)
function withdrawCoins(amount) {
    if (walletCoins >= amount) {
        walletCoins -= amount;
        addTransaction("Withdraw", amount);
        localStorage.setItem("coins", walletCoins);
        updateWalletDisplay();
    } else {
        alert("⚠ Not enough coins to withdraw!");
    }
}

// ✅ Page Load Pe Wallet Data Show Karo
updateWalletDisplay();



