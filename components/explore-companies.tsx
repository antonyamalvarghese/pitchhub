'use client'

import { useState } from 'react'
import { DashboardLayout } from '@/components/dashboard-layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { CompanyCard } from '@/components/company-card'
import { Search } from 'lucide-react'

// Mock data
const mockCompanies = [
  {
    id: '1',
    name: 'TechCorp',
    logo: '🏢',
    description: 'Leading technology solutions provider specializing in innovative software development and digital transformation.',
    industry: 'Technology',
    hiringRate: 85,
    totalTasks: 25,
    website: 'https://techcorp.com',
    isTopRecruiter: true
  },
  {
    id: '2',
    name: 'InnovateLab',
    logo: '🚀',
    description: 'Innovation and startup incubator helping entrepreneurs build the next generation of technology companies.',
    industry: 'Technology',
    hiringRate: 92,
    totalTasks: 18,
    website: 'https://innovatelab.com',
    isTopRecruiter: true
  },
  {
    id: '3',
    name: 'DataFlow',
    logo: '📊',
    description: 'Data analytics and insights company providing business intelligence solutions for enterprises.',
    industry: 'Data Science',
    hiringRate: 78,
    totalTasks: 32,
    website: 'https://dataflow.com',
    isTopRecruiter: false
  },
  {
    id: '4',
    name: 'DesignStudio',
    logo: '🎨',
    description: 'Creative design agency specializing in user experience and brand identity for digital products.',
    industry: 'Design',
    hiringRate: 88,
    totalTasks: 15,
    website: 'https://designstudio.com',
    isTopRecruiter: true
  },
  {
    id: '5',
    name: 'MarketingPro',
    logo: '📈',
    description: 'Digital marketing agency helping businesses grow through strategic online marketing campaigns.',
    industry: 'Marketing',
    hiringRate: 75,
    totalTasks: 22,
    website: 'https://marketingpro.com',
    isTopRecruiter: false
  },
  {
    id: '6',
    name: 'FinTechSolutions',
    logo: '💰',
    description: 'Financial technology company developing innovative solutions for banking and payment systems.',
    industry: 'Finance',
    hiringRate: 82,
    totalTasks: 28,
    website: 'https://fintechsolutions.com',
    isTopRecruiter: true
  }
]

const industries = ['All Industries', 'Technology', 'Data Science', 'Design', 'Marketing', 'Finance', 'Healthcare', 'Education']
const hiringRates = ['All Rates', '90%+', '80-89%', '70-79%', '60-69%']
const popularity = ['All', 'Top Recruiters', 'Most Active', 'Newest']

export function ExploreCompanies() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries')
  const [selectedHiringRate, setSelectedHiringRate] = useState('All Rates')
  const [selectedPopularity, setSelectedPopularity] = useState('All')
  const [companies] = useState(mockCompanies)

  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.industry.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesIndustry = selectedIndustry === 'All Industries' || company.industry === selectedIndustry
    
    const matchesHiringRate = selectedHiringRate === 'All Rates' || 
      (selectedHiringRate === '90%+' && company.hiringRate >= 90) ||
      (selectedHiringRate === '80-89%' && company.hiringRate >= 80 && company.hiringRate < 90) ||
      (selectedHiringRate === '70-79%' && company.hiringRate >= 70 && company.hiringRate < 80) ||
      (selectedHiringRate === '60-69%' && company.hiringRate >= 60 && company.hiringRate < 70)
    
    const matchesPopularity = selectedPopularity === 'All' ||
      (selectedPopularity === 'Top Recruiters' && company.isTopRecruiter) ||
      (selectedPopularity === 'Most Active' && company.totalTasks > 20)
    
    return matchesSearch && matchesIndustry && matchesHiringRate && matchesPopularity
  })

  return (
    <DashboardLayout userType="student">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Explore Companies</h1>
          <p className="text-gray-600">Discover companies that are actively hiring talented students</p>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search companies by name, industry, or description..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-2">
                <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                  <SelectTrigger className="w-full sm:w-[150px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map((industry) => (
                      <SelectItem key={industry} value={industry}>
                        {industry}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedHiringRate} onValueChange={setSelectedHiringRate}>
                  <SelectTrigger className="w-full sm:w-[120px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {hiringRates.map((rate) => (
                      <SelectItem key={rate} value={rate}>
                        {rate}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedPopularity} onValueChange={setSelectedPopularity}>
                  <SelectTrigger className="w-full sm:w-[140px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {popularity.map((pop) => (
                      <SelectItem key={pop} value={pop}>
                        {pop}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Showing {filteredCompanies.length} compan{filteredCompanies.length !== 1 ? 'ies' : 'y'}
          </p>
          <Select defaultValue="hiring-rate">
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hiring-rate">Highest Hiring Rate</SelectItem>
              <SelectItem value="most-active">Most Active</SelectItem>
              <SelectItem value="alphabetical">Alphabetical</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Company Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>

        {filteredCompanies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No companies found matching your criteria.</p>
            <p className="text-gray-400 mt-2">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
