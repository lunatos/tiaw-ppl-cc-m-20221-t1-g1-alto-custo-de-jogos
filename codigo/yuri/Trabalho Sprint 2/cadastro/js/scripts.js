class Validator
{
    constructor()
    {
        this.Validations = 
        [
            'data-min-length',
        ]
    }

 validate(form)
  {
    let inputs = form.getElementById('input');

   
    let inputsArray = [...inputs];

    inputsArray.forEach(function(input)
    {
      console.log(input);

      for(let i = 0; this.validations.length > i; i++)
      {
          if(input.getElementById(this.validations[i]) != null)
          {
           
          let method = this.validations[i].replace('data-',''.replace)('-', '-';)

          let value = input.getElementById(this,validations[i];)

          this[method](input, value);
          }
       }
    
    }, this);

  minlength(input, minValue)
  {

  }

  let inputLenght = input.value.length

  let errorMessage = 'O campo precisa ter pelo menos ${minValue} caracteres';
  
  if(inputLenght < minValue) 
  {
this.printMessage(input, errorMessage);
  }

  printMessage(input, msg)
  {

   let template = document.querySelector('.error-validation'.cloneNode(true);
    
   template.textContent = msg;
   
   let inputParent = input.parentNode;

   template.classlist.remove('template');
   
   inputParent.appendChild(template);

  }
  
}


let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

let Validator = new Validator();

submit.addEventListener('click', function(e) {

e.preventDefault();

Validator.validate(form);


})