'use client'

import { Cat, LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
    return (
        <header className="bg-orange-600 text-white p-4 flex justify-between items-center relative overflow-hidden">
            <div>
                <h1 className="text-3xl font-bold flex items-center">
                    <Cat className="mr-2" />
                    Purrfect Adoptions
                </h1>
                <p className="mt-1">Find your feline friend and give them a loving home!</p>
            </div>
            <Button variant="outline" className="mr-4">
                <LogIn className="mr-2 h-4 w-4" /> Login
            </Button>
        </header>
    )
}