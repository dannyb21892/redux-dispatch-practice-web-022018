export let state;


export function managePets(state = {pets: []}, action){
  switch (action.type) {
    case "ADD_PET":
      return {pets: [...state.pets, action.pet]}
    case "REMOVE_PET":
      return {pets: state.pets.filter(pet=> pet.id != action.id)}
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let parent = document.getElementById("container")
  parent.innerHTML = "<ul>" + state.pets.map(pet=>`<li>${pet.name}</li>`)+"</ul>"
  // let list = document.createElement("ul")
  // state.pets.forEach(pet => {
  //   let listEl = document.createElement("li")
  //   listEl.innerHTML = pet.name
  //   list.innerHTML += listEl
  // })
  // parent.innerHTML = list
}
