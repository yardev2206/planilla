'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')
const translate = require('translate');

class ResponseException extends LogicalException {


  static async handle (error) {
    // variables
    let message = error.message;
    // verificamos si el error es de la base de datos
    if (error.sqlMessage)  message = error.sqlMessage;
    return message;
    /* return await translate(message, 'es'); */
  }

}

module.exports = ResponseException
