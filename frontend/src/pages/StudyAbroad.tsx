import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  GraduationCap,
  Star,
  Users,
  CheckCircle
} from "lucide-react";

const StudyAbroad = () => {
  const countries = [
    {
      name: "Canada",
      flag: "🇨🇦",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=400&h=250&q=80",
      highlights: [
        "Post-graduation work permits",
        "Affordable tuition fees",
        "Multicultural environment",
        "Pathway to permanent residency"
      ],
      popularCourses: ["Engineering", "Business", "Computer Science", "Healthcare"],
      duration: "1-4 years",
      costRange: "$15,000 - $35,000 CAD/year"
    },
    {
      name: "United Kingdom",
      flag: "🇬🇧",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=400&h=250&q=80",
      highlights: [
        "World-renowned universities",
        "Shorter course duration",
        "Rich cultural heritage",
        "Global recognition"
      ],
      popularCourses: ["Medicine", "Law", "Business", "Arts & Humanities"],
      duration: "1-3 years",
      costRange: "£12,000 - £45,000/year"
    },
    {
      name: "Australia",
      flag: "🇦🇺",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&h=250&q=80",
      highlights: [
        "High quality of life",
        "Work while studying",
        "Beautiful landscapes",
        "Strong job market"
      ],
      popularCourses: ["Mining", "Agriculture", "Tourism", "Marine Science"],
      duration: "1-4 years",
      costRange: "$20,000 - $45,000 AUD/year"
    },
    {
      name: "United States",
      flag: "🇺🇸",
      image: "https://img.freepik.com/free-photo/new-york-cityscape_181624-4671.jpg?semt=ais_hybrid&w=740",
      highlights: [
        "Top-ranking universities",
        "Research opportunities",
        "Diverse programs",
        "Innovation hub"
      ],
      popularCourses: ["Technology", "MBA", "Medicine", "Engineering"],
      duration: "2-4 years",
      costRange: "$25,000 - $60,000 USD/year"
    },
    {
      name: "Germany",
      flag: "🇩🇪",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&h=250&q=80",
      highlights: [
        "Low/No tuition fees",
        "Strong economy",
        "Engineering excellence",
        "Central European location"
      ],
      popularCourses: ["Engineering", "Technology", "Business", "Research"],
      duration: "2-3 years",
      costRange: "€500 - €3,000/year"
    },
    {
      name: "New Zealand",
      flag: "🇳🇿",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&h=250&q=80",
      highlights: [
        "Safe and peaceful",
        "Small class sizes",
        "Adventure lifestyle",
        "English-speaking"
      ],
      popularCourses: ["Agriculture", "Environmental Science", "Tourism", "Arts"],
      duration: "1-4 years",
      costRange: "$18,000 - $35,000 NZD/year"
    }
  ];

  const services = [
    {
      icon: <GraduationCap className="h-8 w-8 text-black" />,
      title: "University Selection",
      description: "Expert guidance in choosing the right universities based on your profile and preferences."
    },
    {
      icon: <Users className="h-8 w-8 text-black" />,
      title: "Application Support",
      description: "Complete assistance with application process, essays, and documentation."
    },
    {
      icon: <Star className="h-8 w-8 text-black" />,
      title: "Visa Guidance",
      description: "Professional support for student visa applications and interview preparation."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-black" />,
      title: "Pre-departure",
      description: "Comprehensive orientation and support to help you settle in your new country."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className=" bg-[#b159ac] bg-gradient-to-r from-[#b159ac] to-[#905989] text-black py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Study Abroad</h1>
          <p className="text-xl text-zinc-800">
            Explore world-class education opportunities in top destinations around the globe.
          </p>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-20 bg-[#dfbddd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8bg-[#eae4d5]" >
          <div className="text-center mb-16">
            <h2 className="text-3xl bg-[#dfbddd] font-bold text-black mb-4">Popular Study Destinations</h2>
            <p className="text-xl text-zinc-800">
              Discover the best countries for your international education
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow bg-[#eae4d5]">
                <div className="relative">
                  <img 
                    src={country.image}
                    alt={country.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 text-3xl">{country.flag}</div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center justify-between">
                    {country.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Highlights</h4>
                    <ul className="space-y-1">
                      {country.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-black" />
                      <span className="text-gray-600">Duration: {country.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4 text-black" />
                      <span className="text-gray-600">Cost: {country.costRange}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-900 mb-1">Popular Courses</h5>
                    <div className="flex flex-wrap gap-1">
                      {country.popularCourses.map((course, courseIndex) => (
                        <span 
                          key={courseIndex}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#dfbddd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Our Study Abroad Services</h2>
            <p className="text-xl text-zinc-800">
              Comprehensive support for your international education journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-[#eae4d5]">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#dfbddd] text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Study Abroad Success</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2500+</div>
              <div className="text-zinc-800">Students Placed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-zinc-800">Visa Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-zinc-800">Partner Universities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-zinc-800">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[black]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Study Abroad?</h2>
          <p className="text-xl text-slate-200 mb-8">
            Start your international education journey with expert guidance from our counselors.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Get Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default StudyAbroad;
