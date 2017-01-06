var profiles = [
  {
    name: 'Preston McNeil',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg',
    status: 'Everything is bigger in Texas'
  },
  {
    name: 'Ryan Rasmussen',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/jadlimcaco/128.jpg',
    status: 'RR Rules'
  },
  {
    name: 'Terri Ruff',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
    status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
  },
  {
    name: 'Lindsey Mayer',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
    status: 'OMG MITTENS DID THE CUTEST THING TODAY'
  }
];

module.exports = {

  getFriends: function (req, res, next) {
    req.session.currentUser.prof = [];
    req.session.currentUser.friends.forEach(function (friend) {
      profiles.forEach(function (profile) {
        if (friend === profile.name) {
          req.session.currentUser.prof.push(profile);
        }
      })
    })
    res.status(200).json({
      currentUser: req.session.currentUser,
      friends: req.session.currentUser.prof
    })
  }


}
