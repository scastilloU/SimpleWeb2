 // Generate a random number between 1 and 100
 const randomNumber = Math.floor(Math.random() * 100) + 1;
        
 // Initialize variables
 let attempts = 0;
 let maxAttempts = 10; // You can adjust this number
 
 // Function to check the player's guess
 function checkGuess() {
     const guess = parseInt(document.getElementById("guess").value);
     const message = document.getElementById("message");
     
     if (isNaN(guess) || guess < 1 || guess > 100) {
         message.textContent = "Ingrese un numero solamente del 1 al 100.";
         return;
     }
     
     attempts++;
     
     if (guess === randomNumber) {
         message.textContent = `Felicidades! Usted Adivino el numero ${randomNumber} en ${attempts} Intentos.`;
         document.getElementById("guess").disabled = true;
     } else if (guess < randomNumber) {
         message.textContent = "Intente con un numero Mayor a "+ guess + "\n";

         message.textContent+= attempts;
     } else {
         message.textContent = "Intente con un numero Menor a "+ guess;
         message.textContent+= "\n Numero de intentos"+attempts;
     }
     
     if (attempts >= maxAttempts) {
         message.textContent = `Perdio!, El numero correcto era ${randomNumber}.`;
         document.getElementById("guess").disabled = true;
     }
 }

 checkGuess()