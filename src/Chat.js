import React, { useState, useEffect } from 'react';
import './Chat.css';
import { StarBorderOutlined } from '@material-ui/icons';
import { InfoOutlined } from '@material-ui/icons';
// Use to pull url from Url:
import { useParams } from 'react-router-dom';
import db from './firebase';
import Message from './Message';
import ChatInput from './ChatInput';


function Chat() {
    // This is syntax to write params:
    const { roomId } = useParams();
    const [roomDetails, setroomDetails] = useState(null);
    const [roomMessages, setroomMessages] = useState([]);

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot((snapshot) => (
                setroomDetails(snapshot.data())
                ))
            }

        db.collection('rooms')
        .doc(roomId)
            .collection('message')
            .orderBy('timestamp', 'asc')
            .onSnapshot((snapshot) =>
            setroomMessages(snapshot.docs.map((doc) => doc.data()))
            
            )
        }, [roomId])
        
        
        console.log("messages >>>>", roomMessages);
        return (
            <div className='chat'>
            

            <div className='chat__header'>
                <div className='chat__headerLeft'>
                    <h4 className='chat__channelName'>
                        <strong>#{roomDetails?.name}</strong>
                        <StarBorderOutlined />
                    </h4>
                </div>
                <div className='chat__headerRight'>
                    <p>
                        <InfoOutlined /> Details
                    </p>
                </div>
            </div>
            <div className='chat__messages'>
                {/* Messages will be here */}
                {roomMessages.map(({ message, timestamp, userimage, user }) =>
                    <Message
                        message={message}
                        timestamp={timestamp}
                        user={user}
                        userimage={userimage}
                    />
                )}
            </div>
           <ChatInput channelName={roomDetails?.name} channelId={roomId} />
        </div>
    )
}
// channelName={roomDetails?.name}
// channelId={roomDetails?.roomId}
export default Chat