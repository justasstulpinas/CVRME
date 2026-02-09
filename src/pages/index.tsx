import { Button } from '@/components/primitives/Button'
import { Input } from '@/components/primitives/Input'
import { Card } from '@/components/primitives/Card'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card
        header="Login"
        footer={<Button size="sm">Submit</Button>}
      >
        <div className="flex flex-col gap-4 w-72">
          <Input label="Email" />
          <Input label="Password" />
        </div>
      </Card>
    </div>
  )
}
