
const runTest = async (req, res, next) => {
  const { test } = req.body

  try {
    // const result = await runner.dostuff(code)
    res.status(200).json({ test })
  } catch (err) {
    next(err)
  }
}

export default {
  runTest
}
