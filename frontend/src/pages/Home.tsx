
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, Globe, Award, ArrowRight, CheckCircle } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: <GraduationCap className="h-8 w-8 text-[#b6b09f]" />,
      title: "Career Counseling",
      description: "Expert guidance to help you choose the right career path based on your interests and strengths."
    },
    {
      icon: <Globe className="h-8 w-8 text-[#b6b09f]" />,
      title: "Study Abroad",
      description: "Complete assistance for studying in top destinations like Canada, UK, Australia, and more."
    },
    {
      icon: <Users className="h-8 w-8 text-[#b6b09f]" />,
      title: "Admission Support",
      description: "End-to-end support for college admissions, application reviews, and interview preparation."
    },
    {
      icon: <Award className="h-8 w-8 text-[#b6b09f]" />,
      title: "Scholarship Guidance",
      description: "Find and apply for scholarships to make your dream education affordable."
    }
  ];

  const stats = [
    { number: "5000+", label: "Students Counseled" },
    { number: "98%", label: "Success Rate" },
    { number: "50+", label: "University Partners" },
    { number: "15+", label: "Countries" }
  ];

  return (
    <div className="min-h-screen bg-[#EBEDDF]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#EBEDDF] to-[#EBEDDF] text-black py-20">
        <div className="absolute inset-0 opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Your Gateway to <span className="text-black">Educational Excellence</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-zinc-800 max-w-3xl mx-auto">
              Expert career counseling, admission guidance, and study abroad assistance to help you achieve your dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-zinc-800 text-white hover:bg-[#e3e0f2] hover:text-black" asChild>
                <Link to="/contact">Start Your Journey</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white bg-zinc-800  hover:bg-[#e3e0f2] text-white" asChild>
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section bg-[#4a2c39] */}
      <section className="py-20 bg-[#EBEDDF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              How We Help You Succeed
            </h2>
            <p className="text-xl text-zinc-800 max-w-2xl mx-auto">
              Comprehensive educational services designed to guide you at every step of your academic journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-[#e3e0f2] hover:bg-slate-200 border-[#100f0e]">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-black">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#EBEDDF] text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-zinc-800 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#EBEDDF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
                Why Choose NextStepAdmission?
              </h2>
              <p className="text-lg text-zinc-800 mb-8">
                With years of experience and a proven track record, we provide personalized guidance 
                to help you make informed decisions about your education and career.
              </p>
              
              <div className="space-y-4">
                {[
                  "Personalized career counseling sessions",
                  "Expert guidance from certified counselors",
                  "Comprehensive university selection assistance",
                  "Visa and documentation support",
                  "Scholarship and financial aid guidance",
                  "Post-admission support and mentoring"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-zinc-900">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=400&q=80"
                alt="Students studying"
                className="rounded-lg shadow-xl border border-[#0d0c0b]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#EBEDDF] text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Start Your Educational Journey?
          </h2>
          <p className="text-xl text-zinc-800 mb-8">
            Get in touch with our expert counselors and take the first step towards your dream career.
          </p>
          <Button size="lg" className="bg-zinc-800 text-white hover:bg-[#e3e0f2] hover:text-black" asChild>
            <Link to="/contact">
              Book Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
