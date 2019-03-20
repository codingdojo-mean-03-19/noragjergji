// // ****** CHALLENGE 1

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function printNames(arr){
    for(i = 0; i<arr.length; i++){
        console.log('Name: ' + arr[i].name + ', Cohort: ' + arr[i].cohort);
    }
}

printNames(students);

// // ****** CHALLENGE 2

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

function namesAndCount(dict){
    for(let element in dict){
        console.log(element.toUpperCase())
        for(let [key, value] of users[element].entries()){
            numCharacters = value.first_name.length + value.last_name.length;
            console.log(++key + ' - ' + value.last_name + ' , ' + value.first_name + '-' + numCharacters);

        }
    }
}

namesAndCount(users)




