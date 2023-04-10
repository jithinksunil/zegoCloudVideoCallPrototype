import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import React from 'react'
import { useParams } from 'react-router-dom'


function Room() {
    const {roomId}=useParams()
    const myMeeting=(element)=>{
        const appId = 1541507471;
        const serverSecret = "f4c4d93e705f78d247e281f03131155e";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appId, serverSecret, roomId, Date.now().toString(),  'jithin ks');
        const zc=ZegoUIKitPrebuilt.create(kitToken)
        zc.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Send this link to connnect',
            url:`http://localhost:3000/room/${roomId}`
          }
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
        showScreenSharingButton: true
      });

    }

  return (
    <div>
      <div ref={myMeeting}/>
    </div>
  )
}

export default Room
