import {
    GET_ITEMS,
    ADD_ITEMS,
    DELETE_ITEM,
    INCREASE_ITEM,
    DECREASE_ITEM,
    TOTAL_ITEMS,
    DETAILS
} from '../actions/types';


export const initialState = {
    items:[
  {
    _id: 1,
    url: "XXXXXXXXXXXXXXXXXX",
    page_position: "first",
    page_category: "XXXXXXX",
    title: "XXXXXXXXXXXXXXX",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "X%",
    composition: "XXXXXXXXXX",
    contenance: "Xml",
    gout: "XXXXXX",
    prix: XX.XX,
    Provenance: "France",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
},
{
    _id: 2,
    url: "XXXXXXXXXXXXXXX",
    page_category: "Huile",
    title: "XXXXXXXXXXXXXXXXX",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "X%",
    composition: "XXXXXXXXXXXXXXX",
    contenance: "Xml",
    gout: "XXXXXXX",
    prix: XX.XX,
    Provenance: "France",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
},
{
    _id: 3,
    url: "XXXXXXXXXXXXX",
    page_category: "XXXXXXX",
    subCategory: "XXXXXXXXXXXXXXX",
    title: "XXXXXXXXXXXXXXXX",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "15%",
    composition: "XXXXXXXXXXXXXXXXXX",
    contenance: "Xml",
    gout: "XXXXXXXXX",
    prix: XX.XX,
    Provenance: "France",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
},
{
    _id: 4, 
    url: "XXXXXXXXXXXXXX",
    page_position: "first",
    page_category: "XXXXXXXXX",
    title: "XXXXXXXXXXXXXXXX",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "X%",
    composition: "XXXXXXXXXXXXXXXXXXXXX",
    contenance: "Xml",
    gout: "XXXXXXXXXX",
    prix: XX.XX,
    Provenance: "Europe",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
},
{
    _id: 5, 
    url: "XXXXXXXXXXXXXXXXX",
    page_category: "XXXXXXXX",
    title: "XXXXXXXXXXXXX",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "X%",
    composition: "XXXXXXXXXXXXXXXXXXXXXXX",
    contenance: "XXml",
    gout: "XXXXXXXX",
    prix: XX.XX,
    Provenance: "Europe",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
},
{
    _id: 6, 
    url: "XXXXXXXXXXXXXXXXXXXX",
    page_category: "XXXXXXX",
    title: "XXXXXXXXXXXXXXXXXX",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "XXX%",
    composition: "XXXXXXXXXXXXXXXXXX",
    contenance: "XXml",
    gout: "XXXXXXX",
    prix: XX.XX,
    Provenance: "Europe",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
},
{
    _id: 7, 
    url: "HuileAntiStress",
    page_position: "first",
    page_category: "Huile",
    title: "Huile Anti-Stress",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "10%",
    composition: "Base MCT et CBD seul",
    contenance: "10ml",
    gout: "Neutre",
    prix: 49.90,
    Provenance: "France",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
},
{
    _id: 8, 
    url: "HuileAntiDouleur",
    page_position: "first",
    page_category: "Huile",
    title: "Huile Anti-douleur 1",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "10%",
    composition: "Base MCT, CBD + CBG",
    contenance: "10ml",
    gout: "Citron Vert",
    prix: 59.90,
    Provenance: "France",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
},
{
    _id: 9, 
    url: "HuileAntiDouleur",
    page_category: "Huile",
    title: "Huile Anti-douleur 2",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "10%",
    composition: "Base MCT, CBD + CBG",
    contenance: "20ml",
    gout: "Fraise",
    prix: 59.90,
    Provenance: "France",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
},
{
    _id: 10, 
    url: "HuileAntiDouleur",
    page_category: "Huile",
    title: "Huile Anti-douleur 3",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "10%",
    composition: "Base MCT, CBD + CBG",
    contenance: "20ml",
    gout: "Neutre",
    prix: 59.90,
    Provenance: "France",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
},
{
    _id: 11, 
    url: "urlThé",
    page_position: "first",
    page_category: "The",
    title: "Infusion CBD Vitalité",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "10% de fleurs ",
    composition: "Neutre",
    gout: "Neutre",
    prix: 14.90,
    Provenance: "France",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
},
{
    _id: 12, 
    url: "urlThé",
    page_position: "first",
    page_category: "The",
    title: "Infusion CBD Digestion ",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "10% de fleurs ",
    composition: "Mélisse, Verveine",
    gout: "Mélisse, Verveine",
    prix: 14.90,
    Provenance: "France",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
},
{
    _id: 13, 
    url: "urlThé",
    page_position: "first",
    page_category: "The",
    title: "Thé Anti-Stress",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "5% de fleurs ",
    composition: "Thé vert, Menthe, Citron",
    gout: "Menthe, Citron",
    prix: 13.90,
    Provenance: "France",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
},
{
    _id: 14, 
    subPage: "SubAutre",
    page_position: "first",
    page_category: "Autre",
    title: "Gummies CBD 1",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "<2%",
    composition: "Vegan Mixed Fruits",
    contenance: "60 gummies",
    gout: "Mixed Fruits",
    prix: 34.90,
    Provenance: "France",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
},
{
    _id: 15, 
    page_category: "Autre",
    title: "Gummies CBD 2",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "<2%",
    composition: "Vegan Strawberry",
    contenance: "60 gummies",
    gout: "Strawberry",
    prix: 34.90,
    Provenance: "France",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
},
{
    _id: 16, 
    subPage: "SubAutre",
    page_position: "first",
    page_category: "Autre",
    title: "Bonbons colorés",
    img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
    taux: "2.50%",
    composition: "Vegan",
    contenance: "30 gummies",
    gout: "Neutre",
    prix: 29.90,
    Provenance: "France",
    description: "description description description",
    utilisation: "utilisation utilisation utilisation",
    count: 1,
},
    ],
    cart: [],
    isOpen: false,
    total: 0,
};



const Todos = (state = initialState, action) => {

    switch(action.type) {


        case GET_ITEMS:
             return {
                 ...state
             }

        // eslint-disable-next-line no-fallthrough
        case ADD_ITEMS:

        let check = state.cart.find(item => item._id === action.payload);

        if (!check) {
            let items = state.items.filter(item => item._id === action.payload)
            let itemsCart = [...state.cart, ...items]

            return {
                ...state,
                cart:itemsCart
            }
        }

        else {
            let items = state.items.filter(item => item._id === action.payload);
            items.forEach(item => {
                item.isInCart = true
            })

            return {
                ...state
            }
        }


        case DELETE_ITEM:

        const filteredCart = state.cart.filter(item => item._id !== action.payload);
            return {
                ...state,
                cart:filteredCart
            }

        case INCREASE_ITEM:
            let incResults = state.cart.map(item => {
                if (item._id === action.payload) {
                    item = {...item, count:item.count + 1}
                }
                return item
            })

            return {
                ...state,
                cart:incResults
            }

        case DECREASE_ITEM:
            let decResults = state.cart.map(item => {
                if (item._id === action.payload) {
                    item = {...item, count:item.count === 1 ? item.count = 1:item.count -1}
                }
                return item
            })
            return {
                ...state,
                cart:decResults
            }

        case TOTAL_ITEMS:

        const totals = state.cart.reduce((prev, item) => {
            return prev + (item.prix * item.count)
        }, 0)
            const totalsFixed = totals.toFixed(2);
          return {
              ...state,
              total:totalsFixed
          }

        case DETAILS:
            return {
                ...state,
            }


        default:
             return state
    }


}
export default Todos;
