// const jwt = require('jsonwebtoken')
// const ApiError = require('./apiError')

// /**
//  * signAccessToken
//  * Short-lived token (15 min) sent with every response after login
//  * Frontend stores this in memory (NOT localStorage)
//  */

// const signAccessToken = (payload) => {
//   return jwt.sign(payload, process.env.JWT_SECRET, {
//     expiresIn: process.env.JWT_EXPIRES_IN || '15m',
//   })
// }

// /**
//  * signRefreshToken
//  * Long-lived token (7 days) used to silently issue new access tokens
//  * Stored in httpOnly cookie — never accessible to JS
//  */

// const signRefreshToken = (payload) => {
//   return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
//     expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN || '7d',
//   })
// }

// /**
//  * verifyAccessToken
//  * Decodes and validates the access token
//  * Throws 401 if expired or tampered
//  */

// const verifyAccessToken = (token) => {
//   try {
//     return jwt.verify(token, process.env.JWT_SECRET)
//   } catch (err) {
//     if (err.name === 'TokenExpiredError') {
//       throw new ApiError(401, 'Access token expired')
//     }
//     throw new ApiError(401, 'Invalid access token')
//   }
// }

// /**
//  * verifyRefreshToken
//  * Decodes and validates the refresh token
//  */

// const verifyRefreshToken = (token) => {
//   try {
//     return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET)
//   } catch (err) {
//     if (err.name === 'TokenExpiredError') {
//       throw new ApiError(401, 'Refresh token expired — please login again')
//     }
//     throw new ApiError(401, 'Invalid refresh token')
//   }
// }

// module.exports = {
//   signAccessToken,
//   signRefreshToken,
//   verifyAccessToken,
//   verifyRefreshToken,
// }