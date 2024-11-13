'use client'

import { Filter } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { FilterSettings } from "../types"

interface CatFilterProps {
  filters: FilterSettings
  onFilterChange: (filters: FilterSettings) => void
}

export function CatFilter({ filters, onFilterChange }: CatFilterProps) {
  return (
    <aside className="w-full md:w-1/4 bg-orange-100 p-6 space-y-6">
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-orange-700 flex items-center">
            <Filter className="mr-2" />
            Filter Cats
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="breed" className="text-orange-600">Breed</Label>
            <Input
              id="breed"
              value={filters.breed}
              onChange={(e) => onFilterChange({ ...filters, breed: e.target.value })}
              className="border-orange-300 focus:border-orange-500"
              placeholder="Enter breed..."
            />
          </div>
          <div>
            <Label htmlFor="maxAge" className="text-orange-600">Maximum Age: {filters.maxAge}</Label>
            <Slider
              id="maxAge"
              min={0}
              max={20}
              step={1}
              value={[filters.maxAge]}
              onValueChange={(value) => onFilterChange({ ...filters, maxAge: value[0] })}
              className="mt-2"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="onlyStarred"
              checked={filters.onlyStarred}
              onCheckedChange={(checked) => 
                onFilterChange({ ...filters, onlyStarred: checked as boolean })}
            />
            <Label htmlFor="onlyStarred" className="text-orange-600">Show only starred cats</Label>
          </div>
        </CardContent>
      </Card>
    </aside>
  )
}