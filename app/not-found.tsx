import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-dot-grid">
      <div className="text-center">
        <h1 className="text-8xl font-bold font-display bg-gradient-to-r from-[#1B4FFF] to-[#FF6B2B] bg-clip-text text-transparent mb-4">
          404
        </h1>
        <h2 className="text-3xl font-bold font-display text-textPrimary mb-4">
          Page Not Found
        </h2>
        <p className="text-textSecondary mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="bg-primary text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:bg-primary/90 inline-block"
        >
          Go Back Home
        </Link>
      </div>
    </main>
  );
}
