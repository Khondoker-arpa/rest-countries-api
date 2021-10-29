const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('search-btn');
const countryContainer = document.getElementById("country-container");
const errorDiv = document.getElementById('error')
const countryInfo = document.getElementById('country-details')
const spinner = document.getElementById("spinner")
searchBtn.addEventListener("click", function(){
 const search = searchInput.value;
 if(search === ""){
    errorDiv  = "search field cann't empty"
    return;
 }
 countryContainer.innerHTML = "";
countryInfo.innerHTML = "";
 
const url = `https://restcountries.com/v3.1/name/${search}`;
spinner.classList.remove(" d-none")
fetch(url)
.then((res) => res.json())
.then((data) => showData(data))
.finaly(() => searchInput.value === "")
});

function showData(countryArray){
    
        if (countryArray.status === 404) {
            errorDiv.innerText = '';
        }
        else{
        errorDiv.innerText = 'No result found'
        }
    data.forEach((item) => {
        
        const div = document.createElement('div')
        div.classList.add('col-md-3')
        div.innerHTML = `
        <div class="rounded overflow-hidden border p-2">
                <img
                  src="${item.flags}"
                  class="w-100"
                  alt=""
                />
              </div>
              
              <div
                class="
                  py-2
                  d-flex
                  justify-content-between
                  align-items-center
                  d-md-block
                  text-md-center
                "
              >
                <h1>${item.name}</h1>
                <button onclick="showDetails('${item.alpha3Code}')" class="btn btn-dark">Learn More</button>
              </div>
        `;
        countryContainer.appendChild(div);
    
    });
    
};

function showDetails(countryDetails){
    fetch(`https://restcountries.com/v3.1/alpha/${countryDetails}`)
    .then(res => res.json())
    .then(data => {
        //data = object
        //data.currencies = array
        //data.currencies[0] = object
        //data.curriencies[0].name
     countryInfo.innerHTML = `
     <div class="col-md-12"></div>
     <h1>${data.name}</h1>
     <p>Capital:${data.capital}</p>
     <p>Curriencies Name:${data.curriencies[0].name}</p>
      <p>Curriencies Symbol:${data.curriencies[0].symbol}</p>`;


    });
}














