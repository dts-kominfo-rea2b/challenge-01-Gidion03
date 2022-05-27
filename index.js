// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
  name: "Monica",
  gender: "Female",
  age: 17,
  email: "monica@dingdong.com",
  favoriteColor: ["Yellow", "Pink", "white", "Purple"],
  isHavePet: "yes",
  education: [
    { name: "SD O1", city: "jakarta", graduate: 2016 },
    { name: "SMP O2", city: "jakarta", graduate: 2019 },
    { name: "SMA O3", city: "Tanggerang" },
  ],
  favoriteRestaurant: [
    "Bento",
    "Sushi",
    "Pancake",
    "Eggy",
    "Tempura",
    "Bento",
    "Eggy",
    "Padang",
    "Tteok",
    "Sushi",
    "Sushi",
  ],
};
const secondUser = {
  name: "Wendy",
  gender: "Male",
  age: 23,
  email: "Wendy@dingdong.com",
  favoriteColor: ["Blue", "Black", "Grey"],
  isHavePet: "No",
  education: [
    { name: "SD O2", city: "jakarta", graduate: 2010 },
    { name: "SMP O3", city: "Bogor", graduate: 2013 },
    { name: "SMA O1", city: "Surabaya", graduate: 2016 },
    { name: "Universitas Maju", city: "Tanggerang" },
  ],
  favoriteRestaurant: [
    "Bento",
    "Sushi",
    "Pancake",
    "Eggy",
    "Tempura",
    "Bento",
    "Eggy",
    "Padang",
    "Tteok",
    "Sushi",
    "Sushi",
  ],
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];

users.push(firstUser, secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = {
  users,
};
