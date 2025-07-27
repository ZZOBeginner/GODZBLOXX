const whatsappNumber = "6281542522011";

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".buy-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const productCard = button.closest(".product-card");
      const productName = productCard.getAttribute("data-product");
      const message = `Halo, saya ingin membeli ${productName} di Grow a Garden Roblox. Tolong diproses ya!`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      window.open(whatsappUrl, "_blank");
    });
  });
});
