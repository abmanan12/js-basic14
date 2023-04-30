const showOutput = (output) => {
    document.getElementById("output").innerHTML = output
}


// const addStorage = () => {
// function addStorage() {

//     var newName = prompt("What is your name?")
//     // for single value only
//     // localStorage.setItem("name", newName)

//     var names = localStorage.getItem("data")

//     if (names === null) {
//         names = []
//     }
//     else {
//         names = JSON.parse(names)
//     }

//     names.push(newName)

//     localStorage.setItem('data', JSON.stringify(names))

//     // document.getElementById("output").innerHTML = newName + " has been stored in storage"
//     showOutput(newName + " has been stored in storage")

// }


// function printStorage() {

// var names = localStorage.getItem("data")

// if (names === null) {
//     alert("There is nothing to print")
//     return
// }

// // to covert string into array
// names = JSON.parse(names)

// document.getElementById("output").innerHTML = names

// }


// function deleteStorage() {

//     localStorage.removeItem("data")

//     document.getElementById("output").innerHTML = "All Names has been deleted from storage"

// }

// ...............................................................................................................

function showNotification(msg, type) {

    let bgColor;

    switch (type) {
        case "success":
            bgColor = "linear-gradient(to right, #1D976C, #93F989)"
            break
        case "error":
            bgColor = "linear-gradient(to right, #00b09b, #96c93d)"
            break
        default:
            bgColor = "#000"
            break

    }

    Toastify({
        text: msg,
        duration: 3000,
        // newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: bgColor,
        },
    }).showToast();
}


const toastifySuccess = () => {

    Toastify({
        text: "There is nothing",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
    }).showToast();

}

// ...............................................................................................................

function addStorage() {

    var newName = prompt('Enter your Name');

    var names = localStorage.getItem('data')

    if (names == null) {
        names = []
    }
    else {
        names = JSON.parse(names)
    }

    names.push(newName)

    names = JSON.stringify(names)

    localStorage.setItem('data', names)

    showOutput(newName + ' has been stored in storage.')

}

function printStorage() {

    var myName = localStorage.getItem('data');

    if(myName === null){
        alert('Nothing Add there')
        return
    }

    myName = JSON.parse(myName)

    document.getElementById('output').innerHTML = myName

}

function deleteStorage() {

    localStorage.removeItem('data')

    document.getElementById('output').innerHTML = 'All Data has been Removed.'

}
