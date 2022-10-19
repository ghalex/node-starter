
export default () => {
  return (err: any, _: any, res: any, __: any) => {
    console.error(err.message)

    if (err.name === 'UnauthorizedError') {
      res.status(401).send('Unauthorized')
      return
    }

    res.status(400).send(err.message)
  }
}
