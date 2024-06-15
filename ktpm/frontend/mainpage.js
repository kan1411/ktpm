$(document).ready(function() {
    var name = localStorage.getItem('name'); 
    if (name) {
        $('#username-display').text(name);
    }

    $('#logout-button').click(function() {
        localStorage.removeItem('username');
        localStorage.removeItem('name');
        window.location.href = 'login.html'; 
    });
});
