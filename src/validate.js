/*
 * validate.js
 */

// Third-party packages
const commandExists = require('commandExists')
const semver = require('semver')

// Main packages
const { logger, utils } = require('@microbs.io/core')

/**
 * Validate kind installation
 */
const validateKindInstallation = () => {
  if(commandExistsSync('kind'))
    return {
      success: true,
      message: 'kind is installed'
    }
  else
    return {
      success: true,
      message: 'kind is not installed'
    }
}

/**
 * Validate kind version
*/
const validateKindVersion = () => {
  const result = utils.exec('kind version', true)
  if (result.stdout) {
    try {
      versionActual = semver.clean(result.stdout.match(/kind v([^ ]+) /)[1])
      versionRequired = semver.clean('0.12.0')
      if (semver.gte(versionActual, versionRequired))
        return {
          success: true,
          message: `kind is correct version [using=${versionActual}, required>=${versionRequired}]`
        }
      else
        return {
          success: false,
          message: `kind is incorrect version [using=${versionActual}, required>=${versionRequired}]`
        }
    } catch (e) {
      logger.error(e)
    }
  } else {
    logger.warn(result.stderr)
  }
}

module.exports = async () => {
  const results = []
  results.push(validateKindInstallation())
  results.push(validateKindVersion())
  return results
}
