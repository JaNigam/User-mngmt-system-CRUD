$('#add_user').submit(function (event) {
    alert("data inserted successfully!");
})

//#update_user is the id of the update user form
$('#update_user').submit(function (event) {
    //we are going to prevent the default behaviour of the form(which is to reload the browser when we click the submit button)

    event.preventDefault();

    //in this var we gonna get all the data of the form

    var unindexed_array = $(this).serializeArray();
    //the above method return a serialzed array of the data
    //so when we click the submit button we gonna get all the data in the above variable

    var data = {};
    $.map(unindexed_array, function (n, i) {
        data[n['name']] = n['value'];
    })

    console.log(data);

    //we are going to pass value to the ajax to send request to the server and get the response back
    //here reqest is and object (can give any name of our choice )
    var request = {
        //provide the id for the put request 
        'url': `http://localhost:3000/api/users/${data.id}`,
        'method': 'PUT',
        'data': data
    }

    $.ajax(request).done(function (response) {
        alert("data uploaded successfully!");
    })
})