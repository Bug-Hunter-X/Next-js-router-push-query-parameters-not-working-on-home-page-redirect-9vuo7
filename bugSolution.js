```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();
  const handleClick = () => {
    // Use router.replace to correctly handle query parameters on redirect to home page
    router.replace({ pathname: '/', query: { name: 'John Doe' } }, '/', { shallow: true });
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go to Home Page</button>
    </div>
  );
}
```