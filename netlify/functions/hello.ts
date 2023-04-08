export const handler = async (event, context) => {
  console.log(require('stripe'))
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" }),
  };
}
