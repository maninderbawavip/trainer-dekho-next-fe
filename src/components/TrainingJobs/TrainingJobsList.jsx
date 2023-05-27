import { Button } from '../Button'

// fetch('http://127.0.0.1:1337/api/training-requirements')
//     .then(resp => resp.json())
//     .then(resp -> )


const TRAINING_JOBS = [
  {
    name: 'Java Full Stack New Hire Boot Camp',
    trainingStatus: 'New Opportunity',
    deliveryMode: 'Virtual (Online)',
    startDate: '7th Jul 2023',
    skills: 'Java, React, HTML, CSS, Database',
  },
  {
    name: 'Java Full Stack New Hire Boot Camp',
    trainingStatus: 'New Opportunity',
    deliveryMode: 'Virtual (Online)',
    startDate: '7th Jul 2023',
    skills: 'Java, React, HTML, CSS, Database',
  },
  {
    name: 'Java Full Stack New Hire Boot Camp',
    trainingStatus: 'New Opportunity',
    deliveryMode: 'Virtual (Online)',
    startDate: '7th Jul 2023',
    skills: 'Java, React, HTML, CSS, Database',
  },
  {
    name: 'Java Full Stack New Hire Boot Camp',
    trainingStatus: 'New Opportunity',
    deliveryMode: 'Virtual (Online)',
    startDate: '7th Jul 2023',
    skills: 'Java, React, HTML, CSS, Database',
  },
  {
    name: 'Java Full Stack New Hire Boot Camp',
    trainingStatus: 'New Opportunity',
    deliveryMode: 'Virtual (Online)',
    startDate: '7th Jul 2023',
    skills: 'Java, React, HTML, CSS, Database',
  },
  {
    name: 'Java Full Stack New Hire Boot Camp',
    trainingStatus: 'New Opportunity',
    deliveryMode: 'Virtual (Online)',
    startDate: '7th Jul 2023',
    skills: 'Java, React, HTML, CSS, Database',
  },
  {
    name: 'Java Full Stack New Hire Boot Camp',
    trainingStatus: 'New Opportunity',
    deliveryMode: 'Virtual (Online)',
    startDate: '7th Jul 2023',
    skills: 'Java, React, HTML, CSS, Database',
  },
  {
    name: 'Java Full Stack New Hire Boot Camp',
    trainingStatus: 'New Opportunity',
    deliveryMode: 'Virtual (Online)',
    startDate: '7th Jul 2023',
    skills: 'Java, React, HTML, CSS, Database',
  },

  // More people...
]

export const TrainingJobsList = () => {
  return (
    <div className="mx-auto max-w-7xl py-10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
        {TRAINING_JOBS.map((training) => (
          <div
            key={training.id}
            className="relative flex items-center space-x-3 rounded-lg border border-gray-200 bg-white px-6 py-5 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-300 hover:shadow"
          >
            <div className="hidden flex-shrink-0 lg:flex">
              <img
                className=" w-20 rounded-full"
                src={
                  'https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png'
                }
                alt=""
              />
            </div>
            <div className="min-w-0 flex-1">
              <a href="#" className="space-y-1 focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <div className="flex items-center justify-between">
                  <p className="font-medium text-gray-900">{training.name}</p>

                  <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-center text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 md:text-sm">
                    {training.trainingStatus}
                  </span>
                </div>
                <div className="flex">
                  <p className="truncate text-sm text-gray-700">
                    {training.deliveryMode}
                  </p>
                </div>
                <p className="truncate text-sm text-gray-700">
                  Starts on {training.startDate}
                </p>
                <div className="flex items-center">
                  <div className="flex min-w-0 flex-1 flex-wrap space-x-2">
                    {training.skills.split(',').map((skill) => (
                      <span className="inline-flex items-center rounded-xl bg-gray-100 px-2 py-1 text-sm font-medium text-gray-600">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex-shrink-0">
                    <Button variant="solid" color="blue">
                      Apply Now{' '}
                    </Button>
                  </div>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
