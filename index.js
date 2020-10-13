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