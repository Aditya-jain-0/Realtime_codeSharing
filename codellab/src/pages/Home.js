import React, { useState } from 'react';
import {v4 as uidv4} from 'uuid';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();

    const [roomid, setroomid] = useState('');
    const [username, setusername] = useState('');

    const createRoom = (e)=>{
        e.preventDefault();
        const id = uidv4();
        setroomid(id);
        toast.success('New Room Created')
    }

    const joinRoom = () =>{
        if(!roomid && !username){
            toast.error('Room ID and username cannot be empty');
            return;
        }
        if(!roomid){
            toast.error('Room ID cannot be empty');
            return;
        }
        if(!username){
            toast.error('Username cannot be empty');
            return;
        }

        //Redirect to EditorPage
        navigate(`/editor/${roomid}`,{
            state:{
                username,
            }
        })
    }

    //pressing enter key also navigate to editorpage
    const handleInputEnter = (e) =>{
        if(e.code === 'Enter'){
            joinRoom();
        }
    }

    return (
        <div className="homePage">
            <div className="form">
                <h1 className='heading'>Co(de)llab!</h1>
                <div className="inputGroup">
                    <input
                        type="text"
                        className="inputtext"
                        placeholder="Room ID"
                        onChange={(e) => setroomid(e.target.value)}
                        value={roomid}
                        onKeyUp={handleInputEnter}
                    />
                    <input
                        type="text"
                        className="inputtext"
                        placeholder="Username"
                        onChange={(e) => setusername(e.target.value)}
                        value={username}
                        onKeyUp={handleInputEnter}
                    />
                    <button className="btn joinBtn" onClick={joinRoom}>
                        Let's Go
                    </button>
                    <span className="createInfo">
                        Create New Room &nbsp;
                        <button onClick={createRoom} href="" className="createNewBtn">
                            new room
                        </button>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Home