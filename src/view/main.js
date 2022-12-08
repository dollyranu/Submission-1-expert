import restaurant from "../DATA.json";

const main = () => {
    const renderRestaurant = () => {
        restaurant.restaurants.forEach ((restaurant) => {
            const boxRestaurant = document.querySelector(".postCard");
            boxRestaurant.innerHTML += `
            <article class="item">
              <img class="konten-gambar" src="${restaurant.pictureId}" width="300px" height="300px" alt="gambar restoran>
              <div class="konten-info">
                <p class="konten-kota">${restaurant.city}</p>
                <h1 class="konten-nama">${restaurant.name}</h1>
                <h3 class="konten-rating">Rating: ${restaurant.rating}</h3>
                <p class="konten-deskripsi">${restaurant.description}</p>
              </div>
            </article>
            `;
        });
    };
renderRestaurant();
};
export default main;