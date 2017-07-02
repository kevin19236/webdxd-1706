var userArrary = [
  
  {
    name: 'Yan Hong',
    age: 26,
    school: 'SFU',
    skills: ['HTML', 'CSS', 'JavaScript'],
    isPublic: true
  },
  
  {
    name: 'Neo Wang',
    age: 26,
    school: 'UBC',
    skills: ['Python', 'CSS', 'JavaScript'],
    isPublic: true
  },
  
  {
    name: 'Ben Sun',
    age: 30,
    school: 'SFU',
    skills: ['Logo Design', 'VI', 'UIUX', 'Branding'],
    isPublic: false
  },
  
];

var findUser = function(user, query) {

  return !query || new RegExp(query,"i").test(user.skills) ? user : false;
       
}


$('#search').keyup(function() {

  var query = $('#search').val();

  $('#user-container').html('');


for (var i = 0; i < userArrary.length; i++) {

  if (findUser(userArrary[i], query)) {

    var currentUser = $('<div>').addClass('user');

    var appendEle = function(tag, attr) {
      $(tag).text(userArrary[i][attr]).appendTo(currentUser);
    }

    appendEle('<h1>', 'name');
    appendEle('<h2>', 'age');
    appendEle('<h2>', 'school');

    var pObj = $('<p>').appendTo(currentUser);

    for (var j = 0; j < userArrary[i].skills.length; j++ ) {
      $('<span>').text(userArrary[i].skills[j]).appendTo(pObj);
    }

    $('#user-container').append(currentUser);

  }

}

});

