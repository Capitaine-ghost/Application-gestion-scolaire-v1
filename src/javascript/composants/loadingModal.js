

// const Dialog=`
//   <dialog id="loading-modal">
//      <div class="flex modal">
//          <span class="loader"></span>
//          <p>Chargement</p>
//      </div>
//   </dialog>
// `
 const loadingModal=document.createElement("dialog"); 
loadingModal.setAttribute("id","loading-modal")
loadingModal.innerHTML=`  
        <div class="flex modal">
        <span class="loader"></span>
        <p>Chargement</p>
        </div>`

export default loadingModal