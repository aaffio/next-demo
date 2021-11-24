import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function CarsList(props) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Cars list</h1>

        <ul>
          <li>
            <Link href="/cars/toyota">
              <a>Toyota</a>
            </Link>
          </li>
          <li>
            <Link href="/cars/honda">
              <a>Honda</a>
            </Link>
          </li>
          <li>
            <Link href="/cars/mazda">
              <a>Mazda</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Back to Home</a>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
