import App from './App.html'

const app = new App({
	target: document.body,
	data: {
		name: 'dingus',
		user: {
			loggedIn: false
		},
		getReports: new Promise(fulfill => {
			console.log('fulfilling...')

			fulfill([{title: 'you got it', body: 'got it so good', username: 'zquil56'}])
		}, reject => {
			reject(new Error('You failed'))
		})
	}
})

export default app
