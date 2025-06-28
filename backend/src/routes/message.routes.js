import express from "express";

const router = express.Router()

// Individual messaging
app.post('/api/messages/send', sendIndividualMessage);
app.post('/api/messages/accept-request', acceptBuddyRequest);

// Group messaging  
app.post('/api/groups/create', createGroupChat);
app.post('/api/groups/join/:inviteLink', joinGroupViaLink);
app.post('/api/groups/:groupId/message', sendGroupMessage);

export default router;