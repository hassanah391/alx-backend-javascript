/**
 * Interface for Director with required method signatures
 */
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

/**
 * Interface for Teacher with required method signatures
 */
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

/**
 * Director class implementing DirectorInterface
 * Represents a director with specific work behaviors
 */
class Director implements DirectorInterface{
  workFromHome() {
    return 'Working from home';
  }

  getCoffeeBreak() {
    return 'Getting a coffee break';
  }

  workDirectorTasks() {
    return 'Getting to director tasks';
  }
}

/**
 * Teacher class implementing TeacherInterface
 * Represents a teacher with specific work behaviors
 */
class Teacher implements TeacherInterface{
  workFromHome() {
    return 'Cannot work from home';
  }

  getCoffeeBreak() {
    return 'Cannot have a break';
  }

  workTeacherTasks() {
    return 'Getting to work';
  }
}

/**
 * Factory function to create an employee based on salary
 * @param salary - Salary as number or string
 * @returns Teacher instance if salary is number < 500, otherwise Director instance
 */
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }

  return new Director();
}
