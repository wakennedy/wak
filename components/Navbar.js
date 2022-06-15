import Link from "next/link";

export default function Navbar() {
  const user = true;
  const username = true;

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">WaK</button>
          </Link>
        </li>

        <>
          <li>
            <Link href="/counter">
              <button className="btn-blue">Counter</button>
            </Link>
          </li>
          <li>
            <Link href="/tasks">
              <button className="btn-blue">Tasks</button>
            </Link>
          </li>
        </>

        {/* user is signed-in and has username */}
        {username && (
          <>
            <li className="push-left">
              <Link href="">
                <button className="btn-blue">Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href="/admin">
                <img src={user?.photoURL} />
              </Link>
            </li>
          </>
        )}

        {/* user is not signed OR has not created username */}
        {!username && (
          <li>
            <Link href="/enter">
              <button className="btn-blue">Log in</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
