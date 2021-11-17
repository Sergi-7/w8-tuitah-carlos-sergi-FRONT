import Link from "next/link";

const Nav = () => (
  <nav>
    <Link href="/">Home</Link>
    <Link href="/createtweets">Crear nuevo tweet</Link>
    <Link href="/tweetslist">Listado de tweets</Link>
  </nav>
);
export default Nav;
