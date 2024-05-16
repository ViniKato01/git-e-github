const users = [
    { username: 'vinynichan', password: 'linkinviny'},
    { username: 'victykato', password: 'bitikun1'},
]

function login(username, password){
    const user = users.find(user => user.username === username);
    if(!user){
        return false;
    }
    if(user.password === password){
        return true;
    }
  return false;  
}

const username = 'vinynichan';
const password = 'linkinviny';

if(login(username, password)){
    console.log('Login Successfull!');    
}else{
    console.log('Invalid Username or Password.');
}