const Pokemon = prompt("Enter a pokemon name")
requestAPI = () => {
  // var pokemon = prompt("enter pokemon name")
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText)
            pokemon = {
                name: data['name'],
                attack: data['stats'][4]['base_stat'],
                defense: data['stats'][3]['base_stat'],
                hp: data['stats'][5]['base_stat'],
                ability1: data['abilities'][0]['ability']['name'],
                ability2: data['abilities'][1]['ability']['name'],
                sprite: data['sprites']['front_default']

            }
        }
    };
    xhttp.open("GET", `https://fizal.me/pokeapi/api/v2/name/${Pokemon}.json`, true);
    xhttp.send();

  }
requestAPI()

displayPokemon = () => {
    let cont = document.createElement('div')
    let h1 = document.createElement('h1')
    let p1 = document.createElement('p1')
    let p2 = document.createElement('p2')
    let p3 = document.createElement('p3')
    let p4 = document.createElement('p4')
    let p5 = document.createElement('p5')
    let img = document.createElement('img')

    h1.innerText = pokemon['name']
    p1.innerText = pokemon['defense']
    p2.innerText = pokemon['attack']
    p3.innerText = pokemon['hp']
    p4.innerText = pokemon['ability1']
    p5.innerText = pokemon['ability2']
    img.setAttribute('src', pokemon['sprite'])
    cont.appendChild(h1)
    cont.appendChild(p1)
    cont.appendChild(p2)
    cont.appendChild(p3)
    cont.appendChild(p4)
    cont.appendChild(p5)
    cont.appendChild(img)
    document.body.appendChild(cont)
}

setTimeout(displayPokemon, 200)
