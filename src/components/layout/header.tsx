import Link from 'next/link';
import { AppLogo } from '@/components/icons/logo';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
          <AppLogo className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-primary">
            Policy Insights Pro
          </span>
        </Link>
      </div>
    </header>
  );
}
