import { loadStripe } from '@stripe/stripe-js';

// Load Stripe outside of a component's render to avoid
// recreating the Stripe object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 'pk_test_mock_key',
);

export default stripePromise;
