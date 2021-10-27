const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("search-btn");
const countryContainer = document.getElementById("country-container");
const errorDiv = document.getElementById('error')
searchBtn.addEventListener("click", function(){
 const search = searchInput.value;
 if(search === ""){
    errorDiv  = "search field cann't empty"
    return;
 }
 countryContainer.innerHTML = "";

 
const url = `https://restcountries.com/v3.1/name/${search}`;
fetch(url)
.then((res) => res.json())
.then((data) => showData(data));
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
                <button class="btn btn-dark">Learn More</button>
              </div>
        `;
        countryContainer.appendChild(div)
    
    });
    
};














