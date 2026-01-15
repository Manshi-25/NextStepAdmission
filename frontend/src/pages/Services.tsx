import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Users,
  FileText,
  Globe,
  BookOpen,
  CheckCircle,
  Award,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Users className="h-12 w-12 text-[#0A3D62]" />,
      title: "Career Counseling",
      description:
        "Personalized one-on-one sessions to help you discover your strengths and choose the right career path.",
      features: [
        "Aptitude and personality assessments",
        "Career exploration workshops",
        "Industry insights and trends",
        "Skills gap analysis",
      ],
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-[#0A3D62]" />,
      title: "College Admissions",
      description:
        "Complete guidance for undergraduate and postgraduate admissions in top universities.",
      features: [
        "University selection assistance",
        "Application essay writing",
        "Interview preparation",
        "Document verification",
      ],
    },
    {
      icon: <Globe className="h-12 w-12 text-[#0A3D62]" />,
      title: "Study Abroad Consulting",
      description:
        "Expert assistance for studying in countries like Canada, UK, Australia, USA, and Germany.",
      features: [
        "Country-specific guidance",
        "University partnerships",
        "Cultural preparation",
        "Pre-departure orientation",
      ],
    },
    {
      icon: <FileText className="h-12 w-12 text-[#0A3D62]" />,
      title: "Visa Assistance",
      description:
        "Professional support for student visa applications and documentation.",
      features: [
        "Visa application guidance",
        "Document preparation",
        "Interview coaching",
        "Status tracking",
      ],
    },
    {
      icon: <Award className="h-12 w-12 text-[#0A3D62]" />,
      title: "Scholarship Guidance",
      description:
        "Help you find and apply for scholarships to fund your education.",
      features: [
        "Scholarship database access",
        "Application assistance",
        "Merit-based opportunities",
        "Financial planning",
      ],
    },
    {
      icon: <BookOpen className="h-12 w-12 text-[#0A3D62]" />,
      title: "Test Preparation",
      description:
        "Comprehensive preparation for standardized tests like IELTS, TOEFL, GRE, GMAT.",
      features: [
        "Mock tests and practice",
        "Study materials",
        "Expert instructors",
        "Progress tracking",
      ],
    },
  ];

  const process = [
    {
      step: "1",
      title: "Initial Consultation",
      description:
        "Free consultation to understand your goals and requirements.",
    },
    {
      step: "2",
      title: "Assessment & Planning",
      description:
        "Comprehensive assessment and personalized roadmap creation.",
    },
    {
      step: "3",
      title: "Implementation",
      description:
        "Execute the plan with continuous guidance and support.",
    },
    {
      step: "4",
      title: "Success & Follow-up",
      description:
        "Achieve your goals with ongoing mentorship and support.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Hero Section */}
      <section className="bg-[#F8F9FA] text-[#2C2C2C] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-[#0A3D62]">
            Our Services
          </h1>
          <p className="text-xl">
            Comprehensive educational consulting services designed to guide you
            at every step of your academic journey.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0A3D62] mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-[#2C2C2C]">
              Expert services tailored to your educational and career needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="h-full bg-white border border-[#1E90FF] hover:shadow-lg transition-shadow"
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-[#0A3D62]">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#2C2C2C] mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle className="h-4 w-4 text-[#1E90FF]" />
                        <span className="text-sm text-[#2C2C2C]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0A3D62] mb-4">
              Our Process
            </h2>
            <p className="text-xl text-[#2C2C2C]">
              A structured approach to ensure your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#1E90FF] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-[#0A3D62] mb-2">
                  {step.title}
                </h3>
                <p className="text-[#2C2C2C]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F8F9FA] text-center">
        <h2 className="text-3xl font-bold text-[#0A3D62] mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-[#2C2C2C] mb-8">
          Book a free consultation with our expert counselors today.
        </p>
        <Button
          size="lg"
          className="bg-[#0A3D62] text-white hover:bg-[#1E90FF]"
          asChild
        >
          <Link to="/contact">Book Free Consultation</Link>
        </Button>
      </section>
    </div>
  );
};

export default Services;