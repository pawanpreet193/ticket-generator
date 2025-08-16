const form = document.querySelector('form');
const ticket = document.getElementById('ticket');

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


    
    ticket.classList.remove('hidden');
    document.querySelector(".initial").classList.add("hidden");

});