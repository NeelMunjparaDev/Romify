import axios from 'axios';
import { showAlert } from './alert';
const stripe = Stripe(
  'pk_test_51OaZL5SGn1eOr9K3l5r9SdOtYbfcMS3N131MpUStYx3Qqe8WulD7gmDwHotRKTn5VCSo0tMuVtWdYv7uCC5jSnfA00ydWw4Mq4',
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get Checkout session from API
    const session = await axios(
      `http://localhost:3000/api/v1/bookings/checkout-session/${tourId}`,
    );

    console.log(session);

    // 2) Create checkout
    window.location.replace(session.data.session.url);
    // await stripe.redirectToCheckout({
    //   sessionId: session.data.session.id,
    // });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
