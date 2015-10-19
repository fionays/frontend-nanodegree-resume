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
var education = {
	"schools": [
		{
			"name": "University of Arizona",
			"location": "Tuscon, AZ",
			"degree": "Master",
			"majors": ["Electrical and Computer Engineering"],
			"dates": 2015,
			"url": ""
		},
		{
			"name": "Hubei University",
			"location": "Wuhan, China",
			"degree": "BE",
			"majors": ["Telecommunications Engineering"],
			"dates": 2013,
			"url": ""
		}
	],
	"onlineCourses": [
		{
			"title": "Developing Android Apps: Fundamentals",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/developing-android-apps--ud853"
		},
		{
			"title": "How to Use Git and GitHub",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
		},
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
		},
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/javascript-basics--ud804"
		}
	]
}; 

education.display = function() {
	for (school in education.schools) {
		$('#education').append(HTMLschoolStart);
		var name = HTMLschoolName.replace('%data%', education.schools[school].name);
		var location = HTMLschoolLocation.replace('%data%', education.schools[school].location);
		var degree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
		var dates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
		var majors = HTMLschoolMajor.replace('%data%', education.schools[school].majors);

		$('.education-entry:last').append(name);
		$('.education-entry:last').append(location);
		$('.education-entry:last').append(dates);
		$('.education-entry:last').append(degree);
		$('.education-entry:last').append(majors);
	}

	$('#education').append(HTMLonlineClasses);
	for (course in education.onlineCourses) {
		$('#education').append(HTMLschoolStart);
		var title = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title);
		var school = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
		var dates = HTMLonlineDates.replace('%data%', education.onlineCourses[course].dates);
		var url = HTMLonlineURL.replace('%data%', education.onlineCourses[course].url);

		$('.education-entry:last').append(title);
		$('.education-entry:last').append(school);
		$('.education-entry:last').append(dates);
		$('.education-entry:last').append(url);
	}
}

education.display();
/******************Projects object******************/
var projects = {
	"projects": [
		{
			"title": "Popular Movie",
			"dates": "Sep. 2015 -- Nov. 2015",
			"description": "An awesome Android application which provides a lot of movie information" +
			               "according to the popularity as well as ranks. You can select any movie You" +
			                "like and then get more overview or start the trailer.",
			"images": []
		}
	]
};

projects.display = function() {
	for (project in projects.projects) {
		$('#projects').append(HTMLprojectStart);
		
		title = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
		dates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
		description = HTMLprojectDescription.replace('%data%', projects.projects[project].description);

		$('.project-entry:last').append(title);
		$('.project-entry:last').append(dates);
		$('.project-entry:last').append(description);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var image = HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
				$('.project-entry:last').append(image);
			}
		}
	}
}

projects.display();

/******************Work object******************/
