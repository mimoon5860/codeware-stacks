import React, { useState } from 'react';

const Button = () => {
    const [clickCount, setClickCount] = useState<number>(0)
    return (
        <div>
            <button className='button' onClick={() => setClickCount(clickCount + 1)}>{
                clickCount % 3 === 0 && clickCount !== 0 ? 'Bang!' : "Click me!"
            }</button>
        </div>
    );
};

export default Button;