import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0d0f0d] flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-6xl font-extrabold text-emerald-400 mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
      <p className="text-zinc-400 mb-6">Looks like you wandered into unchartered territory.</p>
      <Link 
        href="/" 
        className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3 rounded-full transition-all"
      >
        Back to Home
      </Link>
    </div>
  );
}