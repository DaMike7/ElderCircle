import mongoose from "mongoose";

const buddyshipSchema = new mongoose.Schema(
    {
        requester: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        recipient: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        status: {
            type: String,
            enum: ['pending', 'accepted', 'declined'],
            default: 'pending'
        }
    },
    { timestamps: true }
);

// Ensure one relationship per pair
buddyshipSchema.index({ requester: 1, recipient: 1 }, { unique: true });

const Buddyship = mongoose.model("Buddyship", buddyshipSchema);
export default Buddyship;