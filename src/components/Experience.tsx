import { Calendar, Building2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Senior Game Developer',
      company: 'QuantumFX Systems',
      period: 'July 2024 - Present',
      current: true,
      description: 'Leading game development projects with focus on advanced mechanics and optimization'
    },
    {
      title: 'Realtime Environment Designer',
      company: 'The Artificial Core Game Studio, Inc.',
      period: 'April 2023 - Present',
      current: true,
      description: 'Designing and implementing immersive game environments using cutting-edge real-time rendering techniques'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">Professional Experience</h2>
        <p className="text-center text-slate-600 mb-12 text-lg">
          Building innovative gaming solutions across industry-leading studios
        </p>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:border-blue-300 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-slate-900">{exp.title}</h3>
                    {exp.current && (
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 mb-2">
                    <Building2 size={18} />
                    <span className="text-lg font-medium">{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Calendar size={18} />
                  <span className="font-medium">{exp.period}</span>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
