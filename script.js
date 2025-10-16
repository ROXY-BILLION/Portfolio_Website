// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
if(menuToggle){
  menuToggle.addEventListener("click", ()=> nav.classList.toggle("active"));
}
// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Contact form validation
const form = document.getElementById("contactForm");
if(form){
  form.addEventListener("submit", e=>{
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const msg = document.getElementById("formMsg");

    if(!name || !email || !message){
      msg.textContent = "Please fill out all fields.";
      msg.style.color = "red";
      return;
    }
    msg.textContent = "Thank you for your message!";
    msg.style.color = "green";
    form.reset();
  });
}
