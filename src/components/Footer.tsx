import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import logo from "figma:asset/21e5cc908c01d45f6c73b1b3bdcb0955c22e9dac.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a1628] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            
            <p className="text-gray-400 mb-4">
              Building Kolkata's future with excellence,
              innovation, and integrity since 1998.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/17eJwGVGpM/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-transparent border border-white/20 rounded-full flex items-center justify-center hover:bg-[#d4af37] hover:border-[#d4af37] transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/easymakan/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-transparent border border-white/20 rounded-full flex items-center justify-center hover:bg-[#d4af37] hover:border-[#d4af37] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-[#d4af37]">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-[#d4af37] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-[#d4af37] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-[#d4af37] transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-[#d4af37] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-[#d4af37] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-[#d4af37]">
              Our Services
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>Property Development</li>
              <li>Construction Management</li>
              <li>Real Estate Consulting</li>
              <li>Urban Planning</li>
              <li>Investment Advisory</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-[#d4af37]">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-[#d4af37] mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-gray-400">
                  Unit 320, PS Abacus, NH-12, Diplomatic
                  Enclave, AA II, Newtown, Kolkata, West Bengal
                  700161
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-[#d4af37] mr-3 flex-shrink-0" />
                <a
                  href="tel:+918777654651"
                  className="text-gray-400 hover:text-[#d4af37]"
                >
                  +91 8777654651
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[#d4af37] mr-3 flex-shrink-0" />
                <a
                  href="mailto:easymakandev@gmail.com"
                  className="text-gray-400 hover:text-[#d4af37]"
                >
                  easymakandev@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              © {currentYear} Easymakan Development
              Corporation. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="/privacy-policy"
                className="text-gray-400 hover:text-[#d4af37] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-gray-400 hover:text-[#d4af37] transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}