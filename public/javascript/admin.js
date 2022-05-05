//agregar a base de datos pedidos
console.log(`carlos`)
document.getElementById(`agregar`).addEventListener(`submit`, ()=>{
    let nombre = document.getElementById(`nombre`).value,
        correo = document.getElementById(`correo`).value,
        apellido_p = document.getElementById(`apellido_p`).value,
        apellido_m = document.getElementById(`apellido_m`).value,
        cel = document.getElementById(`celular`).value,
        dir = document.getElementById(`direccion`).value,
        det = document.getElementById(`detalle`).value
        
    db.collection("pedidos").add({
        Nombre:nombre,
        Apellido_P:apellido_p,
        Apellido_M:apellido_m,
        Celular:cel,
        DIreccion:dir,
        Detalle:det,
        correo:correo
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
})
// agregar a base de datos users  
       
// })
// function borrar (id){
//     console.log(id)
//     document.getElementById("")
//     db.collection("transfer").doc(id).delete().then(function() {
//         console.log("Document successfully deleted!");
//         // document.getElementById("mostrar").innerHTML=""
//         // show()
//     }).catch(function(error) {
//         console.error("Error removing document: ", error);
//     });
// } 





// function modificar(id,clave,origen,destino,tipo,monto,ref){
//     //var identificador = id
//     console.log(clave,origen,destino,tipo,monto,ref)
//     let form = document.getElementById("update")
//     form.innerHTML=
//     `
//     <h3 class="subtitle">INTRODUSCA LOS DATOS QUE QUIERA MODIFICAR</h3>
//     <label for="">clave
//         <input type="number" name="" id="c" value=${clave}>
//       </label>
//       <br>
//       <label for="">numero de cuenta origen
//         <input type="number" name="" id="o" value=${origen}>
//       </label>
//       <br>
//       <label for="">numero de cuenta destino
//         <input type="number" name="" id="d" value=${destino}>
//       </label>
//       <br>
//       <label for="">moneda
//         <input type="text" name="" id="t" value=${tipo}>
//       </label>
//       <br>
//       <label for="">monto
//         <input type="number" name="" id="m" value=${monto} step="any">
//       </label>
//       <br>
//       <label for="">referencia
//         <input type="texto" name="" id="r" value=${ref}>
//       </label>
//       <br>
//     <input id="boton" type="button" value="Actualizar datos" >`
//     document.getElementById("boton").addEventListener("click",function(){
//         var washingtonRef = db.collection("transfer").doc(id);
//         return washingtonRef.update({
//             userKey:document.getElementById(`c`).value,
//             sourceAccountNumber:document.getElementById(`o`).value,
//             destinationAccountNumber:document.getElementById(`d`).value,
//             currency:document.getElementById(`t`).value,
//             ammount:document.getElementById(`m`).value,
//             reference:document.getElementById(`r`).value
//         })
//         .then(function() {
//             console.log("Document successfully updated!");
//             // document.getElementById("mostrar").innerHTML=""
//             // show()
            
//         })
//         .catch(function(error) {
//             console.error("Error updating document: ", error);
//         });
    
//     })