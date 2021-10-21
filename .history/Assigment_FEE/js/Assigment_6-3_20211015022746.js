window.onload = function () {
  const all = document.querySelector("#all");
  const cake = document.querySelector("#cake");
  const cupCake = document.querySelector("#cupcake");
  const sweet = document.querySelector("#sweet");
  const doughnut = document.querySelector("#doughnut");
  const form = document.querySelector("#form-input");
  const findCake = document.querySelector("#find-cake");
  const show = document.querySelector("#show-cake");

  var listCake = [
    {
      type: "Cake",
      price: "$5",
      imageCake:
        "https://www.saigonflowers.com/wp-content/uploads/2020/06/Cakes-Delivery-Da-Nang-1306.jpg",
    },
    {
      type: "Sweets",
      price: "$7",
      imageCake:
        "https://food-images.files.bbci.co.uk/food/recipes/fairycakes_93711_16x9.jpg",
    },
    {
      type: "Cup Cake",
      price: "$5",
      imageCake:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVPcYnQMtY_WeVSJ1vDvShNmz2P-BbT6uL8w&usqp=CAU",
    },
    {
      type: "Cup Cake",
      price: "$5",
      imageCake:
        "https://static.onecms.io/wp-content/uploads/sites/9/2021/06/09/orange-cardamom-butter-cakes-with-rose-water-icing-FT-RECIPE0721.jpg",
    },
    {
      type: "Doughnuts",
      price: "$10",
      imageCake:
        "https://images.foody.vn/res/g100/990925/prof/s576x330/foody-upload-api-foody-mobile-1-200722093441.jpg",
    },
    {
      type: "Cake",
      price: "$7",
      imageCake:
        "https://img.taste.com.au/DqTMY6Cz/taste/2018/08/smarties-chocolate-cake-139872-2.jpg",
    },
  ];

  // Show tat ca banh
  all.addEventListener("click", showAll);
  function showAll() {
    show.innerHTML = "";
    listCake.forEach((list) => {
      var col = document.createElement("div");
      col.classList.add("col-4", "mb-3");
      var card = document.createElement("div");
      card.classList.add("card");
      var img = document.createElement("img");
      img.classList.add("card-img-top");
      img.src = list.imageCake;
      var a = document.createElement("a");
      a.classList.add("card-body", "d-flex", "justify-content-between");
      var title = document.createElement("h5");
      title.classList.add("card-title");
      title.innerHTML = list.type;
      var gia = document.createElement("h5");
      gia.innerHTML = list.price;

      a.appendChild(title);
      a.appendChild(gia);

      card.appendChild(img);
      card.appendChild(a);

      col.appendChild(card);

      show.appendChild(col);
    });
  }

  // Show nhung banh CAKES
  cake.addEventListener("click", showCakes);
  function showCakes() {
    var cakes = listCake.filter((listCake) => listCake.type == "Cake");

    cakes.forEach((list) => {
      var col = document.createElement("div");
      col.classList.add("col-4", "mb-3");
      var card = document.createElement("div");
      card.classList.add("card");
      var img = document.createElement("img");
      img.classList.add("card-img-top");
      img.src = list.imageCake;
      var a = document.createElement("a");
      a.classList.add("card-body", "d-flex", "justify-content-between");
      var title = document.createElement("h5");
      title.classList.add("card-title");
      title.innerHTML = list.type;
      var gia = document.createElement("h5");
      gia.innerHTML = list.price;

      a.appendChild(title);
      a.appendChild(gia);

      card.appendChild(img);
      card.appendChild(a);

      col.appendChild(card);

      show.appendChild(col);
    });
  }
};
