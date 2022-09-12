var form = document.getElementById('form')
form.addEventListener('submit', function (e) {
    e.preventDefault()
    let name = document.getElementById('myName').value
    let username = document.getElementById('username').value
    let email = document.getElementById('email').value
    
    const gio = Object.create({
      'latitude': document.getElementById('latitude').value,
      'longitude': document.getElementById('longitude').value
    })
    const address = Object.create({
      street : document.getElementById('street').value,
      suite : document.getElementById('suite').value,
      city : document.getElementById('city').value,
      zipcode : document.getElementById('zipcode').value,
      gio : document.getElementByVar('gio').value      
    }
    )
      
    const add = Object.create(address);
    const gi = Object.create(gio);

    
    let phone = document.getElementById('phone').value
    let website = document.getElementById('website').value
    
    const company = {
      'companyName': document.getElementById('comName').value,
      'catchPhrase': document.getElementById('catchPhrase').value,
      'bs': document.getElementById('bs').value
    }
    
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'PUT',
        body: JSON.stringify({
            id: 'id',
            name: 'myName',
            username: 'username',
            email: 'email',
            add: 'address',            
            phone: 'phone',
            website: 'website',
            company
            // companyName: 'comName',
            // catchPhrase: 'catchPhrase',
            // bs: 'bs',
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
})
