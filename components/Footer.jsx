import {Fade} from "@/lib/reveal";

export default function Footer(){
    return <div className="bg-gradient-to-t from-primary-400/50 to-transparent text-center p-4">
        <Fade delay={2000} triggerOnce cascade direction={"down"}>
            <div className="text-sm font-light">
                Badan Promosi Pariwisata Daerah Minahasa

            </div>
            <div className="text-xs font-light">
                @{new Date().getFullYear()}
            </div>

        </Fade>
    </div>;
}