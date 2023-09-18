const goBackBtn = document.getElementById('back');

goBackBtn.addEventListener('click', (e) => {
      e.preventDefault();

      history.back() // takes us back one step.
})