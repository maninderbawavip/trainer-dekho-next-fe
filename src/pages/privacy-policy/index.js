import Layout from '@/components/Layout'
import { PrivacyPolicyContent } from '@/components/StaticPages/PrivacyPolicyContent'

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="bg-white px-6 py-10 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        
          <h1 className="my-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Privacy Policy
          </h1>

          <PrivacyPolicyContent />
        </div>
      </div>
    </Layout>
  )
}

export default PrivacyPolicy
