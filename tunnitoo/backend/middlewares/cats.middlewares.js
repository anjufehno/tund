const catsRouteMiddleware = (req, res, next) => {
  const { name } = req.body;

  if (name !== "Omanimi") throw new Error("Noup");

  req.user = {
    name: "Omanimi",
    role: "Owner",
  };

  console.log("Time: ", Date.now());
  next();
};

const catsGetRouteMiddleware = (req, res, next) => {
  console.log("Getting DB result for req.user");
  next();
};

module.exports = { catsRouteMiddleware, catsGetRouteMiddleware };
