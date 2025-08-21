document.addEventListener('DOMContentLoaded', () => {
    
    const plantGrid = document.getElementById('plant-grid');
    const modal = document.getElementById('plant-modal');
    const modalBody = document.getElementById('modal-body');
    const closeModalButton = document.getElementById('close-modal');

    // Función para renderizar la galería de plantas
    function renderGrid() {
        plantGrid.innerHTML = ''; // Limpiar la grilla
        plantasNativasPeru.forEach(planta => {
            const card = document.createElement('div');
            card.classList.add('plant-card');
            card.dataset.id = planta.id; // Guardamos el ID en el elemento

            card.innerHTML = `
                <img src="${planta.imagen}" alt="${planta.nombre}">
                <div class="plant-card-info">
                    <h3>${planta.nombre}</h3>
                    <p>${planta.origen}</p>
                </div>
            `;
            
            // Evento para abrir el modal al hacer clic en la tarjeta
            card.addEventListener('click', () => openModal(planta.id));
            
            plantGrid.appendChild(card);
        });
    }

    // Función para abrir el modal con la información de una planta
    function openModal(plantaId) {
        const planta = plantasNativasPeru.find(p => p.id === plantaId);
        if (!planta) return;

        modalBody.innerHTML = `
            <img src="${planta.imagen}" alt="${planta.nombre}">
            <h2>${planta.nombre}</h2>
            <p><strong>Especie:</strong> ${planta.especie}</p>
            <p><strong>Origen:</strong> ${planta.origen}</p>
            <p><strong>Altura Máxima:</strong> ${planta.altura_maxima}</p>
            <hr>
            <p>${planta.notas}</p>
        `;
        
        modal.style.display = 'flex';
    }

    // Función para cerrar el modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Asignar eventos a los botones y al overlay
    closeModalButton.addEventListener('click', closeModal);
    modal.addEventListener('click', (event) => {
        // Cierra el modal solo si se hace clic en el fondo gris
        if (event.target === modal) {
            closeModal();
        }
    });

    // Carga inicial de datos
    renderGrid();
});