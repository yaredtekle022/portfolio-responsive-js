const usernameInput = document.getElementById('fname');
const emailInput = document.getElementById('email');
const textareaInput = document.getElementById('textarea');

// check local storage for user

const userInfo = JSON.parse(localStorage.getItem('userInfo'));
if (userInfo) {
  usernameInput.value = userInfo.username;
  emailInput.value = userInfo.email;
  textareaInput.value = userInfo.textarea;
}

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();

  // get values from nput
  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const textarea = textareaInput.value.trim();

  if (!username || !email || !textarea) {
    return;
  }

  // saving inputs
  const userInfo = {
    username,
    email,
    textarea,
  };

  localStorage.setItem('userInfo', JSON.stringify(userInfo));
});
