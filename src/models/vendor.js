import mongoose from 'mongoose'

const VendorSchema = new mongoose.Schema(
  {
    vendor_name: {
      type: String,
      required: true,
    },
    vendor_password: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated' },
  },
)

const Vendor = mongoose.model('vendor', VendorSchema)

export default Vendor
