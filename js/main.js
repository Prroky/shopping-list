/**console.log('It Works')

$(document) .ready(function() {
	$('.submit') .click(function (event){
		event.preventDefault()
		console.log('clicked button')

		var jmeno = $('.name').val()
		var email = $('.email').val()
		var zprava = $('.message').val()
		var statusElm = $('.status')
		statusElm.empty()

		if(email.length > 5 && email.includes('@') && email.includes('.')){
			statusElm.append('<div>email is valid</div>')
		} else{
			statusElm.append('<div>email is not valid</div>')
		}


		if(jmeno.length > 2) {
			statusElm.append('<div> jmeno is valid</div>')
		} else{
			statusElm.append('<div>Chybí jméno</div>')
		}

		if(message.lenght > 1) {
			statusElm.append('<div>Zpráva je v pořádku.</div>')
		} else {
			statusElm.append('<div>Vyplňte prosím zprávu</div>')
		}

	})

})