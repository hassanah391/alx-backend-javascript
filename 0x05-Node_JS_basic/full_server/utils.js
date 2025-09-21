import fs from 'node:fs/promises'

export async function readDatabase(databasePath) {
    try {
        const data = await fs.readFile(databasePath, 'utf-8');
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        // Expect CSV header on first line. Remaining lines are students.
        const students = lines.slice(1).map((line) => line.split(','));

        const fieldToFirstnames = {};
        students.forEach((student) => {
            // Typical format: firstname,lastname,age,field
            const firstname = student[0] ? student[0].trim() : '';
            const field = student[student.length - 1] ? student[student.length - 1].trim() : '';
            if (!firstname || !field) {
                return;
            }
            if (!fieldToFirstnames[field]) {
                fieldToFirstnames[field] = [];
            }
            fieldToFirstnames[field].push(firstname);
        });

        return fieldToFirstnames;
    } catch (err) {
        throw new Error('Cannot load the database');
    }
}