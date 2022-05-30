import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import FieldsContext from './context/FieldsContext'
import './css/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<FieldsContext>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</FieldsContext>
)
