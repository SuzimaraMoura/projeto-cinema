import {Container, Menu, Li} from './styles'
import { useState } from 'react'
import Logo from '../../assets/logo.png'
import {Link, useLocation} from 'react-router-dom'
function Header() {
    const[changeBackground, setChangeBackground] = useState(false)
    const { pathname } = useLocation()
    window.onscroll = () => {
         if (!changeBackground&&window.pageYOffset > 150){
            setChangeBackground(true)
      
        }
        if (changeBackground&&window.pageYOffset <= 150){
            setChangeBackground(false)
      
        }
     }
        return(
            <Container changeBackground ={changeBackground}>
            <img src={Logo} alt="Imagem do Logo" />
           <Menu>
                <Li isActive={pathname==='/'}>
                    <Link to="/">Home</Link>
                </Li>

                <Li isActive={pathname.includes('filmes')}>
                    <Link to="/filmes">Filmes</Link>
                </Li>

                <Li isActive={pathname.includes('series')}>
                    <Link to="/series">Series</Link>
                   
                </Li>
           </Menu>
           
        </Container>
        )
    
}
export default Header