import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
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
      image: "https://plus.unsplash.com/premium_photo-1697730373939-3ebcaa9d295e?w=1000",
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
      image: "https://images.unsplash.com/photo-1728995847884-7a102e92d1bc?w=1000",
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
      image: "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?w=1000",
      highlights: [
        "Top universities like University of Melbourne, UNSW",
        "High quality of life",
        "Work part-time while studying",
        "English-taught globally accepted degrees",
        "Post-study work options up to 4 years"
      ],
      popularCourses: ["Nursing", "Engineering", "Tourism", "Marine Science", "Business"],
      duration: "1-4 years",
      costRange: "$20,000 - $45,000 AUD/year"
    },
     {
      name: "Mauritius",
      flag: "MU",
      image: "https://images.unsplash.com/photo-1619267135268-059627071ce8?w=1000",
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
      image: "https://images.unsplash.com/photo-1711971855079-e97732103795?w=1000",
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
      image: "https://images.unsplash.com/photo-1473951574080-01fe45ec8643?w=1000",
      highlights: [
        "Top universities and grandes écoles",
        "Affordable tuition and student housing",
        "Small class sizes",
        "Work part-time and explore Europe",
        "English-speaking"
      ],
      popularCourses: ["Fashion", "Environmental Science", "Business", "Tourism", "Arts"],
      duration: "1-4 years",
      costRange: "€2,000 - 20,000 per year"
    },
    {
      name: "Ireland",
      flag: "IE",
      image: "https://images.unsplash.com/photo-1700609017939-132dc1fdff41?w=1000",
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
      image: "https://images.unsplash.com/photo-1661776724331-648bac1d2927?w=1000",
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
      image: "https://images.unsplash.com/photo-1569311607906-1d8f9e2614b5?w=1000",
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
      image: "https://images.unsplash.com/photo-1687709644302-8eceed73f2dc?w=1000",
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
      image: "https://images.unsplash.com/photo-1576485976138-6c3cff620ae8?w=1000",
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

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#0A3D62] mb-6">
          Study Abroad
        </h1>
        <p className="text-xl text-[#2C2C2C]">
          Explore world-class education opportunities in top destinations around the globe.
        </p>
      </section>

      {/* Countries Section */}
      <section className="py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <Card
              key={index}
              className="bg-white border border-[#0A3D62]/20 hover:shadow-lg transition-shadow"
            >
              <img src={country.image} className="h-48 w-full object-cover" />

              <CardHeader>
                <CardTitle className="text-[#0A3D62]">
                  {country.name}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-3">
                {country.highlights.map((h, i) => (
                  <div key={i} className="flex gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-[#1E90FF]" />
                    <span className="text-[#2C2C2C]">{h}</span>
                  </div>
                ))}

                <div className="flex gap-2 text-sm text-[#2C2C2C]">
                  <Clock className="h-4 w-4 text-[#1E90FF]" />
                  {country.duration}
                </div>

                <div className="flex gap-2 text-sm text-[#2C2C2C]">
                  <DollarSign className="h-4 w-4 text-[#1E90FF]" />
                  {country.costRange}
                </div>

                <div className="flex flex-wrap gap-1">
                  {country.popularCourses.map((c, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-[#F4C430]/20 text-[#0A3D62] text-xs rounded"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <Button
          asChild
          size="lg"
          className="bg-[#0A3D62] text-white hover:bg-[#1E90FF]"
        >
          <Link to="/contact">Get Free Consultation</Link>
        </Button>
      </section>
    </div>
  );
};

export default StudyAbroad;