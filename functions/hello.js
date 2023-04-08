exports.handle = async (event, context) => {
  console.log('foo')
  return {
    bar: 'baz'
  }
}
