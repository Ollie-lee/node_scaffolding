module.exports = (error, req, res, next) => {
  return res.status(500).json({
    error: "Something bad happened, please try again later",
  });
};
