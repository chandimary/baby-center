
$('#signup-btn').click(function () {
    $.ajax({
      url: '/users',
      type: 'POST',
      cache: false,
      data: {
        name: $('#name').val(),
        id: $('#id').val(),
        childname: $('#childname').val(),
        email: $('#email').val(),
        phonenumber: $('#phonenumber').val(),
        healthproblem: $('#healthproblem').val(),
        describe: $('#describe').val(),
        area: $('#area').val(),
        number: $('#number').val(),
        club: $('#club').val(),
        healthproblem: $('#healthproblem').val()
      },
      success: function () {
        $('#error-group').css('display', 'none');
        alert('Your submission was successful');
      },
      error: function (data) {
        $('#error-group').css('display', 'block');
        var errors = JSON.parse(data.responseText);
        var errorsContainer = $('#errors');
        errorsContainer.innerHTML = '';
        var errorsList = '';
  
        for (var i = 0; i < errors.length; i++) {
          errorsList += '<li>' + errors[i].msg + '</li>';
        }
        errorsContainer.html(errorsList);
      }
    });
  });




// exports = myUtilities;