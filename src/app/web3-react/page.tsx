import MetaMaskCard from "@/components/connectorCards/MetaMaskCard";
import InfoContractInterface from "@/components/InfoContractInterface";
import { Metadata } from "next";

// 设置title
export const metadata: Metadata = {
  title: "🐻‍❄️ Web3React",
};

export default function Web3React() {
  return (
    <div>
      <MetaMaskCard />
      <br />
      <InfoContractInterface />
    </div>
  );
}
