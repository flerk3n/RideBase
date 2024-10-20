import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Hero() {
  const router = useRouter();

  const handleBookRide = () => {
    router.push('/ride');
  };

  return (
    <section className="bg-black py-32"> {/* Increased padding to py-32 */}
      <div className="container mx-auto px-6 max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center text-center lg:text-left text-white">
          <div>
            <h1 className="font-jeko text-4xl md:text-5xl font-bold mb-4">
              Go anywhere with Ridebase
            </h1>
            <p className="font-jeko text-lg md:text-xl mb-8">
              Request a ride, hop in, and go! Don’t worry about inaccurate prices because it’s decentralized.
            </p>
            <button 
              onClick={handleBookRide} 
              className=" text-[#ffff] border-2 px-8 py-3 rounded-lg text-lg font-jeko transition duration-300 hover:bg-[#ffcc00] hover:text-[#121212] hover:border-none"
            >
              Book a Ride
            </button>
          </div>
          <div>
            <Image 
              src="/images/car-img.png"
              alt="Image of a car"
              width={500}
              height={300}
              className="mx-auto lg:mx-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
