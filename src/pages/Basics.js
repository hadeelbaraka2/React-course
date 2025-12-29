import Header from "../Component/Header"
import Footer from "../Component/Footer"
import Content from "../Component/content";
import { Helmet } from 'react-helmet-async';

const Basics = () => {
    return (
        <div>
            <Helmet>
        <title>Basics page</title>
        <meta name="description" content="Basic Bage" />
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
            <Header/>
          <Content data="Basics"/>
            <Footer/>
        </div>
    );
}
export default Basics;
