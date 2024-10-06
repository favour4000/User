import {renderOrderSummary} from './checkout/order-summary.js';
import {renderPaymentSummary} from './checkout/payment summary.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/carts.js';
// import '../data/cart-class.js';
//import '../data/backend-practice.js';

async function loadPage() {
  try {
    // throw 'error1';

    await loadProductsFetch()

    const value = await new Promise((resolve, reject) => {
      // throw 'error2';
      loadCart(() => {
        // reject('error3');
       resolve('value3');
      });
    });

  } catch (error) {
    console.log('unexpected error. Please try again later.');
  }
  
  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();

// Promise.all([
//   loadProductsFetch(),
//   new Promise((resolve) => {
//     loadCart(() => {
//       resolve();
//     });
//   })

// ]).then((values) => {
//   console.log(values);
//   renderOrderSummary();
//   renderPaymentSummary();
// });

// new Promise((resolve) => {
//  loadProducts(() => {
//    resolve('value1');
//  });

// }).then((value) => {
//  console.log(value);

//   return new Promise((resolve) => {
//     loadCart(() => {
//       resolve();
//     });
//   }); 

// }).then(() => {
//   renderOrderSummary();
//   renderPaymentSummary();
// });

// loadProducts(() => {
//   loadCart(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
//   });  
// });