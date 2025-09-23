import { Suspense } from 'react';
import './App.css'
import Countries from './Countries/Countries/Countries';

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json());

function App() {

  return (
    <>
      <Suspense fallback={<p>All countries are loading.....</p>}>
      <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App



// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/shemul345/react-world-visit.git
// git push -u origin main