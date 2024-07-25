import React from 'react'
import ReactDom from "react-dom/client"
import App from "./App";
import RoomProvider from "./components/context/RoomContext";
import "./index.css";

const root = ReactDom.createRoot(document.querySelector('#root'));

root.render(
	<RoomProvider>
		<React.StrictMode>
			<App/>
		</React.StrictMode>
	</RoomProvider>
);
