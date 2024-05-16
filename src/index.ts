enum NoteType {
  Default,
  RequiresConfirmation,
}

interface Note {
  id: number;
  name: string;
  content: string;
  dateCreated: Date;
  dateEdited: Date;
  completed: boolean;
  type: NoteType;
}

class TodoList {
  private notes: Note[] = [];
  private nextId: number = 1;

  addNote(name: string, content: string, type: NoteType): void {
    if (!name.trim() || !content.trim()) {
      throw new Error("Note name and content cannot be empty");
    }
    const newNote: Note = {
      id: this.nextId++,
      name,
      content,
      dateCreated: new Date(),
      dateEdited: new Date(),
      completed: false,
      type,
    };
    this.notes.push(newNote);
  }

  deleteNote(id: number): void {
    this.notes = this.notes.filter((note) => note.id !== id);
  }

  editNote(id: number, newName: string, newContent: string): void {
    if (!newName.trim() || !newContent.trim()) {
      throw new Error("Note name and content cannot be empty");
    }
    const note = this.notes.find((note) => note.id === id);
    if (note) {
      if (note.type === NoteType.RequiresConfirmation) {
        const confirmed = confirm(
          "This note requires confirmation. Do you want to proceed with editing?"
        );
        if (!confirmed) return;
      }
      note.name = newName;
      note.content = newContent;
      note.dateEdited = new Date();
    }
  }

  getNoteById(id: number): Note | undefined {
    return this.notes.find((note) => note.id === id);
  }

  getAllNotes(): Note[] {
    return this.notes;
  }

  toggleNoteCompletion(id: number): void {
    const note = this.notes.find((note) => note.id === id);
    if (note) {
      note.completed = !note.completed;
    }
  }

  getStats(): { total: number; incomplete: number } {
    const total = this.notes.length;
    const incomplete = this.notes.filter((note) => !note.completed).length;
    return { total, incomplete };
  }

  searchNotes(query: string): Note[] {
    query = query.trim().toLowerCase();
    return this.notes.filter(
      (note) =>
        note.name.toLowerCase().includes(query) ||
        note.content.toLowerCase().includes(query)
    );
  }

  sortNotesByStatus(): Note[] {
    return [...this.notes].sort((a, b) => {
      if (a.completed === b.completed) {
        return 0;
      }
      return a.completed ? 1 : -1;
    });
  }

  sortNotesByDateCreated(): Note[] {
    return [...this.notes].sort(
      (a, b) => a.dateCreated.getTime() - b.dateCreated.getTime()
    );
  }
}

const todoList = new TodoList();

todoList.addNote("Shopping", "Buy groceries", NoteType.Default);
todoList.addNote(
  "Project",
  "Complete TypeScript project",
  NoteType.RequiresConfirmation
);

todoList.toggleNoteCompletion(1);

todoList.editNote(
  2,
  "Project Updated",
  "Complete TypeScript assignment with enhancements"
);

todoList.deleteNote(1);
