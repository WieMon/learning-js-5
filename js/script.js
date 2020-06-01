const input = document.getElementById('pass');
const div = document.querySelector('.message');
const passwords = ['user', 'spring'];
const messages = ['goodbye', 'season'];

input.addEventListener('input', (e) => {
  div.textContent = '';
  const text = e.target.value;

  //console.log(e.target.value);
  //console.log(this.value);
  passwords.forEach((password, index) => {
    if(password === text) {
      div.textContent = messages[index];
      e.target.value = '';
    }
  })
})

input.addEventListener('focus', (e) => {
  e.target.classList.add('active');
})

input.addEventListener('blur', (e) => {
  e.target.classList.remove('active');
})