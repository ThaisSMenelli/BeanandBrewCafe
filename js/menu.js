const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

const modal = document.getElementById("menuModal");
const modalName = document.getElementById("modalName");
const modalDescription = document.getElementById("modalDescription");
const modalPrice = document.getElementById("modalPrice");
const modalVegan = document.getElementById("modalVegan");
const modalAllergens = document.getElementById("modalAllergens");
const closeModal = document.querySelector(".close");

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        modal.style.display = "block";
        modalName.textContent = item.dataset.name;
        modalDescription.textContent = item.dataset.description;
        modalPrice.textContent = `Price: ${item.dataset.price}`;
        modalVegan.innerHTML = `Vegan: <i class="fas ${item.dataset.vegan === "Yes" ? 'fa-leaf' : 'fa-times'}"></i> ${item.dataset.vegan}`;
        modalAllergens.innerHTML = `Allergens: <i class="fas fa-exclamation-triangle"></i> ${item.dataset.allergens}`;
    });
});

closeModal.onclick = () => {
    modal.style.display = "none";
}

window.onclick = event => {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}