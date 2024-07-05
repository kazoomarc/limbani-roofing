"use client";
import Image from "next/image";
import { title } from "process";
import {
  ClipboardIcon,
  CurrencyDollarIcon,
  ClockIcon,
  EnvelopeIcon,
  HomeIcon,
  PhoneIcon,
  PresentationChartBarIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

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
      <div className="relative flex flex-row h-full">
        <Image
          src="/hero-bg-image.png"
          alt="image of Limbani technician roofing an office"
          fill
          className="absolute inset-0 w-full "
          objectFit="cover"
        />
        <div className="relative top-0 right-0 flex w-full _bg-gray-800/85 _bg-lime-400 ">
          <div className="w-1/2"></div>
          <div className="w-1/2 _bg-orange-600">
            <div className="flex flex-col gap-y-6 max-w-[612px] pt-28">
              <h1 className="font-bold text-white text-7xl/none">
                Limbani Roofing Specialists
              </h1>
              <p className="text-white _lg:text-2xl font-inter text-wrap">
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
    <div className="relative my-28 md:mb-96">
      <div className="">
        <div className="items-end gap-10 md:flex md:absolute left-24 -top-28">
          <form className="flex flex-col gap-4 p-4 bg-yellow-500 md:w-1/2 ">
            <h2 className="text-5xl font-semibold text-center">
              Get a Free Inspection
            </h2>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-3 text-2xl"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="px-4 py-3 text-2xl"
              />
              <input
                type="text"
                placeholder="Email Address"
                className="px-4 py-3 text-2xl"
              />
              <input
                type="text"
                placeholder="Full Address"
                className="px-4 py-3 text-2xl"
              />
            </div>
            <input
              type="text"
              placeholder="Select a Service"
              className="w-full px-4 py-3 text-2xl"
            />
            <input
              type="submit"
              placeholder="submit Request"
              className="w-full bg-[#403230] text-white py-3 px-4 text-2xl"
            />
          </form>
          <div className="hidden md:block border-l-8 _border-yellow-500 pl-8 max-w-[498px]">
            <div className="mb-4">
              <p className="font-inter text-base text-[#403230]">
                The crew were as competent and professional as we could have
                hoped for. My wife and I are extremely pleased with not only the
                work but the product as well.
              </p>
            </div>
            <div className="flex items-center gap-2">
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
      <div className="flex flex-col items-center w-full mb-8">
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
        <div className="flex justify-center w-full mb-8">
          <p className="max-w-4xl text-center">
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
        <div className="flex flex-wrap justify-center gap-6">
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
    <div className="flex flex-col items-center gap-4 w-90">
      <div className="px-5 py-4 bg-yellow-500">{Icon}</div>
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
        <div className="grid grid-cols-1 gap-1 md:grid-cols-3">
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
        <div className="relative w-full h-full bg-slate-800/70"></div>
        <div className="absolute bottom-10 left-4">
          <h3 className="text-4xl text-white _text-center">{heading}</h3>
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
        <div className="">
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
            from snow and ice build-up. There is essentially nowhere for the
            water to accumulate and gain entry.
          </RoofingExample>
          <RoofingExample
            img="/cedar-roofing.png"
            heading="Cedar Roofing"
            isImageLeft
          >
            Unlike traditional roofing materials, cedar wood is durable,
            resulting in a cost-saving solution. The natural insulation of cedar
            wood gives roofs up to two times the energy efficiency
          </RoofingExample>
        </div>
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
    <div className="mb-28 md:mb-0">
      <div
        className={clsx(`md:flex w-full`, {
          "flex-row ": isImageLeft,
          "flex-row-reverse ": !isImageLeft,
        })}
      >
        <div className="relative h-[456px] w-full md:w-7/12">
          <Image
            src={img}
            alt="alt"
            fill
            objectFit="cover"
            className="inset-0"
          />
        </div>
        <div className="bg-[#403230] min-h-96 md:w-5/12 w-full flex flex-col justify-center">
          <h3 className="px-10 text-4xl text-white">{heading}</h3>
          <p className="px-10 text-white font-inter">{children}</p>
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
        <div className="md:flex">
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
      <div className="flex flex-col items-center gap-4 mb-10">
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
        <div className="gap-1 md:flex px-28">
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
      <div className="relative flex flex-col mb-10">
        <div className="relative w-full h-60">
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
            <p className="text-center font-inter">{children}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  const MAPS_KEY = process.env.NEXT_PUBLIC_MAPS_KEY || "";
  const mapContainerStyle = {
    width: "100%",
    height: "300px",
  };

  const center = {
    lat: -15.3875, // Update with your latitude
    lng: 35.3175, // Update with your longitude
  };

  return (
    <div>
      <div className="bg-[#403230]  p-28">
        <div className="flex items-center justify-between mb-28">
          <div className="flex flex-col-reverse">
            <h2 className="text-5xl font-semibold text-white">
              Need a roofing service?
            </h2>
            <p className="text-4xl text-yellow-500">get in touch</p>
          </div>
          <div className="px-8 py-4 bg-yellow-500">
            <span className="text-[#403230] font-medium text-2xl">
              Get a Free Estimate
            </span>
          </div>
        </div>

        <div className="mb-16">
          <LoadScript googleMapsApiKey={MAPS_KEY}>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={15}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>

        <div className="flex flex-wrap justify-between gap-10">
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
      <div className="flex items-start justify-start gap-2">
        <div className="flex items-center p-4 bg-yellow-500 grow-0">{icon}</div>
        <div className="flex flex-col">
          <h4 className="text-white text-[28px] -mb-2">{heading}</h4>
          <p className="text-white font-inter">+265-889-995-588</p>
        </div>
      </div>
    </div>
  );
}
