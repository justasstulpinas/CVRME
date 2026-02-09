import { Button } from '@/components/primitives/Button'
import { Input } from '@/components/primitives/Input'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-6 items-center justify-center">
      <div className="w-80 flex flex-col gap-4">
        <Input label="Email" placeholder="email@example.com" />
        <Input label="Disabled" disabled />
        <Input label="With helper" helperText="Helper text" />
        <Input label="With error" error="Error text" />
      </div>

      <Button>Submit</Button>
    </div>
  )
}
