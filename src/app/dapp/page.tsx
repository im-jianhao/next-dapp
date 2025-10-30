import { Metadata } from "next";
import { cookies } from "next/headers";

import Image from "next/image";

// 设置title
export const metadata: Metadata = {
  title: "🐻‍❄️ dapp",
};

// 这是一个异步的服务端组件
export default async function Dapp() {
  const cookieStore = await cookies();
  const cookie = cookieStore.getAll();
  console.log(cookie);
  try {
    // 1. 使用 fetch 在服务端调用 API
    const response = await fetch("https://picsum.photos/200");

    // 如果请求失败，抛出错误
    if (!response.ok) {
      throw new Error("Failed to fetch image data");
    }

    // 2. 解析 JSON 数据
    const data = response.url;

    // 3. 使用 next/image 组件渲染图片
    // next/image 会自动优化图片，包括懒加载和格式转换
    return (
      <div>
        <h1>从 API 渲染的图片</h1>
        <p>{cookie.map((item) => item.name)}</p>
        <Image
          alt="image"
          src={data}
          width={200}
          height={200}
          priority // 如果是首屏关键图片，可以使用 priority 属性进行预加载
        />
      </div>
    );
  } catch (error) {
    // 错误处理
    console.error(error);
    return <div>无法加载图片。</div>;
  }
}
