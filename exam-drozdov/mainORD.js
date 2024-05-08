//http://exam-2023-1-api.std-900.ist.mospolytech.ru/api/orders?api_key=ff1c575c-8565-4a6d-8663-4aea8fb95b46
// http://exam-2023-1-api.std-900.ist.mospolytech.ru/api/routes?api_key=ff1c575c-8565-4a6d-8663-4aea8fb95b46








document.addEventListener('DOMContentLoaded', function () {
   
   
   
    const orderTableBody = document.getElementById('orderTableBody');


    let currentPageO = 1;

    const itemsPerPage = 10; 

    let allOrderData =[];

  

    function getOrderData() {
        const apiUrl = `http://exam-2023-1-api.std-900.ist.mospolytech.ru/api/orders?api_key=ff1c575c-8565-4a6d-8663-4aea8fb95b46`;
        
        fetch(apiUrl)
            .then(response => response.json())
            .then(dataO => {
                allOrderData = dataO; 
                // updataOrd(currentPageO);
                console.log(allOrderData)
            })
            // .catch(error => {
            //     console.error('Ошибка получения данных о запросах:', error);
            // });
    };

  
    getOrderData();





//////////
    function updataOrd(page) {
        orderTableBody.innerHTML = '';
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const ordData = allOrderData.slice(startIndex, endIndex);

        ordData.forEach(ord => {
            // <th scope="col">Номер заявки</th>
            // <th scope="col">ФИО гида</th>
            // <th scope="col">Дата</th>
            // <th scope="col">Время</th>
            // <th scope="col">Длительность</th>
            // <th scope="col">Количество</th>
            // <th scope="col">Стоимость</th>
            const row = document.createElement('tr');
            const numOrd = document.createElement('td');
            const nameGitOrd = document.createElement('td');
            const dateOrd = document.createElement('td');
            const timeOrd = document.createElement('td');
            const longOrd = document.createElement('td');
            const peopleOrd = document.createElement('td');
            const moneyOrd = document.createElement('td');
           
            // const buttonGit = document.createElement('td');
            // const selectButtonGit = document.createElement('button');

            numOrd.textContent = ord;
            nameGitOrd.textContent = ord;
            dateOrd.textContent = ord;
            timeOrd.textContent = ord;
            longOrd.textContent = ord;
            peopleOrd.textContent = ord;
            moneyOrd.textContent = ord;
            
        
            row.appendChild(numOrd);
            row.appendChild(nameGitOrd);
            row.appendChild(dateOrd);
            row.appendChild(timeOrd);
            row.appendChild(longOrd)
            row.appendChild(peopleOrd);
            row.appendChild(moneyOrd);
            
            // row.appendChild(buttonGit)


            orderTableBody.appendChild(row);
        });


        
    };


});