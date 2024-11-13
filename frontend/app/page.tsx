'use client'

import { CatFilter } from "@/components/cat-filter"
import { CatGrid } from "@/components/cat-grid"
import { Header } from "@/components/layout/header"
import { Cat, FilterSettings } from "@/types"
import { useState } from "react"

export default function CatAdoptionDirectory() {
  const [cats, setCats] = useState<Cat[]>([
    {
      id: 1,
      name: "Whiskers",
      age: 3,
      image: "/vercel.svg?height=200&width=200",
      breed: "Siamese",
      location: "New York",
      description: "Playful and loving Siamese cat looking for a forever home.",
      starred: false
    },
    {
      id: 2,
      name: "Mittens",
      age: 2,
      image: "/vercel.svg?height=200&width=200",
      breed: "Tabby",
      location: "Los Angeles",
      description: "Curious and adventurous tabby cat ready for a new home.",
      starred: false
    },
    {
      id: 3,
      name: "Shadow",
      age: 4,
      image: "/vercel.svg?height=200&width=200",
      breed: "Maine Coon",
      location: "Chicago",
      description: "Gentle giant looking for a loving family.",
      starred: false
    },
    {
      id: 4,
      name: "Bella",
      age: 1,
      image: "/vercel.svg?height=200&width=200",
      breed: "Bengal",
      location: "Miami",
      description: "Playful and energetic Bengal cat seeking a fun home.",
      starred: false
    },
    {
      id: 5,
      name: "Oliver",
      age: 5,
      image: "/vercel.svg?height=200&width=200",
      breed: "Persian",
      location: "Seattle",
      description: "Calm and affectionate Persian cat looking for a quiet home.",
      starred: false
    },
    // ... other cats
  ])

  const [filters, setFilters] = useState<FilterSettings>({
    breed: "",
    maxAge: 10,
    onlyStarred: false
  })

  const toggleStar = (id: number) => {
    setCats(cats.map(cat =>
      cat.id === id ? { ...cat, starred: !cat.starred } : cat
    ))
  }

  const filteredCats = cats.filter(cat =>
    (filters.breed === "" || cat.breed.toLowerCase().includes(filters.breed.toLowerCase())) &&
    cat.age <= filters.maxAge &&
    (!filters.onlyStarred || cat.starred)
  )

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row flex-grow relative z-10">
        <CatFilter filters={filters} onFilterChange={setFilters} />
        <CatGrid cats={filteredCats} onStarToggle={toggleStar} />
      </div>
    </>
  )
}