const mongoose = require("mongoose");
const schema = mongoose.Schema;

const UrlSchema = new schema(
  {
    long: { type: String, required: true },
    short: { type: String, required: true, expires:604800 },
  },
  { timestamps: true }
);

const Url = mongoose.model("Url", UrlSchema);
module.exports = { Url };
