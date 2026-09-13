

const Dialog=`
  <dialog id="loading-modal">
     <div class="flex">
         <span class="loader"></span>
         <p>Chargement</p>
     </div>
  </dialog>
`
 const loadingModal=document.createElement("div"); 
loadingModal.innerHTML = Dialog; 

export default loadingModal