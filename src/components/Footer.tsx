export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-slate-400">
          © {new Date().getFullYear()} Alomgir Hossen. All rights reserved.
        </p>
        <p className="text-slate-500 mt-2 text-sm">
          Game Development Engineer | Creating Immersive Experiences
        </p>
      </div>
    </footer>
  );
}
