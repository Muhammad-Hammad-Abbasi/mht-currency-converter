#! /usr/bin/env node

import inquirer from "inquirer"


    const currency: any ={

 USD: 1,
 EUR: 0.91,
 JPY: 151.6100,
 GBP: 0.76,
 TRY: 32.0374,
 CAD: 1.3588,
 INR: 74.57,
 MXN: 16.4340,
 PKR: 280,

};

let user_answer = await inquirer.prompt(
    [
       {
           name: "from",
            message: "Enter from currency",
             type: "list",
              choices: [`USD`, `EUR`, `GPB`, `TRY`, `CAD`, `INR`, `MXN`, `PKR`]
       },
       {
           name: "To",
            message: "Enter to currency",
              type: "list",
                choices: [`USD`, `EUR`, `GPB`, `TRY`, `CAD`, `INR`, `MXN`, `PKR`]
       },
       {
           name: "amount",
            message: "Enter your Amount",
             type:"number"
        }

    ]

)

     
 let fromAmount = currency[user_answer.from]
 let ToAmount = currency[user_answer.To]
 let amount = user_answer.amount
 let baseAmount = amount / fromAmount
 let convertedAmount = baseAmount * ToAmount
 
 console.log(convertedAmount);
 













