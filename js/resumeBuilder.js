/*
This is empty on purpose! Your code to build the resume will go here.
 */

/******************Bio object******************/
var bio = {
	"name": "Yang Song",
	"role": "Want to be Web and Android Developer",
	"welcomeMessage": "welcome to my website!",
	"contacts": {
		 			"mobile": "520-***-****",
					"email": "guoguoxiaolan*****@gmail.com",
					"github": "fionays",
					"twitter": "@FionaSong007",
					"location": "Tucson, AZ"
				},
	"skills": ["Java", "JavaScript", "HTML", "CSS", "XML"],
	"biopic": "images/fry.jpg"			
};

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
	for (var skill in bio.skills) {
		if (bio.skills.hasOwnProperty(skill)) {
			var skills = HTMLskills.replace('%data%', bio.skills[skill]);
        	$('#header').append(skills);
		}
	}
};

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
	for (var school in education.schools) {
		if (education.schools.hasOwnProperty(school)) {
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
	}

	$('#education').append(HTMLonlineClasses);
	for (var course in education.onlineCourses) {
		if (education.onlineCourses.hasOwnProperty(course)) {
			$('#education').append(HTMLschoolStart);
		    var title = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title);
	    	school = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
			myDates = HTMLonlineDates.replace('%data%', education.onlineCourses[course].dates);
			var url = HTMLonlineURL.replace('%data%', education.onlineCourses[course].url);

			$('.education-entry:last').append(title);
			$('.education-entry:last').append(school);
			$('.education-entry:last').append(myDates);
			$('.education-entry:last').append(url);
		}
		
	}
};

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
	for (var project in projects.projects) {
		if (projects.projects.hasOwnProperty(project)) {

			$('#projects').append(HTMLprojectStart);
		
			title = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
			dates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
			description = HTMLprojectDescription.replace('%data%', projects.projects[project].description);

			$('.project-entry:last').append(title);
			$('.project-entry:last').append(dates);
			$('.project-entry:last').append(description);

			if (projects.projects[project].images.length > 0) {
				for (var image in projects.projects[project].images) {
					if (projects.projects[project].images.hasOwnProperty(image)) {

						image = HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
						$('.project-entry:last').append(image);
					}
				 
				}
			}
		}
		
	}
};

projects.display();

/******************Work object******************/
var work = {
	"jobs": [
		{
			"employer": "BookStore",
			"title": "Book Management",
			"location": "Tucson, AZ",
			"dates": "Jul. 2014 -- Sep. 2014",
			"description": "Seperating the old books and brand new books."
		},
		{
			"employer": "Supermaket",
			"title": "Cashier",
			"location": "Phoenix, AZ",
			"dates": "Jul. 2015 -- Sep. 2015",
			"description": "Working as a cashier in the Supermaket and also dealing with item return."
		}
	]
};

work.display = function() {
	for (var job in work.jobs) {
		if (work.jobs.hasOwnProperty(job)) {

			$('#workExperience').append(HTMLworkStart);

			var employer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
			var title = HTMLworkTitle.replace('%data%', work.jobs[job].title);
			var location = HTMLworkLocation.replace('%data%', work.jobs[job].location);
			var description = HTMLworkDescription.replace('%data%', work.jobs[job].description);
			var dates = HTMLworkDates.replace('%data%', work.jobs[job].dates);

			$('.work-entry:last').append(employer);
			$('.work-entry:last').append(title);
			$('.work-entry:last').append(dates);
			$('.work-entry:last').append(location);
			$('.work-entry:last').append(description);
			}
		
	}
};

work.display();

/******************Add Google Map******************/
$('#mapDiv').append(googleMap);

/***************Internationalize Names*************/
function inName () {
	var name = bio.name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + 
	  name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];  
}
$('#main').append(internationalizeButton);
