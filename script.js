const products = [
    {
      name: "Mars rug",
      price: 100,
      quantity: 24,
    },
    {
      name: "Keyboard sticker",
      price: 49,
      quantity: 11,
      image: "https://cdn-icons-png.flaticon.com/512/9909/9909877.png"
    },
    {
      name: "Smart watch",
      price: 899,
      quantity: 4,
      image: "https://cdn-icons-png.flaticon.com/512/2920/2920244.png"
    },
    {
      name: "Wireless keyboard",
      price: 350,
      quantity: 0,
      image: "https://cdn-icons-png.flaticon.com/512/1812/1812696.png"
    },
    {
      name: "Mouse",
      price: 359,
      quantity: 24,
      image: "https://cdn-icons-png.flaticon.com/512/186/186239.png"
    },
    {
      name: "AirPods",
      price: 499,
      quantity: 11,
      image: "https://cdn-icons-png.flaticon.com/512/5977/5977566.png"
    },
    {
      name: "Powerbank",
      price: 899,
      quantity: 7,
      image: "https://cdn-icons-png.flaticon.com/512/3097/3097190.png"
    }
  ];

  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const productsContainer = document.getElementById("productsContainer");
  
 
  function displayProducts(list) {
    productsContainer.innerHTML = "";
  
    list.map(item => {
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `
        <h3>${item.name}</h3>
        <p>💰 Narxi: ${item.price} Coins</p>
        <p>📦 Qoldiq: ${item.quantity} dona</p>
      `;
      productsContainer.appendChild(div);
    });
  }
  
  let availableProducts = products.filter(product => product.quantity > 0);
  displayProducts(availableProducts);
  
  searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim().toLowerCase();
  
    let found = availableProducts.filter(product =>
      product.name.toLowerCase().includes(query)
    );
  
    let namesOnly = found.map(product => product.name);
    console.log("Найденные названия:", namesOnly);
  
    displayProducts(found);
  });  