import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Pokemon app';
  pokemons = [...POKEMONS];
  selectedPokemon = ""

  ngOnInit() {
    console.log(this.pokemons);
    console.table(this.pokemons)
    
  }

  selectPokemon(event: MouseEvent) {
    const index : number = +(event.target as HTMLInputElement).value
    console.log(`Vous avez cliqué sur le pokemon ${this.pokemons[index].name}`);
    this.selectedPokemon = this.pokemons[index].name
  }
}

// export class AppComponent implements OnInit {
//   title = 'Pokemon app';
//   pokemons = [{
//     name: "Bulbizarre",
//     pic: "https://www.pokebip.com/pokedex-images/300/1.png?v=ev2",
//     color: "#48f748d1",
//     type: "Plant 🌱"
//   },
//   {
//     name: "Salamèche",
//     pic: "https://www.pokebip.com/pokedex-images/ecarlate-violet/300/4.png?v=ev2",
//     color: "#ff3525d1",
//     type: "Fire 🔥"
//   },
//   {
//     name: "Carapuce",
//     pic: "https://www.pokebip.com/pokedex-images/300/7.png?v=ev2",
//     color: "#07a9e5b5",
//     type: "Water 💦"
//   }];
//   ngOnInit(){
//     console.log(this.pokemons)
//     this.selectPokemon(this.pokemons[2].name)
//   }
//   selectPokemon(pokemonName :string){
//     console.log(`Vous avez cliqué sur le pokemon ${pokemonName}`);

//   }
// }
