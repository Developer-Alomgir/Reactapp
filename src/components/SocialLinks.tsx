import { ExternalLink } from 'lucide-react';

export default function SocialLinks() {
  const socialLinks = [
    {
      name: 'ArtStation',
      url: 'https://www.artstation.com/alomgirsart',
      description: 'View my game art portfolio',
      color: 'from-blue-600 to-blue-700'
    },
    {
      name: 'Behance',
      url: 'https://www.behance.net/alomgirsart',
      description: 'Design projects and creative work',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Dribbble',
      url: 'https://dribbble.com/AlomgiRsart',
      description: 'UI/UX design showcases',
      color: 'from-pink-500 to-pink-600'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/alomgirsojol',
      description: 'Professional network',
      color: 'from-blue-700 to-blue-800'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">Connect With Me</h2>
        <p className="text-center text-slate-600 mb-12 text-lg">
          Explore my work and let's collaborate on exciting projects
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {link.name}
                  </h3>
                  <p className="text-slate-600">{link.description}</p>
                </div>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${link.color} flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow`}>
                  <ExternalLink className="text-white" size={24} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
