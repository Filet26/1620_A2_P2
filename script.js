const contactList = [  
	{ 
		name: "Thor Odinson", 
		phone: "Send A pigeon", 
		address: "926 Thor Street, Asgard",    
		email: "Send A pigeon Also",  
	},   
	{    
		name: "Tony Stark",    
		phone: "1-800-Im-dead-lol",    
		address: "Stevens cemetary",    
		email: "Tonystark@hotmail.com",  
	},
	{    
		name: "Nemo",    
		phone: "Im a fish, dont have one",    
		address: "Saltwater Ave.",    
		email: "Chungus_Corp@gmail.com",  
	},
	{    
		name: "Peter Parker",    
		phone: "604-434-3420",    
		address: "Somewhere Street.",    
		email: "peter@management.com",  
	}
	
]

//index page ---------------------------------------------------------------------------------

// window.addEventListener('load', ()=> {
// 	cleanUpIndex()
// 	renderIndex()
// 	e.preventDefault()
// })
let contact_link = document.querySelector('.nav-home')
// contact_link.addEventListener('click', cleanUpIndex)
// contact_link.addEventListener('click', renderIndex)
contact_link.addEventListener('click', (e) => {
	cleanUpIndex()
	renderIndex()
	e.preventDefault()
})



//function #1 cleanUpIndex
function cleanUpIndex() {
	const cards = document.querySelectorAll('.main > *')
	for (const card of cards)
		card.remove()
}


//function #2 createSingleIndex
function createSingleIndex(contactInformation) {	
	let name = contactInformation.name
	const index = document.createElement('div')
	index.classList.add('contact')
	const content = document.createTextNode(name)
	index.appendChild(content)
	index.addEventListener('click', () => {
		for (let i = 0; i < 4;i++) {
			if (contactList[i].name == name) {
				cleanUpIndex()
				renderView(contactList[i])
			}
			
		}
		})

	
	const main = document.querySelector(".main")
	main.appendChild(index)


}

// function #3 renderIndex 
function renderIndex() {
	const main = document.querySelector(".main")
	for (let i = 0; i < contactList.length; i++) {
		let card = contactList[i]
		createSingleIndex(card)
		// main.insertAdjacentHTML('afterbegin', createSingleIndex(card))
	}
}

//-----------------------------------------------------------------------------------------------
//View Page


//function #5 renderView
function renderView(info) {
	const contactInfo = document.querySelector(".main")
	const contact_info_div = `<div class="contactinfo"><div class="contactname">
		${info.name}
		<img
			src="./img/profile.jpg"
			class="profilepic"
			alt="Profile picture"
		/>
		</div>
		<div class="contactemail">Email: ${info.email}</div>
		<div class="contactphone">Cell: ${info.phone}</div>
		<div class="contactaddress">
			Address: ${info.address}
		</div>
		<div class="buttons">
			<button class="button edit" value="Edit">Edit</button>
			<button class="button close" value="Close">Close</button>
		</div></div>`	

	contactInfo.insertAdjacentHTML("afterbegin", contact_info_div)

	const close_buttons = document.querySelector('.close')
	close_buttons.addEventListener('click', () => {
		cleanUpIndex()
		renderIndex()
	})

	const edit_buttons = document.querySelector('.edit')
	edit_buttons.addEventListener('click', () => {
		console.log('NOTHING :)')
	})

}

//--------------------------------------------------------------------------------------------------


const createNewContact = document.getElementById('newcontact')
createNewContact.addEventListener('click', (e) => {
	cleanUpCreate()
	renderCreate()
	e.preventDefault()
})



//function #6 cleanUpCreate
function cleanUpCreate() {
	const cards = document.querySelectorAll('.main > *')
	for (const card of cards)
		card.remove()
}





//function #7 renderCreate
function renderCreate(){
	const main = document.querySelector('.main')

	const contact_form = `<div class="contactedit">
	<div class="contactimg">
	  <img
		src="./img/profile.jpg"
		class="profilepic"
		alt="Profile picture"
	  />
	</div>
	<div class="form">
	  <form>
		<div class="inputcontainer">
		  <input
			type="text"
			id="contactname"
			name="contactname"
			placeholder="Contact Name"
		  />
		  <button
			class="extrafield"
			id="extranamefield"
			name="extranamefield"
		  >
			+
		  </button>
		</div>

		<div class="inputcontainer">
		  <input
			type="tel"
			id="contactphone"
			name="contactphone"
			placeholder="Contact Phone"
		  />
		  <button
			class="extrafield"
			id="extraphonefield"
			name="extraphonefield"
		  >
			+
		  </button>
		</div>

		<div class="inputcontainer">
		  <input
			type="text"
			id="contactaddress"
			name="contactaddress"
			placeholder="Contact Address"
		  />
		  <button
			class="extrafield"
			id="extraaddressfield"
			name="extraaddressfield"
		  >
			+
		  </button>
		</div>

		<div class="inputcontainer">
		  <input
			type="email"
			id="contactemail"
			name="contactemail"
			placeholder="Contact Email"
		  />
		  <button
			class="extrafield"
			id="extraemailfield"
			name="extraemailfield"
		  >
			+
		  </button>
		</div>

		<div class="buttons">
		  <button
			type="submit"
			class="button save"
			id="savecontact"
			name="savecontact"
		  >
			Save Contact
		  </button>
		  <button
			type="reset"
			class="button cancel"
			id="cancel"
			name="cancel"
		  >
			Cancel
		  </button>
		</div>
	  </form>
	</div>
  </div>`
  main.insertAdjacentHTML('afterbegin', contact_form)

  const cancel_button = document.querySelector('.cancel')
  cancel_button.addEventListener('click', () => {
	cleanUpIndex()
	renderIndex()
  })
}

//-----------------------------------------------------------------------------------------------