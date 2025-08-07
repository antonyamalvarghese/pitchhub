'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, Building, Trophy, Target, Briefcase, GraduationCap, ArrowRight, Star, TrendingUp } from 'lucide-react'

const featuredCompanies = [
  { name: 'TechCorp', logo: '🏢' },
  { name: 'InnovateLab', logo: '🚀' },
  { name: 'DataFlow', logo: '📊' },
  { name: 'CloudTech', logo: '☁️' },
  { name: 'AI Solutions', logo: '🤖' },
  { name: 'StartupHub', logo: '💡' }
]

const benefits = [
  {
    icon: GraduationCap,
    title: 'Gain Real Experience',
    description: 'Work on actual industry challenges and build your portfolio',
    color: 'text-blue-600'
  },
  {
    icon: Building,
    title: 'Find Top Talent',
    description: 'Discover skilled students ready to tackle your business problems',
    color: 'text-green-600'
  },
  {
    icon: Trophy,
    title: 'Compete & Excel',
    description: 'Climb leaderboards and showcase your skills to potential employers',
    color: 'text-purple-600'
  },
  {
    icon: Target,
    title: 'Direct Hiring',
    description: 'Connect directly with companies and streamline your recruitment process',
    color: 'text-orange-600'
  }
]

export function WelcomePage() {
  const [userType, setUserType] = useState<'student' | 'company'>('student')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Briefcase className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">TaskBridge</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/auth">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/auth">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Bridge Students and Industry with{' '}
            <span className="text-blue-600">Real-World Challenges</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Students gain experience. Companies find talent.
          </p>

          {/* User Type Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full p-1 shadow-lg border">
              <button
                onClick={() => setUserType('student')}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  userType === 'student'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Users className="h-4 w-4 inline mr-2" />
                I'm a Student
              </button>
              <button
                onClick={() => setUserType('company')}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  userType === 'company'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Building className="h-4 w-4 inline mr-2" />
                I'm a Company
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="text-lg px-8 py-4" asChild>
              <Link href="/auth">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" className="text-lg px-8 py-4" asChild>
              <Link href="/auth">
                Learn More
              </Link>
            </Button>
          </div>

          {/* Featured Companies */}
          <div className="mb-16">
            <p className="text-gray-600 mb-6">Trusted by leading companies</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              {featuredCompanies.map((company, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-500">
                  <span className="text-2xl">{company.logo}</span>
                  <span className="font-medium">{company.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Join TaskBridge?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connecting talent with opportunity through meaningful collaboration
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center">
                    <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-blue-100">Active Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Partner Companies</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-blue-100">Hiring Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">TaskBridge</span>
            </div>
            
            <div className="text-gray-400">
              © 2024 TaskBridge. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
