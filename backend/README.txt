Inicializar:
    -cd backend
    -npm install
    -cd functions
    -npm install
    -npx firebase-tools login
    -npx firebase-tools serve (ou deploy)

fetch('http://localhost:5000/ucl-dev-boost/us-central1/express/user',{
	method: 'POST',
  Headers: {
     'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		email: 'teste@gmail.com',
		password: '123'
	})
}).then( request => {
   console.log(request)
})