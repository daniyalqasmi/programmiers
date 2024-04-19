import CardProjects from '../CardProject'
import emBreve from '@/assets/breve.png'
import escolaReal from '@/assets/escola-real.png'
import redeSocial from '@/assets/rede-social.png'
import CardProjectContainer from '../CardProjectContainer'
import clinicaVeterinaria from '@/assets/clinica-veterinaria.png'
import Title from '../Title'

const Projects = () => {
  return (
    <section
      id="projects"
      className="container overflow-hidden bg-primary py-10"
    >
      <Title text="PROJETOS" />

      <CardProjectContainer>
        <CardProjects
          src={clinicaVeterinaria}
          href="https://ecommerce-website-ten-omega.vercel.app/"
          description="Website"
          tittle="ValuBridge (E-Commerce)"
        />

        <CardProjects
          src={redeSocial}
          href="https://landing-six-self.vercel.app/"
          description="Website"
          tittle="Landing Page"
          side={true}
        />
      </CardProjectContainer>

      <CardProjectContainer>
        <CardProjects
          src={escolaReal}
          href="https://mdq-restaurant-5327.vercel.app/"
          description="Website"
          tittle="MDQ Restaurante"
        />

        <CardProjects
          src={emBreve}
          href="https://bariton-react.envytheme.com/"
          description="Website"
          tittle="Bariton"
          side={true}
        />
      </CardProjectContainer>
    </section>
  )
}

export default Projects
