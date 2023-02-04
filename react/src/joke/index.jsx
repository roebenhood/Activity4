import { useState } from 'react';
import {generateJoke} from '../Utils/joke';
function JokeGenerator() {

    const [jokes, setJokes] = useState([]);

    return (
        <>
            {/* JOKE HERO STARTS HERE */}
            <div className="container">
            <div className="px-4 py-5 my-5 text-center">
                {/* <iconify-icon
                style="font-size: 8em"
                icon="tabler:brand-funimation"
                ></iconify-icon> */}
                <h1 className="display-5 fw-bold">Punchlines that Pack a Punch</h1>
                <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">
                    Get ready to laugh with our easy to use joke generator. Spreading
                    joy, one joke at a time. Never run out of material with our endless
                    supply of puns and one-liners.
                </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button
                    type="button"
                    className="btn btn-primary btn-lg px-4 gap-3"
                    fdprocessedid="5q21vk"
                    onClick={generateJoke}
                    >
                    Generate Joke
                    </button>
                </div>
                </div>
            </div>
            </div>
            {/* JOKE HERO ENDS HERE */}
            {/* CARD JOKES STARTS HERE */}
            <div
            id="itemList"
            className="container d-flex align-items-center justify-content-center flex-wrap"
            ></div>
            {/* CARD JOKES ENDS HERE */}
        </>
    );
}

export default JokeGenerator;