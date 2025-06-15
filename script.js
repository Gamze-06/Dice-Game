// HTML elementlerini seçiyoruz
const player1NameInput = document.getElementById("player1Name"); // Kullanıcı adı inputu
const player1Label = document.getElementById("player1Label"); // Player 1 etiketi
const dice1 = document.getElementById("dice1"); // Zar 1
const dice2 = document.getElementById("dice2"); // Zar 2
const rollButton = document.getElementById("rollButton"); // Zar atma butonu
const result = document.getElementById("result"); // Sonuç mesajı

// Kullanıcı adını güncelleme
player1NameInput.addEventListener("input", () => {
    player1Label.textContent = player1NameInput.value || "Player 1"; // Eğer input boşsa "Player 1" yaz
});
// Zar atma fonksiyonu
function rollDice() {
    rollButton.textContent = "Zarlar Atılıyor..."; // Buton yazısını değiştir
    result.textContent = ""; // Sonucu temizle

  // Zar animasyonu
  let interval = setInterval(() => {
    dice1.src = getRandomDiceImage(); // Zar 1 yüzünü değiştir
    dice2.src = getRandomDiceImage(); // Zar 2 yüzünü değiştir
  }, 100);

  setTimeout(() => {
    clearInterval(interval); // Animasyonu durdur
    const player1Roll = Math.floor(Math.random() * 6) + 1; // Zar 1 sonucu
    const player2Roll = Math.floor(Math.random() * 6) + 1; // Zar 2 sonucu

    dice1.src = `images/dice${player1Roll}.png`; // Zar 1 yüzünü göster
    dice2.src = `images/dice${player2Roll}.png`; // Zar 2 yüzünü göster

    // Kazananı belirle
    if (player1Roll > player2Roll) {
        result.textContent = `${player1Label.textContent} Kazandı!`; // Player 1 kazandı
    } else if (player1Roll < player2Roll) {
        result.textContent = "Player 2 Kazandı!"; // Player 2 kazandı
    } else {
        result.textContent = "Berabere!"; // Berabere
    }

    rollButton.textContent = "Zar At"; // Buton yazısını sıfırla
  }, 3000);
}
// Rastgele zar resmi döndüren fonksiyon
function getRandomDiceImage() {
    const randomNumber = Math.floor(Math.random() * 6) + 1; // 1 ile 6 arasında rastgele sayı
    return `images/dice${randomNumber}.png`; // İlgili zar resmini döndür
}
// Butona tıklama olayını dinliyoruz
rollButton.addEventListener("click", rollDice);
