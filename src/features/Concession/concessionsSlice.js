import { SNACKS } from "../../app/Shared/SNACKS";


export const selectAllConcessions = () => {
    return SNACKS;
}

export const selectSnackById = (id) => {
    SNACKS.find((snack) => snack.id === parseInt(id)) 
}
