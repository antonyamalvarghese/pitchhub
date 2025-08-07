'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { Upload, FileText, Github, Send } from 'lucide-react'

interface SolutionSubmissionProps {
  challengeId: string
}

export function SolutionSubmission({ challengeId }: SolutionSubmissionProps) {
  const [formData, setFormData] = useState({
    solution: '',
    githubLink: '',
    file: null as File | null
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Validate file type and size
      const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      const maxSize = 10 * 1024 * 1024 // 10MB

      if (!allowedTypes.includes(file.type)) {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF or DOCX file.",
          variant: "destructive"
        })
        return
      }

      if (file.size > maxSize) {
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 10MB.",
          variant: "destructive"
        })
        return
      }

      setFormData(prev => ({ ...prev, file }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.solution.trim()) {
      toast({
        title: "Solution required",
        description: "Please provide a written solution.",
        variant: "destructive"
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Here you would make an API call to submit the solution
      // const formDataToSend = new FormData()
      // formDataToSend.append('challengeId', challengeId)
      // formDataToSend.append('solution', formData.solution)
      // formDataToSend.append('githubLink', formData.githubLink)
      // if (formData.file) {
      //   formDataToSend.append('file', formData.file)
      // }
      
      // await fetch('/api/solutions', {
      //   method: 'POST',
      //   body: formDataToSend
      // })

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))

      toast({
        title: "Solution submitted!",
        description: "Your solution has been successfully submitted.",
      })

      // Reset form
      setFormData({
        solution: '',
        githubLink: '',
        file: null
      })
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "There was an error submitting your solution. Please try again.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Send className="h-5 w-5 mr-2" />
            Submit Your Solution
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Written Solution */}
            <div className="space-y-2">
              <Label htmlFor="solution">
                Written Solution <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="solution"
                placeholder="Describe your solution in detail. Include your approach, methodology, and key insights..."
                value={formData.solution}
                onChange={(e) => setFormData(prev => ({ ...prev, solution: e.target.value }))}
                className="min-h-[200px]"
                required
              />
              <p className="text-sm text-gray-500">
                Provide a comprehensive explanation of your solution approach.
              </p>
            </div>

            {/* File Upload */}
            <div className="space-y-2">
              <Label htmlFor="file">Supporting Document (Optional)</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                <input
                  type="file"
                  id="file"
                  accept=".pdf,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label htmlFor="file" className="cursor-pointer">
                  <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    PDF or DOCX (max 10MB)
                  </p>
                </label>
              </div>
              
              {formData.file && (
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <FileText className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-sm font-medium">{formData.file.name}</span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setFormData(prev => ({ ...prev, file: null }))}
                    className="ml-auto"
                  >
                    Remove
                  </Button>
                </div>
              )}
            </div>

            {/* GitHub Link */}
            <div className="space-y-2">
              <Label htmlFor="github">GitHub Repository (Optional)</Label>
              <div className="relative">
                <Github className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  id="github"
                  type="url"
                  placeholder="https://github.com/username/repository"
                  value={formData.githubLink}
                  onChange={(e) => setFormData(prev => ({ ...prev, githubLink: e.target.value }))}
                  className="pl-10"
                />
              </div>
              <p className="text-sm text-gray-500">
                Link to your code repository if applicable.
              </p>
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              className="w-full" 
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Submit Solution
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
