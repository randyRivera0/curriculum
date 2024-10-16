document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.toggle-button').addEventListener('click', function() {
        const content = document.querySelector('.content');
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
            this.textContent = 'Hide Section';
        } else {
            content.style.display = 'none';
            this.textContent = 'Show Section';
        }
    });
});
