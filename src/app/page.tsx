import Link from "next/link";

export default function Home() {
  return (
    <Link className="text-blue-500 underline text-2xl font-bold" href="/123">
      Ir a detalle de producto
    </Link>
  );
}
