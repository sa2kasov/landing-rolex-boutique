import { copyrightSign } from '../assets/icons'
import { footerLogo } from '../assets/images'
import { socialMedia, footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex flex-wrap gap-20 items-start justify-between max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a className="self-center" href="/">
            <img src={footerLogo} alt="Footer Logo" height="46" width="150" />
          </a>
          <p className="font-montserrat leading-7 mt-6 text-base text-white-400 sm:max-w-sm">Don't miss this opportunity to elevate your style and embrace the enduring legacy of Rolex, where every moment is an emblem of excellence.</p>
          <div className="gap-5 flex items-center mt-8">
            {socialMedia.map((social, i) => (
              <a className="bg-white flex items-center justify-center h-12 w-12 rounded-full" key={i} href="#">
                <img src={social.src} alt={social.alt} height="24" width="24" />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-wrap gap-20 justify-between lg:gap-10">
          {footerLinks.map((footerLink) => (
            <div key={footerLink.title}>
              <h4 className="font-medium font-montserrat leading-normal mb-6 text-2xl text-white">{footerLink.title}</h4>
              <ul>
                {footerLink.links.map(link => (
                  <li className="font-montserrat leading-normal mt-3 text-base text-white-400 hover:text-slate-gray" key={link.name}><a href={link.link}>{link.name}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-24 text-base text-white-400 max-sm:flex-col max-sm:items-center">
        <a className="cursor-pointer gap-2 flex flex-1 font-montserrat items-center justify-start hover:text-slate-gray" href="#">
          <img className="m-0 rounded-full" src={copyrightSign} alt="Copyright" height="20" width="20" />
          <span>Copyright. All rights reserved.</span>
        </a>
        <a className="font-montserrat cursor-pointer hover:text-slate-gray" href="#">Terms & Conditions</a>
      </div>
    </footer>
  )
}

export default Footer