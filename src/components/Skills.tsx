import { Code, Palette, Gamepad2, Box } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Gamepad2,
      title: 'Game Engines',
      skills: ['Unity 6', 'Unreal Engine 5', 'Cocos2D'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Code,
      title: 'Programming',
      skills: ['C#', 'JavaScript', 'PHP', 'HTML', 'CSS3', 'MySQL'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Palette,
      title: 'Design & Animation',
      skills: ['Adobe After Effects', 'Premiere Pro', 'Substance 3D Painter'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Box,
      title: '3D Modeling',
      skills: ['Blender 4.1', '2D & 3D Art', 'Level Design'],
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">Skills & Expertise</h2>
        <p className="text-center text-slate-600 mb-12 text-lg">
          Comprehensive toolkit for creating exceptional gaming experiences
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:scale-105"
              >
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 shadow-md`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="text-slate-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
