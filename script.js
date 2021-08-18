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

const info = document.querySelector('#info');

let collection = data.map(function (data) {
    return '<div>' + data.name + ' is ' + data.age + ' Year Old' + '</div>';
})

info.innerHTML = collection.join('\n');