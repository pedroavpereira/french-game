exports.getVerbs = (req, res) => {
  res.status(200).send("VERBS GET");
};

exports.getVerb = (req, res) => {
  const { id } = req.params;
  res.status(200).send(`Get Verb with id ${id}`);
};

exports.postVerb = (req, res) => {
  res.status(200).send(`Post verb`);
};

exports.putVerb = (req, res) => {
  const { id } = req.params;
  res.status(200).send(`Put Verb with id ${id}`);
};

exports.patchVerb = (req, res) => {
  const { id } = req.params;
  res.status(200).send(`Patch Verb with id ${id}`);
};

exports.deleteVerb = (req, res) => {
  res.status(200).send(`Verb delete`);
};
