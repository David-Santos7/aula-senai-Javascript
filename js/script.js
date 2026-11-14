
const pokemon_image = document.getElementById("pokemon_image")
const pokemon_number = document.getElementById("pokemon_number")
const pokemon_name = document.getElementById("pokemon_name")
const btn_search = document.getElementById("btn-search")
const input_search = document.getElementById("input_search")
const btn_prev = document.getElementById("btn-prev")
const btn_next = document.getElementById("btn-next")

let pokemonID



const searchPokemon = (pokemon) => {
fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((res)=> res.json())
    .then((data) => {
        console.log(data.sprites.versions["generation-v"]["black-white"].animated.front_default)
        pokemon_image.src = (data.sprites.versions["generation-v"]["black-white"].animated.front_default)
        pokemon_name.innerText = data.name
        pokemon_number.innerText = data.id
        pokemonID = data.id
        console.log(pokemonID)
    })
    .catch((error) => {
        pokemon_image.src = ""
        pokemon_name.innerText = "😔"
        pokemon_number.innerText = "Não encontrado"
    })
}
    btn_search.addEventListener("click", (e) => {
        e.preventDefault()
        searchPokemon(input_search.value)
 })

 btn_next.addEventListener("click", () => {
    pokemonID++
    searchPokemon(pokemonID)
 })

  btn_prev.addEventListener("click", () => {
    if(pokemonID >= 2){
        pokemonID--
    searchPokemon(pokemonID)
    }
 })

searchPokemon(Math.floor(Math.random() * 1000) + 1)