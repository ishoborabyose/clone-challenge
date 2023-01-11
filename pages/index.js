import Head from "next/head";
import Navbar from "../components/Navbar";
import Wrapper from "../components/wrappers/Wrapper";

import Header from "../components/Header";
import Student from "../components/Student";
import Begriff from "../components/Begriff";
import Digital from "../components/Digital";
import News from "../components/News";
import Information from "../components/Information";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>www.student.uni-stuttgart.de</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Wrapper>


          <Navbar />

          <Header />

         <Student />

         <Begriff />

         <Digital />

        <News />
        
        <Information />
         
         <Contact />

         <Footer />
        </Wrapper>
      </>
    </>
  );
}
