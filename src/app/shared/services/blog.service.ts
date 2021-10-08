import { Injectable } from '@angular/core';
import { IBlog } from '../interfaces/blog.interface';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogs: Array<IBlog> = [
    {
      id: 1,
      postedBy: 'admin',
      topic: 'First post',
      dateNow: new Date(2021, 9, 4, 21, 10, 10, 0),
      message: 'Sign up to create your account and start to use Angular Blog'
    },
  ]
  private users: Array<IUser> = [
    {
      id: 11,
      username: 'admin',
      email: 'admin@gmail.com',
      password: 'admin'
    },
  ]

  constructor() { }

  getBlogs(): Array<IBlog> {
    return this.blogs;
  }

  addBlog(blog: IBlog): void {
    this.blogs.push(blog);
  }

  updateBlog(blog: IBlog, id: number): void {
    const index = this.blogs.findIndex(b => b.id === id);
    this.blogs.splice(index, 1, blog);
  }

  deleteBlog(id: number): void {
    const index = this.blogs.findIndex(b => b.id === id);
    this.blogs.splice(index, 1)
  }

  getUsers(): Array<IUser> {
    return this.users;
  }

  addUser(user: IUser): void {
    this.users.push(user);
  }

}
