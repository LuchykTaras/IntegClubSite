// ВСТАВТЕ посилання на оплату замість порожнього рядка.
// Наприклад: const PAYMENT_URL = "https://your-payment-provider.example/checkout";
const PAYMENT_URL = "";

const paymentLink = document.getElementById("payment-link");
const paymentInfo = document.getElementById("payment-info");
if (paymentLink) {
  if (PAYMENT_URL.trim()) {
    paymentLink.href = PAYMENT_URL;
    paymentLink.target = "_blank";
    paymentLink.rel = "noopener noreferrer";
  } else {
    paymentLink.removeAttribute("href");
    paymentLink.classList.add("payment-disabled");
    paymentLink.setAttribute("aria-disabled", "true");
    paymentLink.textContent = "Оплату ще не підключено";
    if (paymentInfo) paymentInfo.style.display = "block";
  }
}
