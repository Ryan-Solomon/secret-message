const { hash } = window.location;

const message = atob(hash.replcace('#', ''))

if (message) {
    document.querySelector('#message-form').classList.add('hide')
    const showMessage = document.querySelector('#show-message')
    showMessage.querySelector('h1').textContent = message;
    showMessage.classList.remove('hide')
}


document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('#message-input')
    const encrypted = btoa(input.value)
    const linkInput = document.querySelector('#link-input')
    linkInput.value = `${window.location}#${encrypted}`
    linkInput.select();
})


document.querySelector('btn').addEventListener('click', () => {
    document.querySelector('#message-form').classList.add('hide')
    document.querySelector('#share-message').classList.remove('hide')
})