
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
      icon: <Target className="h-8 w-8 text-[#b6b09f]" />,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service delivery."
    },
    {
      icon: <Heart className="h-8 w-8 text-[#b6b09f]" />,
      title: "Integrity",
      description: "We maintain the highest standards of honesty and transparency."
    },
    {
      icon: <Users className="h-8 w-8 text-[#b6b09f]" />,
      title: "Student-Centric",
      description: "Every decision we make is centered around student success."
    },
    {
      icon: <Award className="h-8 w-8 text-[#b6b09f]" />,
      title: "Innovation",
      description: "We continuously innovate our methods to serve students better."
    }
  ];

  const team = [
    {
      name: "Ravi Shukla",
      role: "Founder & CEO",
      experience: "10+ years in education counseling",
      about_him:"Ravi Shukla is a seasoned education counselor with 15+ years of experience guiding students toward their academic and professional goals. He offers personalized support, especially for those aspiring to study abroad—helping with everything from choosing the right country and university to handling admissions, visas, and scholarships. Ravi’s expert mentorship empowers students to confidently pursue global educational opportunities.Here is the link to his certifications",
      image: pic,
      certificates : [
        { title: "Certification 1", image: cer1},
        { title: "Certification 2", image: cer2 },
        { title: "Certification 3", image: cer3},
        { title: "Certification 4", image: cer4 },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-[#EBEDDF]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#EBEDDF] to-[#EBEDDF] text-black py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">About NextStepAdmission</h1>
          <p className="text-xl text-zinc-800 ">
            Empowering students to achieve their educational dreams through expert guidance and personalized support.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-[#EBEDDF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Our Mission</h2>
              <p className="text-lg text-zinc-800 mb-6">
                At NextStepAdmission, our mission is to bridge the gap between students' aspirations and their 
                educational achievements. We believe that every student deserves access to quality education 
                and the right guidance to make informed decisions about their future.
              </p>
              <p className="text-lg text-zinc-800">
                Since our establishment, we have been committed to providing comprehensive educational 
                counseling services that empower students to unlock their full potential and pursue their 
                dream careers, whether in India or abroad.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=400&q=80"
                alt="Educational counseling"
                className="rounded-lg shadow-xl border border-gray-950"
              />
            </div>
          </div>
        </div>
      </section> 

      {/* Values Section */}
      <section className="py-20 bg-[#EBEDDF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Our Core Values</h2>
            <p className="text-xl text-zinc-800">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-[#e3e0f2] hover:bg-slate-200 border-[#040404]">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl text-black">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#EBEDDF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blck mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-zinc-800">
              Experienced professionals dedicated to your success
            </p>
          </div>
          
          <div className="flex justify-center w-full ">{/*grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3*/}
            <div className="w-full md:w-2/3 lg:w-2/3">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-[#e3e0f2] hover:bg-slate-200 border-[#21201c]">
                <div className="flex flex-col md:flex-row items-stretch">
                <CardHeader className="md:w-2/5 w-full text-center flex flex-col justify-center ">
                  <div className="flex justify-center mb-4">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover border-2 border-[#100f0d]"
                    />
                  </div>
                  <CardTitle className="text-xl text-black">{member.name}</CardTitle>
                  <p className="text-slate-950 font-medium">{member.role}</p>
                  <p className="text-gray-700">{member.experience}</p>
                </CardHeader>
                <CardContent className="md:w-3/5 w-full flex flex-col justify-center mr-10">
                  <p className="text-gray-700 mb-4 mt-10 text-justify">{member.about_him}</p>
                  <div className="flex flex-wrap gap-4 mt-4">
                    {member.certificates.map((cert, idx) => (
                      <a key={idx} href={cert.image} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                      <img src={cert.image} alt={cert.title} className="w-16 h-16 object-cover rounded shadow border"/>
                      <span className="text-xs mt-1 text-blue-700 underline">{cert.title}</span>
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

      {/* Stats Section [#b6b09f] */}
      <section className="py-20 bg-[#EBEDDF] text-blck">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Track Record</h2>
            <p className="text-xl text-zinc-800">Numbers that speak for our commitment</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-zinc-800
              ">5000+</div>
              <div className="text-zinc-800">Students Guided</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-zinc-800">98%</div>
              <div className="text-zinc-800">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-zinc-800">50+</div>
              <div className="text-zinc-800">Partner Universities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-zinc-800">15+</div>
              <div className="text-zinc-800">Countries Covered</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
