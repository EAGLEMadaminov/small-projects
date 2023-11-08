// Typed js
// let salom = "Hammaga salom!";
// let h1 = document.querySelector("h1");

// (function type(str) {
//   let direction = "inc";
//   setInterval(() => {
//     if (h1.textContent.length === str.length) {
//       direction = "dec";
//     } else if (h1.textContent.length === 0) {
//       direction = "inc";
//     }
//     if (direction === "inc") {
//       h1.textContent += str[h1.textContent.length];
//     } else {
//       h1.textContent = h1.textContent.slice(0, h1.textContent.length - 1);
//     }
//   }, 300);
// })(salom);

let users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications",
    },
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990",
      },
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services",
    },
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
      geo: {
        lat: "-31.8129",
        lng: "62.5342",
      },
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
      name: "Keebler LLC",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems",
    },
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    address: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
      zipcode: "23505-1337",
      geo: {
        lat: "-71.4197",
        lng: "71.7478",
      },
    },
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    company: {
      name: "Considine-Lockman",
      catchPhrase: "Synchronised bottom-line interface",
      bs: "e-enable innovative applications",
    },
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    address: {
      street: "Rex Trail",
      suite: "Suite 280",
      city: "Howemouth",
      zipcode: "58804-1099",
      geo: {
        lat: "24.8918",
        lng: "21.8984",
      },
    },
    phone: "210.067.6132",
    website: "elvis.io",
    company: {
      name: "Johns Group",
      catchPhrase: "Configurable multimedia task-force",
      bs: "generate enterprise e-tailers",
    },
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    address: {
      street: "Ellsworth Summit",
      suite: "Suite 729",
      city: "Aliyaview",
      zipcode: "45169",
      geo: {
        lat: "-14.3990",
        lng: "-120.7677",
      },
    },
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
    company: {
      name: "Abernathy Group",
      catchPhrase: "Implemented secondary concept",
      bs: "e-enable extensible e-tailers",
    },
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    address: {
      street: "Dayna Park",
      suite: "Suite 449",
      city: "Bartholomebury",
      zipcode: "76495-3109",
      geo: {
        lat: "24.6463",
        lng: "-168.8889",
      },
    },
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    company: {
      name: "Yost and Sons",
      catchPhrase: "Switchable contextually-based project",
      bs: "aggregate real-time technologies",
    },
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
      geo: {
        lat: "-38.2386",
        lng: "57.2232",
      },
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    company: {
      name: "Hoeger LLC",
      catchPhrase: "Centralized empowering task-force",
      bs: "target end-to-end models",
    },
  },
];
let elContainer = document.querySelector(".container");
let elForm = document.querySelector("form");

let displayUser = (item) => {
  let elInfo = document.createElement("div");
  elInfo.classList.add("info");
  let elHeadInfo = document.createElement("div");
  elHeadInfo.classList.add("head-info");
  let elName = document.createElement("h1");
  let elUserName = document.createElement("p");
  elUserName.classList.add("user-name");
  let elInfoBody = document.createElement("div");
  elInfoBody.classList.add("info-body");
  let elEmail = document.createElement("a");
  elEmail.classList.add("email");
  let elPhone = document.createElement("a");
  let elWebsite = document.createElement("a");
  let elBr = document.createElement("br");
  elPhone.classList.add("phone");
  let elCName = document.createElement("h3");
  elCName.classList.add("c-name");
  let elCDes = document.createElement("p");
  elCDes.classList.add("c-des");
  let elInfoFooot = document.createElement("div");
  elInfoFooot.classList.add("info-footer");
  let elComInfo = document.createElement("p");
  elComInfo.classList.add("company-info");

  elName.textContent = item.name;
  elUserName.textContent = item.username;
  elHeadInfo.append(elName);
  elHeadInfo.append(elUserName);

  elEmail.textContent = item.email;
  elEmail.setAttribute("href", `mailto:${item.email}`);
  elPhone.textContent = item.phone;
  elPhone.setAttribute("href", `tel:${item.phone}`);
  elWebsite.textContent = item.website;
  elWebsite.setAttribute("href", `https://${item.website}`);
  elInfoBody.append(elEmail);
  elInfoBody.append(elBr);
  elInfoBody.append(elPhone);
  elInfoBody.append(elBr);
  elInfoBody.append(elWebsite);

  elCName.textContent = item.company.name;
  elCDes.textContent = item.company.catchPhrase;
  elInfoBody.append(elCName);
  elInfoBody.append(elCDes);
  let add = item.address;
  elComInfo.textContent = add.city.concat(
    ", ",
    add.street + ", ",
    add.suite,
    ", ",
    add.zipcode
  );
  elInfoFooot.append(elComInfo);
  elInfo.appendChild(elHeadInfo);
  elInfo.appendChild(elInfoBody);
  elInfo.appendChild(elInfoFooot);
  elContainer.appendChild(elInfo);
};
users.forEach(displayUser);

elForm.addEventListener("click", (e) => {
  e.preventDefault();
});
elForm[0].addEventListener("keydown", (e) => {
  let text = e.target.value;
  elContainer.innerHTML = "";
  let filteredUSers = users.filter((user) =>
    user.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())
  );
  filteredUSers.forEach(displayUser);
});
