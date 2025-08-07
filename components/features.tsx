import { Clock, Award, Users, Lightbulb, Building, Trophy } from 'lucide-react'

const features = [
  {
    icon: Clock,
    title: 'Time-bound Challenges',
    description: 'Structured deadlines that simulate real-world project timelines and urgency.',
    color: 'text-blue-600'
  },
  {
    icon: Award,
    title: 'Real-World Experience',
    description: 'Work on actual problems faced by companies, gaining practical industry experience.',
    color: 'text-green-600'
  },
  {
    icon: Users,
    title: 'Discover Talent',
    description: 'Companies can identify and recruit the most innovative and skilled students.',
    color: 'text-purple-600'
  },
  {
    icon: Lightbulb,
    title: 'Innovation Hub',
    description: 'Foster creativity and out-of-the-box thinking through diverse challenge categories.',
    color: 'text-orange-600'
  },
  {
    icon: Building,
    title: 'Industry Partnerships',
    description: 'Build meaningful connections between academia and industry professionals.',
    color: 'text-indigo-600'
  },
  {
    icon: Trophy,
    title: 'Recognition & Rewards',
    description: 'Outstanding solutions get recognized, opening doors to career opportunities.',
    color: 'text-red-600'
  }
]

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose IndustryBridge?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Bridging the gap between academic learning and industry needs through collaborative problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <feature.icon className={`h-8 w-8 ${feature.color}`} />
                <h3 className="text-xl font-semibold text-gray-900 ml-3">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
