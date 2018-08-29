import React from 'react'
import { render } from 'react-dom'
import Root from './components/Root'
import './scss/base.scss'

render(<Root />, document.getElementById('app'))

// {(function () {
    // const contactData = {
    //     "firstName":"Kiryl",
    //     "middleName":"Anatolevich",
    //     "lastName":"Nikalaichuk",
    //     "phones":[{"type":"Mobile","number":"123456789"}],
    //     "gender":"Male",
    //     "birhtDate": 1531809881239,
    //     "group":["friends","family"],
    //     "favourite":true
    // }

//     postData(`http://localhost:8080/contact`, contactData)
//       .then(data => console.log(data))
//       .catch(error => console.error(error));

//     function postData(url, data) {
//         return fetch(url, {
//             method: "POST",
//             headers: {
//                 "Accept": "application/json",
//                 "Content-Type": "application/json",
//                 // "Access-Control-Allow-Origin": "*",
//             },
//             body: JSON.stringify(data),
//         })
//         .then(response => response);
//     }
// })()}