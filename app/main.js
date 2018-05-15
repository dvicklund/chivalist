import App from './App.html'

import { SERVER_HOST, SERVER_PORT } from '../.config/service.js'

const app = new App({
	target: document.body,
	data: {
		name: 'dingus',
		user: {
			loggedIn: false
		},
		getReports: new Promise((resolve, reject) => {
			axios.get(SERVER_HOST + ':' + SERVER_PORT + '/reports')
				.then(resolve)
				.catch(reject)
		})
	}
})

export default app
