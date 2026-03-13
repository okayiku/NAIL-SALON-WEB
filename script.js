document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookingForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const service = document.getElementById("service").value;

    if (!name || !service) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    const whatsappNumber = "917506897807";
    const message = `Hello, my name is ${name}. I would like to book an appointment for ${service}.`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  });
});