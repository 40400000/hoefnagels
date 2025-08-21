"use client"

import * as React from "react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { ChevronDown } from "lucide-react"

interface RangeFilterProps {
  label: string
  min: number
  max: number
  step: number
  value: [number, number]
  onChange: (value: [number, number]) => void
  formatLabel: (value: number) => string
}

export function RangeFilter({
  label,
  min,
  max,
  step,
  value,
  onChange,
  formatLabel,
}: RangeFilterProps) {
  const [localValue, setLocalValue] = React.useState(value)

  React.useEffect(() => {
    setLocalValue(value)
  }, [value])

  const handleValueChange = (newValue: [number, number]) => {
    setLocalValue(newValue)
  }

  const handleCommit = (newValue: [number, number]) => {
    onChange(newValue)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-2 p-0 text-sm font-medium text-white bg-transparent hover:bg-transparent h-auto"
        >
          <span className="border-b border-white/50 pb-1">{label}</span>
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[280px] bg-black border-white/20 text-white rounded-none p-4"
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        <div className="w-full">
          <div className="flex justify-between text-xs mb-4 text-white/70">
            <span>{formatLabel(localValue[0])}</span>
            <span>{formatLabel(localValue[1])}</span>
          </div>
          <Slider
            min={min}
            max={max}
            step={step}
            value={localValue}
            onValueChange={handleValueChange}
            onValueCommit={handleCommit}
            className="[&>span:first-child]:h-1 [&>span:first-child]:bg-white/20 [&_[role=slider]]:bg-white [&_[role=slider]]:w-2 [&_[role=slider]]:h-4 [&_[role=slider]]:rounded-sm [&_[role=slider]]:border-0 [&_[role=slider]:focus-visible]:ring-0 [&_[role=slider]:focus-visible]:ring-offset-0"
          />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
