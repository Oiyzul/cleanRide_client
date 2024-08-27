const PaymentFailPage = () => {
  return <div>
    <h1>Payment Failed</h1>
    <p>Please try again or contact support.</p>
    <button onClick={() => window.location.href = '/'}>Return to Homepage</button>
    <button onClick={() => window.location.href = '/user/dashboard'}>Go to My Account</button>
  </div>;
};

export default PaymentFailPage;
