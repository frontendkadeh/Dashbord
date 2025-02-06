const darkModeBtn = document.querySelector('#btn-dark-mode');



if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  darkModeBtn.addEventListener('click' , () => {
    if(document.documentElement.classList.contains('dark')) {
        localStorage.theme = 'light';
        document.documentElement.classList.remove('dark')
    }else {
        localStorage.theme = 'dark';
        document.documentElement.classList.add('dark')
    }
    location.reload();
  })