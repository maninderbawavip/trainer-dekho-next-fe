import Layout from '@/components/Layout'
import { AboutUsContent } from '@/components/StaticPages/AboutUs'

const AboutUs = () => {
  return (
    <Layout>
      <div className="bg-white px-6 py-10 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        
          <h1 className="my-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About Us
          </h1>

          <AboutUsContent />
        </div>
      </div>
    </Layout>
  )
}

export default AboutUs
