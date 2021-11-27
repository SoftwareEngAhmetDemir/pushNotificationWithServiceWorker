const container = document.querySelector(".container")
const coffees = [
  { name: "Perspiciatis", image: "https://media.istockphoto.com/photos/mosque-and-bosphorus-bridge-picture-id1283504873?b=1&k=20&m=1283504873&s=170667a&w=0&h=nPfB3oltsXGPYnWkmxCmP0dhCQ8dJ9DZpaMBc1aBQyw=" },
  { name: "Voluptatem", image: "source.png" },
  { name: "Explicabo", image: "source.png" },
 
]
const showCoffees = () => {
    let output = ""
    coffees.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Taste</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  console.log('evet')
  document.addEventListener("DOMContentLoaded", showCoffees)
  function requestPermission() {
    return new Promise(function(resolve, reject) {
        var notification = new Notification("Hi there!");
  
      if (permissionResult) {
        permissionResult.then(resolve, reject);
      }
    })
    .then(function(permissionResult) {
      if (permissionResult !== 'granted') {
        throw new Error('Permission not granted.');
      }
    });
  }

 
  function displayNotification() {
    if (Notification.permission == 'granted') {
      navigator.serviceWorker.getRegistration().then(function(reg) {
        var options = {
          body: 'Here is a notification body!',
          icon: 'images/example.png',
          vibrate: [100, 50, 100],
          data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
          },
          actions: [
            {action: 'explore', title: 'Explore this new world',
              icon: 'images/checkmark.png'},
            {action: 'close', title: 'Close notification',
              icon: 'images/xmark.png'},
          ]
        };
        reg.showNotification('Hello world!', options);
      });
    }
  }

  Notification.requestPermission().then(function(permission) {
    //if permission == 'denied' // logout

    console.log(permission);
    }
  )

  if ('Notification' in window && navigator.serviceWorker) {
    // Display the UI to let the user toggle notifications
    console.log('yes')
  }


  if (Notification.permission === "granted") {
    /* do our magic */
    console.log('granted')
  } else if (Notification.permission === "blocked") {
   /* the user has previously denied push. Can't reprompt. */
   console.log(Notification.permission)
  } else {
    /* show a prompt to the user */
    console.log(Notification.permission)
  }





  