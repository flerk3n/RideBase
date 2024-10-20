import Image from 'next/image';
import Link from 'next/link';

export default function Feature() {
  const features = [
    { title: "Ride", description: "Go anywhere with Ridebase. Request a ride, hop in, and go.", image: '/images/techny-mobile-app-with-a-taxi-route.svg', route: '/ride' },
    { title: "Reserve", description: "Reserve your ride in advance so you can relax on the day of your trip.", image: '/images/journal-modern-taxi-service-woman-using-mobile-app.svg', route: '/ride' },
    { title: "Package", description: "Ridebase Connect makes same-day delivery easier than ever.", image: '/images/breeze-pizza-delivery-guy-riding-a-scooter-in-a-hurry.svg', route: '/ride' },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="font-jeko text-3xl md:text-4xl lg:text-5xl text-center mb-10">
          Sections
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex bg-[#F3F3F3] rounded-lg shadow-md overflow-hidden max-w-lg w-full">
              <div className="flex-1 p-6 text-start font-jeko">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="mb-4">{feature.description}</p>
                <Link href={feature.route}>
                  <button className="bg-[#FFFFFF] text-[#121212] px-4 py-2 rounded-lg">
                    Details
                  </button>
                </Link>
              </div>
              <div className="flex-shrink-0">
                <Image 
                  src={feature.image} 
                  alt={`${feature.title} image`} 
                  width={300} 
                  height={200} 
                  className=" h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
