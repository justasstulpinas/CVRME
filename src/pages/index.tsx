import { Icon } from '@/components/primitives/Icon'
import { Button } from '@/components/primitives/Button'
import { IconButton } from '@/components/primitives/IconButton'

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-4">
  <IconButton icon="home" ariaLabel="Home" />
  <IconButton icon="work" ariaLabel="Jobs" />
  <IconButton icon="person" ariaLabel="Profile" />
</div>
   
  )
}
