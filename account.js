const users = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  }
]
let status = ''

// function checkAccount(email, password) {
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].email === email && users[i].password === password) {
//       return { status: 'success' }
//     } else {
//       return { status: 'fail' }
//     }
//   }
// }


function checkAccount(email, password) {
  for (let user of users) {
    if (email === user.email && password === user.password) {
      return { status: 'success', name: user.firstName }
    }
  }
  return { status: 'fail' }
}

module.exports = checkAccount