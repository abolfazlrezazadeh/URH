const { default: mongoose } = require("mongoose");
const routeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  coordinates: [
    {
      latitude: { type: Number, required: true },
      longitude: { type: Number, required: true },
    },
  ],
});
const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  coordinates: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
});
const walletSchema = new mongoose.Schema({
  balance: { type: Number, default: 0 },
});

const userSchema = new mongoose.Schema(
  {
    phone: { type: String, required: true, unique: true },
    first_name: { type: String },
    last_name: { type: String },
    email: { type: String },
    token: { type: String, default: "" },
    otp: {
      type: Object,
      default: {
        code: 0,
        expiresIn: 0,
      },
    },
    cardNumber: { type: String },
    role: { type: String, default: "USER" },
    favoriteRoutes: [routeSchema], // Embed the RouteSchema for favorite routes
    favoritePlaces: [placeSchema], // Embed the PlaceSchema for favorite places
    wallet: walletSchema, // Include the WalletSchema for the wallet field
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      virtuals: true,
    },
  }
);

module.exports = {
  // Export the User model and create a model based on the userSchema
  userModel: mongoose.model("user",userSchema),
};
