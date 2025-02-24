```javascript
import { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const isMounted = useRef(true);

  useEffect(() => {
    console.log('Component rendered');
    return () => {
      isMounted.current = false;
      console.log('Component unmounted');
    };
  }, []);

  useEffect(() => {
    if (isMounted.current) {
       //Perform side effect only if component is mounted
      console.log('Count updated:', count);
    }
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default MyComponent;
```