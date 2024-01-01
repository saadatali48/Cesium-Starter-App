import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { Ion } from "cesium"
import environmentVariables from "./constants/AppConstants"

const root = ReactDOM.createRoot(document.getElementById("root"))
Ion.defaultAccessToken = environmentVariables.CESIUM_TOKEN
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
