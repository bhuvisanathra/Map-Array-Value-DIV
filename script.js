let data = [
    {
        name: 'Bhuvnesh',
        age: 18,
    },

    {
        name: 'Yashvi',
        age: 6,
    },

    {
        name: 'Rasik',
        age: 40,
    },

    {
        name: 'Vandana',
        age: 38,
    },
    {
        name: 'Bhuvnesh',
        age: 18,
    },

    {
        name: 'Yashvi',
        age: 6,
    },

    {
        name: 'Rasik',
        age: 40,
    },

    {
        name: 'Vandana',
        age: 38,
    },


]

//Declaration of Const for Block
const info = document.querySelector('#info');


//Mapping
let collection = data.map(function (data) {
    return '<div>' + data.name + ' is ' + data.age + ' Year Old' + '</div>';
})

//Joining
info.innerHTML = collection.join('\n');