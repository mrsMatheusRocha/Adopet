import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import {Contexts} from './contexts'
import router from './routes';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Contexts>
			<RouterProvider router={router} />
		</Contexts>
	</StrictMode>
);
