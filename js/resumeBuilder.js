
var bio = {
    "name": "Law Kwan Chi",
    "role": "student",
    "contacts" : {
        "mobile" : 85291414307,
        "email" : "kwanc.law@gmail.com",
        "github" : "https://github.com/kclaw",
        "twitter" : "not registered yet",
        "location" : "Tai Po, Hong Kong"
    },
    "welcomeMessage" : "Hello,Nice to meet you",
    "skills" : ["awesome","programming","teaching"],
    "biopic" : "url"
};

var work = {
    "jobs":[
        {
            "employer" : "Me",
            "title" : "Web Developer",
            "location" : "Hong Kong",
            "dates" : "2018-2020",
            "description" : "It is a good work experience!"
        }
    ]
};
var education = {
    "schools":[
        {
            "name" : "Tai Po Government Secondary School",
            "location" : "Hong Kong",
            "degree" : "F7",
            "major" : ["F7"],
            "dates": 20120701,
            "url" : ""
        },
        {
            "name" : "Tai Po Government Secondary School",
            "location" : "Hong Kong",
            "degree" : "F7",
            "major" : ["F7"],
            "dates": 20120701,
            "url" : ""
        }
    ],
    "onlineCourses" : [
        {
            "title" : "JavaScript",
            "school" : "Udacity",
            "date" : 20150505,
            "url" : "udacity.com"
        }
    ]
};
var projects = {
    "projects":[
        {
        "title" : "Online Resume",
        "dates" : "2013",
        "description" : "build a online resume",
        "images" : ["",""]
        }
    ]
};
bio.display = function(){
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%" , bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%" , bio.contacts.email);
    var formattedGitHub = HTMLgithub.replace("%data%" , bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%" , bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%" , bio.contacts.location);

    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGitHub);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedLocation);

    if(bio.skills.length > 0){
        $("#header").append(HTMLskillsStart);
        for(var i=0;i<bio.skills.length;i++)
            $("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
    }
};
projects.display = function(){
    for (project in projects.projects){
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if(projects.projects[project].images.length >0)
            for(image in projects.projects[project].images){
                var formattedImage = HTMLprojectImage.replace("%data%" , projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
    }
};
work.display = function(){
    if(work && work.jobs.length>0){
        for(job in work.jobs){
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;

            $(".work-entry:last").append(formattedEmployerTitle);
            var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
            $(".work-entry:last").append(formattedDates);
            var formattedJobDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
            $(".work-entry:last").append(formattedJobDescription);
        }
    }
};
education.display = function(){
    if(education && education.schools.length>0){
        for(school in education.schools){
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
            var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name + formattedSchoolDegree);
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formattedSchoolName);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
        }
    }
};
work.display();
bio.display();
projects.display();
education.display();
//$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
