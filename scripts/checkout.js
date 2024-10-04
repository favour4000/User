import {renderOrderSummary} from './checkout/order-summary.js';
import {renderPaymentSummary} from './checkout/payment summary.js';
import { loadProducts } from '../data/products.js';
// import '../data/cart-class.js';
//import '../data/backend-practice.js';

loadProducts(() => {
  renderOrderSummary();
  renderPaymentSummary();
});