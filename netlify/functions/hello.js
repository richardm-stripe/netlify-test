exports.handler = (event, context) => {
  return Promise.resolve.then(() => {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Hello World" }),
    };
  });
}
