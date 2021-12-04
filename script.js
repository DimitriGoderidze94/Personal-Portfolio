fetch("./projects.json")
  .then((response) => response.json())
  .then((json) => {
    for (var i = 0; i < json.length; i++) {
      document.getElementById("projectsContainer").innerHTML +=
        "<a href=" +
        json[i].href +
        ' target="blank" ' +
        'class="projects"' +
        '><img class="projectImg" src=' +
        json[i].src +
        ' alt="" /><br /><div class="projectTitle">' +
        json[i].title +
        "</div></a>";
    }
  });
