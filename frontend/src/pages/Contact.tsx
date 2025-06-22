
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleWhatsAppClick = () => {
    const phoneNumber = "918062179905"; // Replace with actual WhatsApp number
    const message = "Hi! I'm interested in educational consultation services. Can you help me?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
    
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } else {
      throw new Error(result.message);
    }
  } catch (err) {
    console.error(err);
    toast({
      title: "Error!",
      description: "Message could not be sent. Please try again later.",
    });
  }
};


  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-[#b6b09f]" />,
      title: "Phone",
      details: ["+91 80621 79905", "+91 80908 90894"],
      description: "Call us for immediate assistance"
    },
    {
      icon: <Mail className="h-6 w-6 text-[#b6b09f]" />,
      title: "Email",
      details: ["Enquiry@nextstepadmission.in"],
      description: "Send us an email anytime"
    },
    {
      icon: <MapPin className="h-6 w-6 text-[#b6b09f]" />,
      title: "Address",
      details: ["Co-Workers 5/588, Near Dayal Paradise Hotel , Vikas Khand ,"," Gomti Nagar ", "Lucknow - 226010, India"],
      description: "Visit our office for consultation"
    },
    {
      icon: <Clock className="h-6 w-6 text-[#b6b09f]" />,
      title: "Office Hours",
      details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: 10:00 AM - 4:00 PM"],
      description: "We're here to help you"
    }
  ];

  return (
    <div className="min-h-screen bg-[#EBEDDF]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#EBEDDF] to-[#EBEDDF] text-black py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-zinc-800">
            Get in touch with our expert counselors and start your educational journey today.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-[#EBEDDF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Send us a Message</h2>
              <Card className="bg-white border-[#0f0e0b]">
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-black">
                      <div>
                        <Label htmlFor="name" className="text-black">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
                          className="mt-1 bg-white border-[#b6b09f] focus:border-black"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-black">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                          className="mt-1 bg-white border-[#b6b09f] focus:border-black"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone" className="text-black">Phone Number *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          required
                          className="mt-1 bg-white border-[#b6b09f] focus:border-black"
                        />
                      </div>
                      <div>
                        <Label htmlFor="service" className="text-black">Service Interested In</Label>
                        <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                          <SelectTrigger className="mt-1 bg-white border-[#b6b09f] focus:border-black">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent className="bg-white border-[#b6b09f]">
                            <SelectItem value="career-counseling">Career Counseling</SelectItem>
                            <SelectItem value="college-admissions">College Admissions</SelectItem>
                            <SelectItem value="study-abroad">Study Abroad</SelectItem>
                            <SelectItem value="visa-assistance">Visa Assistance</SelectItem>
                            <SelectItem value="scholarship-guidance">Scholarship Guidance</SelectItem>
                            <SelectItem value="test-preparation">Test Preparation</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-black">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        rows={5}
                        className="mt-1 bg-white border-[#b6b09f] focus:border-black"
                        placeholder="Tell us about your educational goals and how we can help..."
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full bg-black text-white hover:bg-[#b6b09f] hover:text-black">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <div className="mt-12">
                <h2 className="text-3xl font-bold text-black mb-6">Social Links</h2>
                <div className="space-y-6">
                  <Card className="bg-white border-[#11100d] ">
                    <CardContent className="pt-6">
                      <div className="flex items-center space-x-10">
                        <a href="https://www.facebook.com/profile.php?id=61577012327030" className="text-[#b6b09f] hover:text-sky-600 transition-colors ml-5">
                          <Facebook className="h-8 w-8" />Facebook</a>
                        <a href="https://www.instagram.com/admissionnextstep" className="text-[#b6b09f] hover:text-sky-600 transition-colors">
                          <Instagram className="h-8 w-8" />Instagram</a>
                        <a href="#" className="text-[#b6b09f] hover:text-sky-600 transition-colors">
                          <Linkedin className="h-8 w-8" />Linkedin</a>
                        
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-white border-[#0c0b05]">
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-black mb-1">{info.title}</h3>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-gray-700">{detail}</p>
                          ))}
                          <p className="text-sm text-gray-600 mt-1">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-[#EBEDDF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Find Our Office</h2>
            <p className="text-xl text-zinc-800">Visit us for personalized consultation</p>
          </div>
          
          <div className="bg-[#eae4d5] border border-[#b6b09f] rounded-lg h-96 flex items-center justify-center">
            {/*<div className="text-center">
              <MapPin className="h-12 w-12 text-[#b6b09f] mx-auto mb-4" />
              <p className="text-gray-700">Interactive map will be integrated here</p>
              <p className="text-sm text-gray-600 mt-2">Co-Workers 5/588, Near Dayal Paradise Hotel , Vikas Khand , Gomti Nagar , Lucknow - 226010 , India</p>
            </div>*/}
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.903524083217!2d80.99335707522184!3d26.843020676688766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be30cbafd6e5d%3A0xb29de585a8a90ddc!2sThe%20Co-Workers!5e0!3m2!1sen!2sin!4v1750521223669!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-20 bg-[#EBEDDF] text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="h-16 w-16 mx-auto mb-6 text-green-500" />
          <h2 className="text-3xl font-bold mb-6">Need Immediate Help?</h2>
          <p className="text-xl text-zinc-800 mb-8">
            Chat with our counselors on WhatsApp for quick assistance and guidance.
          </p>
          <Button onClick={handleWhatsAppClick} size="lg" className="bg-green-500 text-black hover:bg-[#e3e0f2] ">
            <MessageCircle className="mr-2 h-5 w-5" />
            Chat on WhatsApp
          </Button>
        </div>
      </section>
    </div>
  ); 
};

export default Contact;
