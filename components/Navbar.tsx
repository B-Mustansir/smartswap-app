import { ConnectWallet } from "@thirdweb-dev/react";
import { Button } from "../components/ui/button";
import Link from 'next/link'
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname()
    return (
      <nav className="flex items-center justify-between p-4 bg-gray-900 text-white border-b border-gray-800">
      <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-500">
        SmartSwap
      </Link>
      <div className="flex items-center space-x-4">
        <Link href="/trade" passHref>
          <Button variant="ghost" className={`text-white hover:text-gray-600 ${pathname === '/trade' ? 'bg-gray-800' : ''}`}>
            Trade
          </Button>
        </Link>
        <Link href="/explore" passHref>
          <Button variant="ghost" className={`text-white hover:text-gray-600 ${pathname === '/explore' ? 'bg-gray-800' : ''}`}>
            Explore
          </Button>
        </Link>
        <Link href="/pools" passHref>
          <Button variant="ghost" className={`text-white hover:text-gray-600 ${pathname === '/pools' ? 'bg-gray-800' : ''}`}>
            Pools
          </Button>
        </Link>
        <ConnectWallet />
      </div>
    </nav>
    )
}