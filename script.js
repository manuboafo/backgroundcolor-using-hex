const body = document.getElementsByTagName('body')[0]
const button =  document.getElementsByClassName('hexbutton')[0]
const colorCode = document.getElementsByClassName('hex')[0]



const code = ['a','b','c','d','e','1','2','3','4','5','6','7','8','9'];




const color = () =>{

    let number =[];

    for(let i=0; i <6; i++){
        random =  Math.floor(Math.random()*code.length)
        let codeNumber = code[random];
        number.push(codeNumber);
    }

    if(number.length == 6){
         let finalHex = number.join('');
         body.style.backgroundColor = `#${finalHex}`;
         colorCode.innerText = `#${finalHex}`;
    } 
    
};

    
    


button.addEventListener('click',color);

