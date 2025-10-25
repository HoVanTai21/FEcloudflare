import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">AI Automation</h1>
        <p className="text-gray-700 mb-6">
          Tự động hóa nội dung thông minh với AI.
        </p>
      </main>
    </div>
  );
}
