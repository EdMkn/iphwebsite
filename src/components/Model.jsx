import { useGSAP } from "@gsap/react"
import ModelView from "./ModelView";
import { useState } from "react";
import { yellowImg } from "../utils";

const Model = () => {
    const [size, setSize] = useState('small');
    const [Model, setModel] = useState({
        title: 'iPhone 16 Pro in Artificial Titanium',
        color: ['#8F8A81', '#FFE7B9', '#6F6C64'],
        img: yellowImg,
    })

    // camera control for the model view
    const cameraControllSmall = useRef();
    const cameraControlLarge = useRef();

    useGSAP(()=>{
        gsap.to('#heading', {y:0, opacity:1})
    }, []);

  return (
    <section className="common-padding">
        <div className="screen-max-width">
            <h1 id="heading" className="section-heading">
                Take a closer look
            </h1>
            <div className="flex flex-col items-center mt-5">
                <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
                    <ModelView/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Model