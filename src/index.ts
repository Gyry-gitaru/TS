class School {
  directions: string[];

  constructor() {
    this.directions = [];
  }

  addDirection(direction: string): void {
    this.directions.push(direction);
  }
}

class Direction {
  levels: string[];

  constructor(name: string) {
    this.levels = [];
  }

  get name(): string {
    return this.name;
  }

  addLevel(level: string): void {
    this.levels.push(level);
  }
}

class Level {
  private _name: string;
  private _program: string; 
  groups: any[]; 

  constructor(name: string, program: string) {
    this._name = name;
    this._program = program;
    this.groups = [];
  }

  get name(): string {
    return this._name;
  }

  get program(): string {
    return this._program;
  }

  addGroup(group: any): void { 
    this.groups.push(group);
  }
}

class Group {
  _students: any[];
  directionName: string;
  levelName: string;

  constructor(directionName: string, levelName: string) {
    this.directionName = directionName;
    this.levelName = levelName;
    this._students = [];
  }

  get students(): any {
    return this._students;
  }

  addStudent(student: string): void {
    this._students.push(student);
  }

  showPerformance(): any {
    const sortedStudents = [...this._students].sort(
      (a, b) => b.getPerformanceRating() - a.getPerformanceRating()
    );

    return sortedStudents;
  }
}

class Student {
  private grades: { [subject: string]: number }; 
  private attendance: boolean[]; 
  firstName: string;
  lastName: string;
  birthYear: number;

  constructor(firstName: string, lastName: string, birthYear: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = {};
    this.attendance = [];
  }

  get fullName(): string {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value: string) {
    [this.lastName, this.firstName] = value.split(" ");
  }

  get age(): number {
    return new Date().getFullYear() - this.birthYear;
  }

  setGrade(subject: string, grade: number):void {
    this.grades[subject] = grade;
  }

  markAttendance(present: boolean):void {
    this.attendance.push(present);
  }

  getPerformanceRating(): number {
    const gradeValues = Object.values(this.grades);

    if (gradeValues.length === 0) return 0;

    const averageGrade = gradeValues.reduce((sum: number, grade: number) => sum + grade, 0) / gradeValues.length;
    const attendancePercentage = (this.attendance.filter((present) => present).length / this.attendance.length) * 100;

    return (averageGrade + attendancePercentage) / 2;
  }
}

