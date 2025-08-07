'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useAuth } from '@/components/auth-provider'
import { useToast } from '@/hooks/use-toast'
import { Briefcase, User, Building, Mail, Lock, Upload, ArrowLeft, Globe, FileText, GraduationCap } from 'lucide-react'

const industries = [
  'Technology', 'Healthcare', 'Finance', 'Education', 'Manufacturing',
  'Retail', 'Consulting', 'Media', 'Real Estate', 'Other'
]

const fields = [
  'Computer Science', 'Engineering', 'Business', 'Design', 'Marketing',
  'Data Science', 'Finance', 'Healthcare', 'Education', 'Other'
]

export function AuthPage() {
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  const [userType, setUserType] = useState<'student' | 'company'>('student')
  const [isLoading, setIsLoading] = useState(false)
  const [studentData, setStudentData] = useState({
    name: '',
    email: '',
    password: '',
    education: '',
    field: '',
    linkedin: '',
    resume: null as File | null
  })
  const [companyData, setCompanyData] = useState({
    name: '',
    email: '',
    password: '',
    website: '',
    industry: '',
    description: '',
    logo: null as File | null
  })

  const { login, signup } = useAuth()
  const { toast } = useToast()
  const router = useRouter()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'resume' | 'logo') => {
    const file = e.target.files?.[0]
    if (file) {
      if (type === 'resume') {
        setStudentData(prev => ({ ...prev, resume: file }))
      } else {
        setCompanyData(prev => ({ ...prev, logo: file }))
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const data = userType === 'student' ? studentData : companyData
      
      if (mode === 'login') {
        await login(data.email, data.password, userType)
      } else {
        await signup(data.email, data.password, userType, data)
      }

      toast({
        title: mode === 'login' ? 'Welcome back!' : 'Account created!',
        description: mode === 'login' ? 'Successfully logged in.' : 'Your account has been created.',
      })

      // Redirect based on user type
      router.push(userType === 'student' ? '/student/dashboard' : '/company/dashboard')
    } catch (error) {
      toast({
        title: 'Authentication failed',
        description: 'Please check your credentials and try again.',
        variant: 'destructive'
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleAuth = async () => {
    setIsLoading(true)
    try {
      // Implement Google authentication
      toast({
        title: 'Google Sign-in',
        description: 'Google authentication would be implemented here.',
      })
    } catch (error) {
      toast({
        title: 'Authentication failed',
        description: 'Google sign-in failed. Please try again.',
        variant: 'destructive'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Briefcase className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">TaskBridge</span>
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {mode === 'login' ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text-gray-600">
            {mode === 'login' ? 'Sign in to your account' : 'Join our community today'}
          </p>
        </div>

        <Card>
          <CardHeader>
            <Tabs value={userType} onValueChange={(value) => setUserType(value as 'student' | 'company')}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="student" className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  Student
                </TabsTrigger>
                <TabsTrigger value="company" className="flex items-center">
                  <Building className="h-4 w-4 mr-2" />
                  Company
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {userType === 'student' ? (
                <>
                  {mode === 'signup' && (
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={studentData.name}
                        onChange={(e) => setStudentData(prev => ({ ...prev, name: e.target.value }))}
                        required
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={studentData.email}
                        onChange={(e) => setStudentData(prev => ({ ...prev, email: e.target.value }))}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={studentData.password}
                        onChange={(e) => setStudentData(prev => ({ ...prev, password: e.target.value }))}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  {mode === 'signup' && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="education">Educational Background</Label>
                        <div className="relative">
                          <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input
                            id="education"
                            placeholder="e.g., Computer Science at MIT"
                            value={studentData.education}
                            onChange={(e) => setStudentData(prev => ({ ...prev, education: e.target.value }))}
                            className="pl-10"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="field">Field of Interest</Label>
                        <Select value={studentData.field} onValueChange={(value) => setStudentData(prev => ({ ...prev, field: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your field" />
                          </SelectTrigger>
                          <SelectContent>
                            {fields.map((field) => (
                              <SelectItem key={field} value={field}>
                                {field}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="linkedin">LinkedIn Profile (Optional)</Label>
                        <Input
                          id="linkedin"
                          type="url"
                          placeholder="https://linkedin.com/in/yourprofile"
                          value={studentData.linkedin}
                          onChange={(e) => setStudentData(prev => ({ ...prev, linkedin: e.target.value }))}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="resume">Resume (Optional)</Label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-gray-400 transition-colors">
                          <input
                            type="file"
                            id="resume"
                            accept=".pdf,.doc,.docx"
                            onChange={(e) => handleFileChange(e, 'resume')}
                            className="hidden"
                          />
                          <label htmlFor="resume" className="cursor-pointer">
                            <Upload className="h-6 w-6 mx-auto text-gray-400 mb-2" />
                            <p className="text-sm text-gray-600">
                              {studentData.resume ? studentData.resume.name : 'Click to upload resume'}
                            </p>
                          </label>
                        </div>
                      </div>
                    </>
                  )}
                </>
              ) : (
                <>
                  {mode === 'signup' && (
                    <div className="space-y-2">
                      <Label htmlFor="company-name">Company Name</Label>
                      <Input
                        id="company-name"
                        type="text"
                        placeholder="Enter company name"
                        value={companyData.name}
                        onChange={(e) => setCompanyData(prev => ({ ...prev, name: e.target.value }))}
                        required
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="company-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="company-email"
                        type="email"
                        placeholder="Enter company email"
                        value={companyData.email}
                        onChange={(e) => setCompanyData(prev => ({ ...prev, email: e.target.value }))}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="company-password"
                        type="password"
                        placeholder="Enter password"
                        value={companyData.password}
                        onChange={(e) => setCompanyData(prev => ({ ...prev, password: e.target.value }))}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  {mode === 'signup' && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="website">Company Website</Label>
                        <div className="relative">
                          <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input
                            id="website"
                            type="url"
                            placeholder="https://yourcompany.com"
                            value={companyData.website}
                            onChange={(e) => setCompanyData(prev => ({ ...prev, website: e.target.value }))}
                            className="pl-10"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="industry">Industry Domain</Label>
                        <Select value={companyData.industry} onValueChange={(value) => setCompanyData(prev => ({ ...prev, industry: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select industry" />
                          </SelectTrigger>
                          <SelectContent>
                            {industries.map((industry) => (
                              <SelectItem key={industry} value={industry}>
                                {industry}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description">Brief Description</Label>
                        <Textarea
                          id="description"
                          placeholder="Tell us about your company..."
                          value={companyData.description}
                          onChange={(e) => setCompanyData(prev => ({ ...prev, description: e.target.value }))}
                          rows={3}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="logo">Company Logo (Optional)</Label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-gray-400 transition-colors">
                          <input
                            type="file"
                            id="logo"
                            accept="image/*"
                            onChange={(e) => handleFileChange(e, 'logo')}
                            className="hidden"
                          />
                          <label htmlFor="logo" className="cursor-pointer">
                            <Upload className="h-6 w-6 mx-auto text-gray-400 mb-2" />
                            <p className="text-sm text-gray-600">
                              {companyData.logo ? companyData.logo.name : 'Click to upload logo'}
                            </p>
                          </label>
                        </div>
                      </div>
                    </>
                  )}
                </>
              )}

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Please wait...' : (mode === 'login' ? 'Sign In' : 'Create Account')}
              </Button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>

            <Button variant="outline" onClick={handleGoogleAuth} disabled={isLoading} className="w-full">
              <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </Button>

            <div className="text-center text-sm mt-4">
              {mode === 'login' ? (
                <span>
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setMode('signup')}
                    className="text-blue-600 hover:underline"
                  >
                    Sign up
                  </button>
                </span>
              ) : (
                <span>
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setMode('login')}
                    className="text-blue-600 hover:underline"
                  >
                    Sign in
                  </button>
                </span>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
