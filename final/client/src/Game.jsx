import './Game.css'
import { Unity, useUnityContext } from "react-unity-webgl";
import { NavLink } from "react-router-dom";
import { useState } from "react";


function Game({ gameName }) {
    let loaderUrl = "";
    let dataUrl = "";
    let frameworkUrl = "";
    let codeUrl = "";
    let name = "";
    let image = "";
    let blurb = "";

    function setPaths(gameName) {
        switch (gameName) {
            case "braakeout":
                loaderUrl = "/games/braakeout/Build/breakout-final.loader.js";
                dataUrl = "/games/braakeout/Build/breakout-final.data";
                frameworkUrl = "/games/braakeout/Build/breakout-final.framework.js";
                codeUrl = "/games/braakeout/Build/breakout-final.wasm";
                name = "BraakeRout";
                image = "/assets/games/braakerout.png";
                blurb = "The revolutionary take on Breakout finally is playable on your Personal Computer! Experience the new 3D take from developers at Big Ball and weep.";
                break;
            case "castellum":
                loaderUrl = "/games/castellum/Build/final.loader.js";
                dataUrl = "/games/castellum/Build/final.data";
                frameworkUrl = "/games/castellum/Build/final.framework.js";
                codeUrl = "/games/castellum/Build/final.wasm";
                name = "Castellum Ignoramus";
                image = "/assets/games/castellumignoramus.png";
                blurb = "The 2 minute long fantasy RPG that shook the world upon release! More likely an earthquake to be honest.";
                break;
            case "dialogue-1":
                loaderUrl = "/games/dialogue-1/Build/dialogue-1.loader.js";
                dataUrl = "/games/dialogue-1/Build/dialogue-1.data";
                frameworkUrl = "/games/dialogue-1/Build/dialogue-1.framework.js";
                codeUrl = "/games/dialogue-1/Build/dialogue-1.wasm";
                name = "Jimmy's Lagoon";
                image = "/assets/games/jimmylagoon.png";
                blurb = "Something's gone awry at Jimmy's Lagoon. And by 'something', I mean someone, and by 'awry', I mean 'to the afterlife'.";
                break;
            case "dialogue-2":
                loaderUrl = "/games/dialogue-2/Build/dialogue-2.loader.js";
                dataUrl = "/games/dialogue-2/Build/dialogue-2.data";
                frameworkUrl = "/games/dialogue-2/Build/dialogue-2.framework.js";
                codeUrl = "/games/dialogue-2/Build/dialogue-2.wasm";
                name = "Atomic Inquiry";
                image = "/assets/games/atomicinquiry.png";
                blurb = "The end of the world is here. However, you aren't. Maybe there's something you could do from up there.";
                break;
            case "emergence":
                loaderUrl = "/games/emergence/Build/emergence.loader.js";
                dataUrl = "/games/emergence/Build/emergence.data";
                frameworkUrl = "/games/emergence/Build/emergence.framework.js";
                codeUrl = "/games/emergence/Build/emergence.wasm";
                name = "Emergent Game";
                image = "/assets/games/emergentgame.png";
                blurb = "We are all sinners and the lighthouse of god remains below the horizon.";
                break;
            case "flight":
                loaderUrl = "/games/flight/Build/flight.loader.js";
                dataUrl = "/games/flight/Build/flight.data";
                frameworkUrl = "/games/flight/Build/flight.framework.js";
                codeUrl = "/games/flight/Build/flight.wasm";
                name = "New Yaw City";
                image = "/assets/games/newyawcity.png";
                blurb = "The best plane game ever made! The best controls! Yes!";
                break;
            case "simulation":
                loaderUrl = "/games/simulation/Build/simulation-2.loader.js";
                dataUrl = "/games/simulation/Build/simulation-2.data";
                frameworkUrl = "/games/simulation/Build/simulation-2.framework.js";
                codeUrl = "/games/simulation/Build/simulation-2.wasm";
                name = "Yummy Tree Bark";
                image = "/assets/games/yummytreebark.png";
                blurb = "Chop down some trees. Put down a car that chops down some more trees. This was during a strike.";
                break;
            case "tafonk":
                loaderUrl = "/games/tafonk/Build/platformer.loader.js";
                dataUrl = "/games/tafonk/Build/platformer.data";
                frameworkUrl = "/games/tafonk/Build/platformer.framework.js";
                codeUrl = "/games/tafonk/Build/platformer.wasm";
                name = "Tafonk";
                image = "/assets/games/tafonk.png";
                blurb = "You must scale the cylinder, or the cylinder will scale you. Many wrongfully claim that the box art is dishonest. This is false. It looks just like this if you have glaucoma.";
                break;
            case "tryfalling":
                loaderUrl = "/games/tryfalling/Build/final.loader.js";
                dataUrl = "/games/tryfalling/Build/final.data";
                frameworkUrl = "/games/tryfalling/Build/final.framework.js";
                codeUrl = "/games/tryfalling/Build/final.wasm";
                name = "Try Falling Sometime";
                image = "/assets/games/tryfallingsometime.png";
                blurb = "The best platformer since the mobile game with the guy with the nose, the one that bounces up. That one.";
                break;
            case "units":
                loaderUrl = "/games/units/Build/units.loader.js";
                dataUrl = "/games/units/Build/units.data";
                frameworkUrl = "/games/units/Build/units.framework.js";
                codeUrl = "/games/units/Build/units.wasm";
                name = "Units Game";
                image = "/assets/games/units.png";
                blurb = "Baldur didn't open his gate. Had to find somewhere else.";
                break;
        }
    }

    setPaths(gameName);

    



    const { unityProvider } = useUnityContext({
        loaderUrl,
        dataUrl,
        frameworkUrl,
        codeUrl,
    });

    return (
        <div className="game-full-page">
            <div className="game-nav-buttons">
                <NavLink to="/" className="nav-link" style={{ color: 'white' }}>
                    Home
                </NavLink>
            </div>
            <div className="game-info">
                <img src={image} className="game-info-image" />

                <div className="game-info-text">
                    <div className="game-title">{name}</div>
                    <div className="game-blurb">{blurb}</div>
                </div>
            </div>

            <div className="game-window">
                <Unity unityProvider={unityProvider} className="unity-canvas" />
            </div>
        </div>
    );
}

export default Game;
