function toggleMode() {
  const root = document.documentElement;
  const currentBg = getComputedStyle(root).getPropertyValue('--bg').trim();

  if (currentBg === '#ffffff') {
    root.style.setProperty('--bg', '#121212');
    root.style.setProperty('--text', '#ffffff');
  } else {
    root.style.setProperty('--bg', '#ffffff');
    root.style.setProperty('--text', '#000000');
  }
}

function submitForm(event) {
  event.preventDefault();
  alert("Thank you! Your message has been sent.");
}