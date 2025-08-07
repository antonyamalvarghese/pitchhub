import { Badge } from '@/components/ui/badge'
import { Trophy, Medal, Award } from 'lucide-react'

interface LeaderboardTileProps {
  rank: number
  name: string
  score: number
  isCurrentUser?: boolean
}

export function LeaderboardTile({ rank, name, score, isCurrentUser = false }: LeaderboardTileProps) {
  const getRankIcon = () => {
    if (rank === 1) return <Trophy className="h-5 w-5 text-yellow-500" />
    if (rank === 2) return <Medal className="h-5 w-5 text-gray-400" />
    if (rank === 3) return <Award className="h-5 w-5 text-amber-600" />
    return <span className="text-lg font-bold text-gray-600">#{rank}</span>
  }

  const getRankColor = () => {
    if (rank === 1) return 'bg-yellow-50 border-yellow-200'
    if (rank === 2) return 'bg-gray-50 border-gray-200'
    if (rank === 3) return 'bg-amber-50 border-amber-200'
    return 'bg-white border-gray-200'
  }

  return (
    <div className={`flex items-center justify-between p-4 rounded-lg border ${getRankColor()} ${
      isCurrentUser ? 'ring-2 ring-blue-500' : ''
    }`}>
      <div className="flex items-center space-x-3">
        <div className="flex items-center justify-center w-8 h-8">
          {getRankIcon()}
        </div>
        <div>
          <p className="font-medium text-gray-900">
            {name}
            {isCurrentUser && (
              <Badge variant="secondary" className="ml-2 text-xs">
                You
              </Badge>
            )}
          </p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-bold text-gray-900">{score}</p>
        <p className="text-xs text-gray-500">points</p>
      </div>
    </div>
  )
}
