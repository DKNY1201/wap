(function () {
    const students = [
        {'studentID': '000-98-5848', 'firstName' : 'Peter'},
        {'studentID': '000-98-5849', 'firstName' : 'Marry'}
    ];

    const studentList = document.querySelector('#student-list');

    setInterval(function () {
        const clock = document.getElementById('clock');
        clock.innerText = new Date();
    }, 1000);

    window.addEventListener('load', function () {
        for (const student of students) {
            const studentItem = document.createElement('li');
            studentItem.className = 'list-group-item';
            studentItem.innerText = student.studentID + ' - ' + student.firstName;
            studentList.appendChild(studentItem);
        }
    });

    // const btnSubmit = document.querySelector('#btn-submit');
    const studentForm = document.querySelector('#student-form');

    // btnSubmit.addEventListener('click', function () {
    //     const studentItem = document.createElement('li');
    //     studentItem.className = 'list-group-item';
    //     const studentID = document.querySelector('#student-id');
    //     const firstName = document.querySelector('#first-name');
    //     studentItem.innerText = studentID.value + ' - ' + firstName.value;
    //     studentList.appendChild(studentItem);
    //
    //     // Reset form
    //     studentID.value = '';
    //     firstName.value = '';
    // });

    studentForm.addEventListener('submit', function (evt) {
        evt.preventDefault();
        const studentItem = document.createElement('li');
        studentItem.className = 'list-group-item';
        const studentID = document.querySelector('#student-id');
        const firstName = document.querySelector('#first-name');
        studentItem.innerText = studentID.value + ' - ' + firstName.value;
        const studentObj =  {'studentID': studentID.value, 'firstName' : firstName.value};
        students.push(studentObj);
        studentList.appendChild(studentItem);

        // Reset form
        studentID.value = '';
        firstName.value = '';

        studentID.focus();
    });
})();