import mongoose from 'mongoose';

const rentalSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        category: { type: String, required: true },
        pricePerDay: { type: Number, required: true },
        deposit: { type: Number, default: 0 },
        condition: { type: String, enum: ['new', 'excellent', 'good', 'fair'], default: 'excellent' },
        images: [{ type: String }],
        location: {
            city: { type: String, required: true },
            address: { type: String },
            coordinates: {
                lat: { type: Number },
                lng: { type: Number },
            },
        },
        owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        availability: { type: Boolean, default: true },
        isActive: { type: Boolean, default: true },
    },
    { timestamps: true }
);

const Rental = mongoose.model('Rental', rentalSchema);
export default Rental;
