const subscribe = document.getElementById("subscribe");
const visa = document.getElementById("visa");
const mastercard = document.getElementById("mastercard");
const rupay = document.getElementById("rupay");
const submitBtn = document.getElementById("submitBtn");
const subscribeText = document.getElementById("subscribeText");
const paymentText = document.getElementById("paymentText");

submitBtn.onclick = function () {
  if (subscribe.checked) {
    subscribeText.textContent = `You are SUBSCRIBED!!!`;
  } else {
    subscribeText.textContent = `You are NOT Subscribed!!!`;
  }

  if (visa.checked) {
    paymentText.textContent = `You are paying with Visa.`;
  } else if (mastercard.checked) {
    paymentText.textContent = `You are paying with MasterCard.`;
  } else if (rupay.checked) {
    paymentText.textContent = `You are paying with RuPay.`;
  } else {
    paymentText.textContent = `You must select a payment type.`;
  }
};
