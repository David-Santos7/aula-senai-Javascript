fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((date) => {
        console.log(date.results[4].name)    
    })