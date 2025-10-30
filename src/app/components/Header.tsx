"use client"

import { ConnectKitButton } from "connectkit";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  const handleNavigateHome = () => {
    router.push("/");
  };

  const handleNavigateDapp = () => {
    router.push("/dapp");
  };

  const handleNavigateWeb3React = () => {
    router.push("/web3-react");
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      {/* Left: Logo */}
      <div className="text-2xl font-semibold cursor-pointer" onClick={handleNavigateHome}>
        MyLogo
      </div>

      {/* Center: Navigation Menu */}
      <nav className="flex space-x-8">
        <button onClick={handleNavigateHome} className="text-lg hover:text-gray-400 transition">
          Home
        </button>
        <button onClick={handleNavigateDapp} className="text-lg hover:text-gray-400 transition">
          dapp
        </button>
        <button onClick={handleNavigateWeb3React} className="text-lg hover:text-gray-400 transition">
          Web3React
        </button>
      </nav>

      {/* Right: Wallet Connection */}
      <div>{/* <ConnectKitButton /> */}</div>
    </header>
  );
};

export default Header;
