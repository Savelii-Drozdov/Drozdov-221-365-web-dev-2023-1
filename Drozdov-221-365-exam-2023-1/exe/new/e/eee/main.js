












//http://exam-2023-1-api.std-900.ist.mospolytech.ru/api/orders 
// http://exam-2023-1-api.std-900.ist.mospolytech.ru/api/routes?api_key=ff1c575c-8565-4a6d-8663-4aea8fb95b46


fetch("http://exam-2023-1-api.std-900.ist.mospolytech.ru/api/routes/2/guides?api_key=ff1c575c-8565-4a6d-8663-4aea8fb95b46")
.then(response => response.json())
.then(json => data(json));


const data = json => {
    json = json.map(x => {
       delete x["coords"];
       delete x["created_at"];
       return x;
    });

    console.log(json);
    getheader(Object.keys(json[0]));
    getTbData(json);
};


const getheader = fields =>{
    console.log(fields);
    const table = document.querySelector(".table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const fragment = document.createDocumentFragment();
    fields.forEach(x => {
        const th = document.createElement("th")
        th.innerText = x;
        th.scope = "col";
        fragment.appendChild(th)
    });

    tr.appendChild(fragment);
    thead.appendChild(tr);
    table.appendChild(thead );

};


const getTbData = data  =>{
    console.log(data);
    const table = document.querySelector(".table");
    const tbody = document.createElement("tbody");
    data.forEach(x => {
    
    const tr = document.createElement("tr");
    const fragment = document.createDocumentFragment();
    const keys = Object.keys(data[0]);
    

    keys.forEach(y => {
        let td = undefined;
        if (y === "id"){
            td = document.createElement("th");
            td.scope = "row";
        }
        else{
            td = document.createElement("td");
        }
        td.innerText = x[y];
        fragment.appendChild(td);
    });

    
    tr.appendChild(fragment);
    tbody.appendChild(tr);
    table.appendChild(tbody);

    });
};





function preLoadCalculations(){
    array = getData
    arrayLength = array.length
    maxIndex = arrayLength / tableSize

    if((arrayLength % tableSize) > 0){
        maxIndex++
    }
}



function displayIndexBtn(){
    preLoadCalculations()

    const pagination = document.querySelector('.pagination')

    pagination.innerHTML = ""

    pagination.innerHTML = '<button onclick="prev()" class="prev">Previous</button>'

    for(let i=1; i<=maxIndex; i++){
        pagination.innerHTML += '<button onclick= "paginationBtn('+i+')" index="'+i+'">'+i+'</button>'
    }

    pagination.innerHTML += '<button onclick="next()" class="next">Next</button>'

    highlightIndexBtn()
}
