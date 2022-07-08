import './App.css'
import Register from "./pages/register.page";
import {Grommet} from "grommet";

const theme = {
    "global": {
        "colors": {
            "background": {
                "light": "#ffffff",
                "dark": "#000000"
            }
        },
        "font": {
            "family": "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,  Helvetica Neue, Arial, sans-serif,  Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"
        }
    },
    "button": {
        "extend": [
            null
        ]
    }
}

function App() {

    return (
        <Grommet full theme={theme}>
            <Register></Register>
        </Grommet>
    )
}

export default App
