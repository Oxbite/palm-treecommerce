const model = require("../model/dbModel");
const db = require("../controller/dbcon");
const product = model.productModel;

exports.topProducts = async (req, res) => {
  try {
    if (!(await db.connect())) {
      throw "Couldn't connect to db";
    }

    const { page, limit } = req.query;

    const products = await product
      .find({})
      .sort({ order_number: -1 })
      .limit(limit)
      .skip(limit * (page - 1))
      .populate();
    const count = await product.count();
    console.log(count);
    res.json({ products, maxSize: 30 });
  } catch (err) {
    console.log(err);
    res.json({ error: "server error please try again" });
  }
};

// might change the algorithm to send similar products. for now same as category
exports.similarProducts = async (req, res) => {
  try {
    if (!(await db.connect())) {
      throw "Couldn't connect to db";
    }

    const { categoryId } = req.params;

    const products = await product
      .find({ categoryId })
      .sort({ order_number: -1 })
      .limit(20)
      .populate();
    res.json({ products, maxSize: await product.count() });
  } catch (err) {
    console.log(err);
    res.json({ error: "server error please try again" });
  }
};

exports.featured = async (req, res) => {
  try {
    if (!(await db.connect())) {
      throw "Couldn't connect to db";
    }

    const products = await product.find({ featured: true }).populate();
    res.json({ products });
  } catch (err) {
    console.log(err);
    res.json({ error: "server error please try again" });
  }
};

exports.category = async (req, res) => {
  try {
    if (!(await db.connect())) {
      throw "Couldn't connect to db";
    }
    const { page, limit, categoryId } = req.query;
    const products = await product
      .find({ categoryId })
      .sort({ order_number: -1 })
      .limit(limit)
      .skip(limit * (page - 1))
      .populate();
    res.json({
      products,
      maxSize: await product.countDocuments({ categoryId }),
    });
  } catch (err) {
    console.log(err);
    res.json({ error: "server error please try again" });
  }
};

exports.product = async (req, res) => {
  try {
    if (!(await db.connect())) {
      throw "Couldn't connect to db";
    }
    const { productId } = req.query;
    if (req.query.type && req.query.type === "homePage") {
      new model.views();
    }
    const product = await product.findOne({ productId }).populate();
    res.json({ product });
  } catch (err) {
    console.log(err);
    res.json({ error: "server error please try again" });
  }
};

exports.new = async (req, res) => {
  try {
    if (!(await db.connect())) {
      throw "Couldn't connect to db";
    }
    const { page, limit, categoryId } = req.query;
    const products = await product
      .find({ categoryId })
      .limit(limit)
      .skip(limit * (page - 1))
      .populate();
    res.json({ products, maxSize: await product.estimatedDocumentCount() });
  } catch (err) {
    console.log(err);
    res.json({ error: "server error please try again" });
  }
};

//Add product and category, mailing, cart(product, user, amount, dates) delete on resolve;
