import React, { useState } from 'react';
import { Link } from "react-router-dom";

import ChatLogo from '../../icons/chatLogo.png';
import './Join.css';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
			<div className="joinInnerContainer">
				<div className='logo'>
					<img src={ChatLogo} alt='logo' />
					<h1 className="heading">Join</h1>
				</div>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Sign In</button>
        </Link>
			</div>
			<div className='bottomText'>
				<div>
					<p>
						<span className='check'>채팅을 클론 코딩하면서 느낀점!!</span>
						<span>채팅따라하면서 채팅을 내용을 주고 받을 때 서버를 등록하 내용을 주고 받아야 합니다.</span>
						<span>배포를 할때 서버를 어떻게 해야되는지 몰라는데</span>
						<span>heroku라는 사이트를 이용해 서버를 대체 하는걸 알게 되었습니다.</span>
					</p>
				</div>
			</div>
    </div>
  );
}

export default Join;