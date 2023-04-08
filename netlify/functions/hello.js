exports.handler = (event, context) => {
  return Promise.resolve().then(() => {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: require('stripe').PACKAGE_VERSION, message2: typeof require('stripe')('sk_test').checkout.sessions.listLineItems }),
    };
  });
}
