import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  GraduationCap,
  Users,
  Globe,
  Award,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: <GraduationCap className="h-8 w-8 text-[#0A3D62]" />,
      title: "Career Counseling",
      description:
        "Expert guidance to help you choose the right career path based on your interests and strengths.",
    },
    {
      icon: <Globe className="h-8 w-8 text-[#0A3D62]" />,
      title: "Study Abroad",
      description:
        "Complete assistance for studying in top destinations like Canada, UK, Australia, and more.",
    },
    {
      icon: <Users className="h-8 w-8 text-[#0A3D62]" />,
      title: "Admission Support",
      description:
        "End-to-end support for college admissions, application reviews, and interview preparation.",
    },
    {
      icon: <Award className="h-8 w-8 text-[#0A3D62]" />,
      title: "Scholarship Guidance",
      description:
        "Find and apply for scholarships to make your dream education affordable.",
    },
  ];

  const stats = [
    { number: "5000+", label: "Students Counseled" },
    { number: "98%", label: "Success Rate" },
    { number: "50+", label: "University Partners" },
    { number: "15+", label: "Countries" },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Hero Section */}
      <section className="bg-[#F8F9FA] text-[#2C2C2C] py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#0A3D62]">
            Your Gateway to Educational Excellence
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
            Expert career counseling, admission guidance, and study abroad
            assistance to help you achieve your dreams.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#0A3D62] text-white hover:bg-[#49749f] border-none"
              asChild
            >
              <Link to="/contact">Start Your Journey</Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-[#0A3D62] text-white hover:bg-[#49749f] border-none"
              asChild
            >
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A3D62] mb-4">
              How We Help You Succeed
            </h2>
            <p className="text-xl text-[#2C2C2C] max-w-2xl mx-auto">
              Comprehensive educational services designed to guide you at every
              step of your academic journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center bg-white border border-[#1E90FF] hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-[#0A3D62]">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#2C2C2C]">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-[#0A3D62] mb-2">
                  {stat.number}
                </div>
                <div className="text-[#2C2C2C] text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A3D62] mb-6">
              Why Choose NextStepAdmission?
            </h2>
            <p className="text-lg text-[#2C2C2C] mb-8">
              With years of experience and a proven track record, we provide
              personalized guidance to help you make informed decisions.
            </p>

            <div className="space-y-4">
              {[
                "Personalized career counseling sessions",
                "Expert guidance from certified counselors",
                "Comprehensive university selection assistance",
                "Visa and documentation support",
                "Scholarship and financial aid guidance",
                "Post-admission support and mentoring",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#1E90FF]" />
                  <span className="text-[#2C2C2C]">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <img
            src="https://media.istockphoto.com/id/2222660208/photo/business-partners-shaking-hands-in-an-office-after-finalizing-a-contract-celebrating-a.webp?a=1&b=1&s=612x612&w=0&k=20&c=REFQNa97SHdC1WPTIXL0euZYhyWWSGfjd9itNFZ-tlE="
            alt="Students studying"
            className="rounded-lg shadow-xl border border-[#0A3D62]"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F8F9FA] text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0A3D62] mb-6">
          Ready to Start Your Educational Journey?
        </h2>
        <p className="text-xl text-[#2C2C2C] mb-8">
          Get in touch with our expert counselors today.
        </p>

        <Button
          size="lg"
          className="bg-[#0A3D62] text-white hover:bg-[#1E90FF]"
          asChild
        >
          <Link to="/contact">
            Book Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </section>
    </div>
  );
};

export default Home;