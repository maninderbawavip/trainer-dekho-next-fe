import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon, SignalIcon, SparklesIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Diverse Trainer Pool',
    description: 'Gain access to a curated network of skilled trainers covering a wide range of technical and non-technical subjects. Whether it\'s the latest technologies or leadership development, we have trainers to suit your unique needs.',
    icon: SignalIcon,
  },
  {
    name: 'On-Site or Virtual Workshops',
    description:
      'Embrace flexibility with our training delivery options. Choose between on-site workshops or virtual sessions to accommodate your team\'s preferences and schedules, ensuring optimal engagement and participation.',
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: 'Faster Response Time',
    description:
      'With TrainerDekho\'s lightning-fast platform, access to expert trainers is just a click away, ensuring swift connections with skilled professionals. Our flexible approach caters to your schedule and preferences, at lightening speed.',
    href: '#',
    icon: SparklesIcon,
  },
]

export const FeaturesSection = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">For Learning Partners</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Fulfill your training requirements, Get Trainers from us in minutes
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          TrainerDekho is your go-to platform for connecting with top-notch trainers and speakers. 
          From technical upskilling to essential soft skills, we have trainers empanelled with us to elevate your team's capabilities.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  {/* <p className="mt-6">
                    <a href={feature.href} className="text-sm font-semibold leading-6 text-indigo-600">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p> */}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
