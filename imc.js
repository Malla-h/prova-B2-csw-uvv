function calculateBMI() {
    let num_users = 0;
  
    let largest_imc = 0; 
    let largest_user = 'null';
    let bmi_sum = 0;
    while (true) {
      let option = prompt("Digite o nome do usuário a ser inserido.\nOu digite [0] para SAIR.");
      if (option === '0') {
        console.log("Saindo do programa.");
        break;
      }           

        
      let height = prompt("Digite sua altura em metros:");
      let weight = prompt("Digite seu peso em kilogramas:");
  
      height = parseFloat(height);
      weight = parseFloat(weight);
  
      if (isNaN(height) || isNaN(weight)) {
        alert("Input inválido digite um número.");
        continue;
      }
  
      const bmi = weight / (height * height);
      if (bmi > largest_imc) {
        largest_imc = bmi;
        largest_user = option;
      }
      bmi_sum += bmi;


      if (bmi < 18.5) {
        alert(`O BMI é: Abaixo do peso normal`);
      } else if (bmi >= 18.5 && bmi < 25) {
        alert(`O BMI é: Peso normal`);
      } else if (bmi >= 25 && bmi < 30) {
        alert(`O BMI é: Excesso de Peso`);
      } else if (bmi >= 30 && bmi < 35) {
        alert(`O BMI é: Obesidade classe I`);
      } else if (bmi >= 35 && bmi < 40) {
        alert(`O BMI é: Obesidade classe II`);
      } else if (bmi >= 40) {
        alert(`O BMI é: Abaixo do peso normal`);
      }                  
      num_users++;
    }

    alert(`Quantidade de usuários: ${num_users}\nUsuário com maior IMC: ${largest_user}\nMédia de IMCs: ${(bmi_sum/num_users).toFixed(1)}`);


        

  }
  
  calculateBMI();
  