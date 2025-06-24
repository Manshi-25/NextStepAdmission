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
      name: "Singapore",
      flag: "SG",
      image: "https://plus.unsplash.com/premium_photo-1697730373939-3ebcaa9d295e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2luZ2Fwb3JlfGVufDB8fDB8fHww",
      highlights: [
        "Post-graduation work permits",
        "Strong career and internship networks",
        "Multicultural environment",
        "Safe and modern campus environments",
        "Globally ranked universities",
      ],
      popularCourses: ["Engineering", "Business", "IT", "Hospitality"],
      duration: "1-4 years",
      costRange: "SGD 20,000 - 40,000 per year"
    },
    {
      name: "United Kingdom",
      flag: "🇬🇧",
      image: "https://images.unsplash.com/photo-1728995847884-7a102e92d1bc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVuaXRlZCUyMGtpbmdkb20lMjB1bml2ZXJzaXR5fGVufDB8fDB8fHww",
      highlights: [
        "Top global universities like Oxford and Cambridge",
        "Wide range of scholarships available",
        "Rich cultural heritage",
        "Global recognition",
        "Post-study work visa for 2 years"
      ],
      popularCourses: ["Medicine", "Law", "Business", "Arts & Humanities"],
      duration: "1-4 years",
      costRange: "£10,000 - £35,000/year"
    },
    {
      name: "Australia",
      flag: "🇦🇺",
      image: "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXVzdHJhbGlhfGVufDB8fDB8fHww",
      highlights: [
        "Top universities like University of Melbourne, UNSW",
        "High quality of life",
        "Work part-time while studying",
        "English-taught globally accepted degrees",
        "Post-study work options up to 4 years"
      ],
      popularCourses: ["Nursing", "Engineering", "Tourism", "Marine Science","Business"],
      duration: "1-4 years",
      costRange: "$20,000 - $45,000 AUD/year"
    },
    {
      name: "Mauritius",
      flag: "MU",
      image: "https://images.unsplash.com/photo-1619267135268-059627071ce8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hdXJpdGl1cyUyMHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D",
      highlights: [
        "Affordable international universities",
        "Research opportunities",
        "Diverse programs",
        "English and French medium of instruction",
        "Opportunity to work part-time"
      ],
      popularCourses: ["Business", "IT", "Medicine", "Engineering"],
      duration: "1-4 years",
      costRange: "USD 5,000 - 15,000 per year"
    },
    {
      name: "Germany",
      flag: "🇩🇪",
      image: "https://images.unsplash.com/photo-1711971855079-e97732103795?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2VybWFueSUyMHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D",
      highlights: [
        "Public universities with little or no tuition fee",
        "Strong technical and research-based programs",
        "Engineering excellence",
        "English-taught programs increasing",
        "Work part-time during studies and stay-back options"
      ],
      popularCourses: ["Engineering", "Technology", "Business", "Research"],
      duration: "2-4 years",
      costRange: "€0 - 15,000 per year"
    },
    {
      name: "France",
      flag: "FR",
      image: "https://images.unsplash.com/photo-1473951574080-01fe45ec8643?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJhbmNlfGVufDB8fDB8fHww",
      highlights: [
        "Top universities and grandes écoles",
        "Affordable tuition and student housing",
        "Small class sizes",
        "Work part-time and explore Europe",
        "English-speaking"
      ],
      popularCourses: ["Fashion", "Environmental Science","Business", "Tourism", "Arts"],
      duration: "1-4 years",
      costRange: "€2,000 - 20,000 per year"
    },
    {
      name: "Ireland",
      flag: "IE",
      image: "https://images.unsplash.com/photo-1700609017939-132dc1fdff41?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGlyZWxhbmQlMjB1bml2ZXJzaXR5fGVufDB8fDB8fHww",
      highlights: [
        "Fast-growing technology and pharma sectors",
        "Safe, student-friendly environment",
        "Post-study work visa up to 2 years",
        "Adventure lifestyle",
        "English-speaking universities"
      ],
      popularCourses: ["Business", "Environmental Science", "Tourism", "Data Science", "Pharmacy"],
      duration: "1-4 years",
      costRange: "€10,000 - 25,000 per year"
    },
    {
      name: "Cyprus",
      flag: "CY",
      image: "https://images.unsplash.com/photo-1661776724331-648bac1d2927?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3lwcnVzJTIwdW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D",
      highlights: [
        "Affordable international universities",
        "English widely spoken in universities",
        "Part-time job opportunities for students",
        "Warm, student-friendly environment",
        "English-speaking"
      ],
      popularCourses: ["Business", "Medicine", "Hospitality", "IT"],
      duration: "1-4 years",
      costRange: "€5,000 - 15,000 per year"
    },
    {
      name: "Malta",
      flag: "MT",
      image: "https://images.unsplash.com/photo-1569311607906-1d8f9e2614b5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbHRhfGVufDB8fDB8fHww",
      highlights: [
        "English-taught programs with affordable fees",
        "Safe and peaceful study environment",
        "Part-time work allowed for students",
        "Ideal climate and Mediterranean culture"
      ],
      popularCourses: ["Business", "Tourism", "IT", "Arts"],
      duration: "1-4 years",
      costRange: "€7,000 - 15,000 per year"
    },
    {
      name: "United Arab Emirates",
      flag: "AE",
      image: "https://images.unsplash.com/photo-1687709644302-8eceed73f2dc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFVuaXRlZCUyMEFyYWIlMjBFbWlyYXRlcyUyMHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D",
      highlights: [
        "Modern, technology-driven campuses",
        "English-taught international degrees",
        "Growing global education hubs like Dubai",
        "Tax-free work opportunities post-study"
      ],
      popularCourses: ["Business", "Engineering", "Hospitality", "IT"],
      duration: "1-4 years",
      costRange: "AED 30,000 - 75,000 per year"
    },
    {
      name: "Canada",
      flag: "CA",
      image: "https://images.unsplash.com/photo-1576485976138-6c3cff620ae8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhbmFkYSUyMHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D",
      highlights: [
        "Top-ranked universities with global reputation",
        "Post-study work visa up to 3 years",
        "Safe and multicultural society",
        "English and French-speaking campuses"
      ],
      popularCourses: ["IT", "Business", "Engineering", "Health Sciences"],
      duration: "1-4 years",
      costRange: "CAD 15,000 - 35,000 per year"
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
      <section className=" bg-[#EBEDDF] bg-gradient-to-r from-[#EBEDDF] to-[#EBEDDF] text-black py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Study Abroad</h1>
          <p className="text-xl text-zinc-800">
            Explore world-class education opportunities in top destinations around the globe.
          </p>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-20 bg-[#EBEDDF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8bg-[#eae4d5]" >
          <div className="text-center mb-16">
            <h2 className="text-3xl bg-[#EBEDDF] font-bold text-black mb-4">Popular Study Destinations</h2>
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
                  <div className="absolute top-4 left-4 text-3xl text-white">{country.flag}</div>
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
      <section className="py-20 bg-[#EBEDDF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Our Study Abroad Services</h2>
            <p className="text-xl text-zinc-800">
              Comprehensive support for your international education journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-[#e3e0f2] border-[#21201c]">
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
      <section className="py-20 bg-[#EBEDDF] text-black">
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
      <section className="py-20 bg-[#EBEDDF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">Ready to Study Abroad?</h2>
          <p className="text-xl text-zinc-800 mb-8">
            Start your international education journey with expert guidance from our counselors.
          </p>
          <Button size="lg" asChild className="bg-zinc-800 text-white hover:text-black hover:bg-[#e3e0f2]">
            <Link to="/contact">Get Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default StudyAbroad;
