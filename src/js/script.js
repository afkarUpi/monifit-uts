document.addEventListener("DOMContentLoaded", function() {
    fetch('./components/sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('the-monifit-sidebar').innerHTML = data;
        })
        .catch(error => console.error('Sidebar Error while loading:', error));
});
