import { readDatabase } from '../utils.js';

export class StudentsController {
    static async getAllStudents(request, response) {
            try {
                let resStr = 'This is the list of our students \n';
                const studentsPerField = await readDatabase(
                    '/home/hassan/alx-backend-javascript/0x05-Node_JS_basic/database.csv'
                );
                Object.keys(studentsPerField).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' })).forEach((field) => {
                    resStr += `Number of students in ${field}: ${studentsPerField[field].length}. List: ${studentsPerField[field].join(', ')} \n`;
                });
                response.status(200).send(resStr);
            } catch (error) {
                response.status(500).send('Cannot load the database');
            }
    }

    static async getAllStudentsByMajor(request, response) {
        try {
            const major = request.params.major;
            if (major != 'CS' && major != 'SWE' || !major) {
                response.status(500).send('Major parameter must be CS or SWE');
                return;
            }
            const studentsPerField = await readDatabase(
                '/home/hassan/alx-backend-javascript/0x05-Node_JS_basic/database.csv'
            );
            if (!studentsPerField[major]) {
                response.status(500).send('Major doesn\'t have data in db');
                return;
            }
            response.status(200).send(`List: ${studentsPerField[major].sort().join(', ')}`);
        } catch (error) {
            response.status(500).send('Cannot load the database');
        }
    }
}