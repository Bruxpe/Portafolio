import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";//loads tspartciles- slim
// import { loadFull } from "tsparticles";//loads tspartciles
import { useCallback,useMemo } from "react";

const ParticlesComponent= ()=>{
    const options = useMemo(()=>{
        return {};
    },[])

    const particlesInit = useCallback((engine)=>{
        loadSlim(engine)
    },[]);

    return <Particles init={particlesInit}options={options}/>
};

export default ParticlesComponent;