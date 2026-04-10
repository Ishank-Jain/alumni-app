// const bcrypt = require('bcryptjs')

// const SALT_ROUNDS = 12  // higher = slower = more secure (10-12 is industry standard)

// /**
//  * hashPassword
//  * Call this before saving a new user or changing a password
//  * NEVER store plain text passwords
//  */

// const hashPassword = async (plainPassword) => {
//   return await bcrypt.hash(plainPassword, SALT_ROUNDS)
// }

// /**
//  * comparePassword
//  * Call this during login to verify entered password against stored hash
//  * Returns true/false — never throws
//  */

// const comparePassword = async (plainPassword, hashedPassword) => {
//   return await bcrypt.compare(plainPassword, hashedPassword)
// }

// module.exports = {
//   hashPassword,
//   comparePassword,
// }