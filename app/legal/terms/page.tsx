import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-32 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="lead">Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Zenith Digital Solution website operated by us.
          </p>
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing the Site, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Site.
          </p>
          <h2>2. Intellectual Property Rights</h2>
          <p>
            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
          </p>
          <h2>3. User Representations</h2>
          <p>
            By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary.
          </p>
          <h2>4. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at hello@zenithdigital.com.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
