import Link from "next/link";

type NavigationListProps = {
  orientation: string;
  spacing: number;
}

export default function NavigationList({ orientation, spacing }: NavigationListProps) {
  return (
    <nav className="nav">
      <ul className={`flex ${orientation === 'row' ? 'flex-row' : 'flex-col'} gap-${spacing}`}>
        <li><Link href="#about">About</Link></li>
        <li><Link href="#work">Employers</Link></li>
        <li><Link href="#projects">Projects</Link></li>
        <li><Link href="#writing">Writing</Link></li>
      </ul>
    </nav>
  )
}