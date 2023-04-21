// required (*) symbol 
const inputElements = document.querySelectorAll("input[required], select[required]")
inputElements.forEach(input => {
  if (input.type !== 'radio') {
    input.parentElement.style.position = 'relative';
    input.nextElementSibling.className = 'required';
    }
});


//birthdate validation
const today = new Date();
const birthdate = document.getElementById('birthdate');
birthdate.max = today.toJSON().slice(0,10);

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
      studentCardDetails[1].innerHTML = 'Sex: Male';
      break;
    case 'female': 
      studentCardDetails[1].innerHTML = 'Sex: Female';
      break;
    case 'birthdate':
      studentCardDetails[2].innerHTML = `D.O.B ${event.target.value}`;
      break;
    case 'student': 
      studentCardDetails[3].innerHTML = 'Status: Student';
      break;
    case 'student': 
      studentCardDetails[3].innerHTML = 'Status: Staff';
      break;
    default : 
      setExpirationDate(sectionId, studentCardDetails);
      break;
  }
}

function setExpirationDate(sectionId, studentCardDetails) {
  const exp = new Date(); 
  if (sectionId === 'visit') {
    studentCardDetails[4].innerHTML = `Expiration date: ${exp.toJSON().slice(0, 10)}`;
  } else if (sectionId === 'six-months') {
    exp.setMonth(exp.getMonth() + 6);
    studentCardDetails[4].innerHTML = `Expiration date: ${exp.toJSON().slice(0, 10)}`;
  } else if (sectionId === 'twelve-months') {
    exp.setMonth(exp.getMonth() + 12);
    studentCardDetails[4].innerHTML = `Expiration date: ${exp.toJSON().slice(0, 10)}`;
  } else {
    studentCardDetails[4].innerHTML = 'Expiration date: Indefinite';
  }

}

