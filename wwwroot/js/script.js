document.addEventListener('DOMContentLoaded', async () => {

    const plantGrid = document.getElementById('plant-grid');
    const modal = document.getElementById('plant-modal');
    const modalBody = document.getElementById('modal-body');
    const closeModalButton = document.getElementById('close-modal');

    let todasLasPlantas = [];

    async function fetchPlantas() {
        try {
            const response = await fetch('/api/plantas');
            todasLasPlantas = await response.json();
            renderGrid();
        } catch (error) {
            console.error("Error al cargar las plantas:", error);
            plantGrid.innerHTML = "<p>No se pudieron cargar los datos de las plantas desde la base de datos.</p>";
        }
    }

    function renderGrid() {
        plantGrid.innerHTML = '';
        todasLasPlantas.forEach(planta => {
            const card = document.createElement('div');
            card.classList.add('plant-card');
            card.dataset.id = planta.id;

            card.innerHTML = `
                <img src="${planta.imagen}" alt="${planta.nombre}">
                <div class="plant-card-info">
                    <h3>${planta.nombre}</h3>
                    <p>${planta.origen}</p>
                </div>
            `;
            
            card.addEventListener('click', () => openModal(planta.id));
            
            plantGrid.appendChild(card);
        });
    }

    function openModal(plantaId) {
        const planta = todasLasPlantas.find(p => p.id === plantaId);
        if (!planta) return;

        modalBody.innerHTML = `
            <img src="${planta.imagen}" alt="${planta.nombre}">
            <h2>${planta.nombre}</h2>
            <p><strong>Especie:</strong> ${planta.especie}</p>
            <p><strong>Origen:</strong> ${planta.origen}</p>
            <p><strong>Altura Máxima:</strong> ${planta.alturaMaxima}</p>
            <hr>
            <p>${planta.notas}</p>
        `;
        
        modal.style.display = 'flex';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    closeModalButton.addEventListener('click', closeModal);
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    await fetchPlantas();
});