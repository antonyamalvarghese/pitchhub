'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CountdownTimer } from '@/components/countdown-timer'
import { Building, Calendar, Users, FileText, ExternalLink } from 'lucide-react'

interface ChallengeDetailProps {
  challengeId: string
}

// Mock data - replace with API call
const mockChallenge = {
  id: '1',
  title: 'Sustainable Packaging Solution',
  company: 'EcoTech Industries',
  description: `We are looking for innovative, biodegradable packaging solutions for e-commerce deliveries. 
  
  The challenge is to design a packaging system that:
  - Is completely biodegradable within 90 days
  - Provides adequate protection for various product types
  - Is cost-effective to manufacture at scale
  - Has minimal environmental impact during production
  
  Your solution should include:
  1. Material specifications and sourcing
  2. Design blueprints or prototypes
  3. Cost analysis and scalability plan
  4. Environmental impact assessment
  
  We're particularly interested in solutions that can replace traditional plastic packaging while maintaining or improving protection standards.`,
  deadline: new Date('2024-12-15'),
  tags: ['Sustainability', 'Design', 'Innovation', 'Environmental'],
  submissionCount: 23,
  attachments: [
    { name: 'Current_Packaging_Specs.pdf', size: '2.3 MB' },
    { name: 'Requirements_Document.docx', size: '1.1 MB' }
  ]
}

export function ChallengeDetail({ challengeId }: ChallengeDetailProps) {
  const [challenge] = useState(mockChallenge)

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="flex-1">
              <CardTitle className="text-2xl md:text-3xl mb-3">
                {challenge.title}
              </CardTitle>
              
              <div className="flex items-center text-gray-600 mb-4">
                <Building className="h-5 w-5 mr-2" />
                <span className="text-lg">{challenge.company}</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {challenge.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <div className="mb-2">
                <Calendar className="h-4 w-4 inline mr-1" />
                <span className="text-sm text-gray-600">Deadline</span>
              </div>
              <CountdownTimer deadline={challenge.deadline} className="text-lg font-semibold" />
              
              <div className="mt-3 flex items-center justify-center md:justify-end text-sm text-gray-500">
                <Users className="h-4 w-4 mr-1" />
                {challenge.submissionCount} submissions
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Description */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="h-5 w-5 mr-2" />
            Challenge Description
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none">
            {challenge.description.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Attachments */}
      {challenge.attachments.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Challenge Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {challenge.attachments.map((attachment, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-2 text-gray-500" />
                    <span className="font-medium">{attachment.name}</span>
                    <span className="text-sm text-gray-500 ml-2">({attachment.size})</span>
                  </div>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Submit Solution Button */}
      <div className="flex justify-center">
        <Button asChild size="lg" className="px-8">
          <Link href={`/challenges/${challengeId}/submit`}>
            Submit Solution
          </Link>
        </Button>
      </div>
    </div>
  )
}
