// javascript
console.log("hello welcome to my page")



// get total records
function getTotalCount(data) {
    return `Total records: ${data.length}`;
}

// get number of students
function getStudentCount(data) {
    const studentCount = data.filter(record => record.isStudent).length;
    return `Number of students: ${studentCount}`;
}


// get average age
function getAverageAge(data) {
    const totalAge = data.reduce((sum, record) => sum + record.age, 0);
    const averageAge = totalAge / data.length;
    return `Average age: ${averageAge.toFixed(2)}`;
}

// display data required
function displayData(data) {
    const output = document.getElementById('output');
    output.innerHTML = `
        <p>${getTotalCount(data)}</p>
        <p>${getStudentCount(data)}</p>
        <p>${getAverageAge(data)}</p>
    `;
}


// fetch json
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        displayData(data);
    })
    .catch(error => console.error('Error fetching data:', error));

    
