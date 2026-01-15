import { Link } from "react-router-dom";
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    // Primary color: Deep Blue #0A3D62
    <footer className="bg-[#0A3D62] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              {/* Accent color: Golden Yellow #F4C430 */}
              <GraduationCap className="h-8 w-8 text-[#F4C430]" />
              <span className="text-2xl font-bold">NextStepAdmission</span>
            </div>

            <p className="text-[#F8F9FA] mb-4 max-w-md">
              Your trusted partner in educational excellence. We guide students
              towards their dream careers with personalized counseling and
              expert admission assistance.
            </p>

            <div className="flex space-x-4">
              {/* Accent default + Secondary hover */}
              <a
                href="https://www.facebook.com/profile.php?id=61577012327030"
                className="text-[#F4C430] hover:text-[#1E90FF] transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/admissionnextstep"
                className="text-[#F4C430] hover:text-[#1E90FF] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-[#F4C430] hover:text-[#1E90FF] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            {/* Secondary color for section heading */}
            <h3 className="text-lg font-semibold mb-4 text-[#1E90FF]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                ["About Us", "/about"],
                ["Services", "/services"],
                ["Study Abroad", "/study-abroad"],
                ["Blog", "/blog"],
                ["Contact", "/contact"],
              ].map(([label, path]) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-[#F8F9FA] hover:text-[#1E90FF] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            {/* Secondary color for section heading */}
            <h3 className="text-lg font-semibold mb-4 text-[#1E90FF]">
              Contact Info
            </h3>

            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                {/* Accent icons */}
                <Phone className="h-4 w-4 text-[#F4C430]" />
                <span className="text-[#F8F9FA]">+91 99199 91649</span>
              </div>

              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#F4C430]" />
                <span className="text-[#F8F9FA]">
                  Enquiry@nextstepadmission.in
                </span>
              </div>

              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-[#F4C430] mt-0.5" />
                <span className="text-[#F8F9FA]">
                  Co-Workers 5/588, Near Dayal Paradise Hotel, Vikas Khand,
                  Gomti Nagar, Lucknow - 226010, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1E90FF]/40 mt-8 pt-8 text-center">
          <p className="text-[#F8F9FA]">
            &copy; 2025 NextStepAdmission. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
