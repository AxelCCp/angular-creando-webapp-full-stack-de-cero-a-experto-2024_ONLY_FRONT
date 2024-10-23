import { Invoice } from "../models/invoice";

export const invoiceData : Invoice = {
    id : 1,
    name : 'componentes ed pc',
    client : {
        name : 'andress',
        lastname : 'doe',
        address : 
            {
                country : ' usa',
                city : 'los angeles',
                street : '1 street',
                number : 15,
            }
    },
    company : {
        name : "new age",
        fiscalNumber : 23547,
    },
    items : [
        {
            id : 1,
            product : 'cpu intel i9',
            price : 599,
            quantity : 1
        },
        {
            id : 2,
            product : 'teclado',
            price : 599,
            quantity : 2
        },
        {
            id : 3,
            product : 'monitor',
            price : 599,
            quantity : 4
        },
    ]
    
}