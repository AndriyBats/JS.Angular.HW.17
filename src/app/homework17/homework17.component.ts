import { Component, OnInit } from '@angular/core';
import { IBlog } from '../shared/interfaces/blog.interface';
import { IUser } from '../shared/interfaces/user.interface';
import { BlogService } from '../shared/services/blog.service';

@Component({
  selector: 'app-homework17',
  templateUrl: './homework17.component.html',
  styleUrls: ['./homework17.component.scss']
})
export class Homework17Component implements OnInit {
  public isSignIn = false;
  public readBlogs: Array<IBlog> = [];
  public verifyEmail!: string;
  public verifyPassword!: string;
  public registrationUserName!: string;
  public isEditDeleteButtons = false;
  public signUpUsername!: string;
  public signUpUseremail!: string;
  public signUpUserpassword!: string;
  public ifIsUser = false;
  public newUser!: IUser;
  public newPost!: IBlog;
  public topic!: string;
  public text!: string;
  public currentPostID!: number; 
  public isEditStatus = false;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.loadBlogs();
  }

  loadBlogs(): void {
    this.readBlogs = this.blogService.getBlogs();
  }

  signIn(): void {
    this.blogService.getUsers().forEach(element => {
      if(element.email === this.verifyEmail && element.password === this.verifyPassword){
        this.isSignIn = true;
        this.registrationUserName = element.username;
        this.verifyEmail = '';
        this.verifyPassword = '';
      }
    }); 
  };

  exit(): void {
    this.isSignIn = false;
    this.registrationUserName = '';
  };

  signUp(): void{
    this.blogService.getUsers().forEach(element => {
      if(element.username === this.signUpUsername || element.email === this.signUpUseremail){
        this.ifIsUser = true;
      };
    });
    if(this.ifIsUser === false){
      this.newUser = {
        id: Math.round(Math.random()*1000),
        username: this.signUpUsername,
        email: this.signUpUseremail,
        password: this.signUpUserpassword
      };
      this.blogService.addUser(this.newUser);
      this.isSignIn = true;
      this.registrationUserName = this.signUpUsername;
      this.signUpUsername = '';
      this.signUpUseremail = '';
      this.signUpUserpassword = '';
    };
  };

  addPost(): void {
    this.newPost = {
      id: Math.round(Math.random()*1000),
      postedBy: this.registrationUserName,
      topic: this.topic,
      dateNow: new Date(),
      message: this.text,
    };
    this.blogService.addBlog(this.newPost);
    this.topic = '';
    this.text = '';
    console.log(this.blogService.getBlogs()); 
  }

  deletePost(post: IBlog): void {
    this.blogService.deleteBlog(post.id);
  }

  editPost(post: IBlog): void {
    this.topic = post.topic;
    this.text = post.message;
    this.currentPostID = post.id;
    this.isEditStatus = true;
  }

  saveEditPost(): void {
    this.newPost = {
      id: Math.round(Math.random()*1000),
      postedBy: this.registrationUserName,
      topic: this.topic,
      dateNow: new Date(),
      message: this.text,
    };
    this.blogService.updateBlog(this.newPost, this.currentPostID);
    this.isEditStatus = false;
    this.topic = '';
    this.text = '';
  }

}
