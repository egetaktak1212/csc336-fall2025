import { Unity, useUnityContext } from "react-unity-webgl";

function Game({ gameName }) {
    let loaderUrl = "";
    let dataUrl = "";
    let frameworkUrl = "";
    let codeUrl = "";

    function setPaths(name) {
        switch (name) {
            case "braakeout":
                loaderUrl = "/games/braakeout/Build/breakout-final.loader.js";
                dataUrl = "/games/braakeout/Build/breakout-final.data";
                frameworkUrl = "/games/braakeout/Build/breakout-final.framework.js";
                codeUrl = "/games/braakeout/Build/breakout-final.wasm";
                break;
            case "castellum":
                loaderUrl = "/games/castellum/Build/final.loader.js";
                dataUrl = "/games/castellum/Build/final.data";
                frameworkUrl = "/games/castellum/Build/final.framework.js";
                codeUrl = "/games/castellum/Build/final.wasm";
                break;
            case "dialogue-1":
                loaderUrl = "/games/dialogue-1/Build/dialogue-1.loader.js";
                dataUrl = "/games/dialogue-1/Build/dialogue-1.data";
                frameworkUrl = "/games/dialogue-1/Build/dialogue-1.framework.js";
                codeUrl = "/games/dialogue-1/Build/dialogue-1.wasm";
                break;
            case "dialogue-2":
                loaderUrl = "/games/dialogue-2/Build/dialogue-2.loader.js";
                dataUrl = "/games/dialogue-2/Build/dialogue-2.data";
                frameworkUrl = "/games/dialogue-2/Build/dialogue-2.framework.js";
                codeUrl = "/games/dialogue-2/Build/dialogue-2.wasm";
                break;
            case "emergence":
                loaderUrl = "/games/emergence/Build/emergence.loader.js";
                dataUrl = "/games/emergence/Build/emergence.data";
                frameworkUrl = "/games/emergence/Build/emergence.framework.js";
                codeUrl = "/games/emergence/Build/emergence.wasm";
                break;
            case "flight":
                loaderUrl = "/games/flight/Build/flight.loader.js";
                dataUrl = "/games/flight/Build/flight.data";
                frameworkUrl = "/games/flight/Build/flight.framework.js";
                codeUrl = "/games/flight/Build/flight.wasm";
                break;
            case "simulation":
                loaderUrl = "/games/simulation/Build/simulation-2.loader.js";
                dataUrl = "/games/simulation/Build/simulation-2.data";
                frameworkUrl = "/games/simulation/Build/simulation-2.framework.js";
                codeUrl = "/games/simulation/Build/simulation-2.wasm";
                break;
            case "tafonk":
                loaderUrl = "/games/tafonk/Build/platformer.loader.js";
                dataUrl = "/games/tafonk/Build/platformer.data";
                frameworkUrl = "/games/tafonk/Build/platformer.framework.js";
                codeUrl = "/games/tafonk/Build/platformer.wasm";
                break;
            case "tryfalling":
                loaderUrl = "/games/tryfalling/Build/final.loader.js";
                dataUrl = "/games/tryfalling/Build/final.data";
                frameworkUrl = "/games/tryfalling/Build/final.framework.js";
                codeUrl = "/games/tryfalling/Build/final.wasm";
                break;
            case "units":
                loaderUrl = "/games/units/Build/units.loader.js";
                dataUrl = "/games/units/Build/units.data";
                frameworkUrl = "/games/units/Build/units.framework.js";
                codeUrl = "/games/units/Build/units.wasm";
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
        <div style={{ width: '100%', height: '100vh' }}>
            <Unity unityProvider={unityProvider} style={{ width: '100%', height: '100%' }} />
        </div>
    );
}

export default Game;
