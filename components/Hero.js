import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Hero() {
  const router = useRouter();

  const handleBookRide = () => {
    router.push('/ride');
  };

  return (
    <section className="bg-white py-16 md:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center text-center lg:text-left text-black">
          <div>
            <h1 className="font-jeko text-3xl md:text-5xl font-bold mb-4">
              Go Anywhere with Ridebase
            </h1>
            <p className="font-jeko text-base md:text-xl mb-6 md:mb-8">
              Request a ride, hop in, and go! Accurate pricing, Indian style!
            </p>
            <button 
              onClick={handleBookRide} 
              className="text-black bg-[#ffcc00] border-2 px-6 md:px-8 py-3 rounded-lg text-base md:text-lg font-jeko transition duration-300 hover:bg-green-500 hover:text-white hover:border-none"
            >
              Book a Ride
            </button>
          </div>
          <div className="relative">
            <Image 
              src="/images/inky-yellow-round-spot.png"
              alt="Background Image"
              width={500}
              height={300}
              className="absolute top-0 left-0 z-0 w-full h-full object-cover"
            />
            <Image 
              src="/images/car-img.png"
              alt="Auto Rickshaw"
              width={500}
              height={300}
              className="relative z-10 mx-auto lg:mx-0 w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
