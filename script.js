

function cardPreview(event) {
  const studentCardDetails = document.getElementById('card-preview').lastElementChild.children;
  const sectionId = event.target.id;

  
  switch(sectionId) {
    case 'first-name':
      studentCardDetails[0].innerHTML = `Name: ${event.target.value}`;
      break;
    case 'last-name': 
      studentCardDetails[0].innerHTML = `Name: ${document.getElementById('first-name').value} ${event.target.value}`;
      break;
    case 'male': 
      studentCardDetails[1].innerHTML = `Sex: Male`;
      break;
    case 'female': 
      studentCardDetails[1].innerHTML = `Sex: Female`;
      break;
    case 'birthdate':
      studentCardDetails[2].innerHTML = `D.O.B ${event.target.value}`
      break;
  }
}