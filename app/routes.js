const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.post('/verify-method-answer', function (req, res) {

    // Make a variable and give it the value from 'how-many-balls'
    var verifyMethod = req.session.data['verify-documents']

    // Check whether the variable matches a condition
    if (verifyMethod == "Upload a video"){
      // Send user to next page
      res.redirect('/upload-a-video')
    } else if (verifyMethod == "Arrange a virtual meeting"){
        // Send user to next page
        res.redirect('/arrange-virtual-meeting')
    } else {
      // Send user to ineligible page
      res.redirect('/arrange-face-to-face')
    }
  
})

module.exports = router
