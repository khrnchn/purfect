'use client'

import { Cat } from "../types"
import { CatCard } from "./cat-card"

interface CatGridProps {
    cats: Cat[]
    onStarToggle: (id: number) => void
}

export function CatGrid({ cats, onStarToggle }: CatGridProps) {
    return (
        <main className="flex-grow p-6 overflow-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cats.map((cat) => (
                    <CatCard key={cat.id} cat={cat} onStarToggle={onStarToggle} />
                ))}
            </div>
        </main>
    )
}