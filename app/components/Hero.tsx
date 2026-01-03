import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-between overflow-hidden"
    >
      <div className="absolute inset-0 z-0 ">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-purple-900 to-orange-900">
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 "></div>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full px-6 lg:px-24 pt-20 lg:pt-32 pb-4 flex-1 flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative">
          <div className="relative z-30">
            <h4 className="text-[#FF6B35] text-xl lg:text-2xl font-medium mb-2">
              Hey, I'm a
            </h4>
            <h1 className="text-6xl lg:text-8xl font-bold text-white leading-tight">
              Web
              <br />
              Developer
            </h1>
          </div>

          <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px] xl:min-h-[600px]"></div>
        </div>

        {/* Overlapping text on lower-right portion of image */}
        <div className="absolute right-6 lg:right-24 xl:right-32 top-1/2 translate-y-20 lg:translate-y-0 lg:top-auto lg:bottom-[220px] text-right max-w-md z-30">
          <p className="text-2xl lg:text-3xl text-white mb-4 font-semibold">
            Great code should feel seamless <br /> in use.
          </p>
          <p className="text-md lg:text-md text-white/80">
            From code to experience, I build digital solutions that connect and
            convert.
          </p>
        </div>
      </div>

      <div className="relative z-30 w-full px-6 lg:px-24 pb-8 lg:pb-12 flex-shrink-0 bg-black/50">
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
              SEO Optimization
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
              Technical Troubleshooting
            </span>
          </div>
        </div>
      </div>
      {/* Profile Image - spans full screen behind all content */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[5] pointer-events-none">
        <img
          src="/profile.png"
          alt="Profile"
          className="h-[calc(100vh-80px)] lg:h-[calc(100vh-128px)] w-auto object-contain object-bottom"
        />
      </div>
    </section>
  );
}
