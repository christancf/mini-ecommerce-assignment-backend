import mongoose from 'mongoose'

const FavoriteSchema = new mongoose.Schema(
  {
    favorite_products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
        required: true,
      },
    ],
    vendor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'vendor',
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated' },
  },
)

const Favorite = mongoose.model('favorite', FavoriteSchema)

export default Favorite
