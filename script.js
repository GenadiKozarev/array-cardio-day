const inputs = document.querySelectorAll('.controls input');
function handleUpdate() {
    // extract the custom data attribute but have a fallback
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
// the 'input' event handles the changes while a user is using the range slider
inputs.forEach(input => input.addEventListener('input', handleUpdate));
