// /**
//  * apiResponse — wraps every success response in a consistent shape
//  *
//  * Frontend always receives:
//  * { success: true, message: "...", data: {...} }
//  *
//  * Usage in controller:
//  * res.status(200).json(apiResponse("User fetched", user))
//  */

// const apiResponse = (message, data = null) => {
//   const response = {
//     success: true,
//     message,
//   }

//   // only attach data key if there's something to send
//   if (data !== null && data !== undefined) {
//     response.data = data
//   }

//   return response
// }

// module.exports = apiResponse