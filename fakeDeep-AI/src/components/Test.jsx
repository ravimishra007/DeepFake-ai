
import '../styles/test.css'

export const Test = () => {
  return (
    <>
        <div className='main-container'>
    <h1 className='text-white'>this is testing</h1>
    <div className='upper-container'>
    <div className='inner-cutout1'></div>
    </div>
    <div className='lower-container'>
    <div className='inner-cutout2'></div>

    </div>
    </div>
    </>
  )
}

// upper
// clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 100% 100%, 50% 100%, 50% 70%, 0 70%);
// clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 100% 100%, 50% 100%, 50% 65%, 0 65%);

// lower
// clip-path: polygon(50% 0, 50% 35%, 100% 35%, 100% 100%, 50% 100%, 0 100%, 0 0);
