// load All Phones data to show UI=======================================================================
const loadAllPhones = async (status) => {
  console.log('from load all phones');
  document.getElementById('loading_spinner').style.display = 'none'
  
  
  const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
  const data = await res.json();
 
 
 if(status){
  displayAllPhone(data.data)
 }
 else{
  displayAllPhone(data.data.slice(0, 6))
 }
}


// display all phones ===================================================================================
const displayAllPhone = async (phones) => {
  console.log(phones);
 
phones.forEach(phone => {
  const phoneContainer = document.getElementById('phone_container');
  // phoneContainer.innerHTML = " ";
  const div = document.createElement('div');
  
  div.innerHTML = `<div>
    <img src="${phone.image}" alt="" />
  </div>`
  phoneContainer.append(div)
  
 });
}


// ==================================================================================================
const handleShowAll = () => {
  loadAllPhones(true)
}



// showing phones by searching input ===================================================================
const handleSearch = () => {
  document.getElementById('loading_spinner').style.display = 'block'
 
  
  setTimeout((function () {
    loadAllPhones()
  }), 3000)

}

loadAllPhones('')