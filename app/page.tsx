import Image from 'next/image';
import { title } from 'process';
import {
  ClipboardIcon,
  CurrencyDollarIcon,
  ClockIcon,
  EnvelopeIcon,
  HomeIcon,
  PhoneIcon,
  PresentationChartBarIcon,
  Cog8ToothIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
export default function Home() {
  return (
    <main>
      <Hero />
      <InspectionForm />
      <WhyUs />
      <Services />
      <TypeofRoofing />
      <Process />
      <Testimonials />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <div className="h-screen">
      <div className="relative h-full flex flex-row">
        <Image
          src="/hero-bg-image.png"
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
    <div className="relative mb-96">
      <div className="">
        <div className="absolute left-24 -top-28 flex gap-10 items-end">
          <form className="bg-yellow-500 p-4 flex gap-4 flex-col w-1/2 ">
            <h2 className="text-center text-5xl font-semibold">
              Get a Free Inspection
            </h2>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                placeholder="your name"
                className="py-3 px-4 text-2xl"
              />
              <input
                type="text"
                placeholder="your name"
                className="py-3 px-4 text-2xl"
              />
              <input
                type="text"
                placeholder="your name"
                className="py-3 px-4 text-2xl"
              />
              <input
                type="text"
                placeholder="your name"
                className="py-3 px-4 text-2xl"
              />
            </div>
            <input
              type="text"
              placeholder="your name"
              className="w-full py-3 px-4 text-2xl"
            />
            <input
              type="submit"
              placeholder="submit Request"
              className="w-full bg-[#403230] text-white py-3 px-4 text-2xl"
            />
          </form>
          <div className="border-l-8 border-yellow-500 pl-8 w-[498px]">
            <div className="mb-4">
              <p className="font-inter text-base text-[#403230]">
                The crew were as competent and professional as we could have
                hoped for. My wife and I are extremely pleased with not only the
                work but the product as well.
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <Image
                src="/user-1.png"
                alt="picture of sanzo kamulu"
                width={64}
                height={64}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <span className="font-semibold text-2xl text-[#403230]">
                  Sanzo Kamulu
                </span>
                <span className="font-inter text-sm text-[#A39992]">
                  Shop Owner, Kasungu
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({
  heading,
  subheading,
  children,
}: {
  children?: React.ReactNode;
  heading?: string;
  subheading?: string;
}) {
  return (
    <div>
      <div className="w-full flex flex-col items-center mb-8">
        <h2 className="text-4xl text-[#A39992] text-center">{heading}</h2>
        <p className="text-5xl font-bold text-[#403230] max-w-3xl text-center">
          {subheading}
        </p>
      </div>
      <div>{children}</div>
    </div>
  );
}

function WhyUs() {
  return (
    <div className="mb-28">
      <Section
        heading="Why people are choosing us"
        subheading="Roofing Services in Kasungu, Lilongwe, Dowa And Surrounding Areas."
      >
        <div className="w-full flex justify-center mb-8">
          <p className="text-center max-w-4xl">
            We are Limbani Roofing Specialists, a roofing company that has been
            in business for more than 10 years. Our team is dedicated to
            providing top-quality roofing services with a focus on customer
            satisfaction. We offer a range of services, including roof repairs,
            installations, and maintenance. Our experienced professionals use
            the best materials and techniques to ensure your roof is durable and
            reliable. Trust Limbani Roofing Specialists for all your roofing
            needs.
          </p>
        </div>
        <div className="flex gap-6 flex-wrap justify-center">
          <WhyUsCard
            Icon={<ClipboardIcon className="size-11 text-[#403230]" />}
            title="Free Survey & Quote"
          >
            Take advantage of our free survey and quote service. Get expert
            advice and an accurate estimate for your roofing needs today!
          </WhyUsCard>
          <WhyUsCard
            Icon={<CurrencyDollarIcon className="size-11 text-[#403230]" />}
            title="Affordable Pricing"
          >
            Enjoy top-quality roofing services at competitive rates. We offer
            affordable pricing without compromising on quality or craftsmanship.
          </WhyUsCard>
          <WhyUsCard
            Icon={<ClockIcon className="size-11 text-[#403230]" />}
            title="On Time Finish"
          >
            Count on us for timely project completion. Our experienced team
            ensures your roofing work is finished on schedule, every time.
          </WhyUsCard>
        </div>
      </Section>
    </div>
  );
}

function WhyUsCard({
  Icon,
  title,
  children,
}: {
  Icon?: React.ReactNode;
  title?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 items-center w-90">
      <div className="bg-yellow-500 py-4 px-5">{Icon}</div>
      <div>
        <h3 className="text-center font-semibold text-4xl text-[#403230]">
          {title}
        </h3>
        <p className="text-center font-inter max-w-80 text-base text-[#403230] text-wrap">
          {children}
        </p>
      </div>
    </div>
  );
}
function Services() {
  return (
    <div className="mb-28">
      <Section
        heading="The most reliable roofing company"
        subheading="Our Professional Roofing Services"
      >
        <div className="grid grid-cols-3 gap-1">
          <ServiceCard
            img="/commercial-roofing.png"
            heading="Commercial Roofing"
          >
            Expert commercial roofing solutions, ensuring durability and
            reliability for your business. Our skilled team uses premium
            materials and advanced techniques to deliver top-notch roofing
            systems that stand the test of time.
          </ServiceCard>
          <ServiceCard
            img="/residential-roofing.png"
            heading="Residential Roofing"
          >
            Quality residential roofing services, protecting your home with
            durable and stylish solutions. Our experienced professionals
            specialize in installing, repairing, and maintaining roofs that
            enhance the beauty and value of your property.
          </ServiceCard>
          <ServiceCard img="/siding.png" heading="Siding">
            Professional siding services for enhanced curb appeal and
            long-lasting protection. Our expert team installs, repairs, and
            maintains siding that not only improves the appearance of your home
            but also provides superior durability against the elements.
          </ServiceCard>
        </div>
      </Section>
    </div>
  );
}

function ServiceCard({
  img,
  heading,
  children,
}: {
  img: string;
  heading?: string;
  children?: React.ReactNode;
}) {
  return (
    <div>
      <div className="h-[540px] relative">
        <Image
          src={img}
          alt="alt"
          fill
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="relative bg-slate-800/70 w-full h-full"></div>
        <div className="absolute bottom-10 left-4">
          <h3 className="text-white _text-center text-4xl">{heading}</h3>
          <p className="text-white _text-center font-inter">{children}</p>
        </div>
      </div>
    </div>
  );
}

function TypeofRoofing() {
  return (
    <div className="mb-28">
      <Section
        heading="Anything is possible with us"
        subheading="We offer the following type of roofing:"
      >
        <RoofingExample
          img="/asphalt-roofing.png"
          heading="Asphalt Roofing"
          isImageLeft
        >
          With asphalt shingles today providing a Beautiful, Affordable and
          Reliable roofing option for any home, asphalt shingles continuing to
          raise the bar when it comes to roofing.
        </RoofingExample>
        <RoofingExample img="/metal-roofing.png" heading="Metal Roofing">
          Metal roofs offer a multitude of benefits for protecting your roof
          from snow and ice build-up. There is essentially nowhere for the water
          to accumulate and gain entry.
        </RoofingExample>
        <RoofingExample
          img="/cedar-roofing.png"
          heading="Cedar Roofing"
          isImageLeft
        >
          Unlike traditional roofing materials, cedar wood is durable, resulting
          in a cost-saving solution. The natural insulation of cedar wood gives
          roofs up to two times the energy efficiency
        </RoofingExample>
      </Section>
    </div>
  );
}

function RoofingExample({
  img,
  heading,
  isImageLeft,
  children,
}: {
  img: string;
  heading?: string;
  isImageLeft?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className="">
      <div
        className={clsx(`flex w-full`, {
          'flex-row ': isImageLeft,
          'flex-row-reverse ': !isImageLeft,
        })}
      >
        <div className="relative h-[456px] w-7/12">
          <Image
            src={img}
            alt="alt"
            fill
            objectFit="cover"
            className="inset-0"
          />
        </div>
        <div className="bg-[#403230] w-5/12 flex flex-col justify-center">
          <h3 className="text-white text-4xl  px-10">{heading}</h3>
          <p className="text-white font-inter px-10">{children}</p>
        </div>
      </div>
    </div>
  );
}

function Process() {
  return (
    <div className="mb-28">
      <Section
        heading="Never wonder what’s next"
        subheading="Our process make it easy"
      >
        <div className="flex">
          <ProcessCard
            heading="Reach Out"
            icon={<EnvelopeIcon className="size-8 text-[#403230]" />}
          >
            Get in touch by calling us or filling out a form for detailed
            inspections are provided for free for homeowners by our team of
            expert technicians.
          </ProcessCard>

          <ProcessCard
            heading="Inspection & Proposal"
            icon={
              <PresentationChartBarIcon className="size-8 text-[#403230]" />
            }
          >
            Our team of experts will come to your home and do a thorough
            inspection in order to get the most accurate estimate , budget and
            timeline for your project.
          </ProcessCard>
          <ProcessCard
            heading="The project starts"
            icon={<Cog8ToothIcon className="size-8 text-[#403230]" />}
          >
            We will begin installation of your project at a mutually agreed fee.
            Our teams of factory trained installers work efficiently and put
            quality above all else.
          </ProcessCard>
        </div>
      </Section>
    </div>
  );
}

function ProcessCard({
  icon,
  heading,
  children,
}: {
  heading?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex flex-col items-center gap-4">
        <div className="p-8 bg-yellow-500">{icon}</div>
        <div className="flex flex-col items-center">
          <h3 className="text-4xl font-semibold text-[#403230] text-center">
            {heading}
          </h3>
          <p className="font-inter text-[#403230] text-center">{children}</p>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <div className="mb-28">
      <Section
        heading="We provide the best service for you"
        subheading="Our customers have a lot to say"
      >
        <div className="flex px-28 gap-1">
          <TestimonialCard
            bgImg="/testimonial-1.png"
            profile="/user-2.png"
            profileName="Martha Ndalale"
            position="Maselesele, Kasungu"
          >
            Excellent experience! The project was completed on time, and our
            roof has never looked better.
          </TestimonialCard>

          <TestimonialCard
            bgImg="/testimonial-2.png"
            profile="/user-3.png"
            profileName="Boka Khama"
            position="Chiziki, Ntcheu"
          >
            Outstanding service! Our roof looks amazing, and the team was
            professional and efficient.
          </TestimonialCard>

          <TestimonialCard
            bgImg="/testimonial-3.png"
            profile="/user-4.png"
            profileName="Samson Wadyiko"
            position="Sipitati, Balaka"
          >
            Highly recommend! Affordable prices and top-notch quality. Our new
            siding transformed our home.
          </TestimonialCard>
        </div>
      </Section>
    </div>
  );
}

function TestimonialCard({
  bgImg,
  profile,
  profileName,
  position,
  children,
}: {
  bgImg: string;
  profile: string;
  profileName?: string;
  position?: string;
  children?: React.ReactNode;
}) {
  return (
    <div>
      <div className="relative flex flex-col">
        <div className="relative h-60 w-full">
          <Image
            src={bgImg}
            alt="alt"
            fill
            className="inset-0"
            objectFit="cover"
          />
        </div>
        <div className="relative  mx-auto -top-[50px]  border-4 border-white rounded-full size-[100px]">
          <Image
            src={profile}
            alt="alt"
            fill
            className="inset-0"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col items-center -mt-7">
          <div>
            <h3 className="text-4xl font-semibold text-[#403230] text-center">
              {profileName}
            </h3>
            <p className="text-[#A39992] text-center">{position}</p>
          </div>
          <div>
            <p className="font-inter text-center">{children}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <div className="bg-[#403230]  p-28">
        <div className="flex justify-between items-center">
          <div className="flex flex-col-reverse">
            <h2 className="text-white font-semibold text-5xl">
              Need a roofing service?
            </h2>
            <p className="text-yellow-500 text-4xl">get in touch</p>
          </div>
          <div className="bg-yellow-500 py-4 px-8">
            <span className="text-[#403230] font-medium text-2xl">
              Get a Free Estimate
            </span>
          </div>
        </div>
        <div className=""></div>
        <div className="flex justify-between">
          <FooterCards
            heading="Visit our offices"
            icon={<HomeIcon className="size-8 text-[#403230]" />}
          />
          <FooterCards
            heading="Make a Call"
            icon={<PhoneIcon className="size-8 text-[#403230]" />}
          />
          <FooterCards
            heading="Send us Email"
            icon={<EnvelopeIcon className="size-8 text-[#403230]" />}
          />
          <FooterCards
            heading="Working Hours"
            icon={<ClockIcon className="size-8 text-[#403230]" />}
          />
        </div>
      </div>
      <footer className="flex justify-between items-center px-28 p-3 bg-[#2E2523]">
        <a className="text-white">Built by Joel Mwala</a>
        <a className="text-white">facebook</a>
      </footer>
    </div>
  );
}

function FooterCards({
  icon,
  heading,
}: {
  icon?: React.ReactNode;
  heading?: string;
}) {
  return (
    <div>
      <div className="flex gap-2">
        <div className="p-4 bg-yellow-500">{icon}</div>
        <div className="flex flex-col">
          <h4 className="text-white text-[28px] -mb-2">{heading}</h4>
          <p className="text-white font-inter">+265-889-995-588</p>
        </div>
      </div>
    </div>
  );
}
