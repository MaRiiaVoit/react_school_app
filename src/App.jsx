import Header from "./components/Header";
import WayToTeach from "./components/WayToTeach";
import Button from "./components/Button/Button";
import { ways } from './data';


export default function App() {
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

          <Button>About</Button>
          <Button>Curriculum</Button>
          <Button>Admissions</Button>
        </section>
      </main>
    </div>
  );
}
