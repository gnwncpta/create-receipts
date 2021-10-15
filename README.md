# create-receipts
Generate ID, Timestamp &amp; Total of a Receipt For Your App.

## 🔖 Installation
```bash
npm i create-receipts 
```

## 🔰 Usage
```javascript
const create = require('create-receipts');

/* 
    Notes for create.ID()
    ---------------------
    identity         "TLW-0001-XXX-A0001"
                       ^

    secondStart      "TLW-0001-XXX-A0001"
                           ^

    thirdStart       "TLW-0001-XXX-A0001"
                                     ^

    * Identity -> you can modify identity other than TLW
    * The secondStart will be created in order, also for thirdStart
*/


const idConfig = { 
    identity: "TLW", // You can modify into anything
    secondStart: 0, // You can modify whatever you want
    thirdStart: 0 // Also this
}

// Example using function

function order(buyer, items){
    const Receipt = {
        noReceipt: create.ID(idConfig), // Return -> "TLW-0001-JQE-A0001"
        date: create.Timestamp(), // Return -> "15 Nov 2021 16:29"
        buyer: buyer
        items: items,
        total: create.Total(items) // Return -> 42000
    }

    // Example of insert data to DB
    YourDB.insertToDB(Receipt);
}

order("Alex", [ { item: "1 LYCHEE TEA", price: 22000 }, { item: "COFFEE MILK", price: 20000 } ]);


// The result would look like below

// {
//   noReceipt: 'TLW-0001-JQE-A0001',
//   date: '15 Nov 2021 16:29',
//   buyer: 'Alex',
//   items: [
//     { item: '1 LYCHEE TEA', price: 22000 },
//     { item: 'COFFEE MILK', price: 20000 }
//   ],
//   total: 42000
// }

```

Author [@gnwncpta]("https://github.com/gnwncta)