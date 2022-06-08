import { Injectable } from '@nestjs/common';

export interface UserDTO {
  id: string;
  name: string;
  avatar: string;
  friends: UserDTO[];
}


@Injectable()
export class UserService {
  // Using local users to not host a database.
  private users = [
    {
      id: '1',
      name: 'Tannaz Sadeghi',
      avatar: '/assets/person-1.png',
      friends: [
        {
          id: '2',
          name: 'John Doe',
          avatar: '/assets/person-2.png',
        },
      ],
    },
    {
      id: '2',
      name: 'John Doe',
      avatar: '/assets/person-2.png',
      friends: [
        {
          id: '1',
          name: 'Tannaz Sadeghi',
          avatar: '/assets/person-1.png',
        },
      ],
    },
  ];

  constructor() {}

  public getUser(id: string) {
    return this.users.find((user) => user.id === id);
  }
}
