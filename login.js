const userData = {
    username: 'vinikato',
    password: 'chapokafifa'
};

function login(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    if(username === userData.username && password === userData.password){
        messageElement.textContent = 'Login Successful!';
        messageElement.style.color = 'green';
        // Redirect to a new page or perform some action
        window.location.href = 'welcome.html';
    }else{
        messageElement.textContent = 'Invalid username or password'
    }
    // Prevent form submission:
    
    return false;
}