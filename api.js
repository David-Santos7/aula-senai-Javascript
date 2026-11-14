// // const nome = document.getElementById("nome")
// // const email = document.getElementById("email")
// // const telefone = document.getElementById("telefone")
// // const website = document.getElementById("website")
// // const company_name = document.getElementById("company_name")

// const container = document.getElementById("container")

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) => {
//          console.log(data)
//          data.forEach(user => {
//             const card = document.createElement("div")
//             card.className = "box"
//             card.innerHTML = `
//                 <p>Nome: ${user.name} </p>
//                 <p>E-mail: ${user.email} </p>
//                 <p>Telefone: ${user.phone} </p>
//                 <p>website: ${user.website} </p>
//                 <p>Company Name: ${user.company.name} </p>
//             `
//             container.appendChild(card)
//          })

            // <p>Episódio: ${character.episode}</p>
            // <p>Espécie: ${character.species}</p>
            // <p>Origem: ${character.origin}</p>
            // <p>Status  : ${character.status}</p>
        
//         // nome.innerText = data[6].name
//         // email.innerText = data[6].email
//         // telefone.innerText = data[6].phone
//         // website.innerText = data[6].website
//         // company_name.innerText = data[6].company.name

//     })

const container = document.getElementById("container")

fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((data) => {
        console.log(data.results)
        data.results.forEach(character => {
            const card = document.createElement("div")
            card.className = "box"
            card.innerHTML = `
            <img src="${character.image}"/>
            <p>Nome: ${character.name}</p>
            <p>Espécie: ${character.species}</p>
            <p>Origem: ${character.origin.name}</p>
            <p>Status  : ${character.status}</p>
            `
            container.appendChild(card)
        })
    })

// const container = document.getElementById("container");

// fetch("https://rickandmortyapi.com/api/character")
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data.results);
//         data.results.forEach(character => {
//             const card = document.createElement("div");
//             card.className = "box";
//             card.innerHTML = `
//             <img src="${character.image}"/>
//             <p>Nome: ${character.name}</p>
//             `;
//             container.appendChild(card);
//         });
//     });