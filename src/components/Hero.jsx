import Image from 'next/future/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoGL from '@/images/logos/globallogic.jpeg'
import logoIIHT from '@/images/logos/iiht.png'
import logoKnowledgeHut from '@/images/logos/knowledgehut.png'
import logoMercer from '@/images/logos/mercer.png'
import logoPluralSight from '@/images/logos/pluralsight.png'
import logoStackRoute from '@/images/logos/stackroute.png'

export function Hero() {
  return (
    <Container className="pt-20 pb-16 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        Lets{' '}
        <span className="relative whitespace-nowrap text-orange-600">
          
          <span className="relative">Upskill</span>
        </span>{' '}
        the world together...
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        Be a training partner for leading organizations and get access to
        training opportunities across the globe
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Button href="/register" variant="solid" color="blue">
          Sign Up as a Trainer
        </Button>
        {/* <Button
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          variant="outline"
        >
          <svg
            aria-hidden="true"
            className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current"
          >
            <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
          </svg>
          <span className="ml-3">Watch video</span>
        </Button> */}
      </div>
      <div className="mt-10 hidden sm:mb-10 sm:flex justify-center">
        <div className="relative rounded-full py-2 px-4 text-lg leading-6 text-slate-900 ring-1 ring-slate-900/10 hover:ring-slate-900/20">
          Are you looking for trainers ?{' '}
          <a
            href="#"
            className="ml-2 whitespace-nowrap font-semibold text-blue-600 hover:text-blue-500"
          >
            <span className="absolute inset-0" aria-hidden="true" />
            Hire from Us! <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
      <div className="mt-20 lg:mt-34">
        <p className="font-display text-base text-slate-900">
          Top Learning Partners and Enterprises source Mentors from us
        </p>
        <ul
          role="list"
          className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          {[
            [
              { name: 'Global Logic', logo: logoGL },
              { name: 'Mercer', logo: logoMercer },
              { name: 'Stack Route', logo: logoStackRoute },
            ],
            [
              { name: 'IIHT', logo: logoIIHT },
              { name: 'PluralSight', logo: logoPluralSight },
              { name: 'Knowledge Hut', logo: logoKnowledgeHut },
            ],
          ].map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul
                role="list"
                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
              >
                {group.map((company) => (
                  <li key={company.name} className="flex">
                    <Image src={company.logo} alt={company.name} height={200} />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}
