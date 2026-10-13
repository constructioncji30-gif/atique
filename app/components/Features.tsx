// components/Features.tsx
import { Heart, Shield, Clock, Users, BookOpen, Video } from 'lucide-react'

const features = [
  {
    icon: Heart,
    title: '100% Female Environment',
    description: 'All teachers and staff are female, ensuring comfort and modesty',
  },
  {
    icon: Shield,
    title: 'Safe Learning Space',
    description: 'Secure platform designed with women\'s privacy in mind',
  },
  {
    icon: Clock,
    title: 'Flexible Timing',
    description: 'Schedule classes around your daily routine and responsibilities',
  },
  {
    icon: Users,
    title: 'Sisterhood Community',
    description: 'Join a supportive community of women on the same journey',
  },
  {
    icon: BookOpen,
    title: 'Qualified Female Teachers',
    description: 'Learn from certified female Quran teachers with Ijazah',
  },
  {
    icon: Video,
    title: 'One-on-One Classes',
    description: 'Personalized attention with private video sessions',
  },
]

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-amiri">
            Why The Ain Khan Academy?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A unique learning environment designed exclusively for women
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-rose-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}