//Prelim 1
for ( var i = 0; i <= 9; i++ )
{
  {
    console.log(i);
  }
}

//Prelim 2
var numArray = [];
for(var i=9; i > -1; i-=1) {
    numArray.push(i);
    console.log(i);
}

//Prelim 3
var fruit = ["banana", "orange", "apple", "kiwi"];
for (let i = 0; i < fruit.length; i++){
  console.log(fruit[i]);
}

//Bronze 1
var numberArray = [];
for ( var i=0; i <10; i++) {
  numberArray[i] = i; 
}

console.log(numberArray);

//Bronze 2
for( var i = 0; i < 101; i++ ) {
  if (i % 2 === 0) {
      console.log( i + " is even");
  }
 
}

//Bronze 3
var fruit2 = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
var myFruit =[]
for (var i=0; i<fruit2.length; i++){
    if (i % 2 === 0){
      myFruit.push( fruit2[i] )
    }
}
console.log(myFruit)

// Silver 1
const peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
]
for (let i = 0; i < peopleArray.length; i++) {
  console.log (peopleArray[i].name)
}

// Silver 2
const peopleArray2 = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
];

let names = [];
let occupations = [];

for( let i=0; i < peopleArray2.length; i++ ) {
    names.push( peopleArray2[i].name );
    occupations.push( peopleArray2[i].occupation );
}

console.log( names );
console.log( occupations );


// Silver 3
const peopleArray3 = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
];

let names2 = [];
let occupations2 = [];

for( let i=0; i < peopleArray3.length; i++ ) {
    i % 2 === 0 ? names2.push( peopleArray3[i].name) : occupations2.push( peopleArray3[i].occupation );
   
}

console.log( names2 );
console.log( occupations2 );

// Gold 1
var matrixs = [];

for( var i = 0; i < 3; i++ ) {
    matrixs.push( [] );  
    for( var j = 0; j < 3; j++ ) {
        matrixs[i].push( 0 );
    }
}

console.log( matrixs );

// gold 2
var matrixs = [];

for( var i = 0; i < 3; i++ ) {
    matrixs.push( [] );   
    for( var j = 0; j < 3; j++ ) {
        matrixs[i].push( i );
    }
}

console.log( matrixs );

// Gold 3
var matrixs = [];

for( var i = 0; i < 3; i++ ) {
    matrixs.push( [] );   
    for( var j = 0; j < 3; j++ ) {
        matrixs[i].push( j );
    }
}

console.log( matrixs );


// Gold 4
var matrix = [[0, 1, 2], [0, 1,2], [0, 1,2]];

for( var i = 0; i < matrix.length; i++ ) {
      
    for( var j = 0; j < 3; j++ ) {
        matrix[i][j] = "x";
    }
}
console.log(matrix)