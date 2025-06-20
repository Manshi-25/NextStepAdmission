
import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#020101] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-[#b6b09f]" />
              <span className="text-2xl font-bold">NextStepAdmission</span>
            </div>
            <p className="text-[#f2f2f2] mb-4 max-w-md">
              Your trusted partner in educational excellence. We guide students towards their dream careers 
              with personalized counseling and expert admission assistance.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61577012327030" className="text-[#b6b09f] hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/admissionnextstep" className="text-[#b6b09f] hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#b6b09f] hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              
              
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#b6b09f]">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-[#f2f2f2] hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-[#f2f2f2] hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/study-abroad" className="text-[#f2f2f2] hover:text-white transition-colors">Study Abroad</Link></li>
              <li><Link to="/blog" className="text-[#f2f2f2] hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-[#f2f2f2] hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#b6b09f]">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#b6b09f]" />
                <span className="text-[#f2f2f2]">+91 80621 79905 ,<br/> +91 80908 90894</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#b6b09f]" />
                <span className="text-[#f2f2f2]">Enquiry@nextstepadmission.in</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-12 w-12 text-[#b6b09f] mt-0.5" />
                <span className="text-[#f2f2f2]">Co-Workers 5/588, Near Dayal Paradise Hotel , Vikas Khand , Gomti Nagar , Lucknow - 226010, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#b6b09f] mt-8 pt-8 text-center">
          <p className="text-[#f2f2f2]">&copy; 2024 NextStepAdmission. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
