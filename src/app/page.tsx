import Header from '@/components/Header'
import Hero from '@/components/Hero'
import UploadSection from '@/components/UploadSection'
import Footer from '@/components/Footer'
import ApiStatus from '@/components/ApiStatus'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Header />
      <Hero />
      <div className="w-full px-6 pb-4">
        <div className="max-w-2xl mx-auto">
          <ApiStatus />
        </div>
      </div>
      <UploadSection />
      <Footer />
    </main>
  )
} 