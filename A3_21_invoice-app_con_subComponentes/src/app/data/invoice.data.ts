import { Invoice } from "../models/invoice";

export const invoiceData : any = {                      //31. (export const invoiceData : Invoice = {) : esta era la declaracion inicial de tipo Invoice y se cambia a any, ya q daba error pq los datos no vienen del back aun. 
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