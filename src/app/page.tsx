import { Metadata } from "next";
import HomePage from "./components/Home";

// 设置title
export const metadata: Metadata = {
  title: "🐻‍❄️ 首页",
};

export default function Home() {
  return <HomePage />;
}
