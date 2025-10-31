import Link from 'next/link';

const footerLinks = {
  website: [
    { title: 'Services', href: '/service' },
    { title: 'Pricing', href: '/pricing' },
    { title: 'About', href: '/about' },
  ],
  contact: [
    { title: 'Get a quote', href: '/quote' },
    { title: 'Contact form', href: '/contact-form' },
    { title: 'Email us', href: 'mailto:contact@luxuredetails.com' },
  ],
  socialMedia: [
    { title: 'Facebook', href: 'https://facebook.com' },
    { title: 'Instagram', href: 'https://instagram.com' },
    { title: 'Twitter', href: 'https://twitter.com' },
    { title: 'Youtube', href: 'https://youtube.com' },
  ],
};

const Footer = () => {

  return (
    <footer className='pl-10 md:pl-32 pr-8 md:pr-20'>
        <footer className="bg-black text-white mb-20 mt-30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-8 md:mb-12">
          
          <div className="w-full md:w-1/3 mb-10 md:mb-0 pr-0 md:pr-10">
            <h3 className="text-xl font-bold mb-4">LuxurDetails</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Experience the prestige of a professionally detailed car, radiating elegance and refinement at every turn.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16 lg:gap-24 w-full md:w-2/3">
            
            <div>
              <h4 className="text-white text-base font-semibold mb-4">Website</h4>
              <nav className="flex flex-col space-y-2">
                {footerLinks.website.map((link) => (
                  <Link key={link.title} href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                    {link.title}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="text-white text-base font-semibold mb-4">Contact</h4>
              <nav className="flex flex-col space-y-2">
                {footerLinks.contact.map((link) => (
                  <Link key={link.title} href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                    {link.title}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Social Media Links */}
            <div>
              <h4 className="text-white text-base font-semibold mb-4">Social Media</h4>
              <nav className="flex flex-col space-y-2">
                {footerLinks.socialMedia.map((link) => (
                  <Link key={link.title} href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                    {link.title}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6"></div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-6">
          <p className="text-sm text-gray-400 mb-4 sm:mb-0">
            Developed By <span className='text-white'>Tanzeel</span>
          </p>

          <nav className="flex flex-wrap space-x-4 sm:space-x-6 text-sm">
            <Link href="/cookie-policy" className="text-gray-400 hover:text-white transition-colors duration-200">
              Cookie policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors duration-200">
              Terms of service
            </Link>
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-200">
              Privacy policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
    </footer>
  );
};

export default Footer;

