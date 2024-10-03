document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const numberInput = document.getElementById('numberInput').value;
    const errorMessage = document.getElementById('errorMessage');
    const nameList = document.getElementById('nameList');
    
   
    nameList.innerHTML = '';
    errorMessage.textContent = '';

   
    const numberValue = Number(numberInput);
    if (numberInput === '' || isNaN(numberValue) || numberValue <= 0) {
        errorMessage.textContent = 'Por favor, digite um valor válido.';
        return;
    }


    for (let i = 0; i < numberValue; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = 'Thaís'; 
        nameList.appendChild(listItem);
    }
});
