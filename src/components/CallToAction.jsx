import Image from 'next/future/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-gray-900 py-32"
    >
      {/* <Image
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      /> */}
      <Container className="relative">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
           Empower Your Training Career and Enterprise Growth
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
          Unleash Your Full Potential as a Skilled Trainer or Elevate Your Enterprise to New Heights with Tailored Training Solutions from our Network of Expert Educators and Speakers
          </p>
          <div className='space-x-4'>
            
            <Button href="/register" color="white" className="mt-10">
            I am a Trainer
            </Button>
            <Button href="/register" variant='solid' color='orange' className="mt-10">
              I am looking for Trainers
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
