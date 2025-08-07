import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Users, Target } from 'lucide-react'

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Connect Students with{' '}
            <span className="text-blue-600">Real-World Problems</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Students submit innovative solutions. Companies discover top talent.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button asChild size="lg" className="text-lg px-8 py-3">
              <Link href="/challenges">
                Browse Challenges
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
              <Link href="/post-challenge">
                Post a Challenge
                <Target className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-gray-700">
              <Users className="h-8 w-8 text-blue-600" />
              <span className="text-lg font-medium">For Students</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-700">
              <Target className="h-8 w-8 text-green-600" />
              <span className="text-lg font-medium">For Companies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
