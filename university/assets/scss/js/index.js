const div = document.getElementById('productsList')
const btnn = document.getElementById('pagi')
const btn = document.getElementById('btn')
const inpp = document.getElementById('inpp')
const list = document.querySelector('.list')
const abc = document.getElementById('abc')
const abcd = document.getElementById('abcd')


let page = 1
let limit = 3

async function getProducts() {
    let skip = (page - 1) * limit;
    try {
        const response = await axios.get(`https://655c81de25b76d9884fd6913.mockapi.io/products?page=${page}&limit=${limit}&skip=${skip}`);
        const data = response.data;
        db = data

        data.forEach(item => {
            const box = document.createElement('div');
            box.className = 'boxDiv';
            box.innerHTML = `            
                <img class="apiimage" src="${item.image}" alt="">                    
                <p class='title'>${item.name}</p>
                <p class='title'>${item.date}</p>
                <button class="addtobasketbtn" onclick="addToBasket(${item.id})">Add to basket</button>

                `;
            div.appendChild(box);
        });
        page++;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

btnn.addEventListener('click', getProducts)

function addToBasket (id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(db.find(item => item.id == id))
    localStorage.setItem('cart', JSON.stringify(cart))
}
window.onload = () => {
    getProducts()
}


const nameinp = document.getElementById("nameinp");
const surnameinp = document.getElementById("surnameinp")
const ageinp = document.getElementById("ageinp")
const studentID = document.getElementById("idinp")
const myform = document.getElementById("formm")

function axiosPost(event) {
   event.preventDefault()
    axios.post("https://6568118f9927836bd9740ce4.mockapi.io/basket/basket", {
        name: nameinp.value,
        surname: surnameinp.value,
        age: ageinp.value,
        studentID: studentID.value
    })
}
myform.addEventListener('submit', axiosPost)
function findByName() {
    console.log("basildi");
    abc.style.display = "none";
    abcd.style.display = "block";
    axios
      .get(`https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products`)
      .then((res) => {
        db = res.data;
        console.log(db);
        let filteredData = db.filter(item => item.name.toLowerCase().startsWith(inpp.value))
        console.log(filteredData);

        filteredData.map((item) => {
          let myDiv = document.createElement("div");
          myDiv.className = "myDiv col-xl-12 col-lg-12 col-md-12 col-sm-12";
          myDiv.innerHTML = `
          <p>${item.name}</p>
         
          `;
          abcd.appendChild(myDiv);
        });
      });
  }

abc.addEventListener('click', findByName)

function findByName() {
    abc.style.display = "none";
    abcd.style.display = "block";
    axios
      .get(
        `https://655c83b725b76d9884fd6e9b.mockapi.io/products`
      )
      .then((res) => {
        db = res.data;
        let filteredData = db.filter(item => item.title.toLowerCase().startsWith(inpp.value.toLowerCase()))
        filteredData.map((item) => {
          let myDiv = document.createElement("div");
          myDiv.className = "myDiv";
          myDiv.innerHTML = `
          <p>${item.title}</p>
          `;
          abcd.appendChild(myDiv);
        });
      });
  }

