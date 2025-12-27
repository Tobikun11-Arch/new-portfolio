import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden"
    >
      <div className="absolute inset-0 z-0 ">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-purple-900 to-orange-900">
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 "></div>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full px-6 lg:px-24 py-32 lg:py-40 flex-1 flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h4 className="text-[#FF6B35] text-xl lg:text-2xl font-medium mb-2">
              Hey, I'm a
            </h4>
            <h1 className="text-6xl lg:text-8xl font-bold text-white leading-tight">
              Web,
              <br />
              Developer
            </h1>
          </div>

          <div className="lg:text-right">
            <p className="text-2xl lg:text-3xl text-white mb-4 font-semibold">
              Great code should feel seamless <br /> in use.
            </p>
            <p className="text-md lg:text-md text-white/80 max-w-xl lg:ml-auto">
              From code to experience, I build digital solutions that connect
              and convert.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full px-6 lg:px-24 pb-12 lg:pb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          <div className="text-white">
            <span className="text-[#FF6B35] text-lg lg:text-xl font-semibold">
              #01 <br />
            </span>{' '}
            <span className="text-white text-base lg:text-lg font-medium">
              Web Development
            </span>
          </div>
          <div className="text-white">
            <span className="text-[#FF6B35] text-lg lg:text-xl font-semibold">
              #02 <br />
            </span>{' '}
            <span className="text-white text-base lg:text-lg font-medium">
              UI/UX & Branding
            </span>
          </div>
          <div className="text-white">
            <span className="text-[#FF6B35] text-lg lg:text-xl font-semibold">
              #03 <br />
            </span>{' '}
            <span className="text-white text-base lg:text-lg font-medium">
              Content & Media
            </span>
          </div>
          <div className="text-white">
            <span className="text-[#FF6B35] text-lg lg:text-xl font-semibold">
              #04 <br />
            </span>{' '}
            <span className="text-white text-base lg:text-lg font-medium">
              Creative Direction
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
