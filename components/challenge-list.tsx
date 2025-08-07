'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ChallengeCard } from '@/components/challenge-card'
import { Search, Filter } from 'lucide-react'

// Mock data - replace with API call
const mockChallenges = [
  {
    id: '1',
    title: 'Sustainable Packaging Solution',
    company: 'EcoTech Industries',
    description: 'Design an innovative, biodegradable packaging solution for e-commerce deliveries.',
    deadline: new Date('2024-12-15'),
    tags: ['Sustainability', 'Design', 'Innovation'],
    submissionCount: 23
  },
  {
    id: '2',
    title: 'AI-Powered Customer Service Bot',
    company: 'TechFlow Solutions',
    description: 'Create an intelligent chatbot that can handle complex customer inquiries.',
    deadline: new Date('2024-11-30'),
    tags: ['AI', 'Machine Learning', 'Customer Service'],
    submissionCount: 45
  },
  {
    id: '3',
    title: 'Mobile App for Local Farmers',
    company: 'AgriConnect',
    description: 'Develop a mobile application to connect local farmers with consumers directly.',
    deadline: new Date('2024-12-20'),
    tags: ['Mobile Development', 'Agriculture', 'Social Impact'],
    submissionCount: 12
  }
]

const categories = ['All', 'Technology', 'Sustainability', 'Healthcare', 'Finance', 'Education']

export function ChallengeList() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [challenges] = useState(mockChallenges)

  const filteredChallenges = challenges.filter(challenge => {
    const matchesSearch = challenge.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         challenge.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         challenge.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = selectedCategory === 'All' || 
                           challenge.tags.some(tag => tag.toLowerCase().includes(selectedCategory.toLowerCase()))
    
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search challenges, companies, or keywords..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-500">Category:</span>
        </div>
      </div>

      {/* Category Filter Chips */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Results Count */}
      <div className="text-sm text-gray-600">
        Showing {filteredChallenges.length} challenge{filteredChallenges.length !== 1 ? 's' : ''}
      </div>

      {/* Challenge Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredChallenges.map((challenge) => (
          <ChallengeCard key={challenge.id} challenge={challenge} />
        ))}
      </div>

      {filteredChallenges.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No challenges found matching your criteria.</p>
          <p className="text-gray-400 mt-2">Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  )
}
