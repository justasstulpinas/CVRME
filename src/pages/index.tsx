import { Button } from '@/components/primitives/Button'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-4 items-center justify-center">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="text">Text</Button>
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
    </div>
  )
}

