// src/app/page.tsx (or any other page)
import Timeline from '@/components/ui/Timeline';
import SocialShare from '@/components/ui/SocialShare';
import { timelineData } from './data/timelineData'; // Adjust path if needed

export default function HomePage() {
  const pageTitle = "相识7年，相恋5年 这一次，我不想再沉默。"; // Used for sharing

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="py-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center">
        <h1 className="text-4xl font-bold">{pageTitle}</h1>
        <p className="text-xl mt-2">我要让更多人看到你的真面目</p>
      </header>

      <Timeline data={timelineData} />
      <div>
        <h1 className="text-2xl text-center text-gray-500 dark:text-gray-400 mt-10">
          帮助更多人看到真相：
        </h1>
      </div>
      <SocialShare title={`Check out: ${pageTitle}`} />

      <footer className="text-center py-4 text-gray-500 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} 吃瓜第一线
      </footer>
    </main>
  );
}