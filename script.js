console.log("[SW] Service Worker Is registring now in /templates/index.tpl !");
//window.addEventListener('load',  ()=> {
try {
    const message =  navigator.serviceWorker.register('/service-worker.js')
    navigator.serviceWorker.register('/service-worker.js')
    console.log("[SW] Register of service worker is success!!",message)
 } catch (e){
    console.log("[SW] Fail to register service worker",e)
 }



console.log("[PUSH] At Push file")
alert("hello world! It is push manager (does not work now)");
// if ('PushManager' in window) {
//   console.log("Push manager in window!")
//   alert(("Push manager in window!"))
// }
// // VERSION 1 (Not Working) From Itproger  https://www.youtube.com/watch?v=Ux62Zp6GF2g
// // const notify = () => {
// //   console.log(Notification.permission)
// //   let notification = new Notification("title", {
// //     tag :"ache-mail",
// //     body:"Description",
// //     icon:"https://replit.com/@TiomnyiLis/PWA#sourceForServiceWorker/icons/test/icon-192x192.png"
// //   });
// //   console.log("after creating object",notification)
// // }            

// // <!-- 
// // function notify () {
// //   console.log(Notification.permission)
// //   let notification = new Notification("title", {
// //     tag :"ache-mail",
// //     body:"Description",
// //     icon:"https://replit.com/@TiomnyiLis/PWA#sourceForServiceWorker/icons/test/icon-192x192.png"
// //   });
// //   console.log("after creating object",notification)
// // }   


// // const main = () => {
// //   notify()
// //   console.log()
// //   console.log(Notification.permission)
// //   if(!("Notification" in window) ) {
// //     console.log("Notifications are not supported")
// //     alert("error no supported")
// //   }
// //   else if (Notification.permission === "granded") { // усли разрешил пользователь 
// //   console.log("We have permission from user!")
// //     notify()
// //   }
// //   else if (Notification.permission !== "denied") {
// //     console.log("in case 1.34")
// //     Notification.requestPermission  (function (permission) {
// //       console.log("in function")
// //       if(!('permission' in Notification)) {
// //         console.log("hello permission if ")
// //          Notification.permission = permission
// //       } if (permission === "granded") {
// //         console.log("notify function call")
// //         notify()
// //       }
// //     });
// //   }
// // } -->

// // END END Version 1

// // Begin Version 2 Mosila  - https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Re-engageable_Notifications_Push
// // <!-- 
// // const button = document.querySelector('button')
// // button.addEventListener('click', () => {
// //   Notification.requestPermission().then(result => {
// //     console.log("result of the Notification.requestPermission()",result)
// //     if (result === 'granted') {
// //       console.log("hello")
// //       randomNotification();
// //     }
// //   });
// // }) -->





// let notify = () => {
//   alert("[PUSH]I am going to notify you")
//   alert(Notification.permission)
//   console.log(Notification.permission)
//   // let notification = new Notification("Ulon Notification", {
//   //   tag :"ache-mail",
//   //   body:"I have new notificatiopn from my-ulon.com!",
//   //   icon:"sourceForServiceWorker/icons/iconsForPages/icon-512-512.png"
//   // });
//   const notification = new Notification("Hi!")
//   console.log(notification)
  
//   alert("after creating an new notification")
//   return notification
// }            

// const main = () => {
//   alert("[PUSH] We are in main function")
//   console.log("permissiion = ",Notification.permission)
//   if(!("Notification" in window) ) {
//     console.log("Notifications are not supported")
//     alert("error: notifications is not supported")
//   }
//   else if (Notification.permission === "granted") { // усли разрешил пользователь 
//   alert("you have let us to send you notifications! Thanks!")
//     console.log("We have permission from user!")
//     // setTimeout(notify,1000);
//     // var notification = new Notification("Hi there!");
//     notify();
//   }  else if (Notification.permission === "default" || "denied") {
//     alert("you should let us send you notofications")
//   }

//   // else if (Notification.permission !== "denied") {
//   //   Notification.requestPermission().then (function (permission) {
//   //     console.log("permission (last else if)",permission)
//   //     if(!('permission' in Notification)) {
//   //        Notification.permission = permission
//   //     } if (permission === "granted") {
//   //       notify()
//   //     }
//   //   });
//   // }
// } 



// console.log(document.querySelector('button'))
// document.querySelector('button').addEventListener('click', main)
//   //Notification.requestPermission().then(function(permission) { console.log('permiss', permission)});
  



// // 
// // window.addEventListener('load',  ()=> {
// //  try {
// //     const message =  navigator.serviceWorker.register('service-worker.js')
// //     navigator.serviceWorker.register('service-worker.js')
// //     console.log("register of service worker is success!!",message)
// //  } catch (e){
// //     console.log("fail to register service worker",e)
// //  }
  
// // }) 
