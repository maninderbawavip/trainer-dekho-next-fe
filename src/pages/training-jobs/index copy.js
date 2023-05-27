import { TrainingJobFilters } from '@/components/Filters/TrainingJobsFilters'
import Layout from '@/components/Layout'
import { TrainingJobsGrid } from '@/components/TrainingJobs/TrainingJobsGrid'
import TrainingJobsList from '@/components/TrainingJobs/TrainingJobsList'
import { TrainingJobsPagination } from '@/components/TrainingJobs/TrainingJobsPagination'

const TrainingsJobs = () => {
  return (
    <Layout>
      <div className="bg-white">
        <div className="px-4 py-10 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Training Jobs
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-gray-500">
            Browse the top active training requirements and apply for the ones that match your skill.
          </p>
        </div>

        {/* <TrainingJobFilters /> */}
        {/* <TrainingJobsList /> */}
        <TrainingJobsGrid />
        <TrainingJobsPagination />

      </div>
    </Layout>
  )
}

export default TrainingsJobs
