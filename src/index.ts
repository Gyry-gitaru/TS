type Lecturer = {
  name: string;
  surname: string;
  position: string;
  company: string;
  experience: number;
  courses: string[];
  contacts: { [key: string]: string };
};

class School {
  private _areas: string[] = [];
  private _lecturers: Lecturer[] = [];

  get areas(): string[] {
    return this._areas;
  }

  get lecturers(): Lecturer[] {
    return this._lecturers;
  }

  addArea(area: string): void {
    if (!this._areas.includes(area)) {
      this._areas.push(area);
    }
  }

  removeArea(area: string): void {
    this._areas = this._areas.filter((a) => a !== area);
  }

  addLecturer(lecturer: Lecturer): void {
    this._lecturers.push(lecturer);
  }

  removeLecturer(lecturerIdentifier: string): void {
    this._lecturers = this._lecturers.filter(
      (lecturer) =>
        `${lecturer.name} ${lecturer.surname}` !== lecturerIdentifier
    );
  }
}

class Area {
  private _levels: string[] = [];
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get levels(): string[] {
    return this._levels;
  }

  get name(): string {
    return this._name;
  }

  addLevel(level: string): void {
    if (!this._levels.includes(level)) {
      this._levels.push(level);
    }
  }

  removeLevel(level: string): void {
    this._levels = this._levels.filter((l) => l !== level);
  }
}

class Level {
  private _groups: string[] = [];
  private _name: string;
  private _description: string;

  constructor(name: string, description: string) {
    this._name = name;
    this._description = description;
  }

  get groups(): string[] {
    return this._groups;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  addGroup(group: string): void {
    if (!this._groups.includes(group)) {
      this._groups.push(group);
    }
  }

  removeGroup(group: string): void {
    this._groups = this._groups.filter((g) => g !== group);
  }
}

type Student = {
  getPerformanceRating: () => number;
};

class Group {
  private _students: Student[] = [];
  private _status: string;
  private _area: string;
  directionName: string;
  levelName: string;

  constructor(directionName: string, levelName: string) {
    this.directionName = directionName;
    this.levelName = levelName;
    this._area = "";
    this._status = "";
  }

  get students(): Student[] {
    return this._students;
  }

  get status(): string {
    return this._status;
  }

  get area(): string {
    return this._area;
  }

  set status(newStatus: string) {
    this._status = newStatus;
  }

  addStudents(student: Student): void {
    this._students.push(student);
  }

  removeStudents(student: Student): void {
    this._students = this._students.filter((s) => s !== student);
  }

  showPerformance(): Student[] {
    const sortedStudents = [...this._students].sort(
      (a, b) => b.getPerformanceRating() - a.getPerformanceRating()
    );
    return sortedStudents;
  }
}

class AnotherStudent {
  private _firstName: string;
  private _lastName: string;
  private _birthYear: number;
  private _grades: { [workName: string]: number } = {};
  private _visits: { [lesson: string]: boolean } = {};
  private _currentWorkName: string | null = null;
  private _currentLesson: string | null = null;

  constructor(firstName: string, lastName: string, birthYear: number) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthYear = birthYear;
  }

  setCurrentWork(workName: string) {
    this._currentWorkName = workName;
  }

  setCurrentLesson(lesson: string) {
    this._currentLesson = lesson;
  }

  get fullName(): string {
    return `${this._lastName} ${this._firstName}`;
  }

  set fullName(value: string) {
    [this._lastName, this._firstName] = value.split(" ");
  }

  get age(): number {
    return new Date().getFullYear() - this._birthYear;
  }

  set grade(mark: number) {
    if (this._currentWorkName) {
      this._grades[this._currentWorkName] = mark;
      this._currentWorkName = null;
    } else {
      throw new Error(
        "Work name not set. Please specify the work name before setting a grade."
      );
    }
  }

  set visit(present: boolean) {
    if (this._currentLesson) {
      this._visits[this._currentLesson] = present;
      this._currentLesson = null;
    } else {
      throw new Error(
        "Lesson not set. Please specify the lesson before setting a visit."
      );
    }
  }
  getPerformanceRating(): number {
    const gradeValues = Object.values(this._grades);

    if (gradeValues.length === 0) return 0;

    const averageGrade =
      gradeValues.reduce((sum: number, grade: number) => sum + grade, 0) /
      gradeValues.length;
    const presentCount = Object.values(this._visits).filter(
      (present) => present
    ).length;
    const attendancePercentage =
      (presentCount / Object.keys(this._visits).length) * 100;

    return (averageGrade + attendancePercentage) / 2;
  }
}
