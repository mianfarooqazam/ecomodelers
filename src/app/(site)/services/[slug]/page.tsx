import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import ServiceDetail from "@/components/Services/ServiceDetail";
import { Servicebox } from "@/app/api/data";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = Servicebox.find((s) => s.slug === params.slug);
  
  if (!service) {
    return {
      title: "Service Not Found | Venus",
    };
  }

  return {
    title: `${service.title} | Venus`,
    description: service.description,
  };
}

export async function generateStaticParams() {
  return Servicebox.map((service) => ({
    slug: service.slug,
  }));
}

const ServiceDetailPage = ({ params }: PageProps) => {
  const service = Servicebox.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
    { href: `/services/${params.slug}`, text: service.title },
  ];

  return (
    <>
      <HeroSub
        title={service.title}
        description={service.description}
        breadcrumbLinks={breadcrumbLinks}
      />
      <ServiceDetail service={service} />
    </>
  );
};

export default ServiceDetailPage;

