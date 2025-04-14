class Area{ //Létrehozzuk az area classt
   
    /**
     * @param {string} Area //Ez egy classname-t vár értékként
     */

     constructor(Area){ //a className-t átadjuk a constructor-nak
         let container = document.querySelector('.containeroop'); //,,Kiválasztjuk" a containeroop classt
         if(!container){ //Ha nincs ilyen akkor hozzuk létre
             container = document.createElement('div'); //Létrehozom a divet
             container.className = 'contaieroop'; //Adunk egy classname-t
             document.body.appendChild(container); //Hozzá appendelem a body-hoz
         }
         const div = document.createElement('div'); //Létrehozom a divet
         div.className = Area; //Adunk egy classname-t
         container.appendChild(div); //Hozzá appendelem a container-hez
     }
 
 
 }