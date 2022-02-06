module.exports = (error, req, res, next) => {
  if (error.name === 'ValidationError') {
    return res.status(400).json(error);
  }
  next();
};

