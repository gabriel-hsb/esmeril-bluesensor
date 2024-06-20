import BlueCircle from '@/assets/blue-circle.svg?react'
import { Button } from '@/components/ui/button'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

function App() {
  return (
    <div>
    <h1 className="text-3xl text-emerald-600">
      Hello World
    </h1>
    <Button>Button do shadcn</Button>
    <RadioGroup defaultValue="option-one">
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option-one" id="option-one" />
      <Label htmlFor="option-one">Option One</Label>
    </div>
     <div className="flex items-center space-x-2">
       <RadioGroupItem value="option-two" id="option-two" />
       <Label htmlFor="option-two">Option Two</Label>
      </div>
    </RadioGroup>
    <BlueCircle />
    </div>
  )
}

export default App
