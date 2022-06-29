import { BASE_URL } from "../../api/Config"
import { GET_CATEGORIES } from './../Constants/CategoryConstants';

export const getCategoriesAction = () => async(dispatch,getState) =>{
    var categories = await (await fetch(`${BASE_URL}Category/getall`)).json()

    dispatch({
        type: GET_CATEGORIES,
        payload: categories
    })
}