import { Mail, Github, Linkedin, Telegram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/Ahmedfayoumi", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ahmed-elfayomi/", label: "LinkedIn" },
    { icon: Telegram, href: "https://t.me/ahmed_alfayoumi", label: "Telegram" },
    { icon: Mail, href: "ahalfayoumi@gmail.com", label: "Email" }
  ];

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-2">Ahmed Elfayoumi</h3>
            <p className="text-background/80">
              Software Developer & Digital Solutions Expert
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-background/80 mb-4">
              Ready to start your next project?
            </p>
            <a 
              href="mailto:hello@yourname.dev"
              className="inline-flex items-center space-x-2 text-primary-glow hover:text-primary transition-colors"
            >
              <Mail size={18} />
              <span>ahalfayoumi@gmail.com</span>
            </a>
          </div>
          
          <div className="flex justify-center md:justify-end space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60">
            © {currentYear} Ahmed Elfayoumi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
