import React, { useContext, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SocketContext } from '../../SocketContext';
import "./Options.css";

const Options = ({ children }) => {
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');
    return (
        <div className='container' >
        <div className="inner-container">
            <div>
                <h3>Account Info</h3>
                <input placeholder='User Name' id='id-to-call' label="Name" value={name} onChange={(e) => setName(e.target.value)} />
                {/* {console.log(me)} */}
                <CopyToClipboard text={me}>
                    <button type='button' id='copy-button'>
                        Copy Your ID
                    </button>
                </CopyToClipboard>
                <h3>Make a Connection</h3>
                <input placeholder='connection id' label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} />
                {callAccepted && !callEnded ? (
                    <button onClick={leaveCall}>
                        End Connection
                    </button>
                ) : (
                    <button id='call-button' onClick={() => callUser(idToCall)}>
                        Start Connection
                    </button>
                )}
            </div>
        </div>
        {children}
    </div>
    );
};

export default Options;
