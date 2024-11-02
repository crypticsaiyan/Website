const themeButton = document.getElementById('theme');
        let isInverted = false;

        themeButton.addEventListener('click', () => {
            if (isInverted) {
                document.body.style.filter = 'none';
            } else {
                document.body.style.filter = 'invert(1)';
            }
            isInverted = !isInverted; // Toggle the inversion state
        });

