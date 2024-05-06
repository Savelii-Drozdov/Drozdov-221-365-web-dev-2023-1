//http://exam-2023-1-api.std-900.ist.mospolytech.ru/api/orders 
// http://exam-2023-1-api.std-900.ist.mospolytech.ru/api/routes?api_key=ff1c575c-8565-4a6d-8663-4aea8fb95b46


fetch("http://exam-2023-1-api.std-900.ist.mospolytech.ru/api/routes/2/guides?api_key=ff1c575c-8565-4a6d-8663-4aea8fb95b46")




document.addEventListener('DOMContentLoaded', function () {
    const routesTableBody = document.getElementById('routesTableBody'); 
    const pagination = document.getElementById('pagination'); 
    const searchInput = document.getElementById('searchInput'); 
    const searchButton = document.querySelector('.btn-primary');
    
    let currentPage = 1;
    const itemsPerPage = 10; 
    let allRoutesData = []; 

    function getRoutesData() {
        const apiUrl = `http://exam-2023-1-api.std-900.ist.mospolytech.ru/api/routes?api_key=ff1c575c-8565-4a6d-8663-4aea8fb95b46`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                allRoutesData = data; 
                updateTable(currentPage);
            })
            .catch(error => {
                console.error('Ошибка получения данных о маршрутах:', error);
            });
    };
    getRoutesData();


    

    searchButton.addEventListener('click', function () {
        event.preventDefault(); 

        const searchTerm = searchInput.value.toLowerCase(); 

       
        const filteredRoutes = allRoutesData.filter(route => {
            return route.name.toLowerCase().includes(searchTerm);
        });

        
        routesTableBody.innerHTML = '';
        filteredRoutes.forEach(route => {
            const row = document.createElement('tr');
            const nameCell = document.createElement('td');
            const descriptionCell = document.createElement('td');
            const objectsCell = document.createElement('td');
            const buttonCell = document.createElement('td');
            const selectButton = document.createElement('button');

            nameCell.textContent = route.name;
            descriptionCell.textContent = route.description;
            objectsCell.textContent = route.mainObject;

            selectButton.textContent = 'Выбрать';
            selectButton.classList.add('btn', 'btn-secondary', 'selectRouteBtn');
            selectButton.addEventListener('click', function () {
                row.classList.toggle('selected');
            });

            buttonCell.appendChild(selectButton);

            row.appendChild(nameCell);
            row.appendChild(descriptionCell);
            row.appendChild(objectsCell);
            row.appendChild(buttonCell);

            routesTableBody.appendChild(row);
        });

        
    });

    function updateTable(page) {

        routesTableBody.innerHTML = '';
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const routesData = allRoutesData.slice(startIndex, endIndex);

        routesData.forEach(route => {
            const row = document.createElement('tr');
            const nameCell = document.createElement('td');
            const descriptionCell = document.createElement('td');
            const objectsCell = document.createElement('td');
            const buttonCell = document.createElement('td');
            const selectButton = document.createElement('button');

            nameCell.textContent = route.name;
            descriptionCell.textContent = route.description;
            objectsCell.textContent = route.mainObject;

            selectButton.textContent = 'Выбрать';
            selectButton.classList.add('btn', 'btn-secondary', 'selectRouteBtn');
            selectButton.addEventListener('click', function () {
                row.classList.toggle('selected');
            });

            buttonCell.appendChild(selectButton);

            row.appendChild(nameCell);
            row.appendChild(descriptionCell);
            row.appendChild(objectsCell);
            row.appendChild(buttonCell);

            routesTableBody.appendChild(row);
        });

        createPagination();
    }

    function createPagination() {

        pagination.innerHTML = '';
        const totalPages = Math.ceil(allRoutesData.length / itemsPerPage);

        for (let i = 1; i <= totalPages; i++) {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.classList.add('page-link');
            a.href = '#';
            a.textContent = i;

            if (i === currentPage) {
                li.classList.add('page-item', 'active');
            } else {
                li.classList.add('page-item');
            }

            a.addEventListener('click', function (event) {
                event.preventDefault();
                currentPage = i;
                updateTable(currentPage);
            });

            li.appendChild(a);
            pagination.appendChild(li);
        }
    }

});