
const initstate = {
    name : 'Ptit',
    number: 3
}
interface Storedata {
   type : string
}
export default function rooReducers(state = initstate , actions:Storedata){
  switch(actions.type){
     case 'DECREMENT':
        return{
            ...state ,
            number : state.number +1
        }
  }
  switch(actions.type){
    case 'INCREMENT':
        return {
            ...state,
            number: 2
        }
  }
    
}