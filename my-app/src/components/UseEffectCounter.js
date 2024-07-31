import React, {useState, useEffect} from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);
    useEffect(() => {
        console.log('haha kolla')
        document.title = count;
    }, [count]);
    useEffect(()=>{
        console.log('creating timer');
        const interval = setInterval(() => {
            console.log('interval executed');
            setTime(time => time + 1)
        }, 1000);
        return () => {
            console.log('cleaning up skit')
            clearInterval(interval);
        }
    }, []);
  return (
    <div>
        <button onClick={
            () => setCount(count => count + 1)
        }>
            increment count ({count})
        </button>
        <h2>time is {time}</h2>
    </div>
  )
}

export default UseEffectCounter