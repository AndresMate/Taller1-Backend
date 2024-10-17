const books = [
    {
        "title": "Cien Años de Soledad",
        "author": "Gabriel Garcia Marquez",
        "persons": [
            {
                "name": "Ursula",
                "age": "100"
            },
            {
                "name": "Soledad",
                "age": "32"
            }
        ]
    },
    {
        "title": "Juego de Tronos",
        "author": "George R.R. Martin",
        "persons": [
            {
                "name": "Eddard Stark",
                "age": "42"
            },
            {
                "name": "Daenerys Targaryen",
                "age": "16"
            },
            {
                "name": "Cersei Lannister",
                "age": "37"
            }
        ]
    }
];


        books.forEach((e,i,a) => console.log(a[i].persons.length))