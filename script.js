const form = document.querySelector('form');
const ticket = document.getElementById('ticket');
const avatarInput = document.getElementById('avatar');
const errorMessage = document.getElementById("avatar-error");
const emailInput = document.getElementById('email');



form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const github = document.getElementById('github-username').value;
    const avatar = document.getElementById('avatar').files[0];

    ticket.querySelector('#full-name-output').textContent = name;
    ticket.querySelector('#email-output').textContent = email; 
    ticket.querySelector('#github-username-output').textContent = github;
    ticket.querySelector('#avatar-name-output').textContent = name;

   if (avatar) {
       
        if (avatar.size <= 500 * 1024) {
            const avatarURL = URL.createObjectURL(avatar);
            ticket.querySelector(".avatar-placeholder").src = avatarURL;
        } else {
            alert("Avatar image must be less than 500 KB.");
            document.getElementById('avatar').value = "";
            return; 
        }
    }
    
    ticket.classList.remove('hidden');
    document.querySelector(".initial").classList.add("hidden");

});

avatarInput.addEventListener("change", function() {
    const avatar = avatarInput.files[0];
    if (avatar) {
        if (avatar.size > 500 * 1024) {
            errorMessage.classList.remove("hidden");
            document.querySelector(".avatar-info").classList.add("hidden");
            document.querySelector(".info-icon").classList.add("hidden");
            avatarInput.value = "";
            return;
        }
        errorMessage.classList.add("hidden"); 
        const avatarURL = URL.createObjectURL(avatar);
        document.querySelector(".upload-icon").src = avatarURL;
    
       
    }
});

emailInput.addEventListener("input", function() {
   
    const emailError = document.getElementById("email-error");
    
    if (!emailInput.checkValidity()) {
    emailError.classList.remove("hidden");
    emailInput.style.border = "2px solid hsl(7, 88%, 67%)"; 
} else {
    emailError.classList.add("hidden");
    emailInput.style.border = "1px solid hsl(245, 15%, 58%)";
}
});