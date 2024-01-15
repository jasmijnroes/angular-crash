// handmatig deze file aangemaakt. code gekopierd van de github van de tutorial.

import { Task } from './Task';

export const TASKS: Task[] = [
  {
    id: 1,
    text: 'Doctors Appointment',
    day: 'May 5th at 2:30pm',
    reminder: true,
  },
  {
    id: 2,
    text: 'Meeting at School',
    day: 'May 6th at 1:30pm',
    reminder: true,
  },
  {
    id: 3,
    text: 'Food Shopping',
    day: 'May 7th at 12:30pm',
    reminder: false,
  },
];

// comments hier voor de db.json file omdat je daar geen comments in kunt plaatsen.
// deze file handmatig aangemaakt
// je kan meerdere collections maken. Nu doen wij even alleen tasks. 
// kopier de data van mock-tasks, maar zet het tussen double quotes zodat het json is.
