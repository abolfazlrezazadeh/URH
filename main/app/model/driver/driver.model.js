const { default: mongoose } = require('mongoose')

const driverSchema = new mongoose.Schema(
  {
    phone: { type: String, required: true, unique: true },
    first_name: { type: String },
    last_name: { type: String },
    token: { type: String, default: '' },
    otp: {
      type: Object,
      default: {
        code: 0,
        expiresIn: 0
      }
    },
    cardNumber: { type: String, default: '' },
    role: { type: String, default: 'USER' },
    wallet: { type: mongoose.Types.ObjectId, ref: 'driver-wallet' } // Include the WalletSchema for the wallet field
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      virtuals: true
    }
  }
)

const driverWallet = new mongoose.Schema({
  balance: { type: Number, default: 0 },
  driverId: { type: mongoose.Types.ObjectId, ref: 'driver', required: true }
})
const driverTransaction = new mongoose.Schema(
  {
    amount: { type: Number, default: 0 },
    driverId: { type: mongoose.Types.ObjectId, ref: 'driver', required: true }
  },
  {
    timestamps: true
  }
)

module.exports = {
  driverModel: mongoose.model('driver', driverSchema),
  driverWalletModel: mongoose.model('driver-wallet', driverWallet),
  driverTransactionModel: mongoose.model(
    'driver-transaction',
    driverTransaction
  )
}
