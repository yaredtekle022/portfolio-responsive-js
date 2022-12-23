document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();

  // get values from the form
  const username = document.getElementById('fname').value.trim();
  const email = document.getElementById('email').value.trim();
  const textarea = document.getElementById('textarea').value.trim();

  if (!username || !email || !textarea) {
    return;
  }

  // saving inputs
  const userInfo = {
    username,
    email,
    textarea,
  };

  localStorage.setItem('userInfo', userInfo);
});
