import { model, Schema } from "mongoose";

const AdminSchame = new Schema(
  {
    userAdmin: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

const productModel = model("product", productSchame);

export default productModel;
