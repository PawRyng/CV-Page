import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

export default function NotFoundPage({ lang }){
    return(
        <div className="not-found">
            <h1 className="glitch">
                <span aria-hidden="true">
                  404
                </span>
                404
                <span aria-hidden="true">
                  404
                </span>
            </h1>
            <Typewriter
                options={{
                  delay: 50,
                  loop: true,
                  autoStart: true
                }}
                onInit={(typewritter) => {
                  typewritter
                    .typeString("Not found :(")
                    .pauseFor(2000)
                    .deleteAll()
                    .pauseFor(500)
                    .start();
                }}
                className={"underGlithTapper"}
            />
            <Link to="/" className="not-found__back-to-homepage">{lang}🏠👈</Link>

        </div>
    )
}