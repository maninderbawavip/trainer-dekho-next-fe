import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { FeaturesSection } from '@/components/FeaturesSection'
import { FeaturesWithPhoto } from '@/components/FeaturesWithPhoto'

export default function Home() {
  return (
    <>
      <Head>
        <title>Trainer Dekho</title>
        <meta
          name="description"
          content="Best place to find corporate training opportunities with leading companies across the globe"
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <FeaturesWithPhoto />
        <FeaturesSection />
        
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
