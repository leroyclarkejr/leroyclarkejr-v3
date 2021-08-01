import TypeIt from "typeit";
import {useEffect} from "react"
import Image from "next/image"
import gsap from "gsap";


const HomeHero = ()=> {

    useEffect(()=> {
        new TypeIt("#typeit", {
            speed: 50,
            loop: true
          }).pause(1000).type( "Self-taught Front-end Engineer.").pause(1500).delete().type("Former Pro Gymnast.").pause(1500).delete().type("Creative Problem Solver.").pause(1500).go();


        //   const scrollBtn = document.getElementById("scroll-btn");

        //   const scrollBtnMove = gsap.timeline();
        //   scrollBtnMove.set(scrollBtn, {transition: "translatey(-24px)"}).to(scrollBtn, {
        //       transform: "translatey(0)",
        //       duration:.5, repeat:-1

        //   })
    },[])

    return (
        <section id="home-hero" className="w-full h-screen flex flex-col justify-start items-center pt-24 px-4">

            
                <div className="hero-image-container mt-2 md:mt-8 mb-8">
                <Image src="/images/leroyclarkejr.jpg" layout="fill"className="rounded-sm image"/>
                </div>

            

            <div className="content text-center w-full">
                <h1 className="mb-2">Leroy Clarke Jr.</h1>
                <p id="typeit" className="text-xl"></p>
            </div>
                <div id="scroll-btn" className="scroll">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                </div>
        </section>
    )
}
export default HomeHero