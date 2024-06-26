import React, { useState } from 'react';
import Navbar from '../Navbar';
import Banner from '../Banner';
import Download from '../HomePageFooter';
import ReactPlayer from 'react-player'; 
import { v4 as uuidv4 } from 'uuid'; 
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'; 


function Home() {
  const navigate = useNavigate(); 
  const [roomId, setRoomID] = useState('');
  const [username, setUsername] = useState('');

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidv4(); 
    setRoomID(id);
    console.log(id);
    toast.success("Created a new room");
  };

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("Room Id and Username are required.");
      return;
    }
    // Redirect
    navigate(`/editor/${roomId}`, {
      state: {
        username,
      }
    });
  };

  // Inline CSS for component styles
  const styles = `
    .center-text {
      text-align: center;
    }

    .facilities-heading {
      font-family: 'PT Sans', sans-serif;
      color: #65A0FB;
      font-size: 2.5rem;
      font-weight: bold;
      margin: 20px 0;
      text-align: center;
    }

    .switch-container {
      display: flex;
      justify-content: center;
    }

    /* Your existing switch styles */
    .switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
    }

    /* Hide default HTML checkbox */
    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    /* The slider */
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: .4s;
      transition: .4s;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: .4s;
      transition: .4s;
    }

    input:checked + .slider {
      background-color: #2196F3;
    }

    input:focus + .slider {
      box-shadow: 0 0 1px #2196F3;
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
      border-radius: 34px;
    }

    .slider.round:before {
      border-radius: 50%;
    }

    .responsive-video {
      position: relative;
      padding-top: 56.25%; /* 16:9 Aspect Ratio */
      height: 0;
      overflow: hidden;
      max-width: 100%;
      background: #000;
      border-radius: 20px;
      margin-top: 20px;
    }

    .responsive-video iframe, .responsive-video video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .video-container {
      position: relative;
      width: 100%;
      max-width: 100%;
      background: #000;
      border-radius: 20px;
      overflow: hidden;
    }

    .video-text {
      position: absolute;
      top:  37%;
      left: 0;
      width: 100%;
      text-align: center;
      color: white;
      padding: 20px;
      z-index: 1;
    }

    .video-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 1;
    }

    .video-wrapper {
      position: relative;
      padding-top: 56.25%; /* 16:9 Aspect Ratio */
      height: 0;
      overflow: hidden;
      max-width: 100%;
      border-radius: 20px;
      background: #000;
    }

    .video-wrapper iframe, .video-wrapper video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
    }

    .gradient-text {
      background: linear-gradient(
        to right,
        #E98856 20%,
        #AA6FB3 30%,
       #8278CF 70%,
       #DF6B6A 80%
      );
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      text-fill-color: transparent;
      background-size: 500% auto;
      animation: textShine 5s ease-in-out infinite alternate;
    }

    @keyframes textShine {
      0% {
        background-position: 0% 50%;
      }
      100% {
        background-position: 100% 50%;
      }
    }

    /* Media Queries for responsiveness */
    @media (max-width: 768px) {
      .video-text {
        top: 30%;
        padding: 10px;
      }

      .center-text {
        font-size: 1.2rem;
      }

      .inputBox {
        width: 80%;
      }

      .btn {
        width: 200px;
      }

      .video-wrapper {
        border-radius: 10px;
      }
    }

    @media (max-width: 480px) {
      .video-text {
        top: 20%;
        padding: 5px;
      }

      .center-text {
        font-size: 1rem;
      }

      .inputBox {
        width: 90%;
      }

      .btn {
        width: 150px;
      }

      .video-wrapper {
        border-radius: 5px;
      }
    }
  `;

  const handleInputEnter = (e) => {
    console.log('event', e.code);
    if (e.code === 'Enter') {
      joinRoom();
    }
  };

  return (
    <div>
      <style>{styles}</style>
      <Navbar />
      <div className="video-container">
        <div className="video-text">
          <h1 className="center-text gradient-text" style={{ fontFamily: "PT sans",color: "rgba(242, 243, 243, 0.9)", fontSize: "60px", fontWeight: "bold" }}>
            Blazing Fast Development and Integrations!
          </h1>
          <h3 className="center-text" style={{ fontFamily: "PT sans", fontSize: "26px", color: "rgba(242, 243, 243, 0.5)", fontWeight: "bolder" }}>
            Shift to faster code development.
          </h3>
        </div>
        <div className="video-wrapper">
        <video src="./images/intro.webm" loop autoPlay muted className="h-[300px] " ></video>
          {/* <ReactPlayer autoPlay muted
            url='./images/intro.webm'
            playing={true}
            loop={true}
            controls={false}
            width="100%"
            height="100%"
            style={{ borderRadius: '20px' }}
          /> */}
        </div>
      </div>
      <div>
       
      <span><center></center></span>
  
        {/* <Banner /> */}
        <br />
        <br />
        <center>
          <div style={{ backgroundColor: "#1B1C1E", borderRadius: "20px", width: "100%", height: "30rem" }}>
            <br />
            <h1 style={{ fontFamily: "PT sans", color: "#036EFD", fontSize: "50px", fontWeight: "bold" }} onClick={joinRoom}>
              Join a room
            </h1>
            <h3 style={{ fontFamily: "PT sans", color: "white", fontSize: "20px", fontWeight: "bold" }}>
              Paste Invitation ROOM ID
            </h3>
            <br />
            <div className="inputGroup">
              <center>
                <input
                  type="text"
                  className="inputBox"
                  placeholder="    Room ID"
                  style={{ borderRadius: "20px", width: "40%", height: "2.7rem", marginBottom: "10px", color: "grey" }}
                  onChange={(e) => setRoomID(e.target.value)}
                  value={roomId}
                  onKeyUp={handleInputEnter}
                />
                <br />
                <input
                  type="text"
                  className="inputBox"
                  placeholder="    Username"
                  style={{ borderRadius: "20px", height: "2.7rem", width: "40%" }}
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
                <br />
                <br />
                <a onClick={createNewRoom} href="">
                  <h3 style={{ fontFamily: "PT sans", color: "grey", fontSize: "20px", fontWeight: "bold" }}>
                    Don't have an invite code? Create new Room
                  </h3>
                </a>
              </center>
              <br />
              <center>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ borderRadius: "20px", width: "250px" }}
                  onClick={joinRoom}
                >
                  Join Room
                </button>
              </center>
            </div>
            <br />
            <img src='./images/1.jpeg' className="img-fluid" style={{ borderRadius: "20px" }} />
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Download />
        </center>
      </div>
    </div>
  );
}

export default Home;
