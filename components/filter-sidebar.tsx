import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { SlidersHorizontal } from 'lucide-react'

const categories = [
  'Web Development',
  'Mobile Development',
  'Data Science',
  'UI/UX Design',
  'Marketing',
  'Content Creation',
  'Business Analysis'
]

const companies = [
  'TechCorp',
  'DataFlow',
  'MarketingPro',
  'RetailTech',
  'InnovateLab'
]

export function FilterSidebar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center text-lg">
          <SlidersHorizontal className="h-5 w-5 mr-2" />
          Filters
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Categories */}
        <div>
          <h3 className="font-medium text-gray-900 mb-3">Categories</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox id={category} />
                <Label htmlFor={category} className="text-sm">
                  {category}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Companies */}
        <div>
          <h3 className="font-medium text-gray-900 mb-3">Companies</h3>
          <div className="space-y-2">
            {companies.map((company) => (
              <div key={company} className="flex items-center space-x-2">
                <Checkbox id={company} />
                <Label htmlFor={company} className="text-sm">
                  {company}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Reward Range */}
        <div>
          <h3 className="font-medium text-gray-900 mb-3">Reward Range</h3>
          <div className="px-2">
            <Slider
              defaultValue={[0, 1000]}
              max={1000}
              step={50}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>$0</span>
              <span>$1000+</span>
            </div>
          </div>
        </div>

        {/* Deadline */}
        <div>
          <h3 className="font-medium text-gray-900 mb-3">Deadline</h3>
          <div className="space-y-2">
            {['Next 7 days', 'Next 30 days', 'Next 3 months', 'No deadline'].map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <Checkbox id={option} />
                <Label htmlFor={option} className="text-sm">
                  {option}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
