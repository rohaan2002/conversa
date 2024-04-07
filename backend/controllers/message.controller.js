import Conversation from '../models/conversation.model.js'
import Message from '../models/message.model.js'
import { getReceiverSocketId, io } from '../socket/socket.js';
export const sendMessage = async(req,res)=>{
   try{
    const {message}= req.body;
    const {id: receiverId} = req.params; // same as const receiverId = req.params.id;
    const senderId = req.user._id //ye wahi object h req ke andr jo User collection m thee, but bs password field subtracted for security

    let conversation=await Conversation.findOne({
        participants: {$all: [senderId, receiverId]}
    })

    if(!conversation){
        conversation = await Conversation.create({
            participants: [senderId, receiverId]
        })
    }

    const newMessage = new Message({
        senderId: senderId,
        receiverId: receiverId,
        message: message
    })

    if(newMessage){
        conversation.messages.push(newMessage._id);
    }

    
    
    // This will run the both the save functiona t the same time

    await Promise.all([conversation.save(), newMessage.save()]);
    // SOCKETIO Functionality will go here
    const receiverSocketId = getReceiverSocketId(receiverId);
    if(receiverSocketId){
        // using io.to, bcz we only want to emit this event to a specific client,that user with receiverSocketId
        // whereas io.emit sends the event to all the clients
        io.to(receiverSocketId).emit("newMessage", newMessage)
    }

    res.status(201).json(newMessage)

   }catch(error){
    console.log("Error in Message Controller: ", error.message);
    res.status(500).json({error: "Internal Server Error"})
   }
}

export const getMessages = async(req,res)=>{
    try{
        const {id: userToChatId}= req.params;  //receiver id gotten thru url params
        const senderId = req.user._id; // sender id gotten thru the protectRoute function dwara generated (_id)
        const conversation = await Conversation.findOne({
            participants: {$all: [senderId, userToChatId]}
        }).populate("messages");

        // .populate("messages") actually populate the messages array of conversation collection from the documents(members) of the collection the message field is been referenced to.
        // EX----------------------
        // const conversationSchema = new mongoose.Schema({
    // other fields...
//     messages: [{
//         type: mongoose.Schema.Types.ObjectId, 
//         ref: 'Message' // --->This indicates that the messages field references documents from the 'Message' collection
//     }]
// });

        if(!conversation) return res.status(200).json([]); // agr conversation hui hi ni h to bs emoty array dikhado getMessage ke naam pe
        
        const AllMessages = conversation.messages;

        res.status(200).json(AllMessages);

    }catch(error){
        res.status(500).json({error: "Internal Server Error"})
        console.log("Error encountered in getMessages in message controller: ",error.message)

    }
}