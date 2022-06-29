import { GET_CATEGORIES } from './../Constants/CategoryConstants';
export const CategoryReducer = (state = {categories: []},action) =>{
    switch (action.type) {
        case GET_CATEGORIES:
            return{
                ...state,
                categpories : action.payload
            }
        default:
            return state;
    }
}