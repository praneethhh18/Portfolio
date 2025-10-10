import CertificationsClient from '@/components/certificates/CertificationsClient'
import Header from '@/components/layout/header'

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Certifications</h1>
  <p className="mb-6">View my certifications below.</p>
        <CertificationsClient />
      </main>
    </div>
  )
}
