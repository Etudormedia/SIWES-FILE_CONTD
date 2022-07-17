var inputel = document.querySelector('.password');
    generateBtn = document.querySelector('.getPass');
    copyBtn = document.querySelector('.copy');


    generateBtn.addEventListener("click",()=>{
        var chars = "0123456789abcdefghijklmopqrstuvwxyz,.ABCDEFGHIJKLMOPQRSTUVWXYZ"
        var passwordLength = 12;
        var password = "";
        for(i=0;i<passwordLength;i++){
            var randomNumber = Math.floor(Math.random() *chars.length);
            password += chars.substring(randomNumber, randomNumber +1)
        }
        inputel.value = password;
        console.log(password)
    })

    copyBtn.addEventListener('click', ()=>{
        inputel.select();
        document.execCommand('copy');
    })