// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [{ sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
    { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}],
    addOrDropStudent: function(sectionNum, addStudent) {
      const sectionIndex = this.sections.findIndex(
        (section) => section.sectionNum == sectionNum
      );
      if(sectionIndex >=0) {
        if(addStudent) {
          this.sections[sectionIndex].enrolled++;
        }
        else {
          this.sections[sectionIndex].enrolled--;
        }
        setSections(this.sections);
      }
    }
  };

function setCourseInfo(course) {
  const name = document.querySelector("#courseName");
  name.textContent = course.name;

  const code = document.querySelector("#courseCode");
  code.textContent = course.code;
}

function setSections(sections) {
  const table = document.querySelector("#sections");
  const html = sections.map(wrapper);
  table.innerHTML = html.join("");
}

function wrapper(section) {
  return `<tr>
  <td>${section.sectionNum}</td>
  <td>${section.roomNum}</td>
  <td>${section.enrolled}</td>
  <td>${section.days}</td>
  <td>${section.instructor}</td></tr>`;
}

setCourseInfo(aCourse);
setSections(aCourse.sections);

document.querySelector('#enrollStudent').addEventListener('click', function() {
  const sectionNum = document.querySelector('#sectionNumber').value;
  aCourse.addOrDropStudent(sectionNum, true);
});

document.querySelector("#dropStudent").addEventListener("click", function() {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.addOrDropStudent(sectionNum, false);
});

