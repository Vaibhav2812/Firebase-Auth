const guideList = document.querySelector(".guides");
const setUpGuides = data => {
  if (data.length) {
    let html = "";
    data.forEach(doc => {
      const guide = doc.data();
      const li = `
      <li>
         <div class="collapsible-header grey lighten-4">${guide.title}</div>
          <div class="collapsible-body white">${guide.content}</div>
       </li>
          `;
      html += li;
    });
    guideList.innerHTML = html;
  } else {
    guideList.innerHTML = '<h5 class="center-align">Login to view guide List</h>'
  }
};

const onError = (obj) => {
  const msg = document.getElementById('feedback-msg');
  msg.textContent = obj.message;
}

document.addEventListener("DOMContentLoaded", function() {
  var modals = document.querySelectorAll(".modal");
  M.Modal.init(modals);

  var items = document.querySelectorAll(".collapsible");
  M.Collapsible.init(items);
});
