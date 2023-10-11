let cats = ["Fluffy"];

exports.create = (req, res) => {
  const { name } = req.params;
  cats.push(name);
  res.send(name);
};

exports.read = (req, res) => {
  res.send(cats);
};

exports.update = (req, res) => {};

exports.delete = (req, res) => {};
