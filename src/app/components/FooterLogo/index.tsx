import React from 'react'

const FooterLogo = () => {
  return (
    <section
      data-testid="footer-logo"
      className="flex h-28 w-36 flex-col items-start justify-between"
    >
      <h1 className="text-5xl font-bold text-[#f6c263]">Programmiers.</h1>
      <p className="flex flex-col text-xs text-secondary">
        Transforming Ideas into Realities
      </p>
    </section>
  )
}

export default FooterLogo
