const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const heartsContainer = document.getElementById("hearts");
let moveCount = 0;

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "%";
  heart.style.animationDelay = Math.random() * 2 + "s";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

noBtn.style.left = "70%";
noBtn.style.top = "10%";

noBtn.addEventListener("mouseenter", () => {
  const boxRect = document.querySelector(".heart-box").getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = boxRect.width - btnRect.width;
  const maxY = boxRect.height - btnRect.height;

  const newX = (Math.random() * maxX) / 10;
  const newY = (Math.random() * maxY) / 10;

  noBtn.style.left = newX + "%";
  noBtn.style.top = newY + "%";
  moveCount++;

  if (moveCount === 3) {
    message.style.display = "block";
    setTimeout(() => (message.style.display = "none"), 2000);
    moveCount = 0;
  }
});

yesBtn.addEventListener("click", () => {
  document.querySelector(".heart-box").innerHTML = `
                <h1>I knew it 🎉</h1>
                <p style="font-size:1.8em; color:#ff6b6b; margin-top:20px;">
                    You've just made my day!<br>
                    Let's make it magical! ✨
                </p>
            `;
  const heartsInterval = setInterval(createHeart, 150);
  document.querySelector(".heart-box").style.transform = "scale(1.1)";
  setTimeout(() => {
    document.querySelector(".heart-box").style.transform = "scale(1)";
  }, 500);

  clearInterval(heartsInterval);
  setTimeout(() => {
    const footer = document.querySelector(".developer-footer");
    footer.style.display = "block";
    setTimeout(() => footer.classList.add("visible"), 50);
  }, 1000);
});

setInterval(createHeart, 800);

yesBtn.addEventListener("click", () => {
  document.querySelector(".heart-box").innerHTML = `
                <h1>I knew it 🎉</h1>
                <p style="font-size:1.8em; color:#ff6b6b; margin-top:20px;">
                    You've just made my day!<br>
                    Let's make it magical! ✨
                </p>
                <div class="whatsapp-section">
                    <input type="tel" class="number-input" placeholder="Enter WhatsApp number 🌸" 
                        pattern="[0-9+]{10,15}" required>
                    <button class="generate-btn" onclick="generateWhatsAppLink()">Send Love 💌</button>
                    <div class="error-msg">Please enter a valid number with country code!</div>
                </div>
            `;
  document.querySelector(".whatsapp-section").style.display = "block";
  const heartsInterval = setInterval(createHeart, 150);
  document.querySelector(".heart-box").style.transform = "scale(1.1)";
  setTimeout(() => {
    document.querySelector(".heart-box").style.transform = "scale(1)";
  }, 500);

  setTimeout(() => {
    document.querySelector(".developer-footer").style.display = "block";
  }, 1000);
});

function generateWhatsAppLink() {
  const numberInput = document.querySelector(".number-input");
  const errorMsg = document.querySelector(".error-msg");
  const number = numberInput.value.replace(/[^\d+]/g, "");

  if (number.length < 10 || !number.startsWith("+")) {
    errorMsg.style.display = "block";
    numberInput.style.borderColor = "#ff4757";
    setTimeout(() => {
      errorMsg.style.display = "none";
      numberInput.style.borderColor = "#ff6b6b";
      const footer = document.querySelector(".developer-footer");
      footer.classList.add("visible");
      window.open(whatsappUrl, "_blank");
    }, 2000);
    return;
  }

  const message =
    "You+are+my+special+Valentine!+💖+Let's+make+beautiful+moments+together!+🌸";
  const whatsappUrl = `https://wa.me/${number}?text=${message}`;
  window.open(whatsappUrl, "_blank");
}
