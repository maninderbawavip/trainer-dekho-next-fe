import {
  CubeTransparentIcon,
  RocketLaunchIcon,
  UserCircleIcon,
} from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Tailored Training Opportunities',
    description:
      'Gain access to a vast network of learning partners and enterprises seeking expert trainers like you. Showcase your qualifications and experience to a global audience, expanding your professional horizons.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Flexible Delivery Options',
    description:
      'Embrace the future of training with the freedom to conduct on-site workshops, virtual sessions, or a hybrid approach. Engage learners from anywhere in the world and adapt to their preferred learning format.',
    icon: CubeTransparentIcon,
  },
  {
    name: 'You can trust us',
    description:
      'We are a reputable and trusted platform that prioritizes quality and professionalism. You would not have to worry about waiting for payments, following up, not tds deductions, we do everything properly on time.',
    icon: UserCircleIcon,
  },
]

export const FeaturesSectionDark = () => {
  return (
    <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-orange-300">
            For Trainers
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Connect with Global Opportunities & Elevate Your Training Career
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
          Are you a passionate and skilled trainer looking to expand your reach and impact? Look no further! TrainerDekho offers an exciting platform where trainers like you can showcase your expertise, connect with diverse learning partners, and make a lasting impact on the workforce of tomorrow.
          </p>
        </div>
          <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-5xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    <feature.icon
                      className="h-5 w-5 flex-none text-orange-600"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-start leading-7 text-gray-300">
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
