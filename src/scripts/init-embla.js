import emblaCarousel from "embla-carousel";

document.addEventListener("DOMContentLoaded", () => {
  const emblaNode = document.querySelector(".embla");
  if (emblaNode instanceof HTMLElement) {
    emblaCarousel(emblaNode, { loop: true });
  }
});
