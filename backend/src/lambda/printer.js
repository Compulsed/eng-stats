const handler = async (event, context) => {
  console.log(JSON.stringify({ event, context }));
};

module.exports = { handler };