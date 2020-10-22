function reverseString(){
    
    let str = document.getElementById('textid').value; 
    if(str === '')
      {
        alert('Ce champ est obligatoire'); 
      }
     else
       {
         let inverse = str.split('').reverse().join('');  
         document.getElementById('textid2').value= inverse;
       }
}
   