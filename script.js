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

const contact_link = document.querySelector('.nav-home')
contact_link.addEventListener('click', cleanUpIndex)
contact_link.addEventListener('click', renderIndex)


//function #1 cleanUpIndex
function cleanUpIndex(e) {
	const cards = document.querySelectorAll('.main > *')
	e.preventDefault()
	for (const card of cards)
		card.remove()
}


//function #2 createSingleIndex
function createSingleIndex(name) {

	return `<a href="page3.html"><div class="contact"><p>${name}</p></div></a>`
}

// function #3 renderIndex 
function renderIndex() {
	const main = document.querySelector(".main")
	for (let i = 0; i < contactList.length; i++) {
		let card = contactList[i].name
		main.insertAdjacentHTML('afterbegin', createSingleIndex(card))
	}

}

//-----------------------------------------------------------------------------------------------
//View Page

//function #4 cleanUpView
function cleanUpView(){
	const cards = document.querySelectorAll('.contactinfo > div')
	for (const card of cards)
		card.remove()
}

//function #5 renderView
function renderView(contact) {
	const contactInfo = document.querySelector(".contactinfo")

	const contact_info_div = `<div class="contactname">
		${contact.name}
		<img
			src="./img/profile.jpg"
			class="profilepic"
			alt="Profile picture"
		/>
		</div>
		<div class="contactemail">email: ${contact.email}</div>
		<div class="contactphone">cell: ${contact.phone}</div>
		<div class="contactaddress">
			address: ${contact.address}
		</div>
		<div class="buttons">
			<button class="button edit" value="Edit">Edit</button>
			<button class="button close" value="Close">Close</button>
		</div>`	

	contactInfo.insertAdjacentHTML("beforeend", contact_info_div)

}

//--------------------------------------------------------------------------------------------------


const createNewContact = document.getElementById('newcontact')
createNewContact.addEventListener('click', (e) => {
	cleanUpCreate()
	e.preventDefault()
})

createNewContact.addEventListener('click',(e) => {
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
}

//-----------------------------------------------------------------------------------------------