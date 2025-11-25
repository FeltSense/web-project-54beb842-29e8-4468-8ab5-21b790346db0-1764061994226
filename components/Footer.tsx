'use client'

import { Scale, Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const practiceAreas = [
    { name: 'Corporate Law', href: '#services' },
    { name: 'Litigation', href: '#services' },
    { name: 'Real Estate', href: '#services' },
    { name: 'Family Law', href: '#services' }
  ]

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#team' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ]

  const resources = [
    { name: 'Legal Resources', href: '#resources' },
    { name: 'Case Studies', href: '#cases' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' }
  ]

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' }
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Scale className="h-10 w-10 text-amber-500" strokeWidth={1.5} />
                <div className="absolute -inset-1 bg-amber-500/20 blur-xl rounded-full -z-10"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Prestige Legal</h3>
                <p className="text-sm text-amber-500 font-medium">Partners</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-sm">
              Excellence in legal representation. Trusted advisors committed to protecting your interests with integrity, expertise, and unwavering dedication.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  250 Park Avenue, Suite 1200<br />New York, NY 10177
                </p>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <a href="tel:+12125551234" className="text-sm text-gray-400 hover:text-amber-500 transition-colors">
                  (212) 555-1234
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <a href="mailto:info@prestigelegal.com" className="text-sm text-gray-400 hover:text-amber-500 transition-colors">
                  info@prestigelegal.com
                </a>
              </div>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg relative inline-block">
              Practice Areas
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-500 to-transparent"></div>
            </h4>
            <ul className="space-y-3">
              {practiceAreas.map((area) => (
                <li key={area.name}>
                  <a
                    href={area.href}
                    className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-amber-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {area.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg relative inline-block">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-500 to-transparent"></div>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-amber-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg relative inline-block">
              Resources
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-500 to-transparent"></div>
            </h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.href}
                    className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-amber-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 mb-8 border-t border-gray-800"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-gray-500">
            <p>© {currentYear} Prestige Legal Partners. All rights reserved.</p>
            <p className="mt-1">
              <a href="#privacy" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
              <span className="mx-2">•</span>
              <a href="#terms" className="hover:text-amber-500 transition-colors">Terms of Service</a>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500 mr-2">Follow Us:</span>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-500 hover:scale-110 transition-all duration-300 group"
              >
                <social.icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Bar Association Badge */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-600">
            Licensed to practice in New York, New Jersey, and Connecticut
          </p>
          <p className="text-xs text-gray-600 mt-1">
            Member of the American Bar Association • New York State Bar Association
          </p>
        </div>
      </div>

      {/* Accent Line */}
      <div className="h-1 bg-gradient-to-r from-blue-700 via-amber-500 to-blue-700"></div>
    </footer>
  )
}
