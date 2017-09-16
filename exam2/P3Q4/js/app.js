// Question 4
$(function () {
    if (!localStorage.getItem('bankAccount')) {
        $.ajax({
            url: './data/customerData.json',
            type: 'GET',
            dataType: 'JSON'
        }).done((result) => {
            localStorage.setItem('bankAccount', JSON.stringify(result.customers));
            for (const customer of result.customers) {
                let li = $('<li></li>').text(customer.customerID + ' | ' + customer.name + ' | ' + customer.accountType);
                li.addClass('list-group-item');
                $('#customer-list').append(li);
            }
        }).fail(function(xhr, status, err) {
            console.log(status);
        }).always(function(xhr, status) {
            console.log(status);
        });
    } else {
        let customersStr = localStorage.getItem('bankAccount');
        let customers = JSON.parse(customersStr);
        for (const customer of customers) {
            let li = $('<li></li>').text(customer.customerID + ' | ' + customer.name + ' | ' + customer.accountType);
            li.addClass('list-group-item');
            $('#customer-list').append(li);
        }
    }

    $('#customer-form').on('submit', (e) => {
        e.preventDefault();
        let li = $('<li></li>').text($('#account-no').val() + ' | ' + $('#customer-name').val() + ' | ' + $('#account-type').val());
        li.addClass('list-group-item');
        $('#customer-list').append(li);

        // Write customer data to localStorege
        let customersStr = localStorage.getItem('bankAccount');
        let customers = JSON.parse(customersStr);

        const customer = {
            "customerID": $('#account-no').val(),
            "name": $('#customer-name').val(),
            "accountType": $('#account-type').val()
        }

        customers.push(customer);
        const customerStrToWriteDown = JSON.stringify(customers);
        localStorage.setItem('bankAccount', customerStrToWriteDown);

        // Reset form
        $('#customer-form input').val('');
        $('#account-no').focus();
    })
});