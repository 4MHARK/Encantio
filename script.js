document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.querySelector('.faq-answer');
        const isActive = item.classList.contains('active');

        // Close all other open items
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-answer').style.maxHeight = '0';
            }
        });

        // Toggle the clicked item
        if (!isActive) {
            item.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            item.classList.remove('active');
            answer.style.maxHeight = '0';
        }
    });
});


  document.getElementById('menuToggle').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('active');
  });

