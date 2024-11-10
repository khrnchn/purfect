'use client'

import { Star, Calendar, Cat, MapPin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Cat as CatType } from "../types"

interface CatCardProps {
    cat: CatType
    onStarToggle: (id: number) => void
}

export function CatCard({ cat, onStarToggle }: CatCardProps) {
    return (
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
                <CardTitle className="text-xl font-semibold text-orange-700 flex justify-between items-center">
                    {cat.name}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onStarToggle(cat.id)}
                        className={cat.starred ? "text-yellow-500" : "text-gray-300"}
                    >
                        <Star className="h-5 w-5 fill-current" />
                    </Button>
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                <img src={cat.image} alt={cat.name} className="w-full h-40 object-cover rounded-md" />
                <div className="space-y-1">
                    <p className="text-orange-600 flex items-center text-sm">
                        <Calendar className="mr-2 h-4 w-4" /> Age: {cat.age} years
                    </p>
                    <p className="text-orange-600 flex items-center text-sm">
                        <Cat className="mr-2 h-4 w-4" /> Breed: {cat.breed}
                    </p>
                    <p className="text-orange-600 flex items-center text-sm">
                        <MapPin className="mr-2 h-4 w-4" /> Location: {cat.location}
                    </p>
                    <p className="text-gray-600 text-sm">{cat.description}</p>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button className="bg-orange-500 hover:bg-orange-600 text-sm">Adopt Me</Button>
                <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-100 text-sm">
                    <Mail className="mr-1 h-4 w-4" /> Contact Owner
                </Button>
            </CardFooter>
        </Card>
    )
}