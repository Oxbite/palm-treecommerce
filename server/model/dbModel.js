const { default: mongoose, Schema } = require("mongoose");

const user = new mongoose.Schema(
  {
    f_name: {
      type: String,
      required: true,
    },
    l_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: Schema.Types.ObjectId,
      ref: "address",
    },
    cart: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "inactive",
    },
    admin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

const category = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["active", "inactive"],
    default: "active",
  },
});

const shop = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

const views = new mongoose.Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      ref: "product",
      required: true,
    },
    type: {
      type: String,
      required: true,
      default: "direct",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: false,
    },
  },
  { timestamps: true }
);

const orders = new mongoose.Schema(
  {
    product: {
      type: [Schema.Types.ObjectId],
      ref: "product",
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const product = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  oldPrice: {
    type: String,
    required: false,
  },
  discount: {
    type: String,
    required: false,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: "category",
    required: true,
  },
  order_number: {
    type: Number,
    default: 0,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  // },
  // address:{ STATE CITY CONTRY
  //     type: String,
  //     required: true
  // }
});

const search_logs = new mongoose.Schema(
  {
    query: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: false,
    },
  },
  { timestamps: true }
);

const cart = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
      default: 1,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "product",
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { timestamps: true }
);

const userTokens = new mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    token: {
      type: String,
      required: true,
      unique: true,
    },
    token_type: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports.userModel = mongoose.model("User", user);
module.exports.categoryModel = mongoose.model("Categories", category);
module.exports.shopModel = mongoose.model("Shops", shop);
module.exports.productModel = mongoose.model("Products", product);
