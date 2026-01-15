import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Award, Heart } from "lucide-react";
import pic from "../files/pic.jpg";
import cer1 from "../files/cer1.jpg";
import cer2 from "../files/cer2.png";
import cer3 from "../files/cer3.jpg";
import cer4 from "../files/cer4.jpg";

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-[#0A3D62]" />, // Primary
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service delivery."
    },
    {
      icon: <Heart className="h-8 w-8 text-[#0A3D62]" />,
      title: "Integrity",
      description: "We maintain the highest standards of honesty and transparency."
    },
    {
      icon: <Users className="h-8 w-8 text-[#0A3D62]" />,
      title: "Student-Centric",
      description: "Every decision we make is centered around student success."
    },
    {
      icon: <Award className="h-8 w-8 text-[#0A3D62]" />,
      title: "Innovation",
      description: "We continuously innovate our methods to serve students better."
    }
  ];

  const team = [
    {
      name: "Ravi Shukla",
      role: "Founder & CEO",
      experience: "10+ years in education counseling",
      about_him:
        "Ravi Shukla is a seasoned education counselor with 15+ years of experience guiding students toward their academic and professional goals...",
      image: pic,
      certificates: [
        { title: "Certification 1", image: cer1 },
        { title: "Certification 2", image: cer2 },
        { title: "Certification 3", image: cer3 },
        { title: "Certification 4", image: cer4 },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Hero Section */}
      <section className="bg-[#F8F9FA] text-[#2C2C2C] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-[#0A3D62]">
            About NextStepAdmission
          </h1>
          <p className="text-xl text-[#2C2C2C]">
            Empowering students to achieve their educational dreams through expert guidance and personalized support.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#0A3D62] mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-[#2C2C2C] mb-6">
              At NextStepAdmission, our mission is to bridge the gap between students' aspirations and their educational achievements.
            </p>
            <p className="text-lg text-[#2C2C2C]">
              Since our establishment, we have been committed to providing comprehensive educational counseling services.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=400&q=80"
            alt="Educational counseling"
            className="rounded-lg shadow-xl border border-[#0A3D62]"
          />
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0A3D62] mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-[#2C2C2C]">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center bg-white border border-[#1E90FF] hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl text-[#0A3D62]">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#2C2C2C]">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0A3D62] mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-[#2C2C2C]">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full md:w-2/3">
              {team.map((member, index) => (
                <Card
                  key={index}
                  className="text-center bg-white border border-[#1E90FF] hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row">
                    <CardHeader className="md:w-2/5">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 mx-auto rounded-full border-2 border-[#0A3D62]"
                      />
                      <CardTitle className="text-xl text-[#0A3D62] mt-4">
                        {member.name}
                      </CardTitle>
                      <p className="text-[#1E90FF] font-medium">
                        {member.role}
                      </p>
                      <p className="text-[#2C2C2C]">{member.experience}</p>
                    </CardHeader>

                    <CardContent className="md:w-3/5 p-6">
                      <p className="text-[#2C2C2C] mb-4 text-justify">
                        {member.about_him}
                      </p>
                      <div className="flex flex-wrap gap-4">
                        {member.certificates.map((cert, idx) => (
                          <a key={idx} href={cert.image} target="_blank">
                            <img
                              src={cert.image}
                              alt={cert.title}
                              className="w-16 h-16 rounded border border-[#F4C430]"
                            />
                            <span className="text-xs text-[#1E90FF] underline">
                              {cert.title}
                            </span>
                          </a>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;