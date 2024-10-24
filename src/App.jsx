import Header from "./components/Header";
import WayToTeach from "./components/WayToTeach";
import Button from "./components/Button/Button";
import { useState } from 'react'
import { ways, differences } from './data';

export default function App() {
  const [contentType, setContentType] = useState(null)

  function handleClick(type) {
    setContentType(type)
  }

  // let tabContent = null

  // if (contentType) {
  //   tabContent = <p>{differences[contentType]}</p>
  // } else {
  //   tabContent = <p>Click the button</p>
  // }

  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Teaching children how to think</h3>
          <ul>
            <WayToTeach
              title={ways[0].title}
              description={ways[0].description}
            />
            <WayToTeach {...ways[1]} />
            <WayToTeach {...ways[2]} />
            <WayToTeach {...ways[3]} />
          </ul>
        </section>
        <section>
          <h3>School Life</h3>

          <Button onClick={() => handleClick('way')}>About</Button>
          <Button onClick={() => handleClick('easy')}>Curriculum</Button>
          <Button onClick={() => handleClick('program')}>Admissions</Button>

          {/* {contentType ? (
            <p>{differences[contentType]}</p>
          ) : (
            <p>Click the button</p>
          )} */}

          {/* {!contentType ? <p>Click the button</p> : null}
          {contentType ? <p>{differences[contentType]}</p> : null} */}

          {!contentType && <p>Click the button</p>}

          {contentType && <p>{differences[contentType]}</p>}

          {/* {tabContent} */}

        </section>
      </main>
    </div>
  );
}
