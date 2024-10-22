import Header from "./components/Header";
import { ways } from './data';

function WayToTeach(props) {
  return (
    <li>
      <p>
        <strong>{props.title}</strong> {props.description}
      </p>
    </li>
  )
}

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Teaching children how to think</h3>
          <ul>
            <WayToTeach title="111" description="222" />
            <WayToTeach title="333" description="444" />
          </ul>
        </section>
      </main>
    </div>
  );
}
