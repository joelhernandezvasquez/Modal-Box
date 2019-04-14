function openModalContainer()
 {
    const modalContainer = document.querySelector(".modal-container");

    modalContainer.classList.add("open");
    
 }

 function closeModalContainer()
 {
    const modalContainer = document.querySelector(".modal-container");

     modalContainer.classList.remove("open");   
 }

 function closeWindow(e)
 {
   if(e.target.closest("div").classList.contains("modal-container"))
         {
            closeModalContainer();
         }
 }