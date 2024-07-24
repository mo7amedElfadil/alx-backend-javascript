#!/usr/bin/node
/**
 * class AppController - This class is responsible for handling the requests
 * for the homepage
 */
class AppController {
  /**
   * getHomepage - static method responsible for handling the request for the homepage
   *
   * @param  {Object} req Request object
   * @param  {Object} res Response object
   */
  static getHomepage(_, res) {
    res.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
