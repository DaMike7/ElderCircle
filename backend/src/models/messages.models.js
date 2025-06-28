import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
    {
        participants: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }],
        type: {
            type: String,
            enum: ['individual', 'group'],
            required: true
        },
        // For individual chats only
        status: {
            type: String,
            enum: ['pending', 'accepted', 'declined'],
            default: function() {
                return this.type === 'individual' ? 'pending' : 'active';
            }
        },
        initiatedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        // Group chat specific fields
        groupName: {
            type: String,
            required: function() {
                return this.type === 'group';
            }
        },
        groupDescription: {
            type: String,
            default: ''
        },
        groupAvatar: {
            type: String,
            default: ''
        },
        inviteLink: {
            type: String,
            unique: true,
            sparse: true // Only for group chats
        },
        groupSettings: {
            isPublic: {
                type: Boolean,
                default: true
            },
            maxMembers: {
                type: Number,
                default: 500
            },
            allowInviteLink: {
                type: Boolean,
                default: true
            }
        },
        admins: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }],
        lastMessage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message"
        }
    },
    { timestamps: true }
);

// Generate unique invite link for group chats
conversationSchema.pre('save', function(next) {
    if (this.type === 'group' && this.groupSettings.allowInviteLink && !this.inviteLink) {
        this.inviteLink = generateInviteCode(); // You'll need to implement this function
    }
    next();
});

const messageSchema = new mongoose.Schema(
    {
        conversationId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Conversation",
            required: true
        },
        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        text: {
            type: String,
        },
        image: {
            type: String
        },
        messageType: {
            type: String,
            enum: ['text', 'image', 'system'], // 'system' for join/leave notifications
            default: 'text'
        },
        isRead: [{
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            readAt: {
                type: Date,
                default: Date.now
            }
        }],
        // For system messages (user joined, left, etc.)
        systemMessage: {
            type: String,
            enum: ['user_joined', 'user_left', 'group_created', 'admin_added']
        }
    },
    { timestamps: true }
);

const Conversation = mongoose.model("Conversation", conversationSchema);
const Message = mongoose.model("Message", messageSchema);

export { Conversation, Message };