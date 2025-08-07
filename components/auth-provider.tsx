'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface User {
  id: string
  email: string
  name: string
  type: 'student' | 'company'
  [key: string]: any
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string, type: 'student' | 'company') => Promise<void>
  signup: (email: string, password: string, type: 'student' | 'company', additionalData?: any) => Promise<void>
  logout: () => void
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const storedUser = localStorage.getItem('user')
        if (storedUser) {
          setUser(JSON.parse(storedUser))
        }
      } catch (error) {
        console.error('Auth check failed:', error)
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = async (email: string, password: string, type: 'student' | 'company') => {
    const mockUser: User = {
      id: '1',
      email,
      name: type === 'student' ? 'John Doe' : 'TechCorp',
      type
    }

    setUser(mockUser)
    localStorage.setItem('user', JSON.stringify(mockUser))
  }

  const signup = async (email: string, password: string, type: 'student' | 'company', additionalData?: any) => {
    const mockUser: User = {
      id: '1',
      email,
      name: additionalData?.name || (type === 'student' ? 'New Student' : 'New Company'),
      type,
      ...additionalData
    }

    setUser(mockUser)
    localStorage.setItem('user', JSON.stringify(mockUser))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
