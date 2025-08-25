// src/components/Footer.tsx
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="py-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            
            {/* Company Info */}
            <div className="space-y-6">
              <Link href="/" className="inline-block group">
                <div className="text-3xl font-bold tracking-wide bg-gradient-to-r from-pinki to-purple-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-pinki transition-all duration-300">
                  PinkCart
                </div>
              </Link>
              
              <p className="text-gray-300 leading-relaxed">
                Your trusted partner for quality products and exceptional shopping experiences since 2020.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200">
                  <svg className="w-5 h-5 text-pinki" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm">3252 Winding Way, Central Plaza, Willowbrook, CA 90215</span>
                </div>
                
                <Link href="mailto:hello@pinkcart.com" className="flex items-center gap-3 text-gray-300 hover:text-pinki transition-colors duration-200 group">
                  <svg className="w-5 h-5 text-pinki" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm group-hover:underline">hello@pinkcart.com</span>
                </Link>
                
                <Link href="tel:+1235412345" className="flex items-center gap-3 text-gray-300 hover:text-pinki transition-colors duration-200 group">
                  <svg className="w-5 h-5 text-pinki" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-sm group-hover:underline">+1 (235) 412-345</span>
                </Link>
              </div>

              {/* Social Media */}
              <div className="pt-4">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  {[
                    { name: 'Facebook', icon: '/facebook.png', href: '#' },
                    { name: 'Instagram', icon: '/instagram.png', href: '#' },
                    { name: 'Twitter', icon: '/x.png', href: '#' },
                    { name: 'YouTube', icon: '/youtube.png', href: '#' },
                    { name: 'Pinterest', icon: '/pinterest.png', href: '#' }
                  ].map((social) => (
                    <Link 
                      key={social.name}
                      href={social.href} 
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pinki transition-all duration-300 hover:scale-110 group"
                    >
                      <Image 
                        src={social.icon} 
                        alt={social.name} 
                        width={18} 
                        height={18} 
                        className="group-hover:scale-110 transition-transform duration-300" 
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Company</h3>
              <div className="space-y-4">
                {[
                  { name: 'About Us', href: '/about' },
                  { name: 'Careers', href: '/careers' },
                  { name: 'Press', href: '/press' },
                  { name: 'Blog', href: '/blog' },
                  { name: 'Affiliates', href: '/affiliates' },
                  { name: 'Contact Us', href: '/contact' }
                ].map((link) => (
                  <Link 
                    key={link.name}
                    href={link.href} 
                    className="block text-gray-300 hover:text-pinki transition-colors duration-200 hover:translate-x-1 transform"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Shop Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Shop</h3>
              <div className="space-y-4">
                {[
                  { name: 'New Arrivals', href: '/new-arrivals' },
                  { name: 'Best Sellers', href: '/bestsellers' },
                  { name: 'Sale Items', href: '/sale' },
                  { name: 'Gift Cards', href: '/gift-cards' },
                  { name: 'All Categories', href: '/categories' },
                  { name: 'Brands', href: '/brands' }
                ].map((link) => (
                  <Link 
                    key={link.name}
                    href={link.href} 
                    className="block text-gray-300 hover:text-pinki transition-colors duration-200 hover:translate-x-1 transform"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter & Support */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Stay Connected</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Subscribe to our newsletter for exclusive deals, new arrivals, and style inspiration.
              </p>
              
              {/* Newsletter Signup */}
              <div className="space-y-3">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-pinki focus:ring-1 focus:ring-pinki text-white placeholder-gray-400 text-sm"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-pinki to-purple-600 text-white rounded-r-lg hover:from-pinki/90 hover:to-purple-600/90 transition-all duration-300 font-semibold text-sm">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-gray-400">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>

              {/* Customer Support Links */}
              <div className="pt-4 space-y-4">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Support</h4>
                {[
                  { name: 'Help Center', href: '/help' },
                  { name: 'Track Order', href: '/track-order' },
                  { name: 'Returns', href: '/returns' },
                  { name: 'Size Guide', href: '/size-guide' }
                ].map((link) => (
                  <Link 
                    key={link.name}
                    href={link.href} 
                    className="block text-gray-300 hover:text-pinki transition-colors duration-200 text-sm hover:translate-x-1 transform"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods & Bottom */}
      <div className="border-t border-gray-700 bg-gray-900/50">
        <div className="py-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              
              {/* Payment Methods */}
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <span className="text-sm font-semibold text-gray-400">Secure Payments</span>
                <div className="flex gap-3">
                  {[
                    { name: 'Visa', src: '/visa.png' },
                    { name: 'Mastercard', src: '/mastercard.png' },
                    { name: 'PayPal', src: '/paypal.png' },
                    { name: 'Discover', src: '/discover.png' },
                    { name: 'Skrill', src: '/skrill.png' }
                  ].map((payment) => (
                    <div key={payment.name} className="w-12 h-8 bg-white rounded flex items-center justify-center p-1">
                      <Image 
                        src={payment.src} 
                        alt={payment.name}
                        width={40} 
                        height={25}
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Language & Currency */}
              <div className="flex flex-col sm:flex-row items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Language:</span>
                  <select className="bg-gray-800 border border-gray-700 text-white px-3 py-1 rounded focus:outline-none focus:border-pinki text-sm">
                    <option>English (US)</option>
                    <option>Español</option>
                    <option>Français</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Currency:</span>
                  <select className="bg-gray-800 border border-gray-700 text-white px-3 py-1 rounded focus:outline-none focus:border-pinki text-sm">
                    <option>USD ($)</option>
                    <option>EUR (€)</option>
                    <option>GBP (£)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-400">
                © {currentYear} PinkCart. All rights reserved.
              </div>
              <div className="flex gap-6 text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-pinki transition-colors duration-200">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-pinki transition-colors duration-200">Terms of Service</Link>
                <Link href="/cookies" className="hover:text-pinki transition-colors duration-200">Cookie Policy</Link>
                <Link href="/accessibility" className="hover:text-pinki transition-colors duration-200">Accessibility</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;