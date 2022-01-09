var input = document.querySelectorAll('.controls input');

function handleUpdate() {
    var suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

input.forEach(input => input.addEventListener('change', handleUpdate))
