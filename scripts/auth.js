//get data
db.collection('guides').get().then(snapshot => {
  setUpGuides(snapshot.docs);
})

db.collection('guides').set({
  title: 'DIrection is more important than speed',
  content: `The direction you are heading is more important than the speed you are moving to get there. The point of this quote, I believe, is to not worry about how long you are taking to achieve your goals.
   The point is are you going in the right direction`
})




//listen auth changed event
auth.onAuthStateChanged(user => {
  if(user) {
    console.log('user logged in', user);
  } else {
    console.log('user logged out', user);
  }
})



const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", e => {
  e.preventDefault();

  //get user info
  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;

  //sign up user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred);
    const modal = document.querySelector("#modal-signup");
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  });
});

const logout = document.querySelector("#logout");
logout.addEventListener("click", e => {
  e.preventDefault();
  auth.signOut();
});

//sign in user
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", e => {
  e.preventDefault();
  //get user info
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;
  auth.signInWithEmailAndPassword(email, password).then(cred => {
    const modal = document.querySelector("#modal-login");
    M.Modal.getInstance(modal).close();
    loginForm.reset();
  }).catch(err => {
    console.log(err);
  })
});
