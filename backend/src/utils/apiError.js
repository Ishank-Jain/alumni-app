/**
 * ApiError — custom error class that carries an HTTP status code
 *
 * Why: JavaScript's built-in Error has no statusCode.
 * Throwing ApiError lets the global errorHandler send the right HTTP status.
 *
 * Usage in service:
 * throw new ApiError(404, 'User not found')
 * throw new ApiError(401, 'Not authorised')
 * throw new ApiError(400, 'Email already exists')
 */

class ApiError extends Error {
  constructor(statusCode, message) {
    super(message)          // sets this.message
    this.statusCode = statusCode
    this.isOperational = true  // flag: known/expected error (not a crash)

    // captures where this error was thrown (useful in stack traces)
    Error.captureStackTrace(this, this.constructor)
  }
}

module.exports = ApiError