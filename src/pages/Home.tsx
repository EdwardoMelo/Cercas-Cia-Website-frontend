import { Box } from '@mui/material'
import styles from '../App.styles';
import AboutUs from '../sections/AboutUs';
import Contact from '../sections/Contact';
import Products from '../sections/Products';


const sections = [
  {
    name: "Produtos",
    href: "#products",
    id: "products",
    component: <Products />,
  },
  {
    name: "Sobre",
    href: "#about",
    id: "about",
    component: <AboutUs />,
  },
  {
    name: "Contato",
    href: "#contact",
    id: "contact",
    component: <Contact />,
  },

];
const Home = () => {
  console.log('home')
  return (
    <>
      {sections.map((section) => (
        <Box key={section.name} id={section.id} sx={styles.section}>
          {section.component}
        </Box>
      ))}
    </>
  );
}

export default Home