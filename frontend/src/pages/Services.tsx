
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Users, 
  FileText, 
  Globe, 
  CreditCard, 
  BookOpen,
  CheckCircle,
  Award,
  Briefcase
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Users className="h-12 w-12 text-[#b6b09f]" />,
      title: "Career Counseling",
      description: "Personalized one-on-one sessions to help you discover your strengths and choose the right career path.",
      features: [
        "Aptitude and personality assessments",
        "Career exploration workshops",
        "Industry insights and trends",
        "Skills gap analysis"
      ]
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-[#b6b09f]" />,
      title: "College Admissions",
      description: "Complete guidance for undergraduate and postgraduate admissions in top universities.",
      features: [
        "University selection assistance",
        "Application essay writing",
        "Interview preparation",
        "Document verification"
      ]
    },
    {
      icon: <Globe className="h-12 w-12 text-[#b6b09f]" />,
      title: "Study Abroad Consulting",
      description: "Expert assistance for studying in countries like Canada, UK, Australia, USA, and Germany.",
      features: [
        "Country-specific guidance",
        "University partnerships",
        "Cultural preparation",
        "Pre-departure orientation"
      ]
    },
    {
      icon: <FileText className="h-12 w-12 text-[#b6b09f]" />,
      title: "Visa Assistance",
      description: "Professional support for student visa applications and documentation.",
      features: [
        "Visa application guidance",
        "Document preparation",
        "Interview coaching",
        "Status tracking"
      ]
    },
    {
      icon: <Award className="h-12 w-12 text-[#b6b09f]" />,
      title: "Scholarship Guidance",
      description: "Help you find and apply for scholarships to fund your education.",
      features: [
        "Scholarship database access",
        "Application assistance",
        "Merit-based opportunities",
        "Financial planning"
      ]
    },
    {
      icon: <BookOpen className="h-12 w-12 text-[#b6b09f]" />,
      title: "Test Preparation",
      description: "Comprehensive preparation for standardized tests like IELTS, TOEFL, GRE, GMAT.",
      features: [
        "Mock tests and practice",
        "Study materials",
        "Expert instructors",
        "Progress tracking"
      ]
    }
  ];

  const process = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "Free consultation to understand your goals and requirements."
    },
    {
      step: "2",
      title: "Assessment & Planning",
      description: "Comprehensive assessment and personalized roadmap creation."
    },
    {
      step: "3",
      title: "Implementation",
      description: "Execute the plan with continuous guidance and support."
    },
    {
      step: "4",
      title: "Success & Follow-up",
      description: "Achieve your goals with ongoing mentorship and support."
    }
  ];

  return (
    <div className="min-h-screen bg-[#2e141c]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#b159ac] to-[#905989] text-black py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-zinc-800">
            Comprehensive educational consulting services designed to guide you at every step of your academic journey.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#dfbddd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">What We Offer</h2>
            <p className="text-xl text-zinc-800">
              Expert services tailored to your educational and career needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow bg-[#ffffff] hover:bg-slate-200 border-[#b6b09f]">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-black">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">{feature}</span>
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
      <section className="py-20 bg-[#dfbddd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Our Process</h2>
            <p className="text-xl text-zinc-800">
              A structured approach to ensure your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#f35786] text-zinc-800 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-zinc-800 mb-2">{step.title}</h3>
                <p className="text-zinc-800">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-[#f2f2f2] mb-8">
            Book a free consultation with our expert counselors today and take the first step towards your dream career.
          </p>
          <Button size="lg" className="bg-[#b6b09f] text-black hover:bg-[#eae4d5]" asChild>
            <Link to="/contact">Book Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
