/*
This is empty on purpose! Your code to build the resume will go here.
 */

/******************Bio object******************/
var bio = {};
bio.name = 'Yang Song';
bio.role = 'Want to be Web and Android Developer';
bio.welcomeMessage ='welcome to my website!';
bio.contacts = {'mobile': '520-907-0663',
					'email': 'guoguoxiaolanxiong@gmail.com',
					'github': 'fionays',
					'twitter': '@FionaSong007',
					'location': 'Tucson, AZ'};
bio.skills = ['Java', 'JavaScript', 'HTML', 'CSS', 'XML', 'OO Design'];
bio.biopic = 'images/fry.jpg';
bio.display = function() {

	var formattedName = HTMLheaderName.replace('%data%', bio.name);
	var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
	$('#header').prepend(formattedRole);
	$('#header').prepend(formattedName);

	var mobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
	var email = HTMLemail.replace('%data%', bio.contacts.email);
	var twitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
	var github = HTMLgithub.replace('%data%', bio.contacts.github);
	var location = HTMLlocation.replace('%data%', bio.contacts.location);
	$('#topContacts').append(mobile);
	$('#topContacts').append(email);
	$('#topContacts').append(twitter);
	$('#topContacts').append(github);
	$('#topContacts').append(location);

	$('#footerContacts').append(mobile);
	$('#footerContacts').append(email);
	$('#footerContacts').append(twitter);
	$('#footerContacts').append(github);
	$('#footerContacts').append(location);


	var biopic = HTMLbioPic.replace('%data%', bio.biopic);
	var message = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
	$('#header').append(biopic);
	$('#header').append(message);

	$('#header').append(HTMLskillsStart);
	for (skill in bio.skills) {
		var skills = HTMLskills.replace('%data%', bio.skills[skill]);
        $('#header').append(skills);
	}
}

bio.display();

/******************Education object******************/
/******************Projects object******************/
/******************Work object******************/
