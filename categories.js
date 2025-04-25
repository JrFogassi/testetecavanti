document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.categories-container');
    const toggleButton = document.querySelector('.categories-toggle');
    const departments = document.querySelectorAll('.categories-department');
    const panel = document.querySelector('.categories-panel');
    const dropdown = document.querySelector('.categories-dropdown');
    const overlay = document.createElement('div');
    overlay.className = 'panel-overlay';
    document.body.appendChild(overlay);

    const closeAll = () => {
        container.classList.remove('active');
        panel.classList.remove('active');
        overlay.classList.remove('active');
        document.removeEventListener('click', handleOutsideClick);
    };
    
    const handleOutsideClick = (e) => {
        // Se clicou diretamente no overlay OU fora de ambos os elementos
        if (e.target === overlay || (!container.contains(e.target) && !panel.contains(e.target))) {
            closeAll();
        }
    };
    
    // Configuração do overlay
    overlay.addEventListener('click', handleOutsideClick);
    
    // No seu toggleButton event listener:
    if (toggleButton) {
        toggleButton.addEventListener('click', (e) => {
            e.stopPropagation();
            
            if (panel.classList.contains('active')) {
                closeAll();
                return;
            }
            
            container.classList.toggle('active');
            
            if (container.classList.contains('active')) {
                document.addEventListener('click', handleOutsideClick);
            } else {
                document.removeEventListener('click', handleOutsideClick);
            }
        });
    }
    // biome-ignore lint/complexity/noForEach: <explanation>
        departments.forEach(dept => {
        dept.addEventListener('click', function(e) {
            if (e.target.tagName === 'IMG') return;
            
            e.stopPropagation();
            
            // biome-ignore lint/complexity/noForEach: <explanation>
            departments.forEach(d => d.classList.remove('active'));
            this.classList.add('active');
            
            panel.style.height = `${dropdown.offsetHeight}px`;
            panel.classList.add('active');
            overlay.classList.add('active');
            container.classList.add('active'); 
            
            document.addEventListener('click', handleOutsideClick);
        });
    });

    const generateCategories = () => {
        const columns = document.querySelectorAll('.category-column');
        // biome-ignore lint/complexity/noForEach: <explanation>
        columns.forEach(column => {
            const list = column.querySelector('.category-list');
            list.innerHTML = '';
            
            for (let i = 0; i < 8; i++) {
                const item = document.createElement('p');
                // biome-ignore lint/style/useTemplate: <explanation>
                item.textContent = 'Categoria ' + (i + 1);
                list.appendChild(item);
            }
        });
    };
    generateCategories();
});