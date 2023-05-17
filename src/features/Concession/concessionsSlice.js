import { SNACKS } from "../../app/Shared/SNACKS";


export const selectAllConcessions = () => {
    return SNACKS;
}

export const selectSnackById = (id) => {
    return SNACKS.find((snack) => snack.id === parseInt(id)) 
}