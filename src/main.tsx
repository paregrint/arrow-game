import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { StyledEngineProvider } from '@mui/material/styles'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<StyledEngineProvider injectFirst>
				<App />
			</StyledEngineProvider>
		</Provider>
	</StrictMode>
)
