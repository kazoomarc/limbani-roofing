import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Hero />
      <InspectionForm />
    </main>
  );
}

function Hero() {
  return (
    <div className="h-screen">
      <div className="relative h-full flex flex-row">
        <Image
          src="/hero-image.png"
          alt="image of Limbani technician roofing an office"
          fill
          className="absolute inset-0 w-full "
          objectFit="cover"
        />
        <div className="relative w-full _bg-gray-800/85 top-0 _bg-lime-400 right-0 flex ">
          <div className="w-1/2"></div>
          <div className="w-1/2 _bg-orange-600">
            <div className="flex flex-col gap-y-6 w-[612px] pt-28">
              <h1 className="font-bold text-white text-7xl/none">
                Limbani Roofing Specialists
              </h1>
              <p className="text-white font-inter text-2xl text-wrap">
                We are local roofing company that uses high quality material
                manufactured locally and comes with a warranty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InspectionForm() {
  return (
    <div>
      <div>
        <div>
          <form>
            <h2>Get a Free Inspection</h2>
            <div>
              <input type="your name" />
              <input type="your name" />
              <input type="your name" />
              <input type="your name" />
            </div>
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
}

function WhyUs() {
  return <div></div>;
}
function Services() {
  return <div>services</div>;
}
function TypeofRoofing() {
  return <div>Type of Roofing</div>;
}

function Process() {
  return <div>process</div>;
}

function Testimonials() {
  return <div>Testimonials</div>;
}

function Footer() {
  return <div>Footer</div>;
}
