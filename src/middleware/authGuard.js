const { validateToken } = require("../utils/jwt");

module.exports = (req, res, next) => {
  const authorizationHeader = req.header("Authorization");
  if (!authorizationHeader) {
    // token missing
    return res.sendStatus(401);
  }
  // Bearer xxxxxxxx
  const tokenArray = authorizationHeader.split(" ");
  if (tokenArray.length !== 2 || tokenArray[0] !== "Bearer") {
    return res.sendStatus(401);
  }

  const decodedPayload = validateToken(tokenArray[1]);
  if (!decodedPayload) {
    return res.sendStatus(401);
  }
  req.user = decodedPayload;
  return next();
};
