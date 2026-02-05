document.addEventListener('DOMContentLoaded', () => { 

    const meuBotao = document.getElementById('meuBotao');              
    const calculadoraSection = document.getElementById('calculadora'); 
    const calculateBtn = document.getElementById('calculate-btn');    
    const resultDiv = document.getElementById('result');               
    const monthlyPaymentEl = document.getElementById('monthly-payment'); 

    meuBotao.addEventListener('click', (event) => { 
        event.preventDefault(); 
        calculadoraSection.scrollIntoView({ behavior: 'smooth' }); 
    }); 

    calculateBtn.addEventListener('click', () => { 

        const carPrice = parseFloat(document.getElementById('car-price').value);      
        const downPayment = parseFloat(document.getElementById('down-payment').value) || 0; 
        const loanTerm = parseInt(document.getElementById('loan-term').value);       
        const annualInterestRate = parseFloat(document.getElementById('interest-rate').value); 

        if (isNaN(carPrice) || isNaN(loanTerm) || isNaN(annualInterestRate)) { 
            alert('Por favor, preencha todos os campos obrigatórios.'); 
            return; 
        } 

        const monthlyInterestRate = (annualInterestRate / 100) / 12; 
        const principalAmount = carPrice - downPayment; 

        const monthlyPayment = principalAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTerm) /
            (Math.pow(1 + monthlyInterestRate, loanTerm) - 1); 
        if (isNaN(monthlyPayment)) { 
            monthlyPaymentEl.textContent = 'Valores inválidos';
            resultDiv.style.display = 'block'; 
        } else { 
            monthlyPaymentEl.textContent = `R$ ${monthlyPayment.toFixed(2)}`;
            resultDiv.style.display = 'block';
        } 
    }); 
}); 

