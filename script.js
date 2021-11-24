const contactList = [  
	{ 
		name: "Oliver Queen", 
		phone: "778-555-1234", 
		address: "101 Main St, Star City, USA",    
		email: "greenarrow@watchtower.com",  
	},   
	{    
		name: "Jessica Cruz",    
		phone: "123-555-5555",    
		address: "Portland Oregon",    
		email: "greenlantern@watchtower.com",  
	}
	
]

//index page

//function #1 cleanUpIndex
function cleanUpIndex() {
	const cards = document.querySelectorAll('.contact')


	for (const card of cards)
		card.remove()
}
//function #2 createSingleIndex
function createSingleIndex(person) {
	const name = person.name
	return `<a href="page3.html"><div class="contact"><p>${name}</p></div></a>`
}

//function #3 renderIndex 
function renderIndex(contactList) {
	const main = document.querySelector(".main")

	for (const contact of contactList) {
		const card = createSingleIndex(contact)	
		main.insertAdjacentHTML("beforeend", card)
	}
}


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

//function #6 cleanUpCreate
function cleanUpCreate() {
	const cards = document.querySelectorAll('.contactedit > div')
	for (const card of cards)
		card.remove()
}


//function #7 renderCreate
function renderCreate(){
	const contactedit = document.querySelector('.contactedit')

	const contact_form = `<div class="contactimg">
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
  </div>`
  contactedit.insertAdjacentHTML('beforeend', contact_form)
}