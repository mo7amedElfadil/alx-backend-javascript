import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';
/**
 * Maps routes to the Express application instance controllers.
 * @param {Object} app - instance of the Express application
 */
const mapRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
