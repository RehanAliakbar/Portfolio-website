document.addEventListener("DOMContentLoaded", function () {
    console.log("🚀 Script Loaded Successfully!");

    /** ==============================
     *  🔹 1️⃣ Tournament System Setup
     * ============================== */
    const gameButtons = document.querySelectorAll(".game");
    const matchContainer = document.querySelector(".match");

    const tournaments = {
        "freefire": [
            { name: "Free Fire Max", entry: "₹10", prize: "₹400", mode: "Solo", totalSlots: 48, joinedPlayers: 5 },
            { name: "Free Fire Battle", entry: "₹20", prize: "₹800", mode: "Duo", totalSlots: 48, joinedPlayers: 10 },
        ],
        "bgmi": [
            { name: "BGMI Classic", entry: "₹15", prize: "₹500", mode: "Squad", totalSlots: 100, joinedPlayers: 10 },
            { name: "BGMI Pro", entry: "₹25", prize: "₹1000", mode: "Solo", totalSlots: 100, joinedPlayers: 20 },
        ]
    };

    function formatTime(date) {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    gameButtons.forEach(button => {
        button.addEventListener("click", function () {
            const selectedGame = this.getAttribute("data-game");
            matchContainer.innerHTML = "";

            if (tournaments[selectedGame]) {
                let currentTime = new Date();

                tournaments[selectedGame].forEach((tournament) => {
                    const section = document.createElement("section");
                    section.classList.add("freeFire");

                    currentTime.setMinutes(currentTime.getMinutes() + 45);
                    const matchTime = formatTime(currentTime);

                    section.innerHTML = `
                        <p class="name">${tournament.name}</p>
                        <div class="box-container">
                            <div class="entry">Entry Fee<br>${tournament.entry}</div>
                            <div class="winner">Winning Prize<br>${tournament.prize}</div>
                            <div class="gm-mode">Mode<br>${tournament.mode}</div>
                            <div class="match-info">
                                <span class="match-time">🕒 ${matchTime}</span>  
                                <span class="players">👥 ${tournament.joinedPlayers}/${tournament.totalSlots}</span>  
                                <span class="remaining">🟢 Slots Left: ${tournament.totalSlots - tournament.joinedPlayers}</span>
                            </div>
                        </div>
                        <button class="join">Join Now</button>
                    `;

                    let joinButton = section.querySelector(".join");
                    let joinedEl = section.querySelector(".players");
                    let remainingEl = section.querySelector(".remaining");

                    function checkSlots() {
                        if (tournament.joinedPlayers >= tournament.totalSlots) {
                            joinButton.disabled = true;
                            joinButton.textContent = "Slots Full";
                        } else {
                            joinButton.disabled = false;
                            joinButton.textContent = "Join Now";
                        }
                    }

                    checkSlots();

                    joinButton.addEventListener("click", function () {
                        if (tournament.joinedPlayers < tournament.totalSlots) {
                            tournament.joinedPlayers++;
                            joinedEl.innerHTML = `👥 ${tournament.joinedPlayers}/${tournament.totalSlots}`;
                            remainingEl.innerHTML = `🟢 Slots Left: ${tournament.totalSlots - tournament.joinedPlayers}`;
                            checkSlots();
                            
                        }
                    });

                    matchContainer.appendChild(section);
                });
            }
        });
    });

    /** ==============================
     *  🔹 2️⃣ Sidebar Toggle System
     * ============================== */
    let sidebar = document.querySelector(".sideBar");
    let optionBtn = document.querySelector(".option");
    let overlay = document.querySelector(".overlay");
    let body = document.querySelector(".full");
    let backButton = document.querySelector(".backButton");

    optionBtn.addEventListener("click", function () {
        sidebar.classList.add("show");
        overlay.classList.add("show");
        body.classList.add("body-blur");
    });

    overlay.addEventListener("click", function () {
        sidebar.classList.remove("show");
        overlay.classList.remove("show");
        body.classList.remove("body-blur");
    });

    backButton.addEventListener("click", function () {
        sidebar.classList.remove("show");
        overlay.classList.remove("show");
        body.classList.remove("body-blur");
    });

    /** ==============================
     *  🔹 3️⃣ Profile Page System
     * ============================== */
    let editProfileBtn = document.getElementById("editProBtn");
    let profilePage = document.querySelector(".proPage");

    editProfileBtn.addEventListener("click", function () {
        profilePage.classList.add("show");
        body.classList.add("hide");
        sidebar.classList.remove("show");
    });

    /** ==============================
     *  🔹 4️⃣ Profile Image Upload
     * ============================== */
    document.getElementById("profilePicInput").addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const imageURL = e.target.result;
                document.getElementById("profilePic").src = imageURL;
                document.getElementById("sidebarProfile").src = imageURL;
                localStorage.setItem("profilePic", imageURL);
            };
            reader.readAsDataURL(file);
        }
    });

    /** ==============================
     *  🔹 5️⃣ Profile Data Save & Load
     * ============================== */
    function saveProfile() {
        const name = document.getElementById("nameInput").value;
        const password = document.getElementById("passwordInput").value;
        const email = document.getElementById("emailInput").value;
        const number = document.getElementById("numberInput").value;

        const userProfile = { name, password, email, number };
        localStorage.setItem("userProfile", JSON.stringify(userProfile));
        alert("Profile Saved Successfully!");
    }

    /** ==============================
     *  🔹 6️⃣ Load Profile from Local Storage
     * ============================== */
    const savedProfile = JSON.parse(localStorage.getItem("userProfile"));
    const savedPic = localStorage.getItem("profilePic");

    if (savedProfile) {
        document.getElementById("nameInput").value = savedProfile.name || "";
        document.getElementById("passwordInput").value = savedProfile.password || "";
        document.getElementById("emailInput").value = savedProfile.email || "";
        document.getElementById("numberInput").value = savedProfile.number || "";

        if (savedProfile.name) {
            document.getElementById("sidebarUserName").textContent = savedProfile.name;
        }
    }

    if (savedPic) {
        document.getElementById("profilePic").src = savedPic;
        document.getElementById("sidebarProfile").src = savedPic;
    }

    /** ==============================
     *  🔹 7️⃣ Home Button Navigation
     * ============================== */
     
     let home = document.querySelector(".exit")
     
   home.addEventListener("click", function goHome() {
        window.location.href = "home.html";
    }) 

    /** ==============================
     *  🔹 8️⃣ Password Show/Hide
     * ============================== */
    function togglePassword() {
        let passField = document.getElementById("passwordInput");
        passField.type = passField.type === "password" ? "text" : "password";
    }
});

document.querySelector(".coin").addEventListener("click", function() {
    window.location.href = "wallet.html"; // Wallet page pe redirect karega
});

document.getElementById("wallet").addEventListener("click",function () {
        window.location.href="wallet.html"
})




// Initial Coins (Local Storage me store karenge)
let coins = localStorage.getItem("coins") ? parseInt(localStorage.getItem("coins")) : 1000;

// Function to Update Coin Display
function updateCoinDisplay() {
    document.getElementById("coinShow").innerText = coins;
}

// Function to Add Coins (Top-Up)
function addCoins(amount) {
    coins += amount;
    localStorage.setItem("coins", coins);
    updateCoinDisplay();
}

// Function to Deduct Coins (Tournament Entry)
function deductCoins(amount) {
    if (coins >= amount) {
        coins -= amount;
        localStorage.setItem("coins", coins);
        updateCoinDisplay();
    } else {
        alert("Not enough coins!");
    }
}

// Page Load par Coins Show Karna
updateCoinDisplay();