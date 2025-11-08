import { MapPin, Briefcase } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-3xl font-bold">
                FrontEnd
                Software Engineer
              </div>
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Alomgir Hossen
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 mb-6">Game Development Engineer</p>

            <div className="flex flex-col sm:flex-row gap-4 text-slate-400 mb-8 justify-center md:justify-start">
              <div className="flex items-center gap-2">
                <Briefcase size={20} />
                <span>Realtime Environment Designer</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>The Artificial Core Game Studio</span>
              </div>
            </div>

            <p className="text-lg text-slate-300 leading-relaxed">
              Specialized in game design, development, and animation with expertise in Unity 3D,
              Unreal Engine, and cross-platform game development. Creating immersive gaming experiences
              through cutting-edge technology and creative vision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
