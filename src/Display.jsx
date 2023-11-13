import React from 'react';
import { BsFillEmojiSunglassesFill, BsFillEmojiDizzyFill, BsFillEmojiAngryFill } from 'react-icons/bs';
import Random from './Random';
import './Display.css';
import Result from './Result'
export default function MyComponent() {
    const num = [<BsFillEmojiSunglassesFill />, <BsFillEmojiDizzyFill />, <BsFillEmojiAngryFill />];
    const randomIndex1 = Random();
    const randomIndex2 = Random();
    const randomIndex3 = Random();

    return (
        <>
            <h1 className='name'>Slash Face</h1>
            <div className='dis'>
                {num[randomIndex1]}
                {num[randomIndex2]}
                {num[randomIndex3]}
            </div>
            <div className='res' >
                <Result index1={randomIndex1} index2={randomIndex2} index3={randomIndex3} />
            </div>
        </>
    );
}
