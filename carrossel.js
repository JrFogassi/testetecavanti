document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.carrossel-container');
    const sections = document.querySelectorAll('.section');
    const prevBtn = document.querySelector('.carrossel-prev');
    const nextBtn = document.querySelector('.carrossel-next');
    const indicators = document.querySelectorAll('.carrossel-indicators button');
    let currentIndex = 0;

    function updateCarrossel() {
        const sectionWidth = document.querySelector('.carrossel-wrapper').offsetWidth;
        container.style.transform = `translateX(-${currentIndex * sectionWidth}px)`;
        
        
        prevBtn.disabled = currentIndex <= 0;
        nextBtn.disabled = currentIndex >= sections.length - 1;
        
        
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active-indicator');
                indicator.classList.remove('indicator');
            } else {
                indicator.classList.add('indicator');
                indicator.classList.remove('active-indicator');
            }
        });
    }

    // Event listeners para setas
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarrossel();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < sections.length - 1) {
            currentIndex++;
            updateCarrossel();
        }
    });

    
    // biome-ignore lint/complexity/noForEach: <explanation>
        indicators.forEach(indicator => {
        indicator.addEventListener('click', () => {
            currentIndex = Number.parseInt(indicator.dataset.index);
            updateCarrossel();
        });
    });

    
    updateCarrossel();
    window.addEventListener('resize', updateCarrossel);
});