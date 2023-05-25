const handler = (request, response) => {
  console.log('123')
  return response.status(200).json('Success')
}

export default handler
