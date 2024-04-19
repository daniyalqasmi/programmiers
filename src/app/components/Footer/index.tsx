'use client'
import FooterLogo from '../FooterLogo'
import FooterContainer from '../FooterContainer'
import FooterNavLinks from '../FooterNavLinks'
import FooterSocialLinks from '../FooterSocialLinks'
import FooterCopyright from '../FooterCopyright'
import { SlSocialLinkedin } from 'react-icons/sl'
import { MdWhatsapp, MdOutlineMailOutline } from 'react-icons/md'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const path = usePathname()
  return (
    <footer
      id="contact"
      className="bg-gradient-footer flex w-full items-center justify-center bg-primary pt-20"
    >
      <FooterContainer>
        <section className="flex w-full flex-wrap items-center justify-between md:items-start">
          <FooterLogo />
          <aside className="md:mt0 mt-10 flex flex-wrap items-start justify-start md:flex-nowrap md:justify-around">
            <FooterNavLinks
              title="Links"
              links={[
                {
                  name: 'Home',
                  href: '/',
                },
                {
                  name: 'About',
                  href: `${path === '/' ? '#about-us' : '/#about-us'}`,
                },
                {
                  name: 'Blog',
                  href: '/blog',
                },
                {
                  name: 'Projects',
                  href: `${path === '/' ? '#projects' : '/#projects'}`,
                },
              ]}
            />

            <FooterNavLinks
              title="Company"
              links={[
                {
                  name: 'Privacy',
                  href: '#',
                },
                {
                  name: 'terms and conditions of use',
                  href: '#',
                },
                {
                  name: 'Rights reserved',
                  href: '#',
                },
              ]}
            />
          </aside>
        </section>
        <FooterSocialLinks
          socialMedia={[
            {
              social_name: '+44 7938 436496',
              href: '#',
              icon: MdWhatsapp,
            },
            {
              social_name: 'contact@programmiers.com',
              href: '#',
              icon: MdOutlineMailOutline,
            },
            {
              social_name: 'linkedin.com/company/programmiers',
              href: 'https://pk.linkedin.com/company/programmiers',
              icon: SlSocialLinkedin,
            },
          ]}
        />
        <FooterCopyright />
      </FooterContainer>
    </footer>
  )
}

export default Footer
