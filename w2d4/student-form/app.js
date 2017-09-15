$(function() {
    setInterval(function () {
        $('#clock').text(new Date());
    }, 1000);

    $.ajax({
        url: './studentdata.json',
        type: 'GET',
        dataType: 'JSON'
    }).done((result) => {
        for (const student of result.students) {
            let li = $('<li></li>').text(student.studentID + ' - ' + student.firstName);
            li.addClass('list-group-item');
            $('#student-list').append(li);
        }
    }).fail(function(xhr, status, err) {
        console.log(status);
    }).always(function(xhr, status) {
        console.log(status);
    });

    $('#student-form').on('submit', (e) => {
        e.preventDefault();
        let li = $('<li></li>').text($('#student-id').val() + ' - ' + $('#first-name').val());
        li.addClass('list-group-item');
        $('#student-list').append(li);

        // Reset form
        $('#student-form input').val('');
        $('#student-id').focus();
    })
});